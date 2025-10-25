import type { Metadata } from "next";
import "./globals.css";
import VisualEditsMessenger from "../visual-edits/VisualEditsMessenger";
import ErrorReporter from "@/components/ErrorReporter";
import Navigation from "@/components/sections/navigation";
import Script from "next/script";

export const metadata: Metadata = {
  title: {
    default: "P.O.V Sniper BOT — Automated Solana Trading Bot",
    template: "%s | P.O.V Sniper BOT"
  },
  description: "Advanced automated trading bot for Solana blockchain. Execute profitable trades 24/7 with quantum-powered strategies, smart risk management, and real-time market analysis.",
  keywords: ["Solana trading bot", "automated trading", "crypto bot", "DeFi trading", "algorithmic trading", "Solana automation"],
  authors: [{ name: "P.O.V Sniper Team" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://pov-sniper.com",
    siteName: "P.O.V Sniper BOT",
    title: "P.O.V Sniper BOT — Automated Solana Trading Bot",
    description: "Advanced automated trading bot for Solana blockchain. Execute profitable trades 24/7 with quantum-powered strategies.",
    images: [
      {
        url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/POV-Sniper-Solana-auto-trading-bot-logo-top-1759778575228.png",
        width: 1200,
        height: 630,
        alt: "P.O.V Sniper BOT Logo"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "P.O.V Sniper BOT — Automated Solana Trading Bot",
    description: "Advanced automated trading bot for Solana blockchain. Execute profitable trades 24/7 with quantum-powered strategies.",
    images: ["https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/POV-Sniper-Solana-auto-trading-bot-logo-top-1759778575228.png"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    }
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <ErrorReporter />
        <Script
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts//route-messenger.js"
          strategy="afterInteractive"
          data-target-origin="*"
          data-message-type="ROUTE_CHANGE"
          data-include-search-params="true"
          data-only-in-iframe="true"
          data-debug="true"
          data-custom-data='{"appName": "YourApp", "version": "1.0.0", "greeting": "hi"}'
        />
        <div className="pt-[72px]">
          <Navigation />
        </div>
        {children}
        <VisualEditsMessenger />
      </body>
    </html>
  );
}
