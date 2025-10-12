"use client";

import React from 'react';
import Image from 'next/image';
import { useReveal } from "@/hooks/useReveal";

const features = [
{
  title: 'unique trading tools',
  description: 'Limit and trailing orders, advanced trading strategies like Gird and DCA, Base Screener, Gems Sniper, and a lot more',
  align: 'right' as const
},
{
  title: 'trade mining',
  description: 'Receive GOOD token rewards by trading with our Solana trading bot. The more you trade – the more you earn!',
  align: 'left' as const
},
{
  title: 'non-custodial',
  description: 'Retain full control of your funds and enjoy best-in-class enterprise-grade MPC wallet security',
  align: 'right' as const
},
{
  title: 'revenue share',
  description: 'Hold GOOD tokens and get 50% of all swap fees collected by the platform. Get a 1.5x multiplier with our ',
  linkText: 'Ultimate NFT',
  linkHref: 'https://docs.goodcrypto.app/ecosystem/nfts',
  align: 'left' as const
}];


interface FeatureCardProps {
  title: string;
  description: string;
  align: 'left' | 'right';
  linkText?: string;
  linkHref?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, align, linkText, linkHref }) => {
  return (
    <div className={`p-6 bg-background-secondary/20 backdrop-blur-sm rounded-3xl border border-border-subtle text-center lg:text-${align}`}>
      <h3 className="text-xl font-semibold capitalize text-primary-green">{title}</h3>
      <p className="mt-4 text-base text-text-secondary">
        {description}
        {linkText && linkHref &&
        <a href={linkHref} target="_blank" rel="noopener noreferrer" className="text-primary-green hover:underline">
            {linkText}
          </a>
        }
      </p>
    </div>);

};

const CentralLogo = () =>
<div className="absolute hidden lg:flex top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] items-center justify-center">
    {/* Rotating Glow */}
    <div className="absolute w-full h-full animate-spin-slow rounded-full bg-[conic-gradient(from_90deg_at_50%_50%,#00d9ff_0%,#00ff7f_50%,#00d9ff_100%)] blur-3xl opacity-50" />
    
    {/* Static Starburst */}
    <div className="absolute w-full h-full scale-110">
      <div className="absolute w-px h-[140%] left-1/2 -translate-x-1/2 top-[-20%] bg-gradient-to-b from-transparent via-accent-teal/40 to-transparent opacity-70"></div>
      <div className="absolute h-px w-[140%] top-1/2 -translate-y-1/2 left-[-20%] bg-gradient-to-r from-transparent via-accent-teal/40 to-transparent opacity-70"></div>
    </div>
    
    {/* Lens Flare */}
    <div className="absolute top-[20%] right-[11%] w-5 h-5 bg-white rounded-full blur-lg opacity-90"></div>
    <div className="absolute top-[20.5%] right-[12%] w-1.5 h-1.5 bg-white rounded-full"></div>

    {/* Central Logo */}
    <div className="relative w-44 h-44 bg-background-primary rounded-full flex items-center justify-center shadow-2xl shadow-primary-green/10">
      <div className="absolute -inset-px rounded-full border border-primary-green/20" />
      <span className="font-['Inter'] text-7xl font-black text-primary-green -tracking-[0.1em]" style={{ transform: 'scaleX(0.85) translateY(-0.02em)' }}>
        CX
      </span>
    </div>
  </div>;


const WhyGoodCryptoX = () => {
  const titleRef = useReveal();
  const cardsRef = useReveal();

  return (
    <section className="relative bg-background-primary py-24 sm:py-32 overflow-hidden">
      <Image
        src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/af5db15b-f5d8-4f95-970a-a043630c22a7-goodcrypto-app/assets/images/base-network-bg-9.jpg?"
        alt="Abstract background"
        fill
        objectFit="cover"
        className="absolute inset-0 z-0 opacity-10"
        quality={100} />

      <div className="absolute inset-0 z-0 bg-gradient-to-b from-background-primary via-transparent to-background-primary"></div>
      
      <div className="container relative z-10 mx-auto px-6 lg:px-8">
        <h2 ref={titleRef} className="reveal text-center text-4xl lg:text-5xl font-bold tracking-tight text-text-primary">
          why <span className="text-primary-green !whitespace-pre-line">P.O.V Sniper BOT ?</span>
        </h2>

        <div className="relative mt-20 lg:mt-32">
          <CentralLogo />
          <div ref={cardsRef} className="reveal stagger grid grid-cols-1 lg:grid-cols-2 gap-y-8 lg:gap-y-16 lg:gap-x-48 xl:gap-x-64 items-start">
            <div className="w-full max-w-md mx-auto lg:max-w-sm lg:m-0 lg:justify-self-end">
              <FeatureCard {...features[0]} />
            </div>
            <div className="w-full max-w-md mx-auto lg:max-w-sm lg:m-0 lg:justify-self-start">
              <FeatureCard {...features[1]} />
            </div>
            <div className="w-full max-w-md mx-auto lg:max-w-sm lg:m-0 lg:justify-self-end">
              <FeatureCard {...features[2]} />
            </div>
            <div className="w-full max-w-md mx-auto lg:max-w-sm lg:m-0 lg:justify-self-start">
              <FeatureCard {...features[3]} />
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default WhyGoodCryptoX;