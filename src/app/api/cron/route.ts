import { kv } from "@vercel/kv";
import { NextResponse } from "next/server";
import { DEFAULTS, KPI_KEY } from "@/lib/kpi-defaults";

export const runtime = "edge";

function clamp(n: number, lo: number, hi: number) {
  return Math.min(hi, Math.max(lo, n));
}

function ri(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function rf(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

export async function GET() {
  const now = Date.now();
  const tz = "Europe/Amsterdam";
  const dayKey = new Intl.DateTimeFormat("en-CA", {
    timeZone: tz,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date());

  let s: any = await kv.get(KPI_KEY);
  if (!s) s = { ...DEFAULTS, dayKey };

  // Reset 24h bucket at local day rollover
  if (s.dayKey !== dayKey) {
    s.profit24h = 0;
    s.dayKey = dayKey;
  }

  // Bounded jitter to feel live
  const pBias = Math.random() < 0.65 ? 1 : -1;
  s.profit24h = Math.max(0, s.profit24h + ri(50, 350) * pBias);

  if (Math.random() < 0.8) s.pnlAllTime += ri(100, 800);
  else if (Math.random() < 0.1)
    s.pnlAllTime = Math.max(0, s.pnlAllTime - ri(50, 200));

  s.winrate = clamp(s.winrate + rf(-0.2, 0.2), 40, 90);
  s.trades += Math.random() < 0.05 ? 10 : ri(0, 5);
  s.avgReturn = clamp(s.avgReturn + rf(-0.05, 0.05), -2.0, 5.0);
  s.activeUsers = clamp(s.activeUsers + ri(-7, 7), 0, 99999);
  s.lastUpdateMs = now;

  await kv.set(KPI_KEY, s);
  return NextResponse.json(
    { ok: true, at: now },
    { headers: { "Cache-Control": "no-store" } }
  );
}