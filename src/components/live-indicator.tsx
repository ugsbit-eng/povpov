"use client";

import React from "react";

type LiveIndicatorProps = {
  className?: string;
  accentColor?: string;
  simulate?: boolean;
  compact?: boolean;
};

const STATUSES = [
  "Connected to Live Bot API",
  "Syncing…",
  "Updating…",
  "Streaming trades…",
  "Recalculating KPIs…",
];

export default function LiveIndicator({
  className = "",
  accentColor = "#22ff88",
  simulate = true,
  compact = false,
}: LiveIndicatorProps) {
  const [idx, setIdx] = React.useState(0);
  const [blink, setBlink] = React.useState(true);

  React.useEffect(() => {
    if (!simulate) return;
    let t: NodeJS.Timeout;

    const tick = () => {
      if (document.visibilityState === "visible") {
        setIdx((i) => (i + 1) % STATUSES.length);
        setBlink((b) => !b);
      }
      t = setTimeout(tick, 4000 + Math.floor(Math.random() * 4000));
    };

    t = setTimeout(tick, 3000);

    const onVis = () => {
      if (document.visibilityState === "visible") setBlink((b) => !b);
    };
    const onKpi = () => {
      setIdx(0);
      setBlink((b) => !b);
    };

    document.addEventListener("visibilitychange", onVis);
    window.addEventListener("kpi:updated", onKpi as EventListener);

    return () => {
      clearTimeout(t);
      document.removeEventListener("visibilitychange", onVis);
      window.removeEventListener("kpi:updated", onKpi as EventListener);
    };
  }, [simulate]);

  const status = STATUSES[idx];

  return (
    <>
      <style>{`
        @keyframes live-pulse {
          0% { transform: scale(0.7); opacity: 0.9; }
          70% { transform: scale(1.35); opacity: 0; }
          100% { transform: scale(1.35); opacity: 0; }
        }
        @keyframes live-flash {
          0%, 55% { filter: brightness(1); }
          60% { filter: brightness(1.35); }
          65% { filter: brightness(1); }
          70% { filter: brightness(1.35); }
          100% { filter: brightness(1); }
        }
        @keyframes live-shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: 0% 0; }
        }
        @media (prefers-reduced-motion: reduce) {
          .live-dot::after,
          .live-pill,
          .live-status-text {
            animation: none !important;
          }
        }
      `}</style>
      <div
        className={`inline-flex items-center gap-2.5 ${compact ? "px-2 py-1.5" : "px-2.5 py-2"} border rounded-full select-none ${className}`}
        style={{
          borderColor: "rgba(255,255,255,0.08)",
          background: "rgba(255,255,255,0.03)",
          backdropFilter: "saturate(140%) blur(2px)",
        }}
        role="status"
        aria-live="polite"
        aria-label={`Status: ${status}`}
      >
        <span
          className="live-dot relative rounded-full"
          style={{
            width: "10px",
            height: "10px",
            background: accentColor,
            boxShadow: `0 0 12px ${accentColor}`,
          }}
          aria-hidden="true"
        >
          <span
            className="absolute rounded-full"
            style={{
              inset: "-6px",
              border: `2px solid ${accentColor}`,
              opacity: 0.6,
              animation: "live-pulse 1.6s ease-out infinite",
            }}
          />
        </span>
        <span
          className="live-pill rounded-full px-2 py-1 text-[11px] font-extrabold tracking-wider"
          style={{
            color: "#0b0f14",
            background: accentColor,
            boxShadow: `0 0 10px ${accentColor}`,
            animation: "live-flash 1.6s linear infinite",
          }}
          aria-hidden="true"
        >
          LIVE
        </span>
        <span
          className="live-status-text font-semibold whitespace-nowrap"
          style={{
            opacity: 0.95,
            background: "linear-gradient(90deg, #fff, #d6fff0, #fff)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
            backgroundSize: "200% 100%",
            animation: "live-shimmer 3.5s ease-in-out infinite",
          }}
        >
          {status}
        </span>
      </div>
    </>
  );
}