"use client";

import { X } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

export default function TopBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-[#0A1628] to-[#1A2F4A] border-b border-border-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-20">
        <div className="flex items-center justify-between py-3 gap-4">
          <div className="flex items-center gap-3 flex-1 justify-center">
            <div className="shrink-0">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/af5db15b-f5d8-4f95-970a-a043630c22a7-goodcrypto-app/assets/svgs/gcx_logo-1.svg?"
                alt="POV Sniper Bot"
                width={32}
                height={32}
                className="w-6 h-6 sm:w-8 sm:h-8"
              />
            </div>
            <p className="text-white text-xs sm:text-sm md:text-base font-medium text-center">
              <span className="text-primary-green font-bold">POV SNIPER BOT</span> Automated Solana trading bot | 17% average monthly profit
            </p>
          </div>

          <button
            onClick={() => setIsVisible(false)}
            className="shrink-0 text-white/70 hover:text-white transition-colors p-1"
            aria-label="Close banner"
          >
            <X className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}