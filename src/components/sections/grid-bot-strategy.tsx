"use client";

import Image from 'next/image';
import { useReveal } from "@/hooks/useReveal";

const GridBotStrategySection = () => {
  const imageRef = useReveal<HTMLDivElement>();
  const textRef = useReveal<HTMLDivElement>();

  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-12 lg:gap-16 xl:gap-24 py-16">
      {/* Left Column: Image */}
      <div ref={imageRef} className="reveal-image w-full md:w-1/2 flex justify-center">
        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/af5db15b-f5d8-4f95-970a-a043630c22a7-goodcrypto-app/assets/svgs/Group-335929-6.svg?"
          alt="SOL grid bot strategy chart showing buy and sell points on a wave"
          width={458}
          height={289}
          className="max-w-full h-auto" />

      </div>
      {/* Right Column: Content */}
      <div ref={textRef} className="reveal w-full md:w-1/2">
        <p className="text-text-muted text-base mb-4">01.</p>
        <h3 className="text-3xl font-semibold text-primary-green mb-6 leading-tight !whitespace-pre-line !whitespace-pre-line">Why P.O.V Dominates Crypto Trading

        </h3>
        <div className="space-y-6 mb-8">
          <p className="!whitespace-pre-line">Most bots are built by solo developers or disconnected teams. POV is different. It's the fusion of three distinct expertises, each compensating for the others' blind spots, each amplifying the others' strengths.

          </p>
          <p>
            The grid bot is a powerful tool in a trader's arsenal, and goodcryptoX offers you an exclusive opportunity to use it on any Solana DEX, leveraging the blockchain's high speed and low fees.
          </p>
        </div>
        <a
          href="https://click.goodcrypto.app/b9EC/cypmwjhe"
          className="inline-flex items-center justify-center bg-white text-black rounded-full group transition-transform duration-300 hover:scale-105 text-button py-4 px-8">

          TRY GRID BOT
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/af5db15b-f5d8-4f95-970a-a043630c22a7-goodcrypto-app/assets/svgs/arrow-deg-4.svg?"
            alt="arrow icon"
            width={14}
            height={14}
            className="ml-2" />

        </a>
      </div>
    </div>);

};

export default GridBotStrategySection;