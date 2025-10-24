import Footer from "@/components/sections/footer";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

export default function Guide2Page() {
  return (
    <main className="min-h-screen bg-background-primary text-text-primary">
      {/* Hero Section */}
      <section className="relative bg-background-primary py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/af5db15b-f5d8-4f95-970a-a043630c22a7-goodcrypto-app/assets/svgs/lines-bg-3.svg?"
            alt=""
            fill
            className="object-cover" />

        </div>
        <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold tracking-tight mb-6">
              <span className="text-primary-green">P.O.V Hunter Bot</span> – SOLANA AUTO BOT
            </h1>
            <p className="text-lg lg:text-xl text-text-secondary mb-4">
              Complete Guide and Technical Manual
            </p>
            <p className="text-base text-text-muted max-w-3xl mx-auto">
              A high-frequency, algorithmic trading application specifically engineered to capitalize on the unique performance characteristics of the Solana blockchain.
            </p>
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="bg-background-secondary py-16">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl lg:text-3xl font-bold mb-8 text-center">
              <span className="text-primary-green">Quick Navigation</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              {[
              "Introduction", "Core Philosophy", "Supported Exchanges",
              "Trading Strategies", "Risk Management", "Bot Functions",
              "Settings & Customization", "User Interface", "Setup Guide",
              "Optimization", "Security", "Performance Metrics",
              "FAQ", "Future Roadmap", "Glossary"].
              map((item) =>
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                className="flex items-center gap-2 p-3 bg-background-tertiary rounded-lg border border-border-subtle hover:border-primary-green transition-all text-sm text-text-secondary hover:text-primary-green">

                  <ChevronRight className="w-4 h-4 flex-shrink-0" />
                  <span>{item}</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 1. Introduction */}
      <section id="introduction" className="bg-background-primary py-20 lg:py-28">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl lg:text-5xl font-bold mb-12">
              1. <span className="text-primary-green">Introduction</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-primary-green">What the Bot Is</h3>
                <p className="text-text-secondary leading-relaxed">
                  The P.O.V Hunter Bot is a non-custodial software solution that connects via API to decentralized exchanges (DEXs) on the Solana ecosystem. It autonomously executes pre-defined and customizable trading strategies, aiming to capture profitability through speed and precision that human traders cannot match.
                </p>
              </div>
              <div className="relative h-[350px] rounded-2xl overflow-hidden border border-border-subtle">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/af5db15b-f5d8-4f95-970a-a043630c22a7/generated_images/futuristic-dark-themed-trading-bot-inter-a7ee09ce-20251006191244.jpg?"
                  alt="P.O.V Hunter Bot Interface"
                  fill
                  className="object-cover" />

              </div>
            </div>

            <div className="bg-background-secondary p-8 rounded-2xl border border-border-subtle mb-12">
              <h3 className="text-2xl font-bold text-primary-green mb-6">Why It Was Created and Problems It Solves</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                Traditional crypto trading is hampered by high gas fees, slow transaction finality, and market latency on older blockchains. The P.O.V Hunter Bot was created to:
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-6 bg-background-tertiary rounded-xl border border-border-subtle">
                  <h4 className="text-lg font-semibold text-primary-green mb-3">Eliminate Latency Disadvantage</h4>
                  <p className="text-sm text-text-secondary">
                    Leverage Solana's 50,000+ Transactions Per Second (TPS) capacity to execute trades and respond to market events faster than competitors.
                  </p>
                </div>
                <div className="p-6 bg-background-tertiary rounded-xl border border-border-subtle">
                  <h4 className="text-lg font-semibold text-primary-green mb-3">Mitigate Fee Impact</h4>
                  <p className="text-sm text-text-secondary">
                    Utilize Solana's consistently low transaction fees ($0.00025 per transaction on average) to make high-volume, low-margin strategies viable.
                  </p>
                </div>
                <div className="p-6 bg-background-tertiary rounded-xl border border-border-subtle">
                  <h4 className="text-lg font-semibold text-primary-green mb-3">Automate Complex Strategies</h4>
                  <p className="text-sm text-text-secondary">
                    Provide retail and advanced traders with automated tools to execute sophisticated strategies that require constant monitoring.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
              <div className="relative h-[400px] rounded-2xl overflow-hidden border border-border-subtle order-2 md:order-1">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/af5db15b-f5d8-4f95-970a-a043630c22a7/generated_images/high-frequency-trading-visualization-sho-73bf4c25-20251006191254.jpg?"
                  alt="Solana Ecosystem Advantages"
                  fill
                  className="object-cover" />

              </div>
              <div className="space-y-6 order-1 md:order-2">
                <h3 className="text-2xl font-bold text-primary-green">Solana Ecosystem Advantages</h3>
                <p className="text-text-secondary leading-relaxed mb-4">
                  The bot is built natively on Solana to exploit its primary benefits:
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <span className="text-primary-green text-2xl font-bold">⚡</span>
                    <div>
                      <h4 className="font-semibold text-text-primary mb-1">Speed</h4>
                      <p className="text-sm text-text-secondary">Near-instantaneous transaction finality allows for rapid entry/exit and effective liquidation hunting.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="text-primary-green text-2xl font-bold">💰</span>
                    <div>
                      <h4 className="font-semibold text-text-primary mb-1">Low Fees</h4>
                      <p className="text-sm text-text-secondary">Enables profitable micro-trades and high-frequency trading where fees would otherwise erode all gains.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="text-primary-green text-2xl font-bold">📈</span>
                    <div>
                      <h4 className="font-semibold text-text-primary mb-1">Scalability</h4>
                      <p className="text-sm text-text-secondary">Handle massive transaction loads without network congestion during high market volatility.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-background-secondary p-8 rounded-2xl border border-border-emphasis">
              <h3 className="text-2xl font-bold text-primary-green mb-6">Intended Audience</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold text-text-primary mb-2">Retail Traders</h4>
                  <p className="text-sm text-text-secondary">Seeking to automate trading, manage risk, and exploit Solana's DeFi opportunities.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-text-primary mb-2">Algorithmic Traders</h4>
                  <p className="text-sm text-text-secondary">Requiring a robust framework for high-frequency strategies and low-latency execution.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-text-primary mb-2">Institutions</h4>
                  <p className="text-sm text-text-secondary">Looking for compliant, scalable infrastructure to deploy large capital into the Solana ecosystem.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Core Philosophy & Design */}
      <section id="core-philosophy" className="bg-background-secondary py-20 lg:py-28">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl lg:text-5xl font-bold mb-12">
              2. Core Philosophy & <span className="text-primary-green">Design</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-primary-green">What "P.O.V Hunter" Means</h3>
                <p className="text-text-secondary leading-relaxed mb-6">
                  The name P.O.V Hunter is an acronym representing the three core data streams the bot analyzes to form its trading thesis:
                </p>
                <div className="space-y-4">
                  <div className="p-4 bg-background-tertiary rounded-lg border border-border-subtle">
                    <h4 className="font-semibold text-primary-green mb-2">Price</h4>
                    <p className="text-sm text-text-secondary">Traditional candlestick and indicator analysis.</p>
                  </div>
                  <div className="p-4 bg-background-tertiary rounded-lg border border-border-subtle">
                    <h4 className="font-semibold text-primary-green mb-2">Orderflow</h4>
                    <p className="text-sm text-text-secondary">Real-time analysis of the bid/ask spread and the sequence of trades on the DEX order book.</p>
                  </div>
                  <div className="p-4 bg-background-tertiary rounded-lg border border-border-subtle">
                    <h4 className="font-semibold text-primary-green mb-2">Volume</h4>
                    <p className="text-sm text-text-secondary">Analysis of transaction size and liquidity changes.</p>
                  </div>
                </div>
                <p className="text-text-secondary leading-relaxed italic">
                  The "Hunter" aspect refers to the bot's mission to hunt for discrepancies and inefficiencies across these three dimensions, acting decisively once a clear statistical edge is detected.
                </p>
              </div>
              <div className="relative h-[500px] rounded-2xl overflow-hidden border border-border-subtle">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/af5db15b-f5d8-4f95-970a-a043630c22a7-goodcrypto-app/assets/svgs/Group-2868-5.svg?"
                  alt="P.O.V Analysis Diagram"
                  fill
                  className="object-contain p-8" />

              </div>
            </div>

            <div className="bg-background-tertiary p-8 rounded-2xl border border-border-subtle mb-12">
              <h3 className="text-2xl font-bold text-primary-green mb-6">Core Mission</h3>
              <p className="text-text-secondary leading-relaxed text-lg">
                The core mission of the P.O.V Hunter Bot is to maximize risk-adjusted profitability by utilizing ultra-low latency execution and adaptive trading strategies tailored to the Solana DeFi landscape.
              </p>
            </div>

            <h3 className="text-2xl font-bold text-text-primary mb-8">Trading Principles</h3>
            <div className="overflow-x-auto">
              <table className="w-full border border-border-subtle rounded-xl overflow-hidden">
                <thead className="bg-background-tertiary">
                  <tr>
                    <th className="text-left p-4 text-primary-green font-semibold">Principle</th>
                    <th className="text-left p-4 text-primary-green font-semibold">Description</th>
                    <th className="text-left p-4 text-primary-green font-semibold">Strategy Application</th>
                  </tr>
                </thead>
                <tbody className="text-text-secondary">
                  <tr className="border-t border-border-subtle">
                    <td className="p-4 font-medium">Trend Following</td>
                    <td className="p-4">Capitalizing on sustained price movements, buying breakouts, and selling breakdowns.</td>
                    <td className="p-4">Momentum Trading</td>
                  </tr>
                  <tr className="border-t border-border-subtle bg-background-tertiary/30">
                    <td className="p-4 font-medium">Liquidity Hunting</td>
                    <td className="p-4">Identifying and exploiting temporary imbalances in DEX liquidity pools or large orders being filled.</td>
                    <td className="p-4">Liquidity Pool Hunter, Arbitrage</td>
                  </tr>
                  <tr className="border-t border-border-subtle">
                    <td className="p-4 font-medium">Arbitrage</td>
                    <td className="p-4">Profiting from the simultaneous buying and selling of the same asset on different markets to exploit price discrepancies.</td>
                    <td className="p-4">Cross-DEX Arbitrage</td>
                  </tr>
                  <tr className="border-t border-border-subtle bg-background-tertiary/30">
                    <td className="p-4 font-medium">Mean Reversion</td>
                    <td className="p-4">Assuming prices will eventually return to a historical average or trendline after extreme moves.</td>
                    <td className="p-4">Mean Reversion</td>
                  </tr>
                  <tr className="border-t border-border-subtle">
                    <td className="p-4 font-medium">Anti-Mempool Sniping</td>
                    <td className="p-4">Proactively handling Maximal Extractable Value (MEV) by leveraging Solana's low latency to execute transactions efficiently.</td>
                    <td className="p-4">All strategies, especially Sniping New Listings</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Supported Exchanges */}
      <section id="supported-exchanges" className="bg-background-primary py-20 lg:py-28">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl lg:text-5xl font-bold mb-12">
              3. Supported Exchanges & <span className="text-primary-green">Integrations</span>
            </h2>

            <h3 className="text-2xl font-bold text-primary-green mb-8">Solana DEXs</h3>
            <div className="grid md:grid-cols-2 gap-6 mb-16">
              <div className="p-6 bg-background-secondary rounded-xl border border-border-subtle">
                <h4 className="text-xl font-semibold text-text-primary mb-3">Raydium (RAY)</h4>
                <p className="text-sm text-text-secondary">Primary platform for liquidity pool sniping and new listing entry.</p>
              </div>
              <div className="p-6 bg-background-secondary rounded-xl border border-border-subtle">
                <h4 className="text-xl font-semibold text-text-primary mb-3">Orca (ORCA)</h4>
                <p className="text-sm text-text-secondary">Utilized for stablecoin and core pair liquidity hunting.</p>
              </div>
              <div className="p-6 bg-background-secondary rounded-xl border border-border-subtle">
                <h4 className="text-xl font-semibold text-text-primary mb-3">Jupiter (JUP)</h4>
                <p className="text-sm text-text-secondary">Functions as a primary aggregation layer to ensure best-price execution across multiple Solana DEXs.</p>
              </div>
              <div className="p-6 bg-background-secondary rounded-xl border border-border-subtle">
                <h4 className="text-xl font-semibold text-text-primary mb-3">Serum (DEX Program)</h4>
                <p className="text-sm text-text-secondary">Direct order book interaction for low-latency limit and market orders.</p>
              </div>
            </div>

            <div className="bg-background-secondary p-8 rounded-2xl border border-border-subtle mb-12">
              <h3 className="text-2xl font-bold text-primary-green mb-6">API & Wallet Integration</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                The P.O.V Hunter Bot is non-custodial and communicates with the Solana network via the following:
              </p>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-text-primary mb-3">Wallet Connection</h4>
                  <p className="text-sm text-text-secondary mb-3">The bot requires connection to a supported wallet for transaction signing. Private keys are never stored by the bot.</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 bg-background-tertiary rounded-lg">
                      <p className="text-sm"><span className="text-primary-green font-semibold">Hot Wallets:</span> Phantom, Solflare (Recommended for ease of use and speed)</p>
                    </div>
                    <div className="p-4 bg-background-tertiary rounded-lg">
                      <p className="text-sm"><span className="text-primary-green font-semibold">Hardware Wallets:</span> Ledger (Recommended for maximum security)</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-text-primary mb-3">Solana Node/RPC</h4>
                  <p className="text-sm text-text-secondary">Users can configure their preferred Solana Remote Procedure Call (RPC) endpoint (e.g., from providers like Helius or QuickNode) for the lowest possible latency connection.</p>
                </div>
              </div>
            </div>

            <div className="bg-background-tertiary p-8 rounded-2xl border border-border-emphasis">
              <h3 className="text-2xl font-bold text-primary-green mb-4">Compatibility</h3>
              <ul className="space-y-3 text-text-secondary">
                <li className="flex items-start gap-3">
                  <span className="text-primary-green mt-1">✓</span>
                  <span><strong className="text-text-primary">Solana DeFi Protocols:</strong> The execution engine can interact directly with Solana's DeFi primitives, allowing for future integration with lending/borrowing protocols and yield aggregators.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary-green mt-1">✓</span>
                  <span><strong className="text-text-primary">Token Standard:</strong> All SPL (Solana Program Library) tokens.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Trading Strategies */}
      <section id="trading-strategies" className="bg-background-secondary py-20 lg:py-28">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl lg:text-5xl font-bold mb-8 text-center">
              4. Trading <span className="text-primary-green">Strategies</span>
            </h2>
            <p className="text-center text-text-secondary mb-16 text-lg">
              The bot's power lies in its diverse, latency-optimized strategy portfolio.
            </p>

            {/* Scalping Strategy */}
            <div className="mb-16">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-primary-green">Scalping Strategy</h3>
                  <p className="text-text-secondary leading-relaxed">
                    This strategy exploits Solana's speed for high-volume, low-margin trades, taking advantage of minimal price fluctuations within a short timeframe.
                  </p>
                  <div className="bg-background-tertiary p-6 rounded-xl border border-border-subtle">
                    <h4 className="font-semibold text-text-primary mb-4">Key Parameters:</h4>
                    <ul className="space-y-3 text-sm text-text-secondary">
                      <li><span className="text-primary-green font-semibold">Entry:</span> Rapid movement (high volume spike) toward support/resistance. Bollinger Band price touch after low volatility.</li>
                      <li><span className="text-primary-green font-semibold">Exit:</span> Price movement stabilizes, or pre-set Take Profit target is hit.</li>
                      <li><span className="text-primary-green font-semibold">Stop Loss:</span> Tight fixed percentage SL. Activated immediately upon reversal.</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-background-primary rounded-lg border border-border-emphasis">
                    <p className="text-sm text-text-secondary"><span className="text-primary-green font-semibold">Example:</span> Bot detects a sudden, large SOL/USDC order. Enters a long position, aims for profit, and closes the trade within 10 seconds.</p>
                  </div>
                </div>
                <div className="relative h-[400px] rounded-2xl overflow-hidden border border-border-subtle">
                  <Image
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/af5db15b-f5d8-4f95-970a-a043630c22a7/generated_images/high-frequency-trading-visualization-sho-73bf4c25-20251006191254.jpg?"
                    alt="Scalping Strategy Visualization"
                    fill
                    className="object-cover" />

                </div>
              </div>
            </div>

            {/* Arbitrage Strategy */}
            <div className="mb-16">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="relative h-[400px] rounded-2xl overflow-hidden border border-border-subtle order-2 md:order-1">
                  <Image
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/af5db15b-f5d8-4f95-970a-a043630c22a7/generated_images/cross-dex-arbitrage-opportunity-visualiz-9c7a3473-20251006191305.jpg?"
                    alt="Arbitrage Strategy Visualization"
                    fill
                    className="object-cover" />

                </div>
                <div className="space-y-6 order-1 md:order-2">
                  <h3 className="text-2xl font-bold text-primary-green">Arbitrage Strategy</h3>
                  <p className="text-text-secondary leading-relaxed">
                    Simultaneously executes trades across multiple venues (cross-DEX or cross-chain via bridges) to profit from price differences for the same asset.
                  </p>
                  <div className="bg-background-tertiary p-6 rounded-xl border border-border-subtle">
                    <h4 className="font-semibold text-text-primary mb-4">Key Parameters:</h4>
                    <ul className="space-y-3 text-sm text-text-secondary">
                      <li><span className="text-primary-green font-semibold">Entry:</span> Price of Token X on Raydium is lower than on Orca. Bot initiates buy on Raydium and immediate sell on Orca.</li>
                      <li><span className="text-primary-green font-semibold">Exit:</span> Profit target is met, or price discrepancy closes. Flash Loan integration available.</li>
                      <li><span className="text-primary-green font-semibold">SL/TP:</span> Profit target is usually the spread minus transaction fees. No traditional stop-loss needed.</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-background-primary rounded-lg border border-border-emphasis">
                    <p className="text-sm text-text-secondary"><span className="text-primary-green font-semibold">Example:</span> mSOL/SOL trade - spotting a difference between Raydium's mSOL pool and Jupiter's aggregated price.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sniping New Listings */}
            <div className="mb-16">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-primary-green">Sniping New Listings</h3>
                  <p className="text-text-secondary leading-relaxed">
                    A high-risk, high-reward strategy for early entry on newly launched tokens, typically within the first few seconds of liquidity being added to a DEX pool.
                  </p>
                  <div className="bg-background-tertiary p-6 rounded-xl border border-border-subtle">
                    <h4 className="font-semibold text-text-primary mb-4">Key Parameters:</h4>
                    <ul className="space-y-3 text-sm text-text-secondary">
                      <li><span className="text-primary-green font-semibold">Entry:</span> Signal Detection Engine monitors Solana mempool and DEX API for Add Liquidity transaction. Bot places buy order immediately.</li>
                      <li><span className="text-primary-green font-semibold">Exit:</span> Pre-set profit multiplier or sharp drop in momentum/volume.</li>
                      <li><span className="text-primary-green font-semibold">SL/TP:</span> Trailing Stop-Loss is mandatory due to extreme volatility. Rigid initial SL to prevent rug-pull losses.</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-background-primary rounded-lg border border-border-emphasis">
                    <p className="text-sm text-text-secondary"><span className="text-primary-green font-semibold">Example:</span> Bot detects launch of new SPL token, buys SOL worth, and sets trailing stop-loss to lock in profits as price surges.</p>
                  </div>
                </div>
                <div className="relative h-[400px] rounded-2xl overflow-hidden border border-border-subtle">
                  <Image
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/af5db15b-f5d8-4f95-970a-a043630c22a7-goodcrypto-app/assets/images/solana_bot_-front-8.png?"
                    alt="Sniping Strategy Visualization"
                    fill
                    className="object-contain" />

                </div>
              </div>
            </div>

            {/* Additional Strategies Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 bg-background-tertiary rounded-2xl border border-border-subtle">
                <h3 className="text-xl font-bold text-primary-green mb-4">Liquidity Pool Hunter</h3>
                <p className="text-text-secondary text-sm leading-relaxed mb-4">
                  Tracks significant additions or removals of liquidity to infer a major market participant's intent.
                </p>
                <div className="space-y-2 text-sm text-text-secondary">
                  <p><span className="text-primary-green">•</span> Detects large liquidity events above user-defined threshold</p>
                  <p><span className="text-primary-green">•</span> Enters positions based on perceived market intent</p>
                  <p><span className="text-primary-green">•</span> Dynamic TP based on event size</p>
                </div>
              </div>

              <div className="p-8 bg-background-tertiary rounded-2xl border border-border-subtle">
                <h3 className="text-xl font-bold text-primary-green mb-4">Mean Reversion</h3>
                <p className="text-text-secondary text-sm leading-relaxed mb-4">
                  A statistical strategy betting on the correction of overextended price movements.
                </p>
                <div className="space-y-2 text-sm text-text-secondary">
                  <p><span className="text-primary-green">•</span> Enters when price deviates significantly from moving average</p>
                  <p><span className="text-primary-green">•</span> Exits when price touches MA or RSI returns to normal</p>
                  <p><span className="text-primary-green">•</span> TP typically at moving average level</p>
                </div>
              </div>
            </div>

            {/* Custom POV Strategy */}
            <div className="mt-16 bg-gradient-to-br from-primary-green/10 to-accent-teal/10 p-8 rounded-2xl border border-primary-green/30">
              <h3 className="text-2xl font-bold text-primary-green mb-6">Custom POV Strategy</h3>
              <p className="text-text-secondary leading-relaxed mb-8">
                The unique core strategy of the bot. It combines real-time data from Price, Orderflow, and Volume to create a predictive signal unique to Solana's high-speed order books.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-background-tertiary p-6 rounded-xl">
                  <h4 className="font-semibold text-primary-green mb-3">Price Analysis</h4>
                  <p className="text-sm text-text-secondary">Short-term trend direction. Example: Price breaks the 5-minute VWAP.</p>
                </div>
                <div className="bg-background-tertiary p-6 rounded-xl">
                  <h4 className="font-semibold text-primary-green mb-3">Orderflow Analysis</h4>
                  <p className="text-sm text-text-secondary">Liquidity and order book imbalances. Example: Large buy wall cancelled indicating reversal.</p>
                </div>
                <div className="bg-background-tertiary p-6 rounded-xl">
                  <h4 className="font-semibold text-primary-green mb-3">Volume Analysis</h4>
                  <p className="text-sm text-text-secondary">Transaction size and velocity. Example: Cluster of small trades after large trade confirms distribution.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5-15. Remaining Sections - Condensed for brevity */}
      {/* Risk Management */}
      <section id="risk-management" className="bg-background-primary py-20 lg:py-28">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl lg:text-5xl font-bold mb-12">
              5. Risk Management <span className="text-primary-green">Features</span>
            </h2>
            <p className="text-text-secondary text-lg mb-12">
              Robust risk management is paramount for automated trading, especially in high-volatility Solana markets.
            </p>

            <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
              <div className="relative h-[500px] rounded-2xl overflow-hidden border border-border-subtle">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/af5db15b-f5d8-4f95-970a-a043630c22a7/generated_images/advanced-risk-management-dashboard-with--1c51529a-20251006191329.jpg?"
                  alt="Risk Management Visualization"
                  fill
                  className="object-cover" />

              </div>
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-primary-green">Key Risk Parameters</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-background-secondary rounded-xl border border-border-subtle">
                    <h4 className="font-semibold text-text-primary mb-2">Max Loss Per Trade</h4>
                    <p className="text-sm text-text-secondary">Hard limit on the percentage of capital that can be lost on a single trade.</p>
                  </div>
                  <div className="p-4 bg-background-secondary rounded-xl border border-border-subtle">
                    <h4 className="font-semibold text-text-primary mb-2">Max Loss Per Day</h4>
                    <p className="text-sm text-text-secondary">Hard limit on cumulative loss for entire portfolio in 24-hour period. Bot pauses if hit.</p>
                  </div>
                  <div className="p-4 bg-background-secondary rounded-xl border border-border-subtle">
                    <h4 className="font-semibold text-text-primary mb-2">Smart Stop-Loss Trailing</h4>
                    <p className="text-sm text-text-secondary">Stop-loss level automatically adjusts as trade moves into profit, locking in gains.</p>
                  </div>
                  <div className="p-4 bg-background-secondary rounded-xl border border-border-subtle">
                    <h4 className="font-semibold text-text-primary mb-2">Volatility Filters</h4>
                    <p className="text-sm text-text-secondary">Suspends trading during extreme volatility to avoid slippage and unpredictable whipsaws.</p>
                  </div>
                  <div className="p-4 bg-background-secondary rounded-xl border border-border-subtle">
                    <h4 className="font-semibold text-text-primary mb-2">Portfolio Diversification</h4>
                    <p className="text-sm text-text-secondary">Define allocation rules to maintain desired ratio between stablecoins, SOL, and alt tokens.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bot Functions & Modules */}
      <section id="bot-functions" className="bg-background-secondary py-20 lg:py-28">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl lg:text-5xl font-bold mb-12">
              6. Bot Functions & <span className="text-primary-green">Modules</span>
            </h2>
            <p className="text-text-secondary text-lg mb-12">
              The P.O.V Hunter Bot is structured into interconnected, specialized modules for maximum efficiency.
            </p>

            <div className="relative h-[500px] rounded-2xl overflow-hidden border border-border-subtle mb-12">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/af5db15b-f5d8-4f95-970a-a043630c22a7/generated_images/bot-architecture-diagram-showing-interco-dcfe90bc-20251006191317.jpg?"
                alt="Bot Architecture Diagram"
                fill
                className="object-cover" />

            </div>

            <div className="space-y-6">
              {[
              {
                name: "Signal Detection Engine (SDE)",
                function: "Scans and analyzes all market data (P.O.V) to generate trade entry/exit signals.",
                details: "Utilizes WebSockets for real-time order book and trade data feeds. Scans Solana Mempool for unconfirmed transactions."
              },
              {
                name: "Execution Engine (EE)",
                function: "Translates signals into on-chain transactions and handles order routing.",
                details: "Implements Ultra-Low-Latency Transaction Handling by optimizing Solana Priority Fees and routing through most performant DEX API/RPC node."
              },
              {
                name: "Risk Manager (RM)",
                function: "Enforces all user-defined risk parameters and continuously monitors active trades.",
                details: "Runs in parallel with EE. Can issue immediate Force Close command if Max Loss per Trade/Day is breached."
              },
              {
                name: "Portfolio Tracker (PT)",
                function: "Provides real-time accounting of balances, positions, and profit/loss (PnL).",
                details: "Reads wallet and DEX account balances from Solana blockchain, calculating PnL based on realized and unrealized gains."
              },
              {
                name: "Backtester",
                function: "Allows users to simulate strategies on historical data before live deployment.",
                details: "Utilizes proprietary Solana Historical Data archives to accurately simulate execution latency effects."
              },
              {
                name: "Notification System",
                function: "Alerts the user to key events, trade executions, and performance milestones.",
                details: "Supports configurable alerts via Telegram, Discord Webhook, and Email."
              }].
              map((module) =>
              <div key={module.name} className="p-6 bg-background-tertiary rounded-xl border border-border-subtle hover:border-primary-green transition-all">
                  <h3 className="text-xl font-bold text-primary-green mb-3">{module.name}</h3>
                  <p className="text-text-secondary mb-3">{module.function}</p>
                  <p className="text-sm text-text-muted">{module.details}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Continue with remaining sections... */}
      {/* For brevity, I'll add a few more key sections */}

      {/* Setup & Installation */}
      <section id="setup-guide" className="bg-background-primary py-20 lg:py-28">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl lg:text-5xl font-bold mb-12">
              9. Setup & <span className="text-primary-green">Installation Guide</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-primary-green">Prerequisites</h3>
                <ul className="space-y-4 text-text-secondary">
                  <li className="flex items-start gap-3">
                    <span className="text-primary-green mt-1 text-xl">✓</span>
                    <div>
                      <strong className="text-text-primary">Supported Solana Wallet:</strong> Phantom or Solflare installed and funded.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary-green mt-1 text-xl">✓</span>
                    <div>
                      <strong className="text-text-primary">SOL for Gas:</strong> Minimum of 0.5 SOL to cover transaction fees.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary-green mt-1 text-xl">✓</span>
                    <div>
                      <strong className="text-text-primary">Trading Capital:</strong> USDC, SOL, or desired SPL tokens in connected wallet.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary-green mt-1 text-xl">✓</span>
                    <div>
                      <strong className="text-text-primary">RPC Endpoint:</strong> (Optional but Recommended) Private or low-latency RPC connection.
                    </div>
                  </li>
                </ul>
              </div>
              <div className="relative h-[400px] rounded-2xl overflow-hidden border border-border-subtle">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/af5db15b-f5d8-4f95-970a-a043630c22a7/generated_images/3d-rendered-solana-wallet-interface-with-c3bcf8bd-20251006073802.jpg?"
                  alt="Setup Prerequisites"
                  fill
                  className="object-cover" />

              </div>
            </div>

            <h3 className="text-2xl font-bold text-text-primary mb-8 !whitespace-pre-line">Easy Steps to Start Trading with P.O.V Sniper Bot</h3>
            <div className="space-y-6">
              {[
              {
                step: "01",
                title: "Connect Your Wallet",
                desc: "Click  and choose one of the supported wallets. For Solana-native use, we recommend . If you use EVM chains or cross-chain features, you can also connect MetaMask or other compatible wallets."
              },
              {
                step: "02",
                title: "Claim Your $50 Trading Credit",
                desc: "Get started risk-free claim a one-time  credited to your account. This gives you real trades to test the bot\u2019s performance without risking your own funds. The credit is applied instantly after you accept the offer and can be used to run the bot in live mode."
              },
              {
                step: "03",
                title: "Configure & Start the P.O.V Sniper BOT",
                desc: "You\u2019ll be redirected to the  backend dashboard. From there you can choose a mode (Basic or Advanced), set the trade amount, select risk parameters (stop loss / take profit / max drawdown), pick a strategy, and start the bot. Basic mode provides recommended defaults for quick setup. You can still tweak trade size and risk."
              },
              {
                step: "04",
                title: "Optional: Advanced Mode (For Experienced Traders)",
                desc: "For experienced traders who want full control, enable . This unlocks deep strategy customization: multi-layer stop loss behavior, trailing stop parameters, take-profit scaling, custom signal filters, order routing preferences, and experimental BETA features for fine-grained order execution. Use this only if you understand the mechanics, otherwise stick with Basic."
              }].
              map((step) =>
              <div key={step.step} className="flex gap-6 items-start p-6 bg-background-secondary rounded-xl border border-border-subtle hover:border-primary-green transition-all">
                  <div className="flex-shrink-0 w-16 h-16 bg-primary-green/10 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary-green">{step.step}</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-text-primary mb-2 !whitespace-pre-line !whitespace-pre-line !whitespace-pre-line !whitespace-pre-line !whitespace-pre-line">{step.title}</h4>
                    <p className="text-text-secondary !whitespace-pre-line !whitespace-pre-line !whitespace-pre-line !whitespace-pre-line">{step.desc}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Security & Safety */}
      <section id="security" className="bg-background-secondary py-20 lg:py-28">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl lg:text-5xl font-bold mb-12">
              11. Security & <span className="text-primary-green">Safety</span>
            </h2>
            <p className="text-text-secondary text-lg mb-12">
              Security is non-negotiable for a crypto trading application.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 bg-background-tertiary rounded-2xl border border-border-subtle">
                <h3 className="text-xl font-bold text-primary-green mb-6">Private Key Handling</h3>
                <ul className="space-y-4 text-text-secondary">
                  <li className="flex items-start gap-3">
                    <span className="text-primary-green">🔒</span>
                    <div>
                      <strong className="text-text-primary">Non-Custodial Design:</strong> The bot never stores or transmits your wallet's private key.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary-green">🔒</span>
                    <div>
                      <strong className="text-text-primary">Local Signing:</strong> All transactions are passed to your connected wallet for local signing.
                    </div>
                  </li>
                </ul>
              </div>

              <div className="p-8 bg-background-tertiary rounded-2xl border border-border-subtle">
                <h3 className="text-xl font-bold text-primary-green mb-6">Access Security</h3>
                <ul className="space-y-4 text-text-secondary">
                  <li className="flex items-start gap-3">
                    <span className="text-primary-green">🔐</span>
                    <div>
                      <strong className="text-text-primary">Two-Factor Authentication:</strong> Mandatory 2FA for access to bot's UI and configuration changes.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary-green">🔐</span>
                    <div>
                      <strong className="text-text-primary">Role-Based Access:</strong> For institutional users, configurable roles limit access.
                    </div>
                  </li>
                </ul>
              </div>

              <div className="p-8 bg-background-tertiary rounded-2xl border border-border-subtle">
                <h3 className="text-xl font-bold text-primary-green mb-6">Communication Security</h3>
                <ul className="space-y-4 text-text-secondary">
                  <li className="flex items-start gap-3">
                    <span className="text-primary-green">🛡️</span>
                    <div>
                      <strong className="text-text-primary">Encrypted Communication:</strong> TLS/SSL encryption for all RPC communications.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary-green">🛡️</span>
                    <div>
                      <strong className="text-text-primary">Whitelisting:</strong> Only pre-approved, verified DEX and RPC endpoints.
                    </div>
                  </li>
                </ul>
              </div>

              <div className="p-8 bg-background-tertiary rounded-2xl border border-border-subtle">
                <h3 className="text-xl font-bold text-primary-green mb-6">Safe Update Process</h3>
                <p className="text-text-secondary">
                  The bot uses an atomic, encrypted update system. Users are alerted to new versions, downloaded only after secure SHA-256 checksum verification.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-background-primary py-20 lg:py-28">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-5xl font-bold mb-12 text-center">
              13. <span className="text-primary-green">FAQ</span>
            </h2>

            <div className="space-y-6">
              {[
              {
                q: "Minimum balance needed to run the bot?",
                a: "There is no hard minimum, but a minimum of $500 in trading capital plus 1 SOL for gas/fees is recommended to make the Max Loss Per Trade limit meaningful and to ensure profitable scalping margins cover the low transaction fees."
              },
              {
                q: "Can it run 24/7 on a VPS?",
                a: "Yes, it is highly recommended. For optimal performance and to maintain an edge in Arbitrage and Scalping, the bot must run 24/7 on a Virtual Private Server (VPS) with a low-latency connection and robust internet."
              },
              {
                q: "What happens if the internet goes down?",
                a: "If the connection is lost, the Execution Engine will stop receiving market data and cease all new trade executions. The Risk Manager will attempt to send a final, emergency Force Close transaction for any open positions based on the last known price. Upon reconnecting, the bot will reconcile its recorded trades with on-chain data and alert the user to any discrepancies."
              },
              {
                q: "Is it profitable during sideways markets?",
                a: "The P.O.V Hunter Bot is designed to be profitable in sideways markets primarily through the Arbitrage and tight-range Scalping strategies, which thrive on small, temporary inefficiencies that are more common when the market lacks a clear trend."
              }].
              map((faq) =>
              <div key={faq.q} className="p-6 bg-background-secondary rounded-xl border border-border-subtle hover:border-primary-green transition-all">
                  <h3 className="text-lg font-semibold text-text-primary mb-3">{faq.q}</h3>
                  <p className="text-text-secondary leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Future Roadmap */}
      <section id="future-roadmap" className="bg-background-secondary py-20 lg:py-28">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl lg:text-5xl font-bold mb-12 text-center">
              14. Future <span className="text-primary-green">Roadmap</span>
            </h2>
            <p className="text-text-secondary text-lg text-center mb-12 !whitespace-pre-line">The P.O.V Sniper BOT is a constantly evolving platform with the following planned updates.

            </p>

            <div className="relative h-[400px] rounded-2xl overflow-hidden border border-border-subtle mb-12">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/af5db15b-f5d8-4f95-970a-a043630c22a7/generated_images/ai-and-machine-learning-concept-for-trad-c3642902-20251006191341.jpg?"
                alt="AI and Machine Learning Future Roadmap"
                fill
                className="object-cover" />

            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="p-8 bg-background-tertiary rounded-2xl border border-border-subtle">
                <h3 className="text-xl font-bold text-primary-green mb-4">AI-Driven Signal Improvements</h3>
                <p className="text-sm text-text-secondary">Integration of Machine Learning models to dynamically adjust SL/TP based on live volatility and sentiment.</p>
              </div>
              <div className="p-8 bg-background-tertiary rounded-2xl border border-border-subtle">
                <h3 className="text-xl font-bold text-primary-green mb-4">ML-Powered Strategy Development</h3>
                <p className="text-sm text-text-secondary">Exploring deep learning models to develop novel, non-linear strategies that detect complex patterns.</p>
              </div>
              <div className="p-8 bg-background-tertiary rounded-2xl border border-border-subtle">
                <h3 className="text-xl font-bold text-primary-green mb-4">Automated Backtesting</h3>
                <p className="text-sm text-text-secondary">Module to automatically run thousands of backtests and identify optimal parameters for strategy/token pairs.</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary-green/10 to-accent-teal/10 p-8 rounded-2xl border border-primary-green/30">
              <h3 className="text-2xl font-bold text-primary-green mb-6">Potential Expansion</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-text-primary mb-2">Multi-Chain Integration</h4>
                  <p className="text-sm text-text-secondary">Exploring expansion to other low-latency, high-throughput chains (e.g., Aptos, SUI) to execute cross-chain arbitrage.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-text-primary mb-2">Community Strategy Marketplace</h4>
                  <p className="text-sm text-text-secondary">A platform where users can securely share, sell, and buy proven, community-developed strategies.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Glossary */}
      <section id="glossary" className="bg-background-primary py-20 lg:py-28">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl lg:text-5xl font-bold mb-12 text-center">
              15. <span className="text-primary-green">Glossary</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {[
              { term: "Arbitrage", def: "Profiting from the simultaneous purchase and sale of an asset on different markets to exploit a price difference." },
              { term: "SPL Token", def: "Solana Program Library Token. The standard token format used on the Solana blockchain." },
              { term: "DEX", def: "Decentralized Exchange. A peer-to-peer crypto exchange that operates without a central authority." },
              { term: "Latency", def: "The delay (measured in time) between a market event occurring and the bot executing a trade based on that event." },
              { term: "Mempool", def: "Memory Pool. A queue of unconfirmed transactions waiting to be processed by the Solana network." },
              { term: "MEV", def: "Maximal Extractable Value. Profit extracted by miners/validators/sequencers by reordering, including, or censoring transactions within a block." },
              { term: "Non-Custodial", def: "The bot does not hold or control the user's private keys or funds. Funds remain in the user's wallet." },
              { term: "Orderflow", def: "The sequence of orders (buys and sells) placed and filled on an exchange, indicating short-term market pressure." },
              { term: "Priority Fee", def: "An extra fee paid to Solana validators to prioritize a transaction for faster inclusion in a block." },
              { term: "RPC", def: "Remote Procedure Call. The interface used by the bot to communicate with the Solana blockchain node." },
              { term: "Sharpe Ratio", def: "A measure of risk-adjusted return. A higher Sharpe Ratio indicates better returns for the amount of risk taken." },
              { term: "Slippage", def: "The difference between the expected price of a trade and the price at which the trade is actually executed." },
              { term: "TPS", def: "Transactions Per Second. A measure of the network's capacity to process transactions." },
              { term: "Trailing Stop-Loss", def: "A dynamic stop-loss order that adjusts as the price moves favorably, locking in a minimum profit while allowing for maximum gain." },
              { term: "VWAP", def: "Volume-Weighted Average Price. The average price an asset has traded at throughout the day, based on both volume and price." }].
              map((item) =>
              <div key={item.term} className="p-6 bg-background-secondary rounded-xl border border-border-subtle">
                  <h3 className="text-lg font-semibold text-primary-green mb-2">{item.term}</h3>
                  <p className="text-sm text-text-secondary">{item.def}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>);

}
