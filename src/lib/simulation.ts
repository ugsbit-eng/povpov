/**
 * Generates a random number from a standard normal distribution N(0,1)
 * using the Box-Muller transform
 */
function randomNormal(): number {
  const u1 = Math.random();
  const u2 = Math.random();
  return Math.sqrt(-2 * Math.log(u1)) * Math.cos(2 * Math.PI * u2);
}

interface StrategyParams {
  drift: number;
  volatility: number;
  tradeInterval: number;
}

interface Trade {
  type: 'win' | 'loss';
  pnl: number;
  price: number;
  timestamp: number;
}

interface Simulation {
  start: () => void;
  stop: () => void;
}

/**
 * Creates a trading simulation that generates realistic price movements and trades
 * @param strategyParams - Configuration for the simulation (drift, volatility, tradeInterval)
 * @param onTick - Callback function invoked on each tick with the generated trade
 * @returns Object with start() and stop() methods to control the simulation
 */
export function createSimulation(
  strategyParams: StrategyParams,
  onTick: (trade: Trade) => void
): Simulation {
  const { drift, volatility, tradeInterval } = strategyParams;
  
  let currentPrice = 100; // Initial price
  let intervalId: NodeJS.Timeout | null = null;
  
  const dt = tradeInterval / 1000; // Convert milliseconds to seconds

  function tick() {
    // Price Generation using Geometric Brownian Motion
    const priceChange = drift * dt + volatility * randomNormal() * Math.sqrt(dt);
    const newPrice = currentPrice * (1 + priceChange);
    currentPrice = newPrice;

    // Trade Generation with 75% win probability
    const isWin = Math.random() < 0.75;
    
    // Calculate P&L magnitude: random percentage (0.1% - 2%) of price, scaled by volatility
    const pnlPercentage = (Math.random() * 0.019 + 0.001) * volatility;
    const pnlMagnitude = currentPrice * pnlPercentage;
    
    const trade: Trade = {
      type: isWin ? 'win' : 'loss',
      pnl: isWin ? pnlMagnitude : -pnlMagnitude,
      price: currentPrice,
      timestamp: Date.now(),
    };

    // Invoke callback with the generated trade
    onTick(trade);
  }

  return {
    start() {
      if (intervalId === null) {
        intervalId = setInterval(tick, tradeInterval);
      }
    },
    stop() {
      if (intervalId !== null) {
        clearInterval(intervalId);
        intervalId = null;
      }
    },
  };
}












