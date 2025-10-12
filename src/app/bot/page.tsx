"use client";
import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import BotPanel from "@/components/BotPanel";

export default function BotPage() {
  return (
    <main className="min-h-screen bg-background-primary text-text-primary">
      
      <div className="pt-[72px]">
        <Navigation />
      </div>

      {/* Bot Simulation Section */}
      <section className="relative overflow-hidden bg-background-primary pt-[110px] pb-[120px] lg:pt-[130px] lg:pb-[140px]">
        <div className="container relative z-10 mx-auto px-6 md:px-12 lg:px-20">
          <BotPanel />
        </div>
      </section>

      <Footer />
    </main>
  );
}