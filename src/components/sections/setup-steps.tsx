"use client";

import Image from 'next/image';
import { useReveal } from "@/hooks/useReveal";

interface StepCardProps {
  number: number;
  imageSrc: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
  description: string;
}

const stepsData: StepCardProps[] = [
  {
    number: 1,
    imageSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/af5db15b-f5d8-4f95-970a-a043630c22a7-goodcrypto-app/assets/images/base-how-pic-1-5.png?",
    imageAlt: "1. create your non-custodial MPC wallet with one click",
    imageWidth: 266,
    imageHeight: 240,
    description: "create your non-custodial MPC wallet with one click",
  },
  {
    number: 2,
    imageSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/af5db15b-f5d8-4f95-970a-a043630c22a7-goodcrypto-app/assets/images/solana-popup-6.png?",
    imageAlt: "2. transfer tokens or buy them with a credit card",
    imageWidth: 1080,
    imageHeight: 1080,
    description: "transfer tokens or buy them with a credit card",
  },
  {
    number: 3,
    imageSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/af5db15b-f5d8-4f95-970a-a043630c22a7-goodcrypto-app/assets/images/base-how-pic-3-7.png?",
    imageAlt: "3. launch your first SOL bot",
    imageWidth: 266,
    imageHeight: 240,
    description: "launch your first SOL bot",
  },
];

const StepCard = ({ number, imageSrc, imageAlt, imageWidth, imageHeight, description }: StepCardProps) => {
  return (
    <div className="bg-background-secondary border border-border-subtle rounded-3xl p-8 text-center flex flex-col transition-all duration-300 ease-in-out hover:-translate-y-2 hover:border-primary-green/30 hover:shadow-[0_0_40px_rgba(0,255,127,0.15)]">
      <div className="flex-grow flex items-center justify-center mb-8 h-[240px]">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={imageWidth}
          height={imageHeight}
          className="max-h-full w-auto object-contain"
        />
      </div>
      <p className="text-lg text-text-secondary leading-normal">
        <span className="font-bold text-primary-green">{number}. </span>
        {description}
      </p>
    </div>
  );
};

const SetupSteps = () => {
  const titleRef = useReveal();
  const cardsRef = useReveal();

  return (
    <section className="bg-background-primary py-20 lg:py-28">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-20">
        <h2 ref={titleRef} className="reveal text-center text-4xl lg:text-[40px] font-bold tracking-tight text-text-primary mb-16 lg:mb-20">
          how to set up <span className="text-primary-green">SOL trading bot?</span>
        </h2>
        <div ref={cardsRef} className="reveal stagger grid grid-cols-1 md:grid-cols-3 gap-6">
          {stepsData.map((step) => (
            <StepCard key={step.number} {...step} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SetupSteps;