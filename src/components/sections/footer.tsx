import Image from "next/image";
import { ChevronDown, Facebook, Linkedin, Send, Twitter, Youtube } from "lucide-react";
import { FaMediumM } from "react-icons/fa";

const trailingStopsLinks = [
  { href: "#", label: "Binance Trailing Stop" },
  { href: "#", label: "Binance.US Trailing Stop" },
  { href: "#", label: "Bitfinex Trailing Stop" },
  { href: "#", label: "BitMEX Trailing Stop" },
  { href: "#", label: "Bitstamp Trailing Stop" },
  { href: "#", label: "Bittrex Trailing Stop" },
  { href: "#", label: "Bybit Trailing Stop" },
  { href: "#", label: "Coinbase Pro Trailing Stop" },
  { href: "#", label: "Crypto.com Trailing Stop" },
  { href: "#", label: "Kraken Trailing Stop" },
  { href: "#", label: "KuCoin Trailing Stop" },
  { href: "#", label: "Poloniex Trailing Stop" },
  { href: "#", label: "WhiteBIT Trailing Stop" },
];

const tradingBotsLinks = [
  { href: "#", label: "Arbitrum Bot" }, { href: "#", label: "Avalanche Bot" },
  { href: "#", label: "AI Bot" }, { href: "#", label: "Automated Bot" },
  { href: "#", label: "Berachain Bot" }, { href: "#", label: "Binance Bot" },
  { href: "#", label: "Binance.US Bot" }, { href: "#", label: "Binance Smart Chain Bot" },
  { href: "#", label: "Bitcoin sniper Bot" }, { href: "#", label: "Base Bot" },
  { href: "#", label: "Base sniper bot" }, { href: "#", label: "Bitfinex Bot" },
  { href: "#", label: "BitMEX Bot" }, { href: "#", label: "Bittrex Bot" },
  { href: "#", label: "Bitcoin Bot" }, { href: "#", label: "Bitget Bot" },
  { href: "#", label: "Bitstamp Bot" }, { href: "#", label: "Brett Bot" },
  { href: "#", label: "BSC sniper Bot" }, { href: "#", label: "Bybit Bot" },
  { href: "#", label: "Chilli guy Bot" }, { href: "#", label: "Coinbase Bot" },
  { href: "#", label: "Crypto.com Bot" }, { href: "#", label: "DCA Bot" },
  { href: "#", label: "DEX gems sniper Bot" }, { href: "#", label: "Dogecoin Bot" },
  { href: "#", label: "Dogwifhat Bot" }, { href: "#", label: "dYdX Bot" },
  { href: "#", label: "Eliza (ai16z) Bot" }, { href: "#", label: "Ethereum Bot" },
  { href: "#", label: "Ethereum sniper Bot" }, { href: "#", label: "Free crypto Bot" },
  { href: "#", label: "Gemini Bot" }, { href: "#", label: "Gate.io Bot" },
  { href: "#", label: "HitBTC Bot" }, { href: "#", label: "Huobi Bot" },
  { href: "#", label: "Jupiter Bot" }, { href: "#", label: "KuCoin Bot" },
  { href: "#", label: "Kraken Bot" }, { href: "#", label: "Litecoin Bot" },
  { href: "#", label: "Melania Trump meme coin" }, { href: "#", label: "Meteora Bot" },
  { href: "#", label: "MEXC Bot" }, { href: "#", label: "OKX Bot" },
  { href: "#", label: "Official Trump coin Bot" }, { href: "#", label: "PancakeSwap Bot" },
  { href: "#", label: "Pepe Bot" }, { href: "#", label: "Phemex bot" },
  { href: "#", label: "PNUT Bot" }, { href: "#", label: "Poloniex Bot" },
  { href: "#", label: "Polygon Bot" }, { href: "#", label: "Popcat Bot" },
  { href: "#", label: "Pudgy Penguins Bot" }, { href: "#", label: "PumpSwap Bot" },
  { href: "#", label: "Raydium Bot" }, { href: "#", label: "Ripple Bot" },
  { href: "#", label: "Simon's Cat Bot" }, { href: "#", label: "Stellar Bot" },
  { href: "#", label: "Solana Sniper Bot" }, { href: "#", label: "Solana Bot" },
  { href: "#", label: "Sonic Bot" }, { href: "#", label: "Sui Sniper Bot" },
  { href: "#", label: "Sundog Bot" }, { href: "#", label: "TON Bot" },
  { href: "#", label: "Uniswap Bot" }, { href: "#", label: "Uniswap sniper Bot" },
  { href: "#", label: "Whitebit Bot" }
];

const tradingStrategiesLinks = [
  { href: "#", label: "TradingView Bot" }, { href: "#", label: "Infinity Trailing Bot" },
  { href: "#", label: "Moving Averages" }, { href: "#", label: "Trailing Stop" },
  { href: "#", label: "Trend Lines" }, { href: "#", label: "Bollinger Bands" },
  { href: "#", label: "Chart Patterns" }, { href: "#", label: "RSI Indicator" },
  { href: "#", label: "MACD Indicator" }, { href: "#", label: "Supertrend Indicator" },
  { href: "#", label: "Moving Averages 2.0" }, { href: "#", label: "Ichimoku Cloud" },
  { href: "#", label: "Fibonacci Retracement" },
];

const apiKeysLinks = [
  { href: "#", label: "Binance API key" }, { href: "#", label: "Bitfinex API key" },
  { href: "#", label: "Bitget API key" }, { href: "#", label: "BitMart API key" },
  { href: "#", label: "BitMEX API key" }, { href: "#", label: "Bybit API key" },
  { href: "#", label: "Coinbase API key" }, { href: "#", label: "Gate.io API key" },
  { href: "#", label: "HTX API key" }, { href: "#", label: "Kraken API key" },
  { href: "#", label: "KuCoin API key" }, { href: "#", label: "KuCoin Futures API" },
  { href: "#", label: "MEXC API key" }, { href: "#", label: "OKX API key" },
  { href: "#", label: "Phemex API key" }, { href: "#", label: "WhiteBIT API key" },
];

const learnLinks = [
  { href: "#", label: "Kraken vs Coinbase Pro" }, { href: "#", label: "What is DeFi in Crypto" },
  { href: "#", label: "What is Liquidity" }, { href: "#", label: "Portfolio Management" },
  { href: "#", label: "Crypto Trading Bots" }, { href: "#", label: "Gemini vs Coinbase" },
  { href: "#", label: "Binance vs Bitfinex" }, { href: "#", label: "Binance vs Coinbase" },
];

const signalsLinks = [
  { href: "#", label: "DEX screener" },
  { href: "#", label: "Bearish Signals" },
  { href: "#", label: "Buy Signals" },
];

const botAlternativesLinks = [
  { href: "#", label: "Bonk Bot Alternative" }, { href: "#", label: "Banana gun alternative" },
  { href: "#", label: "BullX Alternative" }, { href: "#", label: "Maestro bot alternative" },
  { href: "#", label: "Photon SOL alternative" },
];

const stopLossLinks = [
  { href: "#", label: "Binance Stop Loss" }, { href: "#", label: "Bybit Stop Loss" },
  { href: "#", label: "Coinbase Stop Loss" }, { href: "#", label: "Crypto.com Stop Loss" },
];

interface LinkData { href: string; label: string; }
interface LinkSectionProps { title: string; links: LinkData[]; className?: string; listClassName?: string; }

const LinkSection = ({ title, links, className, listClassName }: LinkSectionProps) => (
  <div className={`rounded-3xl border border-dotted border-white/20 p-6 h-full ${className}`}>
    <h4 className="text-base font-semibold text-text-primary mb-4 capitalize">{title}</h4>
    <ul className={`space-y-2 ${listClassName}`}>
      {links.map((link, index) => (
        <li key={index}>
          <a href={link.href} className="text-sm text-text-secondary hover:text-primary-green transition-colors">
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export default function Footer() {
  return (
    <footer className="bg-background-primary text-text-secondary relative overflow-hidden">
      <div
        className="absolute bottom-0 right-0 h-3/5 w-4/5 z-0"
        style={{
          backgroundImage: 'radial-gradient(circle at 90% 90%, hsla(165, 100%, 50%, 0.1), transparent 50%), radial-gradient(circle at 100% 100%, hsla(190, 100%, 50%, 0.15), transparent 60%)',
        }}
      />
      <div className="container mx-auto px-6 lg:px-20 relative z-10">
        <div className="py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5">
            <div className="lg:col-span-3 flex flex-col gap-5">
              <LinkSection title="trailing stops" links={trailingStopsLinks} />
              <LinkSection title="learn" links={learnLinks} />
              <LinkSection title="signals" links={signalsLinks} />
            </div>
            <div className="lg:col-span-4 flex flex-col">
              <LinkSection title="trading bots" links={tradingBotsLinks} listClassName="columns-1 sm:columns-2 gap-x-4" />
            </div>
            <div className="lg:col-span-5 flex flex-col gap-5">
              <LinkSection title="trading strategies" links={tradingStrategiesLinks} listClassName="columns-1 sm:columns-2 gap-x-4"/>
              <LinkSection title="api keys" links={apiKeysLinks} listClassName="columns-1 sm:columns-2 gap-x-4"/>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <LinkSection title="bot alternatives" links={botAlternativesLinks} />
                <LinkSection title="stop loss" links={stopLossLinks} />
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border-subtle py-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6 mb-6">
            <div className="flex items-center gap-4">
              <a href="#">
                <Image src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/af5db15b-f5d8-4f95-970a-a043630c22a7-goodcrypto-app/assets/svgs/gcx_logo-2.svg?" alt="goodcryptoX logo" width={140} height={22} className="h-auto" />
              </a>
              <button className="flex items-center gap-2 text-sm text-text-primary px-3 py-1.5 border border-border-subtle rounded-md hover:bg-background-tertiary transition-colors">
                EN <ChevronDown className="w-4 h-4" />
              </button>
            </div>
            <div className="flex items-center gap-5 text-text-secondary">
              <a href="#" className="hover:text-primary-green transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="hover:text-primary-green transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="hover:text-primary-green transition-colors"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="hover:text-primary-green transition-colors"><Send className="w-5 h-5" /></a>
              <a href="#" className="hover:text-primary-green transition-colors"><FaMediumM className="w-5 h-5" /></a>
              <a href="#" className="hover:text-primary-green transition-colors"><Youtube className="w-5 h-5" /></a>
            </div>
          </div>
          <div className="flex flex-col-reverse sm:flex-row justify-between items-center gap-4 text-xs text-text-muted">
            <p>Supported by RGray</p>
            <p>
              ©2025 GoodC International Ltd. All rights reserved. | <a href="#" className="hover:text-primary-green transition-colors">Privacy policy</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}