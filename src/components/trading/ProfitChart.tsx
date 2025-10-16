"use client";

import { motion } from "framer-motion";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Area, AreaChart } from "recharts";
import { ProfitDataPoint } from "@/types/trading";
import { TrendingUp } from "lucide-react";

interface ProfitChartProps {
  data: ProfitDataPoint[];
}

export default function ProfitChart({ data }: ProfitChartProps) {
  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-gray-900/95 backdrop-blur-sm border border-white/20 rounded-lg p-3 shadow-xl">
          <p className="text-xs text-gray-400 mb-1">{payload[0].payload.time}</p>
          <p className="text-lg font-bold text-green-500 font-mono">
            ${payload[0].value.toFixed(2)}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="w-full"
    >
      <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-green-500" />
            <h2 className="text-xl font-bold text-white">Cumulative Profit (24h)</h2>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-500">Last updated:</span>
            <span className="text-sm text-white font-semibold">
              {new Date().toLocaleTimeString()}
            </span>
          </div>
        </div>

        {/* Chart */}
        <div className="w-full h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={data}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
              <defs>
                <linearGradient id="profitGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis
                dataKey="time"
                stroke="#6b7280"
                style={{ fontSize: '12px' }}
                tickLine={false}
              />
              <YAxis
                stroke="#6b7280"
                style={{ fontSize: '12px' }}
                tickLine={false}
                tickFormatter={(value) => `$${value}`}
              />
              <Tooltip content={<CustomTooltip />} />
              <Area
                type="monotone"
                dataKey="profit"
                stroke="#10b981"
                strokeWidth={3}
                fill="url(#profitGradient)"
                animationDuration={1000}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Stats below chart */}
        <div className="mt-6 grid grid-cols-3 gap-4">
          <div className="text-center p-3 rounded-lg bg-white/5">
            <div className="text-xs text-gray-500 mb-1">Starting Balance</div>
            <div className="text-lg font-bold text-white font-mono">
              ${data[0]?.profit.toFixed(2) || '0.00'}
            </div>
          </div>
          <div className="text-center p-3 rounded-lg bg-white/5">
            <div className="text-xs text-gray-500 mb-1">Current Balance</div>
            <div className="text-lg font-bold text-green-500 font-mono">
              ${data[data.length - 1]?.profit.toFixed(2) || '0.00'}
            </div>
          </div>
          <div className="text-center p-3 rounded-lg bg-white/5">
            <div className="text-xs text-gray-500 mb-1">Net Gain (24h)</div>
            <div className="text-lg font-bold text-green-500 font-mono">
              +${((data[data.length - 1]?.profit || 0) - (data[0]?.profit || 0)).toFixed(2)}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

