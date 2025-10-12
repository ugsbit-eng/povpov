import { NextResponse } from "next/server";
import { tickKPIs } from "@/lib/state";

export const runtime = "nodejs";

export async function GET() {
  const snapshot = tickKPIs();
  return NextResponse.json({ ok: true, data: snapshot }, { headers: { "Cache-Control": "no-store" } });
}
