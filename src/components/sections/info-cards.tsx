"use client";

import Image from "next/image";
import { useReveal } from "@/hooks/useReveal";
import { motion } from "framer-motion";

export default function InfoCards() {
  const cardsRef = useReveal<HTMLDivElement>();

  return (
    <section className="bg-background-primary py-20 lg:py-28">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div ref={cardsRef} className="reveal stagger max-w-[1000px] mx-auto space-y-8">
          {/* Card 1 - New Card */}
          <div className="relative overflow-hidden rounded-3xl border border-border-subtle bg-background-secondary/60 backdrop-blur-sm p-8 lg:p-12 hover:border-primary-green/30 transition-all duration-300">
            <div className="grid md:grid-cols-[200px_1fr] gap-8 items-center">
              <div className="flex justify-center md:justify-start">
                <div className="relative w-[180px] h-[180px] shrink-0">
                  <Image
                    src="https://jeweethetzelftoch.ct.ws/wp-content/uploads/2025/10/3gems.png"
                    alt="Three Gems representing the P.O.V trinity"
                    width={180}
                    height={180}
                    className="object-contain"
                  />
                </div>
              </div>
              <div>
                <h3 className="text-2xl lg:text-3xl font-bold text-primary-green mb-4">
                  <span className="text-text-secondary">The Legend of Three Gems</span>
                </h3>
                <p className="text-base lg:text-lg text-text-secondary leading-relaxed">
                  In the volatile world of Solana trading, success isn't born from luck. It's engineered through the perfect fusion of experience, innovation, and instinct. The POV Solana Sniper BOT represents the convergence of three extraordinary forces, three legendary gems, each possessing unique powers that alone are formidable, but together are unstoppable.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 - Peluka Chavez */}
          <div className="relative overflow-hidden rounded-3xl border border-border-subtle bg-background-secondary/60 backdrop-blur-sm p-8 lg:p-12 hover:border-primary-green/30 transition-all duration-300">
            <div className="grid md:grid-cols-[200px_1fr] gap-8 items-center">
              <div className="flex justify-center md:justify-start">
                <div className="relative w-[180px] h-[180px] shrink-0">
                  {/* Soft ambient occlusion - faint contact shadow */}
                  <motion.div
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[120px] h-[20px] bg-black/20 rounded-full blur-xl -z-20"
                    animate={{
                      opacity: [0.15, 0.25, 0.15],
                      scale: [0.95, 1.05, 0.95]
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />

                  {/* Static gemstone with internal glow - amber/orange tones */}
                  <motion.div
                    className="relative z-10"
                    animate={{
                      filter: [
                        "drop-shadow(0 0 10px rgba(255, 165, 0, 0.4)) brightness(1.0)",
                        "drop-shadow(0 0 18px rgba(255, 165, 0, 0.7)) brightness(1.1)",
                        "drop-shadow(0 0 14px rgba(255, 165, 0, 0.55)) brightness(1.05)",
                        "drop-shadow(0 0 20px rgba(255, 165, 0, 0.8)) brightness(1.12)",
                        "drop-shadow(0 0 10px rgba(255, 165, 0, 0.4)) brightness(1.0)"
                      ]
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <Image
                      src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/pelukachavez-1759787310531.png"
                      alt="Amber emerald-cut gemstone representing Peluka Chavez"
                      width={180}
                      height={180}
                      className="object-contain"
                    />
                  </motion.div>

                  {/* Tiny floating motes drifting outward (subtle) - amber tones */}
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={`mote-chavez-${i}`}
                      className="absolute w-1 h-1 rounded-full"
                      style={{
                        background: "radial-gradient(circle, rgba(255, 165, 0, 0.9) 0%, rgba(255, 140, 0, 0.4) 100%)",
                        boxShadow: "0 0 6px rgba(255, 165, 0, 0.6)",
                        top: "50%",
                        left: "50%"
                      }}
                      animate={{
                        x: [0, Math.cos(i * Math.PI * 2 / 6) * 60],
                        y: [0, Math.sin(i * Math.PI * 2 / 6) * 60],
                        scale: [0.4, 0.8, 0],
                        opacity: [0, 0.7, 0]
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        delay: i * 0.6,
                        ease: "easeOut"
                      }}
                    />
                  ))}

                  {/* Occasional bright star-glints that ping and fade */}
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={`star-chavez-${i}`}
                      className="absolute z-20"
                      style={{
                        top: ["15%", "25%", "50%", "70%", "80%"][i],
                        left: ["20%", "75%", "85%", "30%", "50%"][i],
                        width: "3px",
                        height: "3px"
                      }}
                      animate={{
                        scale: [0, 1.2, 0],
                        opacity: [0, 1, 0]
                      }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        delay: i * 1.3 + Math.random() * 2,
                        repeatDelay: 2,
                        ease: "easeOut"
                      }}
                    >
                      <div className="relative w-full h-full">
                        <div className="absolute inset-0 bg-white rounded-full blur-[1px]" />
                        <div className="absolute inset-[-3px] bg-gradient-radial from-white via-orange-200 to-transparent" />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[16px] h-[0.5px] bg-gradient-to-r from-transparent via-white to-transparent" />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[0.5px] h-[16px] bg-gradient-to-b from-transparent via-white to-transparent" />
                      </div>
                    </motion.div>
                  ))}

                  {/* Micro-sparkles crawling across facets - amber tones */}
                  {[...Array(16)].map((_, i) => (
                    <motion.div
                      key={`glitter-chavez-${i}`}
                      className="absolute w-[3px] h-[3px] rounded-full bg-white z-20"
                      style={{
                        top: `${15 + i * 70 / 16}%`,
                        left: `${25 + i * 50 / 16 + i % 3 * 10}%`,
                        boxShadow: "0 0 4px rgba(255, 255, 255, 0.9), 0 0 8px rgba(255, 165, 0, 0.5)"
                      }}
                      animate={{
                        scale: [0, 0.8, 1, 0],
                        opacity: [0, 0.6, 1, 0]
                      }}
                      transition={{
                        duration: 0.6,
                        repeat: Infinity,
                        delay: i * 0.25 + i % 4 * 1.2,
                        ease: "easeInOut"
                      }}
                    />
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-2xl lg:text-3xl font-bold text-primary-green mb-4">
                  Peluka Chavez <span className="text-text-secondary">The Foundation</span>
                </h3>
                <p className="text-base lg:text-lg text-text-secondary leading-relaxed">
                  Before Bitcoin became a household name, Peluka Chavez was already moving thousands of BTC through wallets, witnessing the birth of a revolution. The Backbone with over a decade of blockchain mastery, he doesn't just understand cryptocurrency, he feels it.
                </p>
              </div>
            </div>
          </div>

          {/* Card 3 - Obsidian Veil with Magical Animation */}
          <div className="relative overflow-hidden rounded-3xl border border-border-subtle bg-background-secondary/60 backdrop-blur-sm p-8 lg:p-12 hover:border-primary-green/30 transition-all duration-300">
            <div className="grid md:grid-cols-[200px_1fr] gap-8 items-center">
              <div className="flex justify-center md:justify-start">
                <div className="relative w-[180px] h-[180px] shrink-0">
                  {/* Soft ambient occlusion - faint contact shadow */}
                  <motion.div
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[120px] h-[20px] bg-black/20 rounded-full blur-xl -z-20"
                    animate={{
                      opacity: [0.15, 0.25, 0.15],
                      scale: [0.95, 1.05, 0.95]
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />

                  {/* Static gemstone with internal glow and chromatic dispersion */}
                  <motion.div
                    className="relative z-10"
                    animate={{
                      filter: [
                        "drop-shadow(0 0 10px rgba(147, 51, 234, 0.4)) brightness(1.0)",
                        "drop-shadow(0 0 18px rgba(147, 51, 234, 0.7)) brightness(1.1)",
                        "drop-shadow(0 0 14px rgba(147, 51, 234, 0.55)) brightness(1.05)",
                        "drop-shadow(0 0 20px rgba(147, 51, 234, 0.8)) brightness(1.12)",
                        "drop-shadow(0 0 10px rgba(147, 51, 234, 0.4)) brightness(1.0)"
                      ]
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <Image
                      src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/obsidianveil-1759785434158.png"
                      alt="Onyx gemstone with violet hue representing Obsidian Veil"
                      width={180}
                      height={180}
                      className="object-contain"
                    />
                  </motion.div>

                  {/* Tiny floating motes drifting outward (subtle) */}
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={`mote-${i}`}
                      className="absolute w-1 h-1 rounded-full"
                      style={{
                        background: "radial-gradient(circle, rgba(168, 85, 247, 0.9) 0%, rgba(147, 51, 234, 0.4) 100%)",
                        boxShadow: "0 0 6px rgba(147, 51, 234, 0.6)",
                        top: "50%",
                        left: "50%"
                      }}
                      animate={{
                        x: [0, Math.cos(i * Math.PI * 2 / 6) * 60],
                        y: [0, Math.sin(i * Math.PI * 2 / 6) * 60],
                        scale: [0.4, 0.8, 0],
                        opacity: [0, 0.7, 0]
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        delay: i * 0.6,
                        ease: "easeOut"
                      }}
                    />
                  ))}

                  {/* Occasional bright star-glints that ping and fade */}
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={`star-${i}`}
                      className="absolute z-20"
                      style={{
                        top: ["15%", "25%", "50%", "70%", "80%"][i],
                        left: ["20%", "75%", "85%", "30%", "50%"][i],
                        width: "3px",
                        height: "3px"
                      }}
                      animate={{
                        scale: [0, 1.2, 0],
                        opacity: [0, 1, 0]
                      }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        delay: i * 1.3 + Math.random() * 2,
                        repeatDelay: 2,
                        ease: "easeOut"
                      }}
                    >
                      <div className="relative w-full h-full">
                        <div className="absolute inset-0 bg-white rounded-full blur-[1px]" />
                        <div className="absolute inset-[-3px] bg-gradient-radial from-white via-purple-200 to-transparent" />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[16px] h-[0.5px] bg-gradient-to-r from-transparent via-white to-transparent" />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[0.5px] h-[16px] bg-gradient-to-b from-transparent via-white to-transparent" />
                      </div>
                    </motion.div>
                  ))}

                  {/* Micro-sparkles crawling across facets */}
                  {[...Array(16)].map((_, i) => (
                    <motion.div
                      key={`glitter-${i}`}
                      className="absolute w-[3px] h-[3px] rounded-full bg-white z-20"
                      style={{
                        top: `${15 + i * 70 / 16}%`,
                        left: `${25 + i * 50 / 16 + i % 3 * 10}%`,
                        boxShadow: "0 0 4px rgba(255, 255, 255, 0.9), 0 0 8px rgba(168, 85, 247, 0.5)"
                      }}
                      animate={{
                        scale: [0, 0.8, 1, 0],
                        opacity: [0, 0.6, 1, 0]
                      }}
                      transition={{
                        duration: 0.6,
                        repeat: Infinity,
                        delay: i * 0.25 + i % 4 * 1.2,
                        ease: "easeInOut"
                      }}
                    />
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-2xl lg:text-3xl font-bold text-primary-green mb-4">
                  Obsidian Veil <span className="text-text-secondary">The Executor</span>
                </h3>
                <p className="text-base lg:text-lg text-text-secondary leading-relaxed">
                  Ideas are worthless without execution. Obsidian Veil transforms vision into reality, translating complex trading strategies into flawless code that executes with surgical precision.
                </p>
              </div>
            </div>
          </div>

          {/* Card 4 - Sniper */}
          <div className="relative overflow-hidden rounded-3xl border border-border-subtle bg-background-secondary/60 backdrop-blur-sm p-8 lg:p-12 hover:border-primary-green/30 transition-all duration-300">
            <div className="grid md:grid-cols-[200px_1fr] gap-8 items-center">
              <div className="flex justify-center md:justify-start">
                <div className="relative w-[180px] h-[180px] shrink-0">
                  {/* Soft ambient occlusion - faint contact shadow */}
                  <motion.div
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[120px] h-[20px] bg-black/20 rounded-full blur-xl -z-20"
                    animate={{
                      opacity: [0.15, 0.25, 0.15],
                      scale: [0.95, 1.05, 0.95]
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />

                  {/* Static gemstone with internal glow - green tones */}
                  <motion.div
                    className="relative z-10"
                    animate={{
                      filter: [
                        "drop-shadow(0 0 10px rgba(0, 255, 127, 0.4)) brightness(1.0)",
                        "drop-shadow(0 0 18px rgba(0, 255, 127, 0.7)) brightness(1.1)",
                        "drop-shadow(0 0 14px rgba(0, 255, 127, 0.55)) brightness(1.05)",
                        "drop-shadow(0 0 20px rgba(0, 255, 127, 0.8)) brightness(1.12)",
                        "drop-shadow(0 0 10px rgba(0, 255, 127, 0.4)) brightness(1.0)"
                      ]
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <Image
                      src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/sniper-gem-1759809023658.png"
                      alt="Emerald gemstone representing the Sniper"
                      width={180}
                      height={180}
                      className="object-contain"
                    />
                  </motion.div>

                  {/* Tiny floating motes drifting outward (subtle) - green tones */}
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={`mote-sniper-${i}`}
                      className="absolute w-1 h-1 rounded-full"
                      style={{
                        background: "radial-gradient(circle, rgba(0, 255, 127, 0.9) 0%, rgba(0, 214, 111, 0.4) 100%)",
                        boxShadow: "0 0 6px rgba(0, 255, 127, 0.6)",
                        top: "50%",
                        left: "50%"
                      }}
                      animate={{
                        x: [0, Math.cos(i * Math.PI * 2 / 6) * 60],
                        y: [0, Math.sin(i * Math.PI * 2 / 6) * 60],
                        scale: [0.4, 0.8, 0],
                        opacity: [0, 0.7, 0]
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        delay: i * 0.6,
                        ease: "easeOut"
                      }}
                    />
                  ))}

                  {/* Occasional bright star-glints that ping and fade */}
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={`star-sniper-${i}`}
                      className="absolute z-20"
                      style={{
                        top: ["15%", "25%", "50%", "70%", "80%"][i],
                        left: ["20%", "75%", "85%", "30%", "50%"][i],
                        width: "3px",
                        height: "3px"
                      }}
                      animate={{
                        scale: [0, 1.2, 0],
                        opacity: [0, 1, 0]
                      }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        delay: i * 1.3 + Math.random() * 2,
                        repeatDelay: 2,
                        ease: "easeOut"
                      }}
                    >
                      <div className="relative w-full h-full">
                        <div className="absolute inset-0 bg-white rounded-full blur-[1px]" />
                        <div className="absolute inset-[-3px] bg-gradient-radial from-white via-green-200 to-transparent" />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[16px] h-[0.5px] bg-gradient-to-r from-transparent via-white to-transparent" />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[0.5px] h-[16px] bg-gradient-to-b from-transparent via-white to-transparent" />
                      </div>
                    </motion.div>
                  ))}

                  {/* Micro-sparkles crawling across facets - green tones */}
                  {[...Array(16)].map((_, i) => (
                    <motion.div
                      key={`glitter-sniper-${i}`}
                      className="absolute w-[3px] h-[3px] rounded-full bg-white z-20"
                      style={{
                        top: `${15 + i * 70 / 16}%`,
                        left: `${25 + i * 50 / 16 + i % 3 * 10}%`,
                        boxShadow: "0 0 4px rgba(255, 255, 255, 0.9), 0 0 8px rgba(0, 255, 127, 0.5)"
                      }}
                      animate={{
                        scale: [0, 0.8, 1, 0],
                        opacity: [0, 0.6, 1, 0]
                      }}
                      transition={{
                        duration: 0.6,
                        repeat: Infinity,
                        delay: i * 0.25 + i % 4 * 1.2,
                        ease: "easeInOut"
                      }}
                    />
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-2xl lg:text-3xl font-bold text-primary-green mb-4">
                  Sniper <span className="text-text-secondary">The Market Predator</span>
                </h3>
                <p className="text-base lg:text-lg text-text-secondary leading-relaxed">
                  Two gems possessed knowledge and skill, but the puzzle remained incomplete. Enter Sniper the missing element that transformed potential into profit.
                </p>
              </div>
            </div>
          </div>

          {/* Card 5 - Advantages of trading on Solana */}
          <div className="relative overflow-hidden rounded-3xl border border-border-subtle bg-background-secondary/60 backdrop-blur-sm p-8 lg:p-12 hover:border-primary-green/30 transition-all duration-300">
            <div className="grid md:grid-cols-[200px_1fr] gap-8 items-center">
              <div className="flex justify-center md:justify-start">
                <div className="relative w-[180px] h-[180px] shrink-0">
                  <Image
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/af5db15b-f5d8-4f95-970a-a043630c22a7-goodcrypto-app/assets/icons/gcx_icon_sol_2-1-3.png?"
                    alt="Solana blockchain logo representing trading advantages"
                    width={180}
                    height={180}
                    className="object-contain"
                  />
                </div>
              </div>
              <div>
                <h3 className="text-2xl lg:text-3xl font-bold text-primary-green mb-4">
                  Advantages of Trading on Solana
                </h3>
                <p className="text-base lg:text-lg text-text-secondary leading-relaxed">
                  Decentralized trading on Solana offers significant advantages over other blockchains. Its high-speed, low-fee ecosystem provides better trading opportunities with near-instant settlements. Solana's robust smart contracts enable secure, non-custodial trading with advanced DeFi features. By choosing Solana, traders can execute complex strategies with minimal friction, excellent risk-reward potential, and access to an ever-growing, innovative ecosystem of decentralized applications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
