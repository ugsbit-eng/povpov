"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Trade } from "@/types/trading";
import { Activity } from "lucide-react";

interface LiveTradeFeedProps {
  trades: Trade[];
}

export default function LiveTradeFeed({ trades }: LiveTradeFeedProps) {
  const formatTime = (timestamp: number) => {
    const seconds = Math.floor((Date.now() - timestamp) / 1000);
    if (seconds < 60) return `${seconds}s ago`;
    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) return `${minutes}m ago`;
    return `${Math.floor(minutes / 60)}h ago`;
  };

  const getChainBadge = (chain: Trade['chain']) => {
    if (chain === 'solana') {
      return (
        <span className="px-2 py-0.5 text-xs font-semibold rounded-full bg-purple-500/20 text-purple-400 border border-purple-500/30">
          Solana
        </span>
      );
    }
    return (
      <span className="px-2 py-0.5 text-xs font-semibold rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/30">
        Ethereum
      </span>
    );
  };

  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="flex items-center gap-2 mb-4">
        <div className="relative">
          <Activity className="w-5 h-5 text-green-500" />
          <div className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-green-500 rounded-full animate-ping" />
        </div>
        <h2 className="text-xl font-bold text-white">Live Trades</h2>
        <span className="px-2 py-0.5 text-xs font-bold rounded-full bg-green-500/20 text-green-400">
          LIVE
        </span>
      </div>

      {/* Trade list */}
      <div className="flex-1 space-y-2 overflow-y-auto max-h-[600px] custom-scrollbar">
        <AnimatePresence mode="popLayout">
          {trades.slice(0, 20).map((trade) => (
            <motion.div
              key={trade.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
              className={`p-4 rounded-xl border backdrop-blur-sm ${
                trade.profit >= 0
                  ? 'bg-green-500/5 border-green-500/20 hover:border-green-500/40'
                  : 'bg-red-500/5 border-red-500/20 hover:border-red-500/40'
              } transition-all duration-200`}
            >
              {/* Header row */}
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-white">{trade.pair}</span>
                  {getChainBadge(trade.chain)}
                </div>
                <span className="text-xs text-gray-500">{formatTime(trade.timestamp)}</span>
              </div>

              {/* Price info */}
              <div className="flex items-center justify-between text-sm mb-2">
                <div className="text-gray-400">
                  <span className="text-xs">Entry: </span>
                  <span className="font-mono">${trade.entryPrice.toFixed(2)}</span>
                </div>
                <div className="text-gray-400">
                  <span className="text-xs">Exit: </span>
                  <span className="font-mono">${trade.exitPrice.toFixed(2)}</span>
                </div>
              </div>

              {/* Profit row */}
              <div className="flex items-center justify-between">
                <span className={`text-lg font-bold font-mono ${
                  trade.profit >= 0 ? 'text-green-500' : 'text-red-500'
                }`}>
                  {trade.profit >= 0 ? '+' : ''}${Math.abs(trade.profit).toFixed(2)}
                </span>
                <span className={`text-sm font-semibold ${
                  trade.profit >= 0 ? 'text-green-500' : 'text-red-500'
                }`}>
                  {trade.profitPercent >= 0 ? '+' : ''}{trade.profitPercent.toFixed(2)}%
                </span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(16, 185, 129, 0.3);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(16, 185, 129, 0.5);
        }
      `}</style>
    </div>
  );
}

