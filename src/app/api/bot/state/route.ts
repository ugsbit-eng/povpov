import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

// GET - Load all bot state (trades, positions, metrics)
export async function GET() {
  try {
    const [trades, positions, metrics] = await Promise.all([
      prisma.botTrade.findMany({
        orderBy: { timestamp: 'desc' },
        take: 50,
      }),
      prisma.botPosition.findMany(),
      prisma.botMetrics.findUnique({
        where: { id: 'singleton' },
      }),
    ]);

    return NextResponse.json({
      trades: trades.map(t => ({
        ...t,
        timestamp: Number(t.timestamp),
      })),
      positions: positions.map(p => ({
        ...p,
        openedAt: Number(p.openedAt),
      })),
      metrics: metrics ? {
        cumulativeProfit: metrics.cumulativeProfit,
        activeBots: metrics.activeBots,
        totalTradeCount: metrics.totalTradeCount,
        totalVolume: metrics.totalVolume,
        isRunning: metrics.isRunning,
        profitData: JSON.parse(metrics.profitData),
      } : null,
    });
  } catch (error) {
    console.error('Error loading bot state:', error);
    return NextResponse.json({ error: 'Failed to load state' }, { status: 500 });
  }
}

// POST - Save bot state
export async function POST(request: Request) {
  try {
    const { trades, positions, metrics } = await request.json();

    // Save trades (upsert each)
    if (trades?.length > 0) {
      await Promise.all(
        trades.map((trade: any) =>
          prisma.botTrade.upsert({
            where: { id: trade.id },
            update: {
              pair: trade.pair,
              chain: trade.chain,
              entryPrice: trade.entryPrice,
              exitPrice: trade.exitPrice,
              profit: trade.profit,
              profitPercent: trade.profitPercent,
              timestamp: BigInt(trade.timestamp),
              duration: trade.duration,
            },
            create: {
              id: trade.id,
              pair: trade.pair,
              chain: trade.chain,
              entryPrice: trade.entryPrice,
              exitPrice: trade.exitPrice,
              profit: trade.profit,
              profitPercent: trade.profitPercent,
              timestamp: BigInt(trade.timestamp),
              duration: trade.duration,
            },
          })
        )
      );
    }

    // Clear and recreate positions (they change frequently)
    await prisma.botPosition.deleteMany();
    if (positions?.length > 0) {
      await prisma.botPosition.createMany({
        data: positions.map((pos: any) => ({
          id: pos.id,
          pair: pos.pair,
          chain: pos.chain,
          entryPrice: pos.entryPrice,
          currentPrice: pos.currentPrice,
          unrealizedPnL: pos.unrealizedPnL,
          unrealizedPercent: pos.unrealizedPercent,
          openedAt: BigInt(pos.openedAt),
          duration: pos.duration,
        })),
      });
    }

    // Save metrics
    if (metrics) {
      await prisma.botMetrics.upsert({
        where: { id: 'singleton' },
        update: {
          cumulativeProfit: metrics.cumulativeProfit,
          activeBots: metrics.activeBots,
          totalTradeCount: metrics.totalTradeCount,
          totalVolume: metrics.totalVolume,
          isRunning: metrics.isRunning,
          profitData: JSON.stringify(metrics.profitData),
        },
        create: {
          id: 'singleton',
          cumulativeProfit: metrics.cumulativeProfit,
          activeBots: metrics.activeBots,
          totalTradeCount: metrics.totalTradeCount,
          totalVolume: metrics.totalVolume,
          isRunning: metrics.isRunning,
          profitData: JSON.stringify(metrics.profitData),
        },
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error saving bot state:', error);
    return NextResponse.json({ error: 'Failed to save state' }, { status: 500 });
  }
}
