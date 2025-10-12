"use client";

import Image from "next/image";
import { useReveal } from "@/hooks/useReveal";

export default function SniperBotSection() {
  const imageRef = useReveal();
  const textRef = useReveal();

  return (
    <div className="block pt-[100px]">
      <div className="flex flex-col md:flex-row items-center justify-center mx-auto" style={{ maxWidth: '1140px' }}>
        {/* Image Column: Reordered to be on the left based on instructions */}
        <div ref={imageRef} className="reveal-image w-full md:w-1/2 px-3 flex justify-center items-center mb-10 md:mb-0">
          <Image
            src="https://goodcrypto.app/wp-content/uploads/2024/06/base-func-pic-2.svg"
            alt="Illustration of a diamond in a sniper scope, representing the Solana Sniper Bot"
            width={522}
            height={308}
            className="max-w-[522px] w-full h-auto"
          />
        </div>

        {/* Text Content Column */}
        <div ref={textRef} className="reveal w-full md:w-1/2 px-3">
          <div className="text-base font-semibold text-primary-green mb-6">03.</div>
          <h3 className="text-primary-green font-bold text-[32px] leading-[1.3] mb-8">
            Solana Sniper bot
          </h3>
          <div className="text-text-secondary text-base leading-relaxed space-y-5">
            <p>
              Our sniper bot Solana combines an advanced Solana DEX Screener with lightning-fast execution to automatically snipe new tokens that meet your criteria. This powerful tool continuously analyzes all Solana tokens, considering on-chain activity, price movements, volume and liquidity shifts, buying pressure, experienced buyer participation, social media traction, and more.
            </p>
            <p>
              goodcryptoX's SOL sniper bot can alert you when a new token matches your parameters or execute purchases automatically using market or trailing orders. Integrate take-profit and stop-loss features into your trades to transform the Sniper bot into a fully automated profit engine with robust risk management.
            </p>
          </div>
          <div className="mt-12">
            <a
              href="https://click.goodcrypto.app/b9EC/67zyexw2"
              className="inline-flex items-center justify-center bg-white text-background-primary font-semibold text-base leading-none py-[15px] px-8 rounded-full transition-transform duration-300 hover:scale-[1.02]"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>TRY FOR FREE</span>
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/af5db15b-f5d8-4f95-970a-a043630c22a7-goodcrypto-app/assets/svgs/arrow-deg-4.svg?"
                alt="Arrow icon"
                width={14}
                height={14}
                className="ml-2"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}