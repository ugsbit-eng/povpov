'use client';

import { useEffect } from 'react';

export default function LiveKPISimulator() {
  useEffect(() => {
    const r = document.querySelector("#live-snapshot");
    if (!r || r.getAttribute("data-sim-live") === "off" || (window as any).REAL_DATA === true) return;

    const c = (n: number, l: number, h: number) => Math.min(h, Math.max(l, n));
    const tz = "Europe/Amsterdam";

    let s = { seed: Math.floor(Date.now() / 86400000) };
    const R = (() => {
      let a = s.seed;
      return () => {
        a = (a * 9301 + 49297) % 233280;
        return a / 233280;
      };
    })();
    const rand = (min: number, max: number) => min + R() * (max - min);

    const els = {
      profit24h: r.querySelector('[data-kpi="profit24h"]') as HTMLElement,
      pnlAllTime: r.querySelector('[data-kpi="pnlAllTime"]') as HTMLElement,
      winrate: r.querySelector('[data-kpi="winrate"]') as HTMLElement,
      trades: r.querySelector('[data-kpi="trades"]') as HTMLElement,
      avgReturn: r.querySelector('[data-kpi="avgReturn"]') as HTMLElement,
      activeUsers: r.querySelector('[data-kpi="activeUsers"]') as HTMLElement,
      timestamp: r.querySelector('[data-kpi="timestamp"]') as HTMLElement
    };

    const fmtUSD = (n: number) => "$" + n.toLocaleString("en-US", { minimumFractionDigits: 0, maximumFractionDigits: 0 });
    const fmtPct = (n: number) => n.toFixed(2) + "%";
    const fmtInt = (n: number) => n.toLocaleString("en-US");

    const update = () => {
      if (!r || r.getAttribute("data-sim-live") === "off" || (window as any).REAL_DATA === true) return;

      const newVals: any = {};

      // profit24h: $50-$350 jitter, 65% positive bias, floor ≥ 0
      if (els.profit24h) {
        const curr = parseFloat(els.profit24h.getAttribute("data-value") || "12842");
        let next = curr;
        if (R() < 0.65) {
          next += rand(50, 350);
        } else {
          next -= rand(50, 350);
        }
        next = c(next, 0, 9999999);
        newVals.profit24h = next;
      }

      // pnlAllTime: $100-$800 (80% positive), rare -$50 to -$200 (10% chance), floor ≥ 0
      if (els.pnlAllTime) {
        const curr = parseFloat(els.pnlAllTime.getAttribute("data-value") || "1254312");
        let next = curr;
        if (R() < 0.8) {
          next += rand(100, 800);
        } else if (R() < 0.1) {
          next -= rand(50, 200);
        }
        next = c(next, 0, 999999999);
        newVals.pnlAllTime = next;
      }

      // winrate: ±0.0-0.2%, clamp [40, 90]
      if (els.winrate) {
        const curr = parseFloat(els.winrate.getAttribute("data-value") || "72.4");
        let next = curr + rand(-0.2, 0.2);
        next = c(next, 40, 90);
        newVals.winrate = next;
      }

      // trades: +0-5 most ticks, rare +10 spike (5% chance)
      if (els.trades) {
        const curr = parseFloat(els.trades.getAttribute("data-value") || "18432");
        let next = curr;
        if (R() < 0.05) {
          next += Math.floor(rand(0, 10));
        } else {
          next += Math.floor(rand(0, 5));
        }
        next = Math.max(0, next);
        newVals.trades = next;
      }

      // avgReturn: Very stable around 3.76%, only changes 10% of ticks, ±0.01%, clamp [3.70, 3.82]
      if (els.avgReturn) {
        const curr = parseFloat(els.avgReturn.getAttribute("data-value") || "3.76");
        let next = curr;
        // Only update 10% of the time (once every few minutes on average)
        if (R() < 0.1) {
          next = curr + rand(-0.01, 0.01);
          next = c(next, 3.70, 3.82);
        }
        newVals.avgReturn = next;
      }

      // activeUsers: ±0-7, clamp [0, 99999]
      if (els.activeUsers) {
        const curr = parseFloat(els.activeUsers.getAttribute("data-value") || "1372");
        let next = curr + Math.floor(rand(-7, 7));
        next = c(next, 0, 99999);
        newVals.activeUsers = next;
      }

      // Update DOM
      Object.keys(newVals).forEach((k) => {
        const el = els[k as keyof typeof els];
        if (!el) return;
        const v = newVals[k];
        el.setAttribute("data-value", String(v));

        if (k === "profit24h") el.textContent = fmtUSD(v);
        else if (k === "pnlAllTime") el.textContent = fmtUSD(v);
        else if (k === "winrate") el.textContent = fmtPct(v);
        else if (k === "trades") el.textContent = fmtInt(v);
        else if (k === "avgReturn") el.textContent = fmtPct(v);
        else if (k === "activeUsers") el.textContent = fmtInt(v);
      });

      // Update timestamp
      if (els.timestamp) {
        const now = new Date();
        const fmt = new Intl.DateTimeFormat("en-US", {
          timeZone: tz,
          weekday: "short",
          month: "short",
          day: "numeric",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        });
        const parts = fmt.formatToParts(now);
        const timeStr = now.toLocaleString("en-US", { timeZone: tz, timeZoneName: "short" });
        const isCET = timeStr.includes("CET") || timeStr.includes("GMT+1");
        const tzLabel = isCET ? "CET" : "CEST";
        const dateStr = `Updated: ${parts.find((p) => p.type === "weekday")?.value}, ${
          parts.find((p) => p.type === "month")?.value
        } ${parts.find((p) => p.type === "day")?.value}, ${parts.find((p) => p.type === "year")?.value} — ${
          parts.find((p) => p.type === "hour")?.value
        }:${parts.find((p) => p.type === "minute")?.value}:${parts.find((p) => p.type === "second")?.value} ${tzLabel}`;
        els.timestamp.textContent = dateStr;
      }

      // Dispatch custom event for LiveIndicator
      window.dispatchEvent(new CustomEvent("kpi:updated"));
    };

    let timeoutId: NodeJS.Timeout;
    const sch = () => {
      timeoutId = setTimeout(() => {
        if (document.visibilityState === "visible") update();
        sch();
      }, rand(12000, 20000));
    };

    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") update();
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    update(); // Initial update
    sch(); // Start scheduling

    // Cleanup
    return () => {
      clearTimeout(timeoutId);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return null;
}