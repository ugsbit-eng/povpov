type KPIs = {
  pnlAllTime: number;
  winrate: number;
  trades: number;
  avgReturn: number;
  activeUsers: number;
  lastUpdateMs: number;
};

const clamp = (n: number, lo: number, hi: number) => Math.min(hi, Math.max(lo, n));
const ri = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;
const rf = (min: number, max: number) => Math.random() * (max - min) + min;

const state: KPIs = {
  pnlAllTime: 0,
  winrate: 55,
  trades: 0,
  avgReturn: 0.5,
  activeUsers: 0,
  lastUpdateMs: Date.now(),
};

export function getKPIs() {
  return { ...state };
}

export function tickKPIs() {
  const now = Date.now();
  if (Math.random() < 0.2) state.pnlAllTime += ri(50, 250);
  else if (Math.random() < 0.1) state.pnlAllTime = Math.max(0, state.pnlAllTime - ri(50, 200));
  state.winrate = clamp(state.winrate + rf(-0.2, 0.2), 40, 90);
  state.trades += Math.random() < 0.05 ? 10 : ri(0, 5);
  state.avgReturn = clamp(state.avgReturn + rf(-0.05, 0.05), -2.0, 5.0);
  state.activeUsers = clamp(state.activeUsers + ri(-7, 7), 0, 99999);
  state.lastUpdateMs = now;
  return { ...state };
}
