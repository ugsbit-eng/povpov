import { NextResponse } from 'next/server';

// PERSISTENCE TEMPORARILY DISABLED FOR PERFORMANCE TESTING
// Returns empty data immediately without database access

export async function GET() {
  return NextResponse.json({ 
    trades: [], 
    positions: [], 
    metrics: null 
  });
}

export async function POST() {
  return NextResponse.json({ success: true });
}
