// Trading bot simulation types

export type Chain = 'solana' | 'ethereum';

export interface Trade {
  id: string;
  pair: string;
  chain: Chain;
  entryPrice: number;
  exitPrice: number;
  profit: number;
  profitPercent: number;
  timestamp: number;
  duration: number; // in seconds
}

export interface Position {
  id: string;
  pair: string;
  chain: Chain;
  entryPrice: number;
  currentPrice: number;
  unrealizedPnL: number;
  unrealizedPercent: number;
  openedAt: number;
  duration: number;
}

export interface PairStats {
  pair: string;
  chain: Chain;
  trades24h: number;
  winRate: number;
  totalProfit: number;
  avgProfitPerTrade: number;
  bestTrade: number;
  status: 'active' | 'paused';
}

export interface MetricData {
  totalProfit24h: number;
  profitChange: number;
  activeBots: number;
  winRate: number;
  totalTrades24h: number;
  avgProfitPerTrade: number;
  totalVolume24h: number;
}

export interface NetworkStatus {
  chain: Chain;
  status: 'operational' | 'degraded' | 'down';
  latency: number;
}

export interface PerformanceMetrics {
  bestTradeToday: {
    amount: number;
    pair: string;
  };
  worstTradeToday: {
    amount: number;
    pair: string;
  };
  avgTradeDuration: number;
  successStreak: number;
  totalBotsRunning: number;
  profitableBots: number;
}

export interface ProfitDataPoint {
  time: string;
  profit: number;
}

