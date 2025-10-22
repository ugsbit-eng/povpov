"use client";

import { Bot, TrendingUp, Zap, Target } from "lucide-react";

interface Strategy {
  id: string;
  name: string;
  description: string;
  tradeInterval: number;
  drift: number;
  volatility: number;
}

interface StrategySelectorProps {
  strategies: Strategy[];
  selectedStrategy: Strategy;
  onSelectStrategy: (strategy: Strategy) => void;
}

const strategyIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  'quantum-helix': Zap,
  'momentum-wave-rider': TrendingUp,
  'equilibrium-anchor': Target,
  'volatility-catalyst': Bot,
};

const strategyColors: Record<string, string> = {
  'quantum-helix': 'from-purple-500/20 to-pink-500/20 border-purple-500/30 hover:border-purple-500/50',
  'momentum-wave-rider': 'from-blue-500/20 to-cyan-500/20 border-blue-500/30 hover:border-blue-500/50',
  'equilibrium-anchor': 'from-green-500/20 to-emerald-500/20 border-green-500/30 hover:border-green-500/50',
  'volatility-catalyst': 'from-orange-500/20 to-red-500/20 border-orange-500/30 hover:border-orange-500/50',
};

const strategyTextColors: Record<string, string> = {
  'quantum-helix': 'text-purple-400',
  'momentum-wave-rider': 'text-blue-400',
  'equilibrium-anchor': 'text-green-400',
  'volatility-catalyst': 'text-orange-400',
};

export default function StrategySelector({
  strategies,
  selectedStrategy,
  onSelectStrategy,
}: StrategySelectorProps) {
  return (
    <div className="mb-8">
      <div className="mb-4">
        <h2 className="text-xl font-bold text-white mb-2">Select Trading Strategy</h2>
        <p className="text-gray-400">Choose from our high-performance automated trading strategies</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {strategies.map((strategy) => {
          const Icon = strategyIcons[strategy.id] || Bot;
          const isSelected = selectedStrategy.id === strategy.id;
          
          return (
            <button
              key={strategy.id}
              onClick={() => onSelectStrategy(strategy)}
              className={`
                relative p-6 rounded-2xl border backdrop-blur-xl transition-all duration-300
                bg-gradient-to-br ${strategyColors[strategy.id]}
                ${isSelected 
                  ? 'ring-2 ring-white/50 scale-105 shadow-2xl' 
                  : 'hover:scale-102 shadow-lg'
                }
              `}
            >
              {/* Selected indicator */}
              {isSelected && (
                <div className="absolute top-3 right-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                </div>
              )}

              {/* Icon */}
              <div className="mb-4">
                <Icon className={`w-8 h-8 ${strategyTextColors[strategy.id]}`} />
              </div>

              {/* Strategy name */}
              <h3 className="text-lg font-bold text-white mb-2 text-left">
                {strategy.name}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-400 mb-4 text-left line-clamp-2">
                {strategy.description}
              </p>

              {/* Stats */}
              <div className="flex items-center justify-between text-xs">
                <div>
                  <span className="text-gray-500">Interval:</span>
                  <span className="ml-1 text-white font-mono">{strategy.tradeInterval}ms</span>
                </div>
                <div>
                  <span className="text-gray-500">Vol:</span>
                  <span className="ml-1 text-white font-mono">{strategy.volatility}</span>
                </div>
              </div>

              {/* Status badge */}
              <div className="mt-4 pt-4 border-t border-white/10">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-full bg-green-500/20 text-green-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                  Active
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}










