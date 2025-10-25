import HeroSection from "@/components/sections/hero";
import EasyStepsSniper from "@/components/sections/easy-steps-sniper";
import GridBotStrategySection from "@/components/sections/grid-bot-strategy";
import DcaBotStrategy from "@/components/sections/dca-bot-strategy";
import OtherTradingTools from "@/components/sections/other-trading-tools";
import InfoCards from "@/components/sections/info-cards";
import JoinRevolutionSection from "@/components/sections/join-revolution";
import Footer from "@/components/sections/footer";

export default function Page() {
  return (
    <main className="min-h-screen bg-background-primary text-text-primary">
      <HeroSection />

      <section className="bg-background-primary py-20 lg:py-28">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <h2 className="text-center text-4xl lg:text-[40px] font-bold tracking-tight text-text-primary mb-16 lg:mb-20">
            goodcryptoX <span className="text-primary-green">SOL bot functionality</span>
          </h2>

          <div className="max-w-[1200px] mx-auto space-y-24">
            <GridBotStrategySection />
            <DcaBotStrategy />
            <OtherTradingTools />
          </div>
        </div>
      </section>

      <InfoCards />

      <EasyStepsSniper />

      <JoinRevolutionSection />

      <Footer />
    </main>
  );
}