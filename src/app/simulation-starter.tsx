'use client';

import { useEffect, useState } from 'react';

export default function SimulationStarter() {
  const [status, setStatus] = useState<string>('initializing');

  useEffect(() => {
    async function startSimulations() {
      try {
        const response = await fetch('/api/simulation/start');
        const data = await response.json();
        
        if (data.success) {
          setStatus('running');
          console.log('Global simulations started:', data.status);
        } else {
          setStatus('error');
          console.error('Failed to start simulations');
        }
      } catch (error) {
        setStatus('error');
        console.error('Error starting simulations:', error);
      }
    }

    startSimulations();
  }, []);

  // This component doesn't render anything visible
  return null;
}










