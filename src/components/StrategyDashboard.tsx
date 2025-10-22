'use client';

import { useState, useEffect } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

interface Strategy {
  id: string;
  name: string;
  description: string;
  tradeInterval: number;
  drift: number;
  volatility: number;
}

interface StrategyDashboardProps {
  strategy: Strategy;
}

interface Stats {
  id: string;
  totalProfit: number;
  winCount: number;
  lossCount: number;
  totalTrades: number;
  pnlHistory: Array<{ index: number; value: number }>;
}

export default function StrategyDashboard({
  strategy,
}: StrategyDashboardProps) {
  const { id: strategyId } = strategy;
  const [stats, setStats] = useState<Stats | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch stats from API
  const fetchStats = async () => {
    try {
      const response = await fetch(`/api/stats/${strategyId}`);
      if (!response.ok) {
        throw new Error('Failed to fetch strategy statistics');
      }

      const data = await response.json();
      
      // Convert pnlHistory array to chart format for display
      const pnlHistoryArray = Array.isArray(data.pnlHistory) ? data.pnlHistory : [];
      const formattedHistory = pnlHistoryArray.map((value: number, index: number) => ({
        index,
        value,
      }));

      setStats({
        ...data,
        pnlHistory: formattedHistory,
      });
      setIsLoading(false);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error occurred');
      setIsLoading(false);
    }
  };

  // Initial data fetch
  useEffect(() => {
    setIsLoading(true);
    fetchStats();
  }, [strategyId]);

  // Poll for updates every 2 seconds
  useEffect(() => {
    if (!stats) return;

    const pollInterval = setInterval(() => {
      fetchStats();
    }, 2000);

    return () => {
      clearInterval(pollInterval);
    };
  }, [strategyId, stats]);

  // Render loading state
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-lg text-gray-600">Loading...</p>
      </div>
    );
  }

  // Render error state
  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-lg text-red-600">Error: {error}</p>
      </div>
    );
  }

  // Render loaded state
  if (!stats) {
    return null;
  }

  const winRate =
    stats.totalTrades > 0
      ? ((stats.winCount / stats.totalTrades) * 100).toFixed(2)
      : '0.00';

  return (
    <div className="container mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">
        {strategy.name}
      </h1>
      <p className="text-gray-600 mb-8">{strategy.description}</p>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
          <h2 className="text-sm font-medium text-gray-500 uppercase tracking-wide">
            Total Profit
          </h2>
          <p
            className={`text-4xl font-bold mt-2 ${
              stats.totalProfit >= 0 ? 'text-green-600' : 'text-red-600'
            }`}
          >
            ${stats.totalProfit.toLocaleString('en-US', {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
          <h2 className="text-sm font-medium text-gray-500 uppercase tracking-wide">
            Win Rate
          </h2>
          <p className="text-4xl font-bold mt-2 text-blue-600">
            {winRate}%
          </p>
          <p className="text-sm text-gray-600 mt-2">
            {stats.winCount} wins / {stats.lossCount} losses / {stats.totalTrades} total
          </p>
        </div>
      </div>

      {/* P&L History Chart */}
      <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
        <h2 className="text-xl font-bold text-gray-900 mb-4">P&L History</h2>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart
            data={stats.pnlHistory}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis
              dataKey="index"
              label={{ value: 'Trade #', position: 'insideBottom', offset: -5 }}
              stroke="#6b7280"
            />
            <YAxis
              dataKey="value"
              label={{ value: 'Cumulative P&L ($)', angle: -90, position: 'insideLeft' }}
              stroke="#6b7280"
            />
            <Tooltip
              contentStyle={{
                backgroundColor: '#fff',
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
              }}
              formatter={(value: number) => [
                `$${value.toFixed(2)}`,
                'P&L',
              ]}
              labelFormatter={(label) => `Trade #${label}`}
            />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#3b82f6"
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

