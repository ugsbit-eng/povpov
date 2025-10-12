"use client";

import React from 'react';
import Image from 'next/image';
import { useReveal } from "@/hooks/useReveal";

const WhatIsSolanaBot = () => {
  const textRef = useReveal();
  const imageRef = useReveal();

  return (
    <section className="bg-background-primary py-20 md:py-[104px]">
      <div className="mx-auto max-w-[1200px] px-6 md:px-12 lg:px-20">
        <div 
          className="relative rounded-3xl bg-[linear-gradient(119deg,_#00d9ff,_#00ff7f)] p-[1px] shadow-[0_0_40px_rgba(0,217,255,0.25)]"
        >
          <div className="h-full w-full rounded-[23px] bg-background-tertiary/60 p-8 backdrop-blur-xl sm:p-12 lg:p-[60px]">
            <div className="grid items-center gap-12 md:grid-cols-2 xl:gap-20">
              <div ref={textRef} className="reveal space-y-6">
                <h2 className="text-[40px] font-bold leading-[1.3] tracking-[-0.01em] text-text-primary">
                  what is <span className="text-primary-green">Solana bot?</span>
                </h2>
                <p className="text-base leading-relaxed text-text-secondary">
                  The top-tier Solana trading bot from goodcryptoX is your ultimate ally in the high-speed world of decentralized crypto trading on the Solana blockchain. It equips you with the most cutting-edge trading tools while ensuring your funds remain secure with enterprise-grade protection. The goodcryptoX SOL bot is the market's first non-custodial DEX trading bot for Solana, powered by AI and smart contract wallets. It offers an unmatched array of SOL DEX trading tools and is accessible across all major platforms: web, Android, and iOS.
                </p>
              </div>
              <div ref={imageRef} className="reveal-image flex items-center justify-center">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/af5db15b-f5d8-4f95-970a-a043630c22a7-goodcrypto-app/assets/svgs/Group-2868-5.svg?"
                  alt="what is solana bot"
                  width={512}
                  height={346}
                  className="w-full max-w-[512px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsSolanaBot;