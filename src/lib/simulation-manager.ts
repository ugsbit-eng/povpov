import { createSimulation } from './simulation';

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

interface PendingUpdate {
  profitChange: number;
  wins: number;
  losses: number;
  newHistoryPoints: number[];
}

class SimulationManager {
  private simulations: Map<string, ReturnType<typeof createSimulation>> = new Map();
  private pendingUpdates: Map<string, PendingUpdate> = new Map();
  private batchInterval: NodeJS.Timeout | null = null;
  private isRunning = false;

  async start() {
    if (this.isRunning) {
      console.log('Simulations already running');
      return;
    }

    console.log('Starting global simulation manager for all strategies...');
    this.isRunning = true;

    // Initialize pending updates for each strategy
    strategies.forEach((strategy) => {
      this.pendingUpdates.set(strategy.id, {
        profitChange: 0,
        wins: 0,
        losses: 0,
        newHistoryPoints: [],
      });

      // Fetch current stats to initialize cumulative PnL properly
      this.initializeStrategy(strategy);
    });

    // Start batch update interval (every 5 seconds)
    this.batchInterval = setInterval(() => {
      this.flushPendingUpdates();
    }, 5000);
  }

  private async initializeStrategy(strategy: Strategy) {
    try {
      // Import prisma to fetch data directly from database
      const { default: prisma } = await import('./prisma');
      
      const stats = await prisma.strategyStats.findUnique({
        where: { id: strategy.id },
      });

      // Get the last cumulative PnL value
      const pnlHistory = stats?.pnlHistory ? JSON.parse(stats.pnlHistory) : [];
      let cumulativePnL = pnlHistory.length > 0 ? pnlHistory[pnlHistory.length - 1] : 0;

      // Create simulation for this strategy
      const simulation = createSimulation(
        {
          drift: strategy.drift,
          volatility: strategy.volatility,
          tradeInterval: strategy.tradeInterval,
        },
        (trade) => {
          // Update cumulative P&L
          cumulativePnL += trade.pnl;

          const isWin = trade.type === 'win';
          const pending = this.pendingUpdates.get(strategy.id);

          if (pending) {
            pending.profitChange += trade.pnl;
            pending.wins += isWin ? 1 : 0;
            pending.losses += isWin ? 0 : 1;
            pending.newHistoryPoints.push(cumulativePnL);
          }
        }
      );

      // Start the simulation
      simulation.start();
      this.simulations.set(strategy.id, simulation);

      console.log(`✓ Started simulation for ${strategy.name}`);
    } catch (error) {
      console.error(`Error initializing strategy ${strategy.id}:`, error);
    }
  }

  private async flushPendingUpdates() {
    const { default: prisma } = await import('./prisma');

    for (const [strategyId, updates] of this.pendingUpdates.entries()) {
      // Skip if no updates
      if (
        updates.profitChange === 0 &&
        updates.wins === 0 &&
        updates.losses === 0
      ) {
        continue;
      }

      try {
        // Fetch current stats
        const currentStats = await prisma.strategyStats.findUnique({
          where: { id: strategyId },
        });

        const defaultStats = {
          id: strategyId,
          totalProfit: 0,
          winCount: 0,
          lossCount: 0,
          totalTrades: 0,
          pnlHistory: '[]',
        };

        const current = currentStats || defaultStats;

        // Calculate new values
        const newTotalProfit = current.totalProfit + updates.profitChange;
        const newWinCount = current.winCount + updates.wins;
        const newLossCount = current.lossCount + updates.losses;
        const newTotalTrades = newWinCount + newLossCount;

        // Parse existing pnlHistory, concat new points, and stringify
        const existingHistory: number[] = current.pnlHistory ? JSON.parse(current.pnlHistory) : [];
        const updatedHistory = [...existingHistory, ...updates.newHistoryPoints];
        const pnlHistoryString = JSON.stringify(updatedHistory);

        // Upsert the record
        await prisma.strategyStats.upsert({
          where: { id: strategyId },
          update: {
            totalProfit: newTotalProfit,
            winCount: newWinCount,
            lossCount: newLossCount,
            totalTrades: newTotalTrades,
            pnlHistory: pnlHistoryString,
          },
          create: {
            id: strategyId,
            totalProfit: newTotalProfit,
            winCount: newWinCount,
            lossCount: newLossCount,
            totalTrades: newTotalTrades,
            pnlHistory: pnlHistoryString,
          },
        });

        // Reset pending updates after successful save
        this.pendingUpdates.set(strategyId, {
          profitChange: 0,
          wins: 0,
          losses: 0,
          newHistoryPoints: [],
        });
      } catch (error) {
        console.error(`Error flushing updates for ${strategyId}:`, error);
      }
    }
  }

  stop() {
    console.log('Stopping global simulation manager...');
    this.isRunning = false;

    // Stop all simulations
    this.simulations.forEach((simulation, strategyId) => {
      simulation.stop();
      console.log(`✓ Stopped simulation for ${strategyId}`);
    });

    this.simulations.clear();

    // Clear batch interval
    if (this.batchInterval) {
      clearInterval(this.batchInterval);
      this.batchInterval = null;
    }
  }

  getStatus() {
    return {
      isRunning: this.isRunning,
      activeSimulations: Array.from(this.simulations.keys()),
      pendingUpdates: Object.fromEntries(this.pendingUpdates),
    };
  }
}

// Global singleton instance
const globalForSimManager = globalThis as unknown as {
  simulationManager: SimulationManager | undefined;
};

export const simulationManager =
  globalForSimManager.simulationManager ?? new SimulationManager();

if (process.env.NODE_ENV !== 'production') {
  globalForSimManager.simulationManager = simulationManager;
}

