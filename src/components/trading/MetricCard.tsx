"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import type React from "react";

interface MetricCardProps {
  title: string;
  value: string | number;
  subtitle: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  trend?: 'up' | 'down' | 'neutral';
  progress?: number;
  delay?: number;
}

export default function MetricCard({
  title,
  value,
  subtitle,
  icon: Icon,
  trend = 'neutral',
  progress,
  delay = 0
}: MetricCardProps) {
  const [displayValue, setDisplayValue] = useState(0);
  const numericValue = typeof value === 'string' ? parseFloat(value.replace(/[^0-9.-]/g, '')) : value;

  // Smooth transition animation from current value to new value
  useEffect(() => {
    if (typeof numericValue === 'number' && !isNaN(numericValue)) {
      const startValue = displayValue;
      const endValue = numericValue;
      const difference = endValue - startValue;

      // Skip animation if difference is tiny or zero
      if (Math.abs(difference) < 0.01) {
        setDisplayValue(numericValue);
        return;
      }

      const duration = 800; // 800ms for smooth transition
      const startTime = Date.now();

      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Ease-out cubic for natural deceleration
        const easeProgress = 1 - Math.pow(1 - progress, 3);
        const currentValue = startValue + (difference * easeProgress);

        setDisplayValue(currentValue);

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setDisplayValue(endValue);
        }
      };

      const frame = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(frame);
    }
  }, [numericValue]);

  const formatValue = (val: number): string => {
    if (typeof value === 'string' && value.startsWith('$')) {
      return `$${val.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    }
    if (typeof value === 'string' && value.endsWith('%')) {
      return `${val.toFixed(1)}%`;
    }
    return Math.round(val).toLocaleString('en-US');
  };

  const trendColors = {
    up: 'text-green-500',
    down: 'text-red-500',
    neutral: 'text-gray-400'
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="relative group"
    >
      <div className="h-full p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/10">
        {/* Icon */}
        <div className="flex items-start justify-between mb-4">
          <div className="p-3 rounded-xl bg-green-500/10 text-green-500">
            <Icon className="w-6 h-6" />
          </div>
          {trend !== 'neutral' && (
            <div className={`text-sm font-semibold ${trendColors[trend]}`}>
              {trend === 'up' ? '↑' : '↓'}
            </div>
          )}
        </div>

        {/* Title */}
        <h3 className="text-sm font-medium text-gray-400 mb-2">{title}</h3>

        {/* Value */}
        <div className="text-3xl font-bold text-white mb-2 font-mono">
          {formatValue(displayValue)}
        </div>

        {/* Subtitle */}
        <p className="text-sm text-gray-500">{subtitle}</p>

        {/* Progress bar if provided */}
        {progress !== undefined && (
          <div className="mt-4">
            <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 1, delay: delay + 0.2 }}
                className="h-full bg-gradient-to-r from-green-500 to-emerald-400 rounded-full"
              />
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}
