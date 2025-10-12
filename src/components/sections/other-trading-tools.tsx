"use client";

import React from 'react';
import Image from 'next/image';
import { useReveal } from "@/hooks/useReveal";

const OtherTradingTools = () => {
  const textRef = useReveal();
  const imageRef = useReveal();

  return (
    <div className="flex flex-col items-center justify-center md:flex-row md:gap-8 lg:gap-16">
      {/* Left Column: Text Content */}
      <div ref={textRef} className="reveal w-full md:w-1/2">
        <div className="text-left">
          <div className="mb-4 font-mono text-base text-primary-green">04.</div>
          <h3 className="mb-6 text-[32px] font-semibold leading-[1.3] text-primary-green">
            other Solana trading tools
          </h3>
          <div className="space-y-6 text-base leading-[1.6] text-text-secondary">
            <p>
              Harnessing goodcryptoX's battle-tested trading engine, which has processed over $3 billion in volume, we
              bring centralized exchange-level tools to Solana DEX traders. From limit and trailing orders to on-chart
              order progress visualization and fully-automated DEX trading strategies, goodcryptoX offers the most
              comprehensive Solana trading bot on the market.
            </p>
            <p>
              But we're not stopping there. Our roadmap includes a Solana-optimized rebalancer bot for dynamic
              portfolio management, a copy trading bot to mirror top Solana DEX traders' strategies, and an SOS bot to
              shield your portfolio during market downturns.
            </p>
          </div>
        </div>
      </div>

      {/* Right Column: Image */}
      <div ref={imageRef} className="reveal-image mt-8 w-full md:mt-0 md:w-1/2">
        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/af5db15b-f5d8-4f95-970a-a043630c22a7-goodcrypto-app/assets/svgs/base-func-pic-4-9.svg?"
          alt="other Solana trading tools"
          width={458}
          height={289}
          className="h-auto w-full"
        />
      </div>
    </div>
  );
};

export default OtherTradingTools;