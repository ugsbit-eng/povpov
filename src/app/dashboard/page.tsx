'use client';

import { useState } from 'react';
import StrategyDashboard from '@/components/StrategyDashboard';

interface Strategy {
  id: string;
  name: string;
  description: string;
  tradeInterval: number;
  drift: number;
  volatility: number;
}

const strategies: Strategy[] = [
  {
    id: 'quantum-helix',
    name: 'Quantum Helix',
    description: 'High-frequency scalping exploiting micro-arbitrage opportunities.',
    tradeInterval: 2000,
    drift: 0.10,
    volatility: 0.05,
  },
  {
    id: 'momentum-wave-rider',
    name: 'Momentum Wave Rider',
    description: 'Medium-frequency trend-following that captures sustained market movements.',
    tradeInterval: 5000,
    drift: 0.30,
    volatility: 0.4,
  },
  {
    id: 'equilibrium-anchor',
    name: 'Equilibrium Anchor',
    description: 'Low-frequency mean-reversion that capitalizes on market overextensions.',
    tradeInterval: 8000,
    drift: 0.05,
    volatility: 0.15,
  },
  {
    id: 'volatility-catalyst',
    name: 'Volatility Catalyst',
    description: 'Event-driven strategy that trades on sharp, high-volatility price swings.',
    tradeInterval: 1500,
    drift: 0.20,
    volatility: 0.8,
  },
];

export default function DashboardPage() {
  const [selectedStrategy, setSelectedStrategy] = useState<Strategy>(strategies[0]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="container mx-auto px-6 py-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Trading Strategy Dashboard
          </h1>
          <p className="text-gray-600">
            Select a strategy below to view real-time performance metrics and P&L history.
          </p>
        </div>
      </div>

      {/* Strategy Selection Buttons */}
      <div className="bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-wrap gap-3">
            {strategies.map((strategy) => (
              <button
                key={strategy.id}
                onClick={() => setSelectedStrategy(strategy)}
                className={`
                  px-6 py-3 rounded-lg font-medium transition-all duration-200
                  ${
                    selectedStrategy.id === strategy.id
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/50 scale-105'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-md'
                  }
                `}
              >
                <div className="text-left">
                  <div className="font-semibold">{strategy.name}</div>
                  <div className="text-xs opacity-90 mt-1">
                    {strategy.tradeInterval}ms interval
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Strategy Dashboard */}
      <StrategyDashboard strategy={selectedStrategy} />
    </div>
  );
}












