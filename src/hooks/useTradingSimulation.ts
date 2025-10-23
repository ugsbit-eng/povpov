"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { Trade, Position, ProfitDataPoint, MetricData, PerformanceMetrics } from "@/types/trading";

const TRADING_PAIRS = {
  solana: ['SOL/USDC', 'SOL/USDT', 'RAY/USDC', 'ORCA/USDC'],
  ethereum: ['ETH/USDT', 'ETH/USDC', 'MATIC/USDC', 'AVAX/USDC', 'LINK/USDT', 'UNI/USDC']
};

const BASE_PRICES: Record<string, number> = {
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

export function useTradingSimulation() {
  const [trades, setTrades] = useState<Trade[]>([]);
  const [positions, setPositions] = useState<Position[]>([]);
  const [profitData, setProfitData] = useState<ProfitDataPoint[]>([]);
  const [cumulativeProfit, setCumulativeProfit] = useState(0);
  const [isRunning, setIsRunning] = useState(true);
  const [activeBots, setActiveBots] = useState(258);
  const [totalTradeCount, setTotalTradeCount] = useState(0);
  const [totalVolume, setTotalVolume] = useState(0);

  const tradeIdCounter = useRef(0);
  const positionIdCounter = useRef(0);
  const startTime = useRef(Date.now() - 24 * 60 * 60 * 1000); // 24 hours ago

  // Generate random trade
  const generateTrade = useCallback((): Trade => {
    const chain = Math.random() < 0.6 ? 'solana' : 'ethereum';
    const pairs = TRADING_PAIRS[chain];
    const pair = pairs[Math.floor(Math.random() * pairs.length)];
    const basePrice = BASE_PRICES[pair];
    
    // 73% win rate
    const isWin = Math.random() < 0.73;
    
    const entryPrice = basePrice * (0.98 + Math.random() * 0.04);
    const profitPercent = isWin 
      ? 0.5 + Math.random() * 4.5  // 0.5% to 5% profit
      : -(0.2 + Math.random() * 2.8); // 0.2% to 3% loss
    
    const exitPrice = entryPrice * (1 + profitPercent / 100);
    const profit = isWin 
      ? 0.50 + Math.random() * 49.50  // $0.50 to $50
      : -(0.20 + Math.random() * 14.80); // -$0.20 to -$15
    
    const duration = 30 + Math.floor(Math.random() * 270); // 30s to 5min

    return {
      id: `trade-${tradeIdCounter.current++}`,
      pair,
      chain,
      entryPrice,
      exitPrice,
      profit,
      profitPercent,
      timestamp: Date.now(),
      duration
    };
  }, []);

  // Generate position
  const generatePosition = useCallback((): Position => {
    const chain = Math.random() < 0.6 ? 'solana' : 'ethereum';
    const pairs = TRADING_PAIRS[chain];
    const pair = pairs[Math.floor(Math.random() * pairs.length)];
    const basePrice = BASE_PRICES[pair];
    
    const entryPrice = basePrice * (0.98 + Math.random() * 0.04);
    const unrealizedPercent = -0.5 + Math.random() * 3; // -0.5% to 2.5%
    const currentPrice = entryPrice * (1 + unrealizedPercent / 100);
    const unrealizedPnL = -5 + Math.random() * 30; // -$5 to $25
    const duration = Math.floor(Math.random() * 180); // 0 to 3 min

    return {
      id: `pos-${positionIdCounter.current++}`,
      pair,
      chain,
      entryPrice,
      currentPrice,
      unrealizedPnL,
      unrealizedPercent,
      openedAt: Date.now() - duration * 1000,
      duration
    };
  }, []);

  // Initialize historical data
  useEffect(() => {
    // Generate 24 hours of profit data (hourly points)
    const historicalData: ProfitDataPoint[] = [];
    let profit = 0;

    for (let i = 0; i < 24; i++) {
      const hour = new Date(startTime.current + i * 60 * 60 * 1000);
      const hourStr = hour.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });

      // Gradual profit increase with some variance
      profit += 80 + Math.random() * 60; // $80-$140 per hour

      historicalData.push({
        time: hourStr,
        profit: parseFloat(profit.toFixed(2))
      });
    }

    setProfitData(historicalData);
    setCumulativeProfit(historicalData[historicalData.length - 1].profit);

    // Generate initial trades
    const initialTrades: Trade[] = [];
    for (let i = 0; i < 15; i++) {
      const trade = generateTrade();
      trade.timestamp = Date.now() - (15 - i) * 5000; // Stagger timestamps
      initialTrades.push(trade);
    }
    setTrades(initialTrades);

    // Initialize trade count with historical value (simulating 24h of trading)
    const initialTradeCount = 1847; // Realistic starting point for 24h
    setTotalTradeCount(initialTradeCount);

    // Initialize volume based on average trade volume
    const avgTradeVolume = 154; // Average $ per trade
    setTotalVolume(initialTradeCount * avgTradeVolume);

    // Generate initial positions
    const initialPositions: Position[] = [];
    for (let i = 0; i < 6; i++) {
      initialPositions.push(generatePosition());
    }
    setPositions(initialPositions);
  }, [generateTrade, generatePosition]);

  // Add new trade simulation (throttled to reduce jank)
  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      const newTrade = generateTrade();

      setTrades(prev => [newTrade, ...prev].slice(0, 50));
      setCumulativeProfit(prev => prev + newTrade.profit);

      // Increment total trade count
      setTotalTradeCount(prev => prev + 1);

      // Add to total volume (estimate trade volume based on profit)
      const tradeVolume = Math.abs(newTrade.profit) * (8 + Math.random() * 12); // 8-20x multiplier
      setTotalVolume(prev => prev + tradeVolume);

      // Update profit chart
      setProfitData(prev => {
        const now = new Date();
        const timeStr = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
        const lastPoint = prev[prev.length - 1];

        return [...prev.slice(-23), {
          time: timeStr,
          profit: lastPoint.profit + newTrade.profit
        }];
      });

    }, 3000 + Math.random() * 2000); // 3-5 seconds (throttled for smoother UX)

    return () => clearInterval(interval);
  }, [isRunning, generateTrade]);

  // Update positions
  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setPositions(prev => {
        // Update existing positions
        const updated = prev.map(pos => {
          const priceChange = -0.1 + Math.random() * 0.3; // -0.1% to 0.2%
          const newPrice = pos.currentPrice * (1 + priceChange / 100);
          const newUnrealizedPercent = ((newPrice - pos.entryPrice) / pos.entryPrice) * 100;
          const newUnrealizedPnL = pos.unrealizedPnL + (-0.5 + Math.random() * 1.5);
          const newDuration = Math.floor((Date.now() - pos.openedAt) / 1000);
          
          return {
            ...pos,
            currentPrice: newPrice,
            unrealizedPnL: newUnrealizedPnL,
            unrealizedPercent: newUnrealizedPercent,
            duration: newDuration
          };
        });

        // Randomly close positions and open new ones
        if (Math.random() < 0.3 && updated.length > 3) {
          // Close a position
          updated.splice(Math.floor(Math.random() * updated.length), 1);
        }
        
        if (Math.random() < 0.2 && updated.length < 8) {
          // Open a new position
          updated.push(generatePosition());
        }

        return updated;
      });
    }, 1000); // Update every second

    return () => clearInterval(interval);
  }, [isRunning, generatePosition]);

  // Calculate metrics
  const metrics: MetricData = {
    totalProfit24h: cumulativeProfit,
    profitChange: 12.4,
    activeBots: 847,
    winRate: 73.2,
    totalTrades24h: trades.length,
    avgProfitPerTrade: trades.length > 0 
      ? trades.reduce((sum, t) => sum + t.profit, 0) / trades.length 
      : 1.76,
    totalVolume24h: 284392
  };

  const performanceMetrics: PerformanceMetrics = {
    bestTradeToday: {
      amount: Math.max(...trades.map(t => t.profit), 127.45),
      pair: 'SOL/USDC'
    },
    worstTradeToday: {
      amount: Math.min(...trades.filter(t => t.profit < 0).map(t => t.profit), -8.32),
      pair: 'MATIC/USDT'
    },
    avgTradeDuration: 167, // 2m 47s
    successStreak: 12,
    totalBotsRunning: 847,
    profitableBots: 621
  };

  return {
    trades,
    positions,
    profitData,
    metrics,
    performanceMetrics,
    isRunning,
    setIsRunning
  };
}
