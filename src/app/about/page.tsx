"use client";

import Footer from "@/components/sections/footer";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background-primary text-text-primary">
      {/* HERO SECTION */}
      <section id="hero" className="relative overflow-hidden bg-[#0a1929] pt-[110px] pb-[120px] lg:pt-[130px] lg:pb-[140px]">
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
                <h1 className="font-display text-[72px] font-bold leading-[1.1] -tracking-[0.02em] text-text-primary">
                  The <span className="text-primary-green">Trinity</span> Behind the Algorithm
                </h1>
                <p className="mt-6 font-body text-lg font-normal leading-relaxed text-text-secondary">
                  Three minds. Three gems. One engine that changed Solana sniping forever.
                </p>
                <p className="mt-4 font-body text-lg font-normal leading-relaxed text-text-secondary">
                  The POV Solana Sniper BOT was born from a union of rare expertise — a strategist who sees patterns before they form, an architect who writes precision into code, and a hunter who sees profit flow where others see noise. Together they built a trinity engine that turns instinct into execution.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link
                    href="#meet-the-gems"
                    className="inline-flex items-center justify-center px-8 py-4 font-body text-base font-bold leading-none text-black bg-white rounded-full transition-colors duration-300 hover:bg-primary-green group">

                    Meet the Gems
                    <div className="ml-2 shrink-0">
                      <Image
                        src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/af5db15b-f5d8-4f95-970a-a043630c22a7-goodcrypto-app/assets/svgs/arrow-deg-4.svg?"
                        width={14}
                        height={14}
                        alt="arrow" />

                    </div>
                  </Link>
                  <Link
                    href="#origin"
                    className="inline-flex items-center justify-center px-8 py-4 font-body text-base font-bold leading-none text-primary-green bg-transparent border border-primary-green/30 rounded-full transition-colors duration-300 hover:bg-primary-green/10">

                    Read the Story
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-full px-3 text-center md:w-5/12 mt-12 md:mt-0">
              <div className="inline-block md:pl-5">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/af5db15b-f5d8-4f95-970a-a043630c22a7/generated_images/cinematic-hero-banner-showing-three-lumi-fd706713-20251006085151.jpg?"
                  width={623}
                  height={612}
                  alt="Three luminous gems over a Solana energy ring"
                  priority />

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ORIGIN OF THE TRINITY */}
      <section id="origin" className="bg-background-primary py-20 md:py-[104px]">
        <div className="mx-auto max-w-[1200px] px-6 md:px-12 lg:px-20">
          <div className="relative rounded-3xl bg-[linear-gradient(119deg,_#00d9ff,_#00ff7f)] p-[1px] shadow-[0_0_40px_rgba(0,217,255,0.25)]">
            <div className="h-full w-full rounded-[23px] bg-[#343a40] p-8 backdrop-blur-xl sm:p-12 lg:p-[60px]">
              <div className="grid items-center gap-12 md:grid-cols-2 xl:gap-20">
                <div className="space-y-6">
                  <p className="text-sm font-semibold uppercase tracking-wider text-primary-green">Origin of the Trinity</p>
                  <h2 className="text-[40px] font-bold leading-[1.3] tracking-[-0.01em] text-text-primary">
                    The Beginning Was a Conversation
                  </h2>
                  <div className="space-y-4 text-base leading-relaxed text-text-secondary">
                    <p>
                      Before any line of code was written, before Solana was even a household name, three builders shared one problem: the market moved faster than humans could react.
                    </p>
                    <p>
                      Peluka Chavez — the strategist — imagined a framework that could see opportunity before others even noticed motion.
                    </p>
                    <p>
                      Obsidian Veil — the architect — knew how to give that vision structure.
                    </p>
                    <p>
                      And the Hunter was the one who made it bite.
                    </p>
                    <p>
                      What emerged was not just a bot, but a synchronized entity — a system where instinct, logic and timing validated each other before capital moved.
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <Image
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/af5db15b-f5d8-4f95-970a-a043630c22a7/generated_images/abstract-visualization-of-three-glowing--d78705d3-20251006085202.jpg?"
                    alt="Three energy streams forming a triangular core"
                    width={512}
                    height={346}
                    className="w-full max-w-[512px] rounded-2xl" />

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MEET THE GEMS */}
      <section id="meet-the-gems" className="bg-background-primary py-20 lg:py-28">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-20">
          <h2 className="text-center text-4xl lg:text-[40px] font-bold tracking-tight text-text-primary mb-16 lg:mb-20">
            Meet <span className="text-primary-green">the Gems</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Peluka Chavez */}
            <div className="bg-background-secondary border border-border-subtle rounded-3xl p-8 text-center flex flex-col transition-all duration-300 ease-in-out hover:-translate-y-2 hover:border-primary-green/30 hover:shadow-[0_0_40px_rgba(0,255,127,0.15)]">
              <div className="flex-grow flex items-center justify-center mb-8 h-[275px]">
                <div className="relative w-[269px] h-[275px]">
                  {/* Soft ambient occlusion - faint contact shadow */}
                  <motion.div
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[180px] h-[30px] bg-black/20 rounded-full blur-xl -z-20"
                    animate={{
                      opacity: [0.15, 0.25, 0.15],
                      scale: [0.95, 1.05, 0.95]
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }} />


                  {/* Static gemstone with internal glow - amber/orange tones */}
                  <motion.div
                    className="relative z-10"
                    animate={{
                      filter: [
                      "drop-shadow(0 0 10px rgba(255, 165, 0, 0.4)) brightness(1.0)",
                      "drop-shadow(0 0 18px rgba(255, 165, 0, 0.7)) brightness(1.1)",
                      "drop-shadow(0 0 14px rgba(255, 165, 0, 0.55)) brightness(1.05)",
                      "drop-shadow(0 0 20px rgba(255, 165, 0, 0.8)) brightness(1.12)",
                      "drop-shadow(0 0 10px rgba(255, 165, 0, 0.4)) brightness(1.0)"]

                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}>

                    <Image
                      src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/pelukachavez-1759787310531.png"
                      alt="Amber emerald-cut gemstone labeled Peluka Chavez"
                      width={269}
                      height={275}
                      className="max-h-full w-auto object-contain" />

                  </motion.div>

                  {/* Tiny floating motes drifting outward (subtle) - amber tones */}
                  {[...Array(6)].map((_, i) =>
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
                      x: [0, Math.cos(i * Math.PI * 2 / 6) * 80],
                      y: [0, Math.sin(i * Math.PI * 2 / 6) * 80],
                      scale: [0.4, 0.8, 0],
                      opacity: [0, 0.7, 0]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      delay: i * 0.6,
                      ease: "easeOut"
                    }} />

                  )}

                  {/* Occasional bright star-glints that ping and fade */}
                  {[...Array(5)].map((_, i) =>
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
                    }}>

                      <div className="relative w-full h-full">
                        <div className="absolute inset-0 bg-white rounded-full blur-[1px]" />
                        <div className="absolute inset-[-3px] bg-gradient-radial from-white via-orange-200 to-transparent" />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[16px] h-[0.5px] bg-gradient-to-r from-transparent via-white to-transparent" />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[0.5px] h-[16px] bg-gradient-to-b from-transparent via-white to-transparent" />
                      </div>
                    </motion.div>
                  )}

                  {/* Micro-sparkles crawling across facets - amber tones */}
                  {[...Array(16)].map((_, i) =>
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
                    }} />

                  )}
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-primary-green mb-2">Peluka Chavez – The Backbone Gem</h3>
              <p className="text-sm font-semibold text-text-secondary mb-4">The Vision & The Origin</p>
              <p className="text-base text-text-secondary leading-normal">
                He was there from the first transactions on the blockchain. Thousands of Bitcoins moved through his wallets long before "crypto trader" was a title. Peluka reads patterns without tools, senses momentum without indicators. He mapped the rules that became the foundation of POV. Where others saw volatility, he saw structure — and that structure became code.
              </p>
            </div>

            {/* Obsidian Veil */}
            <div className="bg-background-secondary border border-border-subtle rounded-3xl p-8 text-center flex flex-col transition-all duration-300 ease-in-out hover:-translate-y-2 hover:border-primary-green/30 hover:shadow-[0_0_40px_rgba(0,255,127,0.15)]">
              <div className="flex-grow flex items-center justify-center mb-8 h-[275px]">
                <div className="relative w-[269px] h-[275px]">
                  {/* Soft ambient occlusion - faint contact shadow */}
                  <motion.div
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[180px] h-[30px] bg-black/20 rounded-full blur-xl -z-20"
                    animate={{
                      opacity: [0.15, 0.25, 0.15],
                      scale: [0.95, 1.05, 0.95]
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }} />


                  {/* Static gemstone with internal glow and chromatic dispersion */}
                  <motion.div
                    className="relative z-10"
                    animate={{
                      filter: [
                      "drop-shadow(0 0 10px rgba(147, 51, 234, 0.4)) brightness(1.0)",
                      "drop-shadow(0 0 18px rgba(147, 51, 234, 0.7)) brightness(1.1)",
                      "drop-shadow(0 0 14px rgba(147, 51, 234, 0.55)) brightness(1.05)",
                      "drop-shadow(0 0 20px rgba(147, 51, 234, 0.8)) brightness(1.12)",
                      "drop-shadow(0 0 10px rgba(147, 51, 234, 0.4)) brightness(1.0)"]

                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}>

                    <Image
                      src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/obsidianveil-1759785434158.png"
                      alt="Onyx gemstone with violet hue labeled Obsidian Veil"
                      width={269}
                      height={275}
                      className="max-h-full w-auto object-contain" />

                  </motion.div>

                  {/* Tiny floating motes drifting outward (subtle) */}
                  {[...Array(6)].map((_, i) =>
                  <motion.div
                    key={`mote-veil-${i}`}
                    className="absolute w-1 h-1 rounded-full"
                    style={{
                      background: "radial-gradient(circle, rgba(168, 85, 247, 0.9) 0%, rgba(147, 51, 234, 0.4) 100%)",
                      boxShadow: "0 0 6px rgba(147, 51, 234, 0.6)",
                      top: "50%",
                      left: "50%"
                    }}
                    animate={{
                      x: [0, Math.cos(i * Math.PI * 2 / 6) * 80],
                      y: [0, Math.sin(i * Math.PI * 2 / 6) * 80],
                      scale: [0.4, 0.8, 0],
                      opacity: [0, 0.7, 0]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      delay: i * 0.6,
                      ease: "easeOut"
                    }} />

                  )}

                  {/* Occasional bright star-glints that ping and fade */}
                  {[...Array(5)].map((_, i) =>
                  <motion.div
                    key={`star-veil-${i}`}
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
                    }}>

                      <div className="relative w-full h-full">
                        <div className="absolute inset-0 bg-white rounded-full blur-[1px]" />
                        <div className="absolute inset-[-3px] bg-gradient-radial from-white via-purple-200 to-transparent" />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[16px] h-[0.5px] bg-gradient-to-r from-transparent via-white to-transparent" />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[0.5px] h-[16px] bg-gradient-to-b from-transparent via-white to-transparent" />
                      </div>
                    </motion.div>
                  )}

                  {/* Micro-sparkles crawling across facets */}
                  {[...Array(16)].map((_, i) =>
                  <motion.div
                    key={`glitter-veil-${i}`}
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
                    }} />

                  )}
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-primary-green mb-2 !whitespace-pre-line">Obsidian Veil – The Architect</h3>
              <p className="text-sm font-semibold text-text-secondary mb-4">The Code & The Discipline</p>
              <p className="text-base text-text-secondary leading-normal">
                Obsidian writes in silence. Lines of logic that execute with mathematical grace. He translates instinct into syntax, turning the unpredictable into reproducible profit. His code doesn't just run; it observes, adjusts and protects. He built the engine that executes Peluka's vision and gives the Hunter a weapon worth trusting.
              </p>
            </div>

            {/* Hunter */}
            <div className="bg-background-secondary border border-border-subtle rounded-3xl p-8 text-center flex flex-col transition-all duration-300 ease-in-out hover:-translate-y-2 hover:border-primary-green/30 hover:shadow-[0_0_40px_rgba(0,255,127,0.15)]">
              <div className="flex-grow flex items-center justify-center mb-8 h-[275px]">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/af5db15b-f5d8-4f95-970a-a043630c22a7/generated_images/hunter-gemstone-closeup%2c-brilliant-cri-e14828e4-20251006085227.jpg?"
                  alt="Crimson gemstone labeled Hunter"
                  width={269}
                  height={275}
                  className="max-h-full w-auto object-contain rounded-2xl" />

              </div>
              <h3 className="text-2xl font-semibold text-primary-green mb-2">Hunter – The Target Gem</h3>
              <p className="text-sm font-semibold text-text-secondary mb-4">The Focus & The Precision</p>
              <p className="text-base text-text-secondary leading-normal">
                Every market has its heartbeat. The Hunter feels it. He identifies targets before volume confirms them, times the entry to perfection and delivers execution with surgical accuracy. He's the final motion of the trinity — the shot fired only when all three signals align.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TRINITY SYSTEM */}
      <section id="trinity-system" className="bg-background-primary py-20 md:py-[104px]">
        <div className="mx-auto max-w-[1200px] px-6 md:px-12 lg:px-20">
          <div className="relative rounded-3xl bg-[linear-gradient(119deg,_#00d9ff,_#00ff7f)] p-[1px] shadow-[0_0_40px_rgba(0,217,255,0.25)]">
            <div className="h-full w-full rounded-[23px] bg-background-tertiary/60 p-8 backdrop-blur-xl sm:p-12 lg:p-[60px]">
              <div className="grid items-center gap-12 md:grid-cols-2 xl:gap-20">
                <div className="flex items-center justify-center order-2 md:order-1">
                  <Image
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/af5db15b-f5d8-4f95-970a-a043630c22a7/generated_images/triangular-emblem-logo-formed-by-three-g-9ff08823-20251006085236.jpg?"
                    alt="Triangular emblem connecting three gems over Solana circuitry"
                    width={512}
                    height={346}
                    className="w-full max-w-[512px] rounded-2xl" />

                </div>
                <div className="space-y-6 order-1 md:order-2">
                  <h2 className="text-[40px] font-bold leading-[1.3] tracking-[-0.01em] text-text-primary">
                    Individually Exceptional. <span className="text-primary-green">Together Unstoppable.</span>
                  </h2>
                  <div className="space-y-4 text-base leading-relaxed text-text-secondary">
                    <p>
                      Each Gem represents a pillar — Strategy, Structure and Strike.
                    </p>
                    <p>
                      When Peluka defines the setup, Obsidian executes the code, and Hunter times the entry, the result is a feedback loop of constant adaptation.
                    </p>
                    <p>
                      The POV Engine doesn't chase signals; it creates them. That's why its accuracy is legendary in Solana circles.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY & VALUES */}
      <section id="values" className="bg-background-primary py-20 md:py-[104px]">
        <div className="mx-auto max-w-[1200px] px-6 md:px-12 lg:px-20">
          <div className="relative rounded-3xl bg-[linear-gradient(119deg,_#00d9ff,_#00ff7f)] p-[1px] shadow-[0_0_40px_rgba(0,217,255,0.25)]">
            <div className="h-full w-full rounded-[23px] bg-background-tertiary/60 p-8 backdrop-blur-xl sm:p-12 lg:p-[60px]">
              <div className="grid items-center gap-12 md:grid-cols-2 xl:gap-20">
                <div className="space-y-6">
                  <h2 className="text-[40px] font-bold leading-[1.3] tracking-[-0.01em] text-text-primary">
                    Built for <span className="text-primary-green">Precision, Not Popularity</span>
                  </h2>
                  <div className="space-y-4 text-base leading-relaxed text-text-secondary">
                    <p>
                      POV was never meant for mass distribution. It was built for operators who understand discipline. Every line of code reflects the founders' ethic — clarity, control and calculated risk.
                    </p>
                    <p>
                      The team believes that transparency and trust begin with architecture, not marketing. That's why every execution is logged on-chain, every result auditable.
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <Image
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/af5db15b-f5d8-4f95-970a-a043630c22a7/generated_images/minimal-dark-scene-showing-three-paralle-461f80ae-20251006085246.jpg?"
                    alt="Three parallel beams converging to a single point"
                    width={512}
                    height={346}
                    className="w-full max-w-[512px] rounded-2xl" />

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section id="cta" className="relative overflow-hidden bg-background-primary py-[100px]">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/af5db15b-f5d8-4f95-970a-a043630c22a7-goodcrypto-app/assets/images/base-join-bg-10.jpg?"
            alt="Abstract background with blue and teal gradients and geometric patterns"
            fill
            className="object-cover"
            quality={100} />

        </div>

        <div className="container relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-center gap-12 lg:gap-8">
            <div className="w-full md:w-7/12 text-center md:text-left">
              <h2 className="text-[64px] font-bold leading-[1.1] text-white uppercase mb-8">
                The <span className="text-primary">Trinity</span> <br /> Continues to Evolve
              </h2>
              <div className="space-y-4 max-w-[620px] mx-auto md:mx-0">
                <p className="text-base font-medium leading-[1.6] text-text-secondary">
                  The POV Solana Sniper BOT is more than software — it's an ongoing experiment in precision and discipline. Only a handful of operators will ever gain full access.
                </p>
                <p className="text-base font-medium leading-[1.6] text-text-secondary">
                  If you think you're one of them, the next step is yours.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 mt-8">
                <Link
                  href="/request-access"
                  className="inline-flex items-center justify-center bg-white text-background-primary rounded-full py-[15px] px-8 text-base font-semibold uppercase transition-transform duration-300 hover:scale-105">

                  REQUEST ACCESS
                  <span className="ml-2 flex-shrink-0">
                    <Image
                      src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/af5db15b-f5d8-4f95-970a-a043630c22a7-goodcrypto-app/assets/svgs/arrow-deg-4.svg?"
                      alt="arrow icon"
                      width={14}
                      height={14} />

                  </span>
                </Link>
                <Link
                  href="/whitepaper"
                  className="inline-flex items-center justify-center bg-transparent border border-white/30 text-white rounded-full py-[15px] px-8 text-base font-semibold uppercase transition-all duration-300 hover:bg-white/10 hover:border-primary-green">

                  DOWNLOAD WHITEPAPER
                </Link>
                <Link
                  href="/team"
                  className="inline-flex items-center justify-center bg-transparent border border-white/30 text-white rounded-full py-[15px] px-8 text-base font-semibold uppercase transition-all duration-300 hover:bg-white/10 hover:border-primary-green">

                  MEET THE TEAM
                </Link>
              </div>
            </div>

            <div className="w-full md:w-5/12 flex justify-center mt-8 md:mt-0">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/af5db15b-f5d8-4f95-970a-a043630c22a7/generated_images/futuristic-high-tech-vault-door-slightly-66820928-20251006085253.jpg?"
                alt="Vault door with trinity glow"
                width={462}
                height={617}
                className="max-w-full h-auto rounded-2xl" />

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>);

}
