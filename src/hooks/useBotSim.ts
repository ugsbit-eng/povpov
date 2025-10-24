"use client";
import * as React from "react";
import { mulberry32 } from "@/lib/prng";

type OrderLevel = { price: number; size: number; cum: number };
type Position = { 
  token: string; 
  side: "Buy" | "Sell"; 
  size: number; 
  entry: number; 
  mark: number; 
  upnl: number; 
  sl: number; 
  tp: number; 
  openedAt: number 
};
type TradeRow = { 
  at: number; 
  token: string; 
  side: "Buy" | "Sell"; 
  size: number; 
  entry: number; 
  exit: number; 
  pnl: number; 
  ret: number; 
  tx?: string 
};

type SimState = {
  seed: number;
  lastUpdateMs: number;
  dayKey: string;
  equity: number;
  pnlToday: number;
  winRate: number;
  trades: number;
  avgReturn: number;
  latencyMs: number;
  price: number;
  priceSeries: number[];
  positions: Position[];
  tradeFeed: TradeRow[];
  orderbook: { bids: OrderLevel[]; asks: OrderLevel[] };
};

const TZ = "Europe/Amsterdam";
const KEY = "bot_sim_v1";

const fmtDayKey = () =>
  new Intl.DateTimeFormat("en-CA", { timeZone: TZ, year: "numeric", month: "2-digit", day: "2-digit" }).format(new Date());

function clamp(n: number, lo: number, hi: number) { 
  return Math.min(hi, Math.max(lo, n)); 
}

function defaults(seed: number): SimState {
  const r = mulberry32(seed);
  const price = 1 + r() * 0.2;
  return {
    seed, 
    lastUpdateMs: Date.now(), 
    dayKey: fmtDayKey(),
    equity: 100_000 + Math.floor(r() * 5_000),
    pnlToday: 0, 
    winRate: 68 + r() * 4, 
    trades: 18400 + Math.floor(r() * 100),
    avgReturn: 1.8, 
    latencyMs: 42 + Math.floor(r() * 30),
    price, 
    priceSeries: Array.from({ length: 60 }, () => price + (r() - 0.5) * 0.01),
    positions: [], 
    tradeFeed: [],
    orderbook: { bids: [], asks: [] }
  };
}

export function useBotSim() {
  const [running, setRunning] = React.useState(true);
  const [speed, setSpeed] = React.useState<1 | 2 | 4 | 8>(1);
  const [isClient, setIsClient] = React.useState(false);

  // Always use same default on server AND first client render
  const [state, setState] = React.useState<SimState>(() =>
    defaults(Math.floor(Math.random() * 1e9))
  );

  // After hydration, load from localStorage
  React.useEffect(() => {
    setIsClient(true);
    try {
      const raw = localStorage.getItem(KEY);
      if (raw && raw.trim()) {
        const s = JSON.parse(raw) as SimState;
        if (s.dayKey !== fmtDayKey()) {
          s.pnlToday = 0;
          s.dayKey = fmtDayKey();
        }
        setState(s);
      }
    } catch (e) {
      // Silently ignore parse errors and use default state
      localStorage.removeItem(KEY);
    }
  }, []);

  const rngRef = React.useRef(mulberry32(state.seed));
  const save = (s: SimState) => {
    if (isClient) {
      try {
        localStorage.setItem(KEY, JSON.stringify(s));
      } catch {}
    }
  };

  React.useEffect(() => {
    if (!running || typeof window === 'undefined') return;
    
    let timeoutId: number;
    let isActive = true;

    const loop = () => {
      if (!isActive) return;
      
      const r = rngRef.current;
      setState(prevState => {
        let s = { ...prevState };
        const today = fmtDayKey();
        if (s.dayKey !== today) { 
          s.pnlToday = 0; 
          s.dayKey = today; 
        }

        const vol = r() * 0.0025 + (r() < 0.05 ? r() * 0.01 : 0);
        const dir = r() < 0.5 ? -1 : 1;
        s.price = Math.max(0.000001, s.price * (1 + dir * vol));

        const mk = s.price;
        const mkStep = mk * 0.002;
        const makeLevel = (i: number, side: "bid" | "ask"): OrderLevel => {
          const base = side === "bid" ? mk - i * mkStep : mk + i * mkStep;
          const sz = 100 + Math.floor(r() * 900);
          return { price: base * (1 + (r() - 0.5) * 0.0008), size: sz, cum: 0 };
        };
        const bids = Array.from({ length: 10 }, (_, i) => makeLevel(i + 1, "bid")).sort((a, b) => b.price - a.price);
        const asks = Array.from({ length: 10 }, (_, i) => makeLevel(i + 1, "ask")).sort((a, b) => a.price - b.price);
        let cum = 0; 
        for (const b of bids) { 
          cum += b.size; 
          b.cum = cum; 
        } 
        cum = 0; 
        for (const a of asks) { 
          cum += a.size; 
          a.cum = cum; 
        }
        s.orderbook = { bids, asks };

        const now = Date.now();
        const openChance = r() < 0.12 && s.positions.length < 5;
        if (openChance) {
          const side = r() < 0.5 ? "Buy" : "Sell";
          const size = (1_000 + r() * 9_000) | 0;
          const slip = mk * (r() * 0.0015);
          const entry = side === "Buy" ? mk + slip : mk - slip;
          const upnl = 0;
          const sl = side === "Buy" ? entry * (1 - 0.02 - r() * 0.01) : entry * (1 + 0.02 + r() * 0.01);
          const tp = side === "Buy" ? entry * (1 + 0.03 + r() * 0.02) : entry * (1 - 0.03 - r() * 0.02);
          s.positions = [...s.positions, { token: "BOT/USDC", side, size, entry, mark: mk, upnl, sl, tp, openedAt: now }];
        }

        const fee = 0.0005;
        const newPositions: Position[] = [];
        for (const p of s.positions) {
          const mark = s.price;
          const ret = p.side === "Buy" ? (mark / p.entry - 1) : (p.entry / mark - 1);
          const upnl = (ret - fee) * p.size;
          const hitTP = p.side === "Buy" ? mark >= p.tp : mark <= p.tp;
          const hitSL = p.side === "Buy" ? mark <= p.sl : mark >= p.sl;
          const aging = now - p.openedAt > 20_000 + rngRef.current() * 60_000;
          const closeIt = hitTP || hitSL || (aging && rngRef.current() < 0.2);
          if (closeIt) {
            const slip2 = mark * (r() * 0.0015);
            const exit = p.side === "Buy" ? mark - slip2 : mark + slip2;
            const retReal = p.side === "Buy" ? (exit / p.entry - 1) : (p.entry / exit - 1);
            const pnl = (retReal - fee * 2) * p.size;
            const row: TradeRow = {
              at: now, 
              token: "BOT/USDC", 
              side: p.side, 
              size: p.size, 
              entry: p.entry, 
              exit, 
              pnl, 
              ret: retReal * 100
            };
            s.tradeFeed = [row, ...s.tradeFeed].slice(0, 200);
            s.trades += 1;
            s.pnlToday += pnl;
            s.equity = Math.max(0, s.equity + pnl);
            const win = pnl > 0 ? 1 : 0;
            s.winRate = clamp(s.winRate + (win ? +0.05 : -0.05) + (r() - 0.5) * 0.02, 40, 90);
            s.avgReturn = clamp(s.avgReturn + (r() - 0.5) * 0.1, -2, 5);
          } else {
            newPositions.push({ ...p, mark, upnl });
          }
        }
        s.positions = newPositions;

        s.latencyMs = clamp((s.latencyMs + (r() - 0.5) * 10) | 0, 18, 160);
        s.priceSeries = [...s.priceSeries.slice(-119), s.price];
        s.lastUpdateMs = now;

        save(s);
        return s;
      });

      if (isActive) {
        timeoutId = window.setTimeout(loop, Math.floor((1000 + Math.random() * 2000) / speed));
      }
    };
    
    timeoutId = window.setTimeout(loop, 500);
    
    const onVis = () => { 
      if (document.visibilityState === "visible") setState(s => ({ ...s })); 
    };
    document.addEventListener("visibilitychange", onVis);
    
    const onStorage = (e: StorageEvent) => { 
      if (e.key === KEY && e.newValue) { 
        try { 
          setState(JSON.parse(e.newValue)); 
        } catch {} 
      } 
    };
    window.addEventListener("storage", onStorage);
    
    return () => { 
      isActive = false;
      window.clearTimeout(timeoutId); 
      document.removeEventListener("visibilitychange", onVis); 
      window.removeEventListener("storage", onStorage); 
    };
  }, [running, speed]); // Removed 'state' from dependencies to prevent cycle

  const start = () => setRunning(true);
  const pause = () => setRunning(false);
  const setSeed = (seed: number) => {
    const s = defaults(seed);
    setState(s); 
    if (typeof window !== 'undefined') {
      localStorage.setItem(KEY, JSON.stringify(s)); 
    }
    rngRef.current = mulberry32(seed);
  };
  const resetDay = () => {
    setState((prev) => { 
      const next = { ...prev, pnlToday: 0, dayKey: fmtDayKey() }; 
      if (typeof window !== 'undefined') {
        localStorage.setItem(KEY, JSON.stringify(next)); 
      }
      return next; 
    });
  };

  return { 
    state, 
    running, 
    speed, 
    start, 
    pause, 
    setSpeed: (v: 1 | 2 | 4 | 8) => setSpeed(v), 
    setSeed, 
    resetDay 
  };
}
