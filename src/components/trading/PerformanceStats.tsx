"use client";

import { motion } from "framer-motion";
import { PerformanceMetrics } from "@/types/trading";
import { Target, TrendingUp, TrendingDown, Clock, Cpu, Award } from "lucide-react";

interface PerformanceStatsProps {
  metrics: PerformanceMetrics;
}

export default function PerformanceStats({ metrics }: PerformanceStatsProps) {
  const stats = [
    {
      label: "Best Trade Today",
      value: `$${metrics.bestTradeToday.amount.toFixed(2)}`,
      subtitle: metrics.bestTradeToday.pair,
      icon: TrendingUp,
      color: "text-green-500",
      bgColor: "bg-green-500/10"
    },
    {
      label: "Worst Trade Today",
      value: `-$${Math.abs(metrics.worstTradeToday.amount).toFixed(2)}`,
      subtitle: metrics.worstTradeToday.pair,
      icon: TrendingDown,
      color: "text-red-500",
      bgColor: "bg-red-500/10"
    },
    {
      label: "Avg Trade Duration",
      value: `${Math.floor(metrics.avgTradeDuration / 60)}m ${metrics.avgTradeDuration % 60}s`,
      subtitle: "Per trade",
      icon: Clock,
      color: "text-blue-500",
      bgColor: "bg-blue-500/10"
    },
    {
      label: "Success Streak",
      value: `${metrics.successStreak} wins`,
      subtitle: "In a row",
      icon: Award,
      color: "text-yellow-500",
      bgColor: "bg-yellow-500/10"
    },
    {
      label: "Total Bots Running",
      value: metrics.totalBotsRunning.toLocaleString(),
      subtitle: `${metrics.profitableBots} profitable (${Math.round((metrics.profitableBots / metrics.totalBotsRunning) * 100)}%)`,
      icon: Cpu,
      color: "text-purple-500",
      bgColor: "bg-purple-500/10"
    }
  ];

  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="flex items-center gap-2 mb-4">
        <Target className="w-5 h-5 text-green-500" />
        <h2 className="text-xl font-bold text-white">Performance Metrics</h2>
      </div>

      {/* Stats grid */}
      <div className="flex-1 space-y-4">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all"
          >
            <div className="flex items-start gap-3">
              <div className={`p-2 rounded-lg ${stat.bgColor}`}>
                <stat.icon className={`w-4 h-4 ${stat.color}`} />
              </div>
              <div className="flex-1">
                <div className="text-xs text-gray-500 mb-1">{stat.label}</div>
                <div className={`text-lg font-bold ${stat.color} font-mono mb-1`}>
                  {stat.value}
                </div>
                <div className="text-xs text-gray-600">{stat.subtitle}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Profit Distribution Chart */}
      <div className="mt-6 pt-6 border-t border-white/10">
        <h3 className="text-lg font-bold text-white mb-4">Profit Distribution</h3>
        <div className="flex items-center justify-center">
          <div className="relative w-32 h-32">
            {/* Simple donut chart SVG */}
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
              {/* Background circle */}
              <circle
                cx="50"
                cy="50"
                r="40"
                fill="none"
                stroke="rgba(255,255,255,0.05)"
                strokeWidth="20"
              />
              {/* Solana segment (60%) */}
              <circle
                cx="50"
                cy="50"
                r="40"
                fill="none"
                stroke="#9945FF"
                strokeWidth="20"
                strokeDasharray="150.8 251.2"
                strokeLinecap="round"
              />
              {/* Ethereum segment (40%) */}
              <circle
                cx="50"
                cy="50"
                r="40"
                fill="none"
                stroke="#627EEA"
                strokeWidth="20"
                strokeDasharray="100.5 251.2"
                strokeDashoffset="-150.8"
                strokeLinecap="round"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-sm font-bold text-white">100%</div>
                <div className="text-xs text-gray-500">Profit</div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4 space-y-2">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-purple-500" />
              <span className="text-gray-400">Solana</span>
            </div>
            <span className="font-semibold text-white">60%</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-blue-500" />
              <span className="text-gray-400">Ethereum</span>
            </div>
            <span className="font-semibold text-white">40%</span>
          </div>
        </div>
      </div>
    </div>
  );
}

