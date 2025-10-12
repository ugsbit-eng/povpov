"use client";

import Image from "next/image";
import { useReveal } from "@/hooks/useReveal";

const DcaBotStrategy = () => {
  const textRef = useReveal();
  const imageRef = useReveal();

  return (
    <div className="py-12 md:py-20">
      <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-12 lg:gap-16 xl:gap-24">
        {/* Text Column */}
        <div ref={textRef} className="reveal w-full md:w-1/2 flex justify-center md:justify-end">
          <div className="w-full max-w-lg text-left">
            <div className="text-[24px] font-semibold text-white/10 mb-4">02.</div>
            <h3 className="text-2xl lg:text-[32px] lg:leading-tight text-primary-green font-semibold mb-6">
              Solana DCA bot strategy
            </h3>
            <div className="space-y-6 text-text-secondary leading-relaxed">
              <p>
                For trending markets, our Solana DCA is your secret weapon. It thrives in both bull and bear markets, amplifying your profit potential by strategically averaging down your entry price and dynamically adjusting your Take Profit level when the market moves against you. The Long Solana DCA bot adds buy orders as prices dip, while the Short version adds sell orders as prices climb. Take profit levels auto-update with each order, reflecting your evolving position size and price.
              </p>
              <p>
                Perfect for beginners and pros alike, the DCA bot lets you capitalize on Solana's market swings without needing to predict market direction. Use it to accumulate long-term SOL holdings at optimal prices, making the most of market dips.
              </p>
            </div>
            <a
              href="https://click.goodcrypto.app/b9EC/dv52ewxl"
              className="inline-flex items-center bg-white text-background-primary rounded-full font-semibold text-base py-4 px-8 mt-8 transition-transform duration-300 hover:scale-105"
            >
              <span>TRY DCA BOT</span>
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/af5db15b-f5d8-4f95-970a-a043630c22a7-goodcrypto-app/assets/svgs/arrow-deg-4.svg?"
                alt="arrow"
                width={14}
                height={14}
                className="ml-2"
              />
            </a>
          </div>
        </div>

        {/* Image Column */}
        <div ref={imageRef} className="reveal-image w-full md:w-1/2 flex justify-center md:justify-start">
          <div className="w-full max-w-lg">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/af5db15b-f5d8-4f95-970a-a043630c22a7-goodcrypto-app/assets/svgs/base-func-pic-3-7.svg?"
              alt="Solana DCA bot strategy diagram"
              width={522}
              height={308}
              className="max-w-full h-auto w-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DcaBotStrategy;