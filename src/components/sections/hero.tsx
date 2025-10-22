"use client";

import Image from "next/image";
import Link from "next/link";
import { useReveal } from "@/hooks/useReveal";
import { motion } from "framer-motion";

const HeroSection = () => {
  const headingRef = useReveal<HTMLDivElement>();
  const paragraphRef = useReveal<HTMLDivElement>();
  const buttonRef = useReveal<HTMLDivElement>();
  const imageRef = useReveal<HTMLDivElement>();

  return (
    <section className="relative overflow-hidden bg-[#0a1929] pt-[110px] pb-[120px] lg:pt-[130px] lg:pb-[140px]">
      <div className="container relative z-10 mx-auto px-6 md:px-12 lg:px-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1643px] h-auto pointer-events-none opacity-40 mix-blend-lighten">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/af5db15b-f5d8-4f95-970a-a043630c22a7-goodcrypto-app/assets/svgs/lines-bg-3.svg?"
            alt="background lines"
            width={1643}
            height={633}
            className="w-full h-auto" />

        </div>
        <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/3 w-[1138px] h-[1080px] pointer-events-none opacity-30 animate-pulse">
           <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/af5db15b-f5d8-4f95-970a-a043630c22a7-goodcrypto-app/assets/images/round-bg-3.png?"
            alt="background glow"
            width={1138}
            height={1080}
            className="object-contain" />

        </div>

        <div className="relative z-10 flex flex-wrap items-center justify-center -mx-3">
          <div className="w-full px-3 md:w-7/12">
            <div className="max-w-xl">
              <h1 ref={headingRef} className="reveal font-display text-[72px] font-bold leading-[1.1] -tracking-[0.02em] text-text-primary">
                <span className="text-primary-green !whitespace-pre-line !w-[424px] !h-[166px] !whitespace-pre-line">P.O.V Sniper</span>
                <br />
                trading bot
              </h1>
              <p ref={paragraphRef} className="reveal mt-6 font-body text-lg font-normal leading-relaxed text-text-secondary">
                Revolutionize your Solana trading experience with the
                cutting-edge&nbsp; Solana trading from goodcryptoX. Harness the
                power of Solana blockchain to maximize your profits in any
                market condition using advanced trading tools and automations.
                Safeguard your assets with a fully non-custodial MPC wallet.
              </p>
              <div ref={buttonRef} className="reveal mt-8">
                <Link
                  href="https://click.goodcrypto.app/b9EC/k66kff0z"
                  className="inline-flex items-center justify-center px-8 py-4 font-body text-base font-bold leading-none text-black bg-white rounded-full transition-colors duration-300 hover:bg-primary-green group">

                  Launch bot
                  <div className="ml-2 shrink-0">
                    <Image
                      src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/af5db15b-f5d8-4f95-970a-a043630c22a7-goodcrypto-app/assets/svgs/arrow-deg-4.svg?"
                      width={14}
                      height={14}
                      alt="arrow" />

                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full px-3 text-center md:w-5/12 mt-12 md:mt-0">
            <div ref={imageRef} className="reveal-image inline-block md:pl-5 relative">
              {/* Animated glow effect behind robot */}
              <motion.div
                className="absolute inset-0 -z-10"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}>

                <div className="absolute inset-0 bg-gradient-radial from-primary-green/30 via-accent-teal/20 to-transparent blur-3xl" />
              </motion.div>

              {/* Animated robot with multiple effects */}
              <motion.div
                animate={{
                  y: [0, -20, 0],
                  rotateY: [0, 5, 0, -5, 0],
                  scale: 1.25
                }}
                transition={{
                  y: {
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  },
                  rotateY: {
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
                }}
                style={{
                  transformStyle: "preserve-3d"
                }}>

                <motion.div
                  animate={{
                    filter: [
                    "drop-shadow(0 0 20px rgba(0, 255, 127, 0.5))",
                    "drop-shadow(0 0 40px rgba(0, 255, 127, 0.8))",
                    "drop-shadow(0 0 20px rgba(0, 217, 255, 0.5))",
                    "drop-shadow(0 0 40px rgba(0, 255, 127, 0.8))",
                    "drop-shadow(0 0 20px rgba(0, 255, 127, 0.5))"]

                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}>

                  <Image
                    src="https://cdn.builder.io/api/v1/image/assets%2F6ae980b39107469596ac4ca0823e3b31%2F78d2382ee39e4aebb4227717dd14e35d?format=webp&width=800"
                    width={779}
                    height={765}
                    alt="P.O.V Robot"
                    priority
                    className="relative z-10" />

                </motion.div>
              </motion.div>

              {/* Animated orbiting particles */}
              {[...Array(3)].map((_, i) =>
              <motion.div
                key={i}
                className="absolute w-3 h-3 rounded-full bg-primary-green"
                style={{
                  top: "50%",
                  left: "50%"
                }}
                animate={{
                  x: [
                  0,
                  Math.cos(i * 2 * Math.PI / 3) * 150,
                  Math.cos(i * 2 * Math.PI / 3 + Math.PI) * 150,
                  0],

                  y: [
                  0,
                  Math.sin(i * 2 * Math.PI / 3) * 150,
                  Math.sin(i * 2 * Math.PI / 3 + Math.PI) * 150,
                  0],

                  scale: [0, 1, 1, 0],
                  opacity: [0, 1, 1, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: i * 1.3,
                  ease: "easeInOut"
                }} />

              )}
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default HeroSection;
