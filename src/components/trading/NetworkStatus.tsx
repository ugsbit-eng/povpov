"use client";

import { motion } from "framer-motion";
import { NetworkStatus as NetworkStatusType } from "@/types/trading";

interface NetworkStatusProps {
  networks: NetworkStatusType[];
}

export default function NetworkStatus({ networks }: NetworkStatusProps) {
  const getStatusColor = (status: NetworkStatusType['status']) => {
    switch (status) {
      case 'operational':
        return 'bg-green-500';
      case 'degraded':
        return 'bg-yellow-500';
      case 'down':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };

  const getChainColor = (chain: NetworkStatusType['chain']) => {
    return chain === 'solana' ? 'text-purple-400' : 'text-blue-400';
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="flex flex-wrap items-center justify-center gap-6 p-4 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10"
    >
      {networks.map((network, index) => (
        <div key={network.chain} className="flex items-center gap-3">
          {/* Status indicator with pulse */}
          <div className="relative">
            <div className={`w-3 h-3 rounded-full ${getStatusColor(network.status)}`} />
            {network.status === 'operational' && (
              <div className={`absolute inset-0 w-3 h-3 rounded-full ${getStatusColor(network.status)} animate-ping opacity-75`} />
            )}
          </div>

          {/* Chain name */}
          <span className={`font-semibold capitalize ${getChainColor(network.chain)}`}>
            {network.chain}
          </span>

          {/* Status text */}
          <span className="text-sm text-gray-400">
            {network.status === 'operational' ? 'Operational' : network.status}
          </span>

          {/* Latency */}
          <span className="text-sm text-gray-500">
            {network.latency}ms
          </span>

          {/* Separator */}
          {index < networks.length - 1 && (
            <div className="w-px h-4 bg-white/10" />
          )}
        </div>
      ))}
    </motion.div>
  );
}

