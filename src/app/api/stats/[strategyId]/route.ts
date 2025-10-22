import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ strategyId: string }> }
) {
  try {
    const { strategyId } = await params;

    const stats = await prisma.strategyStats.findUnique({
      where: { id: strategyId },
    });

    if (!stats) {
      return NextResponse.json({
        id: strategyId,
        totalProfit: 0,
        winCount: 0,
        lossCount: 0,
        totalTrades: 0,
        pnlHistory: [],
      });
    }

    // Parse pnlHistory string back to array
    const pnlHistory = stats.pnlHistory ? JSON.parse(stats.pnlHistory) : [];

    return NextResponse.json({
      id: stats.id,
      totalProfit: stats.totalProfit,
      winCount: stats.winCount,
      lossCount: stats.lossCount,
      totalTrades: stats.totalTrades,
      pnlHistory,
    });
  } catch (error) {
    console.error('Error fetching strategy stats:', error);
    return NextResponse.json(
      { error: 'Failed to fetch strategy statistics' },
      { status: 500 }
    );
  }
}

export async function POST(
  request: Request,
  { params }: { params: Promise<{ strategyId: string }> }
) {
  try {
    const { strategyId } = await params;
    const updates = await request.json();

    const { profitChange, wins, losses, newHistoryPoints } = updates;

    // Fetch current stats or use defaults
    const currentStats = await prisma.strategyStats.findUnique({
      where: { id: strategyId },
    });

    const defaultStats = {
      id: strategyId,
      totalProfit: 0,
      winCount: 0,
      lossCount: 0,
      totalTrades: 0,
      pnlHistory: '[]',
    };

    const current = currentStats || defaultStats;

    // Calculate new values
    const newTotalProfit = current.totalProfit + (profitChange || 0);
    const newWinCount = current.winCount + (wins || 0);
    const newLossCount = current.lossCount + (losses || 0);
    const newTotalTrades = newWinCount + newLossCount;

    // Parse existing pnlHistory (array of numbers), concat new points, and stringify
    const existingHistory: number[] = current.pnlHistory ? JSON.parse(current.pnlHistory) : [];
    const updatedHistory = [...existingHistory, ...(newHistoryPoints || [])];
    const pnlHistoryString = JSON.stringify(updatedHistory);

    // Upsert the record
    const updatedStats = await prisma.strategyStats.upsert({
      where: { id: strategyId },
      update: {
        totalProfit: newTotalProfit,
        winCount: newWinCount,
        lossCount: newLossCount,
        totalTrades: newTotalTrades,
        pnlHistory: pnlHistoryString,
      },
      create: {
        id: strategyId,
        totalProfit: newTotalProfit,
        winCount: newWinCount,
        lossCount: newLossCount,
        totalTrades: newTotalTrades,
        pnlHistory: pnlHistoryString,
      },
    });

    // Return with parsed pnlHistory
    return NextResponse.json({
      id: updatedStats.id,
      totalProfit: updatedStats.totalProfit,
      winCount: updatedStats.winCount,
      lossCount: updatedStats.lossCount,
      totalTrades: updatedStats.totalTrades,
      pnlHistory: JSON.parse(updatedStats.pnlHistory),
    });
  } catch (error) {
    console.error('Error updating strategy stats:', error);
    return NextResponse.json(
      { error: 'Failed to update strategy statistics' },
      { status: 500 }
    );
  }
}
