"use client";

import { motion } from "framer-motion";
import { Position } from "@/types/trading";
import { TrendingUp } from "lucide-react";

interface ActivePositionsProps {
  positions: Position[];
}

export default function ActivePositions({ positions }: ActivePositionsProps) {
  const formatDuration = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}m ${secs}s`;
  };

  const getChainIcon = (chain: Position['chain']) => {
    if (chain === 'solana') {
      return <span className="text-purple-400 text-xs font-bold">◎</span>;
    }
    return <span className="text-blue-400 text-xs font-bold">Ξ</span>;
  };

  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="flex items-center gap-2 mb-4">
        <TrendingUp className="w-5 h-5 text-green-500" />
        <h2 className="text-xl font-bold text-white">Open Positions</h2>
        <span className="px-2 py-0.5 text-xs font-bold rounded-full bg-white/10 text-white">
          {positions.length}
        </span>
      </div>

      {/* Positions table */}
      <div className="flex-1 overflow-x-auto">
        <div className="min-w-full">
          {positions.length === 0 ? (
            <div className="text-center py-12 text-gray-500">
              <p>No open positions</p>
            </div>
          ) : (
            <div className="space-y-3">
              {positions.map((position, index) => (
                <motion.div
                  key={position.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all"
                >
                  {/* Header */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      {getChainIcon(position.chain)}
                      <span className="font-bold text-white">{position.pair}</span>
                    </div>
                    <span className="text-xs text-gray-500">
                      {formatDuration(position.duration)}
                    </span>
                  </div>

                  {/* Prices */}
                  <div className="grid grid-cols-2 gap-4 mb-3">
                    <div>
                      <div className="text-xs text-gray-500 mb-1">Entry Price</div>
                      <div className="font-mono text-sm text-gray-300">
                        ${position.entryPrice.toFixed(2)}
                      </div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 mb-1">Current Price</div>
                      <div className="font-mono text-sm text-white font-semibold">
                        ${position.currentPrice.toFixed(2)}
                      </div>
                    </div>
                  </div>

                  {/* P&L */}
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs text-gray-500 mb-1">Unrealized P&L</div>
                      <div className={`font-bold font-mono ${
                        position.unrealizedPnL >= 0 ? 'text-green-500' : 'text-red-500'
                      }`}>
                        {position.unrealizedPnL >= 0 ? '+' : ''}${Math.abs(position.unrealizedPnL).toFixed(2)}
                      </div>
                    </div>
                    <div className={`text-right text-sm font-semibold ${
                      position.unrealizedPnL >= 0 ? 'text-green-500' : 'text-red-500'
                    }`}>
                      {position.unrealizedPercent >= 0 ? '+' : ''}{position.unrealizedPercent.toFixed(2)}%
                    </div>
                  </div>

                  {/* Progress bar */}
                  <div className="mt-3">
                    <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${Math.min((position.duration / 300) * 100, 100)}%` }}
                        className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Top Performing Pairs */}
      <div className="mt-6 pt-6 border-t border-white/10">
        <h3 className="text-lg font-bold text-white mb-4">Best Performers (24h)</h3>
        <div className="space-y-2">
          {[
            { pair: 'SOL/USDC', chain: 'solana', profit: 247.82, winRate: 82, trades: 45, rank: 1 },
            { pair: 'ETH/USDT', chain: 'ethereum', profit: 189.43, winRate: 75, trades: 38, rank: 2 },
            { pair: 'RAY/USDC', chain: 'solana', profit: 142.56, winRate: 78, trades: 32, rank: 3 },
          ].map((item) => (
            <div
              key={item.pair}
              className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all"
            >
              <div className="flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-br from-yellow-500 to-orange-500 text-xs font-bold text-white">
                {item.rank}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  {item.chain === 'solana' ? (
                    <span className="text-purple-400 text-xs">◎</span>
                  ) : (
                    <span className="text-blue-400 text-xs">Ξ</span>
                  )}
                  <span className="font-semibold text-white text-sm">{item.pair}</span>
                </div>
                <div className="text-xs text-gray-500">
                  {item.trades} trades • {item.winRate}% win rate
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm font-bold text-green-500">
                  +${item.profit.toFixed(2)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

