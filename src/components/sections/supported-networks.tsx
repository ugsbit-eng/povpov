"use client";

import React from 'react';
import { useReveal } from "@/hooks/useReveal";

const networks = [
  {
    name: 'Ethereum',
    logo: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/af5db15b-f5d8-4f95-970a-a043630c22a7-goodcrypto-app/assets/svgs/ethereum-1-10.svg?',
    link: 'https://click.goodcrypto.app/b9EC/7r0d7bvz',
    style: { height: '40px', width: 'auto' },
  },
  {
    name: 'Base',
    logo: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/af5db15b-f5d8-4f95-970a-a043630c22a7-goodcrypto-app/assets/svgs/full-base-logo-1-12.svg?',
    link: 'https://click.goodcrypto.app/b9EC/zxcbvzva',
    style: { height: '40px', width: 'auto' },
  },
  {
    name: 'Arbitrum',
    logo: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/af5db15b-f5d8-4f95-970a-a043630c22a7-goodcrypto-app/assets/svgs/Group-13-13.svg?',
    link: 'https://click.goodcrypto.app/b9EC/p92xl9b7',
    style: { height: '40px', width: 'auto' },
  },
  {
    name: 'BNB Smart Chain',
    logo: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/af5db15b-f5d8-4f95-970a-a043630c22a7-goodcrypto-app/assets/svgs/katman_1-14.svg?',
    link: 'https://click.goodcrypto.app/b9EC/7b0zqrya',
    style: { height: '40px', width: 'auto' },
  },
  {
    name: 'Solana',
    logo: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/af5db15b-f5d8-4f95-970a-a043630c22a7-goodcrypto-app/assets/svgs/solana-sol-logo-horizontal-1-15.svg?',
    link: 'https://click.goodcrypto.app/b9EC/iz1e2hbb',
    style: { height: '40px', width: 'auto' },
  },
  {
    name: 'A lot more coming soon...',
    logo: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/af5db15b-f5d8-4f95-970a-a043630c22a7-goodcrypto-app/assets/svgs/A-lot-more-coming-soon...-16.svg?',
    link: '#',
    style: { height: '21px', width: 'auto' },
    isTextCard: true,
  },
];

const arrowIconUrl = 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/af5db15b-f5d8-4f95-970a-a043630c22a7-goodcrypto-app/assets/svgs/arrow-green-11.svg?';

const SupportedNetworks = () => {
  const titleRef = useReveal();
  const paragraphRef = useReveal();
  const gridRef = useReveal();

  return (
    <section className="bg-background-primary py-24 sm:py-32">
      <div className="container">
        <div className="mx-auto max-w-4xl text-center">
          <h2 ref={titleRef} className="reveal text-center">
            goodcryptoX <span className="text-primary-green">supported networks</span>
          </h2>
          <p ref={paragraphRef} className="reveal mx-auto mt-6 max-w-[830px] text-center">
            Currently, goodcryptoX offers trading bots on Ethereum, BNB Smart Chain, Base and Arbitrum networks. Solana trading bot is coming soon. goodcryptoX routes all orders to Uniswap on ETH, BASE, and ARB blockchains and to Pancakeswap on BSC. If a token is traded on Uniswap or Pancakeswap, it can be traded via goodcryptoX.
          </p>
        </div>
        <div ref={gridRef} className="reveal stagger mx-auto mt-16 grid max-w-none grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {networks.map((network) => (
            <a
              key={network.name}
              href={network.link}
              target={network.link === '#' ? '_self' : '_blank'}
              rel="noopener noreferrer"
              className="group relative flex h-[124px] items-center justify-center rounded-2xl border border-border-subtle bg-background-secondary px-12 py-10 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:border-primary-green/30 hover:shadow-[0_0_40px_rgba(0,255,127,0.3)]"
            >
              <img
                src={network.logo}
                alt={network.name}
                style={network.style}
                className="transition-transform duration-300"
                loading="lazy"
              />
              {!network.isTextCard && (
                <img
                  src={arrowIconUrl}
                  alt=""
                  className="absolute right-6 top-6 h-5 w-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  loading="lazy"
                />
              )}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SupportedNetworks;