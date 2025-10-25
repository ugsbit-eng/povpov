"use client";

import Image from 'next/image';
import { useReveal } from "@/hooks/useReveal";
import { motion } from "framer-motion";

const JoinRevolutionSection = () => {
  const textRef = useReveal<HTMLDivElement>();
  const imageRef = useReveal<HTMLDivElement>();

  return (
    <section className="relative overflow-hidden bg-background-primary py-[100px]">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/af5db15b-f5d8-4f95-970a-a043630c22a7-goodcrypto-app/assets/images/base-join-bg-10.jpg?"
          alt="Abstract background with blue and teal gradients and geometric patterns"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="container relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 lg:gap-8">
          <div ref={textRef} className="reveal w-full md:w-7/12 text-center md:text-left">
            <h2 className="text-[64px] font-bold leading-[1.1] text-white uppercase mb-8">
              join <span className="text-primary">DEX</span> <br /> revolution!
            </h2>
            <div className="space-y-4 max-w-[620px] mx-auto md:mx-0">
              <p className="text-base font-medium leading-[1.6] text-text-secondary">
                Unleash the full power of DEX trading with goodcryptoX, where bots meet blockchain for unmatched performance. Our platform offers cutting-edge DEX trading features, including advanced bots like Grid, Sniper, and DCA, as well as market screeners with auto-buying functionality, tools previously exclusive to CEXs, all at your fingertips. With these powerful features, you're always one step ahead of the market.
              </p>
              <p className="text-base font-medium leading-[1.6] text-text-secondary">
                Optimize your strategies, maximize your profits, and navigate the DeFi landscape with unprecedented efficiency. Join the ranks of successful traders who have transformed their DEX trading experience. Your journey to smarter, more profitable decentralized trading starts here.
              </p>
            </div>
            <a
              href="https://click.goodcrypto.app/b9EC/k66kff0z"
              className="inline-flex items-center justify-center bg-white text-background-primary rounded-full py-[15px] px-8 text-base font-semibold uppercase mt-8 transition-transform duration-300 hover:scale-105"
            >
              LAUNCH BOT
              <span className="ml-2 flex-shrink-0">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/af5db15b-f5d8-4f95-970a-a043630c22a7-goodcrypto-app/assets/svgs/arrow-deg-4.svg?"
                  alt="arrow icon"
                  width={14}
                  height={14}
                />
              </span>
            </a>
          </div>

          <div ref={imageRef} className="reveal-image w-full md:w-5/12 flex justify-center mt-8 md:mt-0">
            <div className="relative inline-block">
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
                }}
              >
                <div className="absolute inset-0 bg-gradient-radial from-primary-green/30 via-accent-teal/20 to-transparent blur-3xl" />
              </motion.div>

              <motion.div
                animate={{
                  y: [0, -20, 0],
                  rotateY: [0, 5, 0, -5, 0]
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
                }}
              >
                <motion.div
                  animate={{
                    filter: [
                      "drop-shadow(0 0 20px rgba(0, 255, 127, 0.5))",
                      "drop-shadow(0 0 40px rgba(0, 255, 127, 0.8))",
                      "drop-shadow(0 0 20px rgba(0, 217, 255, 0.5))",
                      "drop-shadow(0 0 40px rgba(0, 255, 127, 0.8))",
                      "drop-shadow(0 0 20px rgba(0, 255, 127, 0.5))"
                    ]
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Image
                    src="https://cdn.builder.io/api/v1/image/assets%2F6ae980b39107469596ac4ca0823e3b31%2F889ffbac84ad4a12a99fed5c7a7b68da?format=webp&width=800"
                    alt="P.O.V robot aiming"
                    width={462}
                    height={617}
                    className="max-w-full h-auto relative z-10"
                  />
                </motion.div>
              </motion.div>

              {[...Array(3)].map((_, i) => (
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
                      Math.cos(i * 2 * Math.PI / 3) * 120,
                      Math.cos(i * 2 * Math.PI / 3 + Math.PI) * 120,
                      0
                    ],
                    y: [
                      0,
                      Math.sin(i * 2 * Math.PI / 3) * 120,
                      Math.sin(i * 2 * Math.PI / 3 + Math.PI) * 120,
                      0
                    ],
                    scale: [0, 1, 1, 0],
                    opacity: [0, 1, 1, 0]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: i * 1.3,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinRevolutionSection;
