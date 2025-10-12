import Link from "next/link";
import { Search } from "lucide-react";
import KBSearchBar from "./kb-search-bar";

export default function KBHero() {
  return (
    <section className="relative bg-background-primary py-20 lg:py-28 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-green/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-teal/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">
            P.O.V Sniper BOT <span className="text-primary-green">Knowledge Base</span>
          </h1>
          <p className="text-xl text-text-secondary mb-10">
            Everything you need to master automated trading on Solana. From setup to advanced strategies.
          </p>

          <div className="max-w-2xl mx-auto">
            <KBSearchBar />
          </div>

          <div className="mt-8 flex items-center justify-center gap-4 text-sm text-text-muted">
            <span>Popular:</span>
            <Link href="/knowledge-base/getting-started/quickstart" className="text-primary-green hover:underline">
              Quickstart Guide
            </Link>
            <span>•</span>
            <Link href="/knowledge-base/strategies/pov-strategy" className="text-primary-green hover:underline">
              POV Strategy
            </Link>
            <span>•</span>
            <Link href="/knowledge-base/troubleshooting/faq" className="text-primary-green hover:underline">
              FAQ
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}