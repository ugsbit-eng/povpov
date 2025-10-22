import { NextResponse } from 'next/server';
import { simulationManager } from '@/lib/simulation-manager';

let isStarted = false;

export async function GET() {
  try {
    if (!isStarted) {
      await simulationManager.start();
      isStarted = true;
      return NextResponse.json({
        success: true,
        message: 'Global simulations started',
        status: simulationManager.getStatus(),
      });
    }

    return NextResponse.json({
      success: true,
      message: 'Simulations already running',
      status: simulationManager.getStatus(),
    });
  } catch (error) {
    console.error('Error starting simulations:', error);
    return NextResponse.json(
      { error: 'Failed to start simulations' },
      { status: 500 }
    );
  }
}

export async function POST() {
  try {
    simulationManager.stop();
    isStarted = false;
    return NextResponse.json({
      success: true,
      message: 'Simulations stopped',
    });
  } catch (error) {
    console.error('Error stopping simulations:', error);
    return NextResponse.json(
      { error: 'Failed to stop simulations' },
      { status: 500 }
    );
  }
}










