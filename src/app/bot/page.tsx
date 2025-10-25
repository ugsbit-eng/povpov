"use client";
import Footer from "@/components/sections/footer";
import MetricCard from "@/components/trading/MetricCard";
import NetworkStatus from "@/components/trading/NetworkStatus";
import LiveTradeFeed from "@/components/trading/LiveTradeFeed";
import ActivePositions from "@/components/trading/ActivePositions";
import PerformanceStats from "@/components/trading/PerformanceStats";
import ProfitChart from "@/components/trading/ProfitChart";
import { useTradingSimulation } from "@/hooks/useTradingSimulation";
import { TrendingUp, Bot, Target, Activity, DollarSign, BarChart3 } from "lucide-react";

export default function BotPage() {
  const {
    trades,
    positions,
    profitData,
    metrics,
    performanceMetrics,
    isRunning,
    setIsRunning
  } = useTradingSimulation();

  // Screen reader announcement for trading status
  const statusAnnouncement = `Trading bot is ${isRunning ? 'running' : 'paused'}. Total profit: $${metrics.totalProfit24h.toFixed(0)}. Win rate: ${metrics.winRate}%.`;

  const networkStatus = [
    { chain: 'solana' as const, status: 'operational' as const, latency: 234 },
    { chain: 'ethereum' as const, status: 'operational' as const, latency: 187 }
  ];

  return (
    <main className="min-h-screen bg-[#0a1628] text-white">
      {/* Screen reader status announcement */}
      <div className="sr-only" role="status" aria-live="polite" aria-atomic="true">
        {statusAnnouncement}
      </div>

      <div className="pt-[110px] pb-[120px] lg:pt-[130px] lg:pb-[140px]">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          
          {/* Hero Section */}
          <div className="mb-12">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-4">
              <div className="flex items-center gap-3">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                  P.O.V Trading Bot - Live Simulation
                </h1>
                <span className="px-4 py-2 text-lg font-bold rounded-full bg-green-500/20 text-green-400 animate-pulse">
                  LIVE
                </span>
              </div>
              <button
                onClick={() => setIsRunning(!isRunning)}
                className={`px-6 py-3 rounded-xl font-semibold text-white transition-all duration-300 shadow-lg whitespace-nowrap ${
                  isRunning
                    ? 'bg-red-500 hover:bg-red-600 hover:shadow-red-500/50'
                    : 'bg-green-500 hover:bg-green-600 hover:shadow-green-500/50'
                }`}
              >
                {isRunning ? 'Pause Simulation' : 'Resume Simulation'}
              </button>
            </div>
            <p className="text-lg text-gray-400">
              Real-time multi-chain trading across Solana & Ethereum networks
            </p>
          </div>

          {/* Key Metrics Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 mb-8">
            <MetricCard
              title="Total Profit (24h)"
              value={`$${metrics.totalProfit24h.toFixed(2)}`}
              subtitle={`+${metrics.profitChange}% vs yesterday`}
              icon={TrendingUp}
              trend="up"
              delay={0}
            />
            <MetricCard
              title="Active Bots"
              value={metrics.activeBots}
              subtitle="Currently trading"
              icon={Bot}
              delay={0.1}
            />
            <MetricCard
              title="Win Rate"
              value={`${metrics.winRate}%`}
              subtitle="Last 1000 trades"
              icon={Target}
              progress={metrics.winRate}
              delay={0.2}
            />
            <MetricCard
              title="Total Trades (24h)"
              value={metrics.totalTrades24h}
              subtitle="Across all pairs"
              icon={Activity}
              delay={0.3}
            />
            <MetricCard
              title="Avg Profit/Trade"
              value={`$${metrics.avgProfitPerTrade.toFixed(2)}`}
              subtitle="Per successful trade"
              icon={DollarSign}
              delay={0.4}
            />
            <MetricCard
              title="Total Volume (24h)"
              value={`$${metrics.totalVolume24h.toLocaleString()}`}
              subtitle="Trading volume"
              icon={BarChart3}
              delay={0.5}
            />
          </div>

          {/* Network Status Bar */}
          <div className="mb-8">
            <NetworkStatus networks={networkStatus} />
          </div>

          {/* Main Content - 3 Columns */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8">
            {/* Left Column - Live Trade Feed */}
            <div className="lg:col-span-5 xl:col-span-5">
              <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 h-full">
                <LiveTradeFeed trades={trades} />
              </div>
            </div>

            {/* Middle Column - Active Positions */}
            <div className="lg:col-span-4 xl:col-span-4">
              <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 h-full">
                <ActivePositions positions={positions} />
              </div>
            </div>

            {/* Right Column - Performance Stats */}
            <div className="lg:col-span-3 xl:col-span-3">
              <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 h-full">
                <PerformanceStats metrics={performanceMetrics} />
              </div>
            </div>
          </div>

          {/* Bottom Section - Cumulative Profit Chart */}
          <div className="mb-8">
            <ProfitChart data={profitData} />
          </div>

          {/* Trading Pairs Breakdown Table */}
          <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10">
            <h2 className="text-2xl font-bold text-white mb-6">Trading Pairs Breakdown</h2>
            <div className="overflow-x-auto">
              <table className="w-full relative">
                <thead className="sticky top-0 z-10 bg-[#0a1628]">
                  <tr className="border-b border-white/20">
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-400">Pair</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-400">Chain</th>
                    <th className="text-right py-3 px-4 text-sm font-semibold text-gray-400">24h Trades</th>
                    <th className="text-right py-3 px-4 text-sm font-semibold text-gray-400">Win Rate</th>
                    <th className="text-right py-3 px-4 text-sm font-semibold text-gray-400">Total Profit</th>
                    <th className="text-right py-3 px-4 text-sm font-semibold text-gray-400">Avg Profit</th>
                    <th className="text-center py-3 px-4 text-sm font-semibold text-gray-400">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { pair: 'SOL/USDC', chain: 'solana', trades: 247, winRate: 78, profit: 428.32, avg: 1.73, status: 'active' },
                    { pair: 'SOL/USDT', chain: 'solana', trades: 198, winRate: 72, profit: 342.18, avg: 1.73, status: 'active' },
                    { pair: 'ETH/USDT', chain: 'ethereum', trades: 183, winRate: 75, profit: 389.45, avg: 2.13, status: 'active' },
                    { pair: 'ETH/USDC', chain: 'ethereum', trades: 176, winRate: 71, profit: 324.67, avg: 1.84, status: 'active' },
                    { pair: 'RAY/USDC', chain: 'solana', trades: 142, winRate: 69, profit: 234.89, avg: 1.65, status: 'active' },
                    { pair: 'MATIC/USDC', chain: 'ethereum', trades: 134, winRate: 68, profit: 198.45, avg: 1.48, status: 'active' },
                    { pair: 'AVAX/USDC', chain: 'ethereum', trades: 128, winRate: 74, profit: 245.78, avg: 1.92, status: 'active' },
                    { pair: 'ORCA/USDC', chain: 'solana', trades: 115, winRate: 66, profit: 167.23, avg: 1.45, status: 'active' },
                    { pair: 'LINK/USDT', chain: 'ethereum', trades: 98, winRate: 70, profit: 178.92, avg: 1.83, status: 'active' },
                    { pair: 'UNI/USDC', chain: 'ethereum', trades: 87, winRate: 73, profit: 156.34, avg: 1.80, status: 'active' },
                  ].map((row, index) => (
                    <tr key={row.pair} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                      <td className="py-4 px-4">
                        <span className="font-semibold text-white">{row.pair}</span>
                      </td>
                      <td className="py-4 px-4">
                        <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                          row.chain === 'solana' 
                            ? 'bg-purple-500/20 text-purple-400' 
                            : 'bg-blue-500/20 text-blue-400'
                        }`}>
                          {row.chain === 'solana' ? '◎ Solana' : 'Ξ Ethereum'}
                        </span>
                      </td>
                      <td className="py-4 px-4 text-right text-white font-mono">{row.trades}</td>
                      <td className="py-4 px-4 text-right font-mono">
                        <span className={`font-semibold ${
                          row.winRate >= 75 ? 'text-green-400' :
                          row.winRate >= 70 ? 'text-amber-400' :
                          'text-gray-300'
                        }`}>
                          {row.winRate}%
                        </span>
                      </td>
                      <td className="py-4 px-4 text-right text-green-500 font-mono font-semibold">
                        +${Math.round(row.profit)}
                      </td>
                      <td className="py-4 px-4 text-right text-gray-300 font-mono">
                        ${row.avg.toFixed(1)}
                      </td>
                      <td className="py-4 px-4 text-center">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-full bg-green-500/20 text-green-400">
                          <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                          Active
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </main>
  );
}
