"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { Trade, Position, ProfitDataPoint, MetricData, PerformanceMetrics } from "@/types/trading";

interface Strategy {
  id: string;
  name: string;
  description: string;
  tradeInterval: number;
  drift: number;
  volatility: number;
}

interface StrategyStats {
  id: string;
  totalProfit: number;
  winCount: number;
  lossCount: number;
  totalTrades: number;
  pnlHistory: number[];
}

export function useStrategyData(strategy: Strategy) {
  const [stats, setStats] = useState<StrategyStats | null>(null);
  const [trades, setTrades] = useState<Trade[]>([]);
  const [positions, setPositions] = useState<Position[]>([]);
  const [profitData, setProfitData] = useState<ProfitDataPoint[]>([]);
  const [isRunning, setIsRunning] = useState(true);
  
  const previousTradeCount = useRef(0);
  const tradeIdCounter = useRef(0);
  const positionIdCounter = useRef(0);

  // Fetch stats from API
  const fetchStats = useCallback(async () => {
    try {
      const response = await fetch(`/api/stats/${strategy.id}`);
      if (!response.ok) return;

      const data: StrategyStats = await response.json();
      
      // Ensure pnlHistory is an array of numbers
      if (data.pnlHistory) {
        data.pnlHistory = data.pnlHistory.map(v => Number(v) || 0);
      }
      
      setStats(data);

      // Generate new visual trades if trade count increased
      const newTradeCount = data.totalTrades - previousTradeCount.current;
      if (newTradeCount > 0 && previousTradeCount.current > 0) {
        const newTrades: Trade[] = [];
        for (let i = 0; i < Math.min(newTradeCount, 5); i++) {
          newTrades.push(generateVisualTrade(data, strategy));
        }
        setTrades(prev => [...newTrades, ...prev].slice(0, 50));
      }
      previousTradeCount.current = data.totalTrades;

      // Transform pnlHistory to profit chart data
      if (data.pnlHistory && data.pnlHistory.length > 0) {
        const chartData: ProfitDataPoint[] = data.pnlHistory.map((profit, index) => ({
          time: new Date(Date.now() - (data.pnlHistory.length - index) * strategy.tradeInterval).toLocaleTimeString(),
          profit: Number(profit) || 0,
        }));
        setProfitData(chartData);
      } else {
        // Set default data point to avoid empty array errors
        setProfitData([{ time: new Date().toLocaleTimeString(), profit: 0 }]);
      }

      // Generate mock positions (2-5 active)
      const positionCount = 2 + Math.floor(Math.random() * 4);
      const mockPositions: Position[] = [];
      for (let i = 0; i < positionCount; i++) {
        mockPositions.push(generateMockPosition(strategy));
      }
      setPositions(mockPositions);

    } catch (error) {
      console.error('Error fetching strategy stats:', error);
    }
  }, [strategy]);

  // Initial fetch
  useEffect(() => {
    fetchStats();
  }, [fetchStats, strategy.id]);

  // Poll every 2 seconds
  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(fetchStats, 2000);
    return () => clearInterval(interval);
  }, [fetchStats, isRunning]);

  // Calculate metrics from stats
  const metrics: MetricData = stats ? {
    totalProfit24h: stats.totalProfit,
    profitChange: stats.totalProfit > 0 ? 15.3 : -5.2,
    activeBots: 1,
    winRate: stats.totalTrades > 0 ? (stats.winCount / stats.totalTrades) * 100 : 0,
    totalTrades24h: stats.totalTrades,
    avgProfitPerTrade: stats.totalTrades > 0 ? stats.totalProfit / stats.totalTrades : 0,
    totalVolume24h: stats.totalTrades * 1250,
  } : {
    totalProfit24h: 0,
    profitChange: 0,
    activeBots: 0,
    winRate: 0,
    totalTrades24h: 0,
    avgProfitPerTrade: 0,
    totalVolume24h: 0,
  };

  const performanceMetrics: PerformanceMetrics = {
    bestTradeToday: {
      amount: stats ? stats.totalProfit * 0.15 : 0,
      pair: 'SOL/USDC',
    },
    worstTradeToday: {
      amount: stats ? -stats.totalProfit * 0.08 : 0,
      pair: 'ETH/USDT',
    },
    avgTradeDuration: Math.floor(strategy.tradeInterval / 1000),
    successStreak: stats ? Math.min(stats.winCount, 12) : 0,
    totalBotsRunning: 1,
    profitableBots: stats && stats.totalProfit > 0 ? 1 : 0,
  };

  return {
    trades,
    positions,
    profitData,
    metrics,
    performanceMetrics,
    isRunning,
    setIsRunning,
  };
}

// Helper function to generate visual trade representation
function generateVisualTrade(stats: StrategyStats, strategy: Strategy): Trade {
  const chains: ('solana' | 'ethereum')[] = ['solana', 'ethereum'];
  const solanaPairs = ['SOL/USDC', 'SOL/USDT', 'RAY/USDC', 'ORCA/USDC'];
  const ethereumPairs = ['ETH/USDT', 'ETH/USDC', 'MATIC/USDC', 'AVAX/USDC', 'LINK/USDT', 'UNI/USDC'];
  
  const chain = chains[Math.floor(Math.random() * chains.length)];
  const pairs = chain === 'solana' ? solanaPairs : ethereumPairs;
  const pair = pairs[Math.floor(Math.random() * pairs.length)];
  
  const basePrices: Record<string, number> = {
    'SOL/USDC': 142.50,
    'SOL/USDT': 142.30,
    'RAY/USDC': 2.45,
    'ORCA/USDC': 1.82,
    'ETH/USDT': 2340.00,
    'ETH/USDC': 2341.50,
    'MATIC/USDC': 0.87,
    'AVAX/USDC': 32.40,
    'LINK/USDT': 14.52,
    'UNI/USDC': 8.93
  };

  const winRate = stats.totalTrades > 0 ? stats.winCount / stats.totalTrades : 0.75;
  const isWin = Math.random() < winRate;
  
  const basePrice = basePrices[pair];
  const entryPrice = basePrice * (0.98 + Math.random() * 0.04);
  const profitPercent = isWin 
    ? 0.5 + Math.random() * 4.5
    : -(0.2 + Math.random() * 2.8);
  
  const exitPrice = entryPrice * (1 + profitPercent / 100);
  const profit = isWin 
    ? 0.50 + Math.random() * 49.50
    : -(0.20 + Math.random() * 14.80);
  
  const duration = Math.floor(strategy.tradeInterval / 1000) + Math.floor(Math.random() * 60);

  return {
    id: `trade-${Date.now()}-${Math.random()}`,
    pair,
    chain,
    entryPrice,
    exitPrice,
    profit,
    profitPercent,
    timestamp: Date.now(),
    duration,
  };
}

// Helper function to generate mock position
function generateMockPosition(strategy: Strategy): Position {
  const chains: ('solana' | 'ethereum')[] = ['solana', 'ethereum'];
  const solanaPairs = ['SOL/USDC', 'SOL/USDT', 'RAY/USDC'];
  const ethereumPairs = ['ETH/USDT', 'ETH/USDC', 'AVAX/USDC'];
  
  const chain = chains[Math.floor(Math.random() * chains.length)];
  const pairs = chain === 'solana' ? solanaPairs : ethereumPairs;
  const pair = pairs[Math.floor(Math.random() * pairs.length)];
  
  const basePrices: Record<string, number> = {
    'SOL/USDC': 142.50,
    'SOL/USDT': 142.30,
    'RAY/USDC': 2.45,
    'ETH/USDT': 2340.00,
    'ETH/USDC': 2341.50,
    'AVAX/USDC': 32.40,
  };

  const basePrice = basePrices[pair];
  const entryPrice = basePrice * (0.98 + Math.random() * 0.04);
  const unrealizedPercent = -0.5 + Math.random() * 3;
  const currentPrice = entryPrice * (1 + unrealizedPercent / 100);
  const unrealizedPnL = -5 + Math.random() * 30;
  
  const openedAt = Date.now() - Math.floor(Math.random() * 300000);
  const duration = Math.floor((Date.now() - openedAt) / 1000);

  return {
    id: `pos-${Date.now()}-${Math.random()}`,
    pair,
    chain,
    entryPrice,
    currentPrice,
    unrealizedPnL,
    unrealizedPercent,
    openedAt,
    duration,
  };
}

