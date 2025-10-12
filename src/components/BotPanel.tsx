"use client";
import React, { useEffect, useRef } from "react";
import { useBotSim } from "@/hooks/useBotSim";
import LiveIndicator from "@/components/live-indicator";

const fUSD = (n: number) => n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
const fPct = (n: number) => `${n.toFixed(1)}%`;
const fInt = (n: number) => n.toLocaleString("en-US");
const fTime = (ms: number) => new Date(ms).toISOString().slice(11, 19);

export default function BotPanel() {
  const { state: s, running, speed, start, pause, setSpeed, setSeed, resetDay } = useBotSim();
  const sparkCanvasRef = useRef<HTMLCanvasElement>(null);

  // Sparkline drawing
  useEffect(() => {
    const canvas = sparkCanvasRef.current;
    if (!canvas) return;

    const draw = () => {
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);

      const w = rect.width;
      const h = rect.height;

      ctx.clearRect(0, 0, w, h);

      const arr = s.priceSeries;
      if (arr.length < 2) return;

      const min = Math.min(...arr);
      const max = Math.max(...arr);
      const pad = (max - min) || 1;

      ctx.beginPath();
      for (let i = 0; i < arr.length; i++) {
        const x = i * (w / (arr.length - 1));
        const y = h - ((arr[i] - min) / pad) * h;
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.lineWidth = 2;
      ctx.strokeStyle = "rgba(0, 255, 127, 0.95)";
      ctx.stroke();

      requestAnimationFrame(draw);
    };

    draw();
  }, [s.priceSeries]);

  return (
    <section id="bot-panel" aria-label="Trading bot simulation" className="flex flex-col gap-4 md:gap-6">
      {/* Header / Controls */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary">
            P.O.V Trading Bot — <span className="text-primary-green">Live Simulation</span>
          </h1>
          <div className="mt-2">
            <LiveIndicator />
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-2 md:gap-3">
          <button
            onClick={running ? pause : start}
            className="px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-primary-green transition-colors"
          >
            {running ? "Pause" : "Start"}
          </button>
          <div className="inline-flex border border-border-subtle rounded-full overflow-hidden">
            {([1, 2, 4, 8] as const).map((v) => (
              <button
                key={v}
                className={`px-4 py-2 text-sm font-semibold transition-all ${
                  speed === v ? "bg-white/10 text-white" : "text-text-secondary hover:text-white"
                }`}
                onClick={() => setSpeed(v)}
              >
                x{v}
              </button>
            ))}
          </div>
          <input
            className="w-28 px-3 py-2 rounded-lg bg-background-secondary border border-border-subtle text-text-primary placeholder:text-text-muted"
            placeholder="Seed…"
            inputMode="numeric"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                const n = parseInt((e.target as HTMLInputElement).value || "");
                if (!isNaN(n)) setSeed(n);
              }
            }}
          />
          <button
            onClick={resetDay}
            className="px-6 py-3 bg-transparent border border-border-subtle text-white font-semibold rounded-full hover:border-primary-green hover:text-primary-green transition-colors"
          >
            Reset Day
          </button>
        </div>
      </div>

      {/* KPI Strip */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
        {[
          { label: "Equity", value: fUSD(s.equity) },
          { label: "P&L Today", value: fUSD(s.pnlToday) },
          { label: "Win Rate", value: fPct(s.winRate) },
          { label: "Trades Executed", value: fInt(s.trades) },
          { label: "Avg Return / Trade", value: fPct(s.avgReturn) },
          { label: "Latency", value: `${s.latencyMs} ms` },
        ].map((kpi, i) => (
          <div
            key={i}
            className="border border-border-subtle rounded-2xl p-4 md:p-5 bg-background-secondary/30 hover:border-primary-green/30 transition-all"
            aria-label={kpi.label}
          >
            <div className="text-xl md:text-2xl font-bold text-primary-green">{kpi.value}</div>
            <div className="text-xs md:text-sm text-text-secondary mt-1">{kpi.label}</div>
          </div>
        ))}
      </div>

      {/* Price + Sparkline */}
      <div className="flex items-center justify-between gap-4 p-6 border border-border-subtle rounded-2xl bg-background-secondary/30">
        <div>
          <div className="text-sm font-semibold text-text-secondary">BOT/USDC</div>
          <div className="text-3xl md:text-4xl font-bold text-white">{s.price.toFixed(6)}</div>
        </div>
        <canvas ref={sparkCanvasRef} className="w-48 md:w-64 h-12" />
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
        {/* Left Column */}
        <div className="flex flex-col gap-4 md:gap-6">
          {/* Recent Trades */}
          <div className="border border-border-subtle rounded-2xl p-4 md:p-6 bg-background-secondary/30">
            <h3 className="text-lg font-bold text-white mb-4">Recent Trades</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border-subtle">
                    <th className="text-left p-2 text-text-secondary font-semibold">Time (UTC)</th>
                    <th className="text-left p-2 text-text-secondary font-semibold">Token</th>
                    <th className="text-left p-2 text-text-secondary font-semibold">Side</th>
                    <th className="text-left p-2 text-text-secondary font-semibold">Size</th>
                    <th className="text-left p-2 text-text-secondary font-semibold">Entry</th>
                    <th className="text-left p-2 text-text-secondary font-semibold">Exit</th>
                    <th className="text-left p-2 text-text-secondary font-semibold">Net P&L</th>
                    <th className="text-left p-2 text-text-secondary font-semibold">Return</th>
                    <th className="text-left p-2 text-text-secondary font-semibold">Tx</th>
                  </tr>
                </thead>
                <tbody>
                  {s.tradeFeed.slice(0, 25).map((t, i) => (
                    <tr key={i} className="border-b border-border-subtle/50">
                      <td className="p-2 text-text-secondary">{new Date(t.at).toISOString().replace("T", " ").slice(0, 19)}</td>
                      <td className="p-2 text-text-secondary">BOT/USDC</td>
                      <td className={`p-2 font-bold ${t.side === "Buy" ? "text-primary-green" : "text-error-red"}`}>{t.side}</td>
                      <td className="p-2 text-text-secondary">{fUSD(t.size)}</td>
                      <td className="p-2 text-text-secondary">{t.entry.toFixed(6)}</td>
                      <td className="p-2 text-text-secondary">{t.exit.toFixed(6)}</td>
                      <td className={`p-2 font-semibold ${t.pnl >= 0 ? "text-primary-green" : "text-error-red"}`}>
                        {(t.pnl >= 0 ? "+" : "") + fUSD(Math.abs(t.pnl))}
                      </td>
                      <td className={`p-2 font-semibold ${t.ret >= 0 ? "text-primary-green" : "text-error-red"}`}>
                        {(t.ret >= 0 ? "+" : "") + t.ret.toFixed(1)}%
                      </td>
                      <td className="p-2 text-text-muted underline cursor-not-allowed">view</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Open Positions */}
          <div className="border border-border-subtle rounded-2xl p-4 md:p-6 bg-background-secondary/30">
            <h3 className="text-lg font-bold text-white mb-4">Open Positions</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border-subtle">
                    <th className="text-left p-2 text-text-secondary font-semibold">Token</th>
                    <th className="text-left p-2 text-text-secondary font-semibold">Side</th>
                    <th className="text-left p-2 text-text-secondary font-semibold">Size</th>
                    <th className="text-left p-2 text-text-secondary font-semibold">Entry</th>
                    <th className="text-left p-2 text-text-secondary font-semibold">Mark</th>
                    <th className="text-left p-2 text-text-secondary font-semibold">uPnL</th>
                    <th className="text-left p-2 text-text-secondary font-semibold">SL</th>
                    <th className="text-left p-2 text-text-secondary font-semibold">TP</th>
                  </tr>
                </thead>
                <tbody>
                  {s.positions.map((p, i) => (
                    <tr key={i} className="border-b border-border-subtle/50">
                      <td className="p-2 text-text-secondary">BOT/USDC</td>
                      <td className={`p-2 font-bold ${p.side === "Buy" ? "text-primary-green" : "text-error-red"}`}>{p.side}</td>
                      <td className="p-2 text-text-secondary">{fUSD(p.size)}</td>
                      <td className="p-2 text-text-secondary">{p.entry.toFixed(6)}</td>
                      <td className="p-2 text-text-secondary">{p.mark.toFixed(6)}</td>
                      <td className={`p-2 font-semibold ${p.upnl >= 0 ? "text-primary-green" : "text-error-red"}`}>
                        {(p.upnl >= 0 ? "+" : "") + fUSD(Math.abs(p.upnl))}
                      </td>
                      <td className="p-2 text-text-secondary">{p.sl.toFixed(6)}</td>
                      <td className="p-2 text-text-secondary">{p.tp.toFixed(6)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-4 md:gap-6">
          {/* Order Book */}
          <div className="border border-border-subtle rounded-2xl p-4 md:p-6 bg-background-secondary/30">
            <h3 className="text-lg font-bold text-white mb-4">Order Book</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="text-sm font-semibold text-primary-green mb-2">Bids</div>
                {s.orderbook.bids.map((l, i) => (
                  <div key={i} className="flex justify-between text-xs p-1 rounded bg-primary-green/5 mb-1">
                    <span className="text-text-secondary">{l.price.toFixed(6)}</span>
                    <span className="text-text-muted">{l.size}</span>
                    <span className="text-text-muted">{l.cum}</span>
                  </div>
                ))}
              </div>
              <div>
                <div className="text-sm font-semibold text-error-red mb-2">Asks</div>
                {s.orderbook.asks.map((l, i) => (
                  <div key={i} className="flex justify-between text-xs p-1 rounded bg-error-red/5 mb-1">
                    <span className="text-text-secondary">{l.price.toFixed(6)}</span>
                    <span className="text-text-muted">{l.size}</span>
                    <span className="text-text-muted">{l.cum}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Strategy Signals */}
          <div className="border border-border-subtle rounded-2xl p-4 md:p-6 bg-background-secondary/30">
            <h3 className="text-lg font-bold text-white mb-4">Strategy Signals</h3>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li>Setup A detected — confidence {(60 + Math.random() * 30) | 0}% — TTL {(10 + Math.random() * 40) | 0}s</li>
              <li>Liquidity sweep — confidence {(55 + Math.random() * 25) | 0}% — TTL {(10 + Math.random() * 40) | 0}s</li>
              <li>Momentum spike — confidence {(50 + Math.random() * 20) | 0}% — TTL {(10 + Math.random() * 40) | 0}s</li>
            </ul>
          </div>

          {/* System Status */}
          <div className="border border-border-subtle rounded-2xl p-4 md:p-6 bg-background-secondary/30">
            <h3 className="text-lg font-bold text-white mb-4">System Status</h3>
            <div className="grid grid-cols-3 gap-4 text-sm">
              <div>
                <div className="text-text-muted">Engine</div>
                <div className="font-semibold text-primary-green">{running ? "Running" : "Paused"}</div>
              </div>
              <div>
                <div className="text-text-muted">Risk Mode</div>
                <div className="font-semibold text-white">Normal</div>
              </div>
              <div>
                <div className="text-text-muted">API</div>
                <div className="font-semibold text-primary-green">Connected</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Legal / CTA */}
      <div className="border border-border-subtle rounded-2xl p-6 md:p-8 bg-background-secondary/30 text-center">
        <p className="text-sm text-text-muted mb-4">
          This is a simulated trading environment for demonstration purposes only. Past performance does not guarantee future results. 
          Trading crypto carries significant risk and may not be suitable for all investors.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-primary-green transition-colors">
            Try Free Demo
          </button>
          <button className="px-8 py-4 bg-transparent border border-white/30 text-white font-bold rounded-full hover:border-primary-green hover:text-primary-green transition-colors">
            View Transparency Report (PDF)
          </button>
        </div>
      </div>
    </section>
  );
}