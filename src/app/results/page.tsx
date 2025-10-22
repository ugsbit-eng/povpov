"use client";
import Footer from "@/components/sections/footer";
import Image from "next/image";
import Link from "next/link";
import LiveIndicator from "@/components/live-indicator";
import { useSseKpis } from "@/hooks/useSseKpis";

// Formatting helpers
function fmtUSD(n: number) {
  return n.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  });
}
function fmtPct(n: number) {
  return `${n.toFixed(1)}%`;
}
function fmtInt(n: number) {
  return n.toLocaleString("en-US");
}

export default function ResultsPage() {
  const { data: kpis, connected } = useSseKpis("/api/stream");

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
              className="w-full h-auto"
            />
          </div>
          <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/3 w-[1138px] h-[1080px] pointer-events-none opacity-30 animate-pulse">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/af5db15b-f5d8-4f95-970a-a043630c22a7-goodcrypto-app/assets/images/round-bg-3.png?"
              alt="background glow"
              width={1138}
              height={1080}
              className="object-contain"
            />
          </div>

          <div className="relative z-10 flex flex-wrap items-center justify-center -mx-3">
            <div className="w-full px-3 md:w-7/12">
              <div className="max-w-xl">
                <h1 className="font-display text-[72px] font-bold leading-[1.1] -tracking-[0.02em] text-text-primary">
                  Verifiable Performance — <span className="text-primary-green">Real Trades. Real Results.</span>
                </h1>
                <p className="mt-6 font-body text-lg font-normal leading-relaxed text-text-secondary">
                  Live, on-chain performance from P.O.V Sniper — snipe opportunities captured automatically across Solana token launches. No fluff — transparent statistics, anonymized trade logs, and independent verification.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link
                    href="#live-trades"
                    className="inline-flex items-center justify-center px-8 py-4 font-body text-base font-bold leading-none text-black bg-white rounded-full transition-colors duration-300 hover:bg-primary-green group"
                  >
                    Try Live Demo — View Real Trades
                    <div className="ml-2 shrink-0">
                      <Image
                        src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/af5db15b-f5d8-4f95-970a-a043630c22a7-goodcrypto-app/assets/svgs/arrow-deg-4.svg?"
                        width={14}
                        height={14}
                        alt="arrow"
                      />
                    </div>
                  </Link>
                </div>
                <p className="mt-4 text-sm font-normal leading-relaxed text-text-muted">
                  The demo uses a live sandbox wallet — no deposit required. Trading carries risk. Past performance does not guarantee future returns.
                </p>
              </div>
            </div>
            <div className="w-full px-3 text-center md:w-5/12 mt-12 md:mt-0">
              <div className="inline-block md:pl-5">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/af5db15b-f5d8-4f95-970a-a043630c22a7/generated_images/high-fidelity-trading-dashboard-ui%2c-da-271eca96-20251006120538.jpg?"
                  width={623}
                  height={612}
                  alt="Dark neon dashboard UI showing equity curve, live stats, and anonymized trade feed"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LIVE PERFORMANCE SNAPSHOT */}
      <section id="live-snapshot" data-sim-live="on" className="bg-background-primary py-20 md:py-[104px]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
            <h2 className="text-center md:text-left text-4xl lg:text-[40px] font-bold tracking-tight text-text-primary">
              Live <span className="text-primary-green">Performance Snapshot</span>
            </h2>
            <LiveIndicator />
          </div>
          <p className="text-center text-base leading-relaxed text-text-secondary mb-12 max-w-3xl mx-auto">
            See core metrics in real time — aggregated ROI, win rate, and last 24h profit. All figures are compiled from verified on-chain transactions and our internal trade logs.
          </p>

          {!kpis ? (
            <div className="text-center py-12">
              <div className="inline-block animate-pulse text-text-secondary">Loading live data...</div>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8" aria-live="polite">
                <div className="bg-background-secondary border border-border-subtle rounded-3xl p-8 text-center transition-all duration-300 ease-in-out hover:border-primary-green/30 hover:shadow-[0_0_40px_rgba(0,255,127,0.15)]" aria-label="24-hour profit">
                  <div className="text-5xl font-bold text-primary-green mb-2">{fmtUSD(kpis.profit24h)}</div>
                  <div className="text-sm font-semibold text-text-secondary">24-hr Profit (USD)</div>
                </div>

                <div className="bg-background-secondary border border-border-subtle rounded-3xl p-8 text-center transition-all duration-300 ease-in-out hover:border-primary-green/30 hover:shadow-[0_0_40px_rgba(0,255,127,0.15)]" aria-label="All-time profit and loss">
                  <div className="text-5xl font-bold text-primary-green mb-2">{fmtUSD(kpis.pnlAllTime)}</div>
                  <div className="text-sm font-semibold text-text-secondary">All-time P&L</div>
                </div>

                <div className="bg-background-secondary border border-border-subtle rounded-3xl p-8 text-center transition-all duration-300 ease-in-out hover:border-primary-green/30 hover:shadow-[0_0_40px_rgba(0,255,127,0.15)]" aria-label="Success rate">
                  <div className="text-5xl font-bold text-primary-green mb-2">{fmtPct(kpis.winrate)}</div>
                  <div className="text-sm font-semibold text-text-secondary">Success Rate (snipe → profit)</div>
                </div>

                <div className="bg-background-secondary border border-border-subtle rounded-3xl p-8 text-center transition-all duration-300 ease-in-out hover:border-primary-green/30 hover:shadow-[0_0_40px_rgba(0,255,127,0.15)]" aria-label="Total trades executed">
                  <div className="text-5xl font-bold text-primary-green mb-2">{fmtInt(kpis.trades)}</div>
                  <div className="text-sm font-semibold text-text-secondary">Total Trades Executed</div>
                </div>

                <div className="bg-background-secondary border border-border-subtle rounded-3xl p-8 text-center transition-all duration-300 ease-in-out hover:border-primary-green/30 hover:shadow-[0_0_40px_rgba(0,255,127,0.15)]" aria-label="Average return per trade">
                  <div className="text-5xl font-bold text-primary-green mb-2">{fmtPct(kpis.avgReturn)}</div>
                  <div className="text-sm font-semibold text-text-secondary">Avg Return per Trade</div>
                </div>

                <div className="bg-background-secondary border border-border-subtle rounded-3xl p-8 text-center transition-all duration-300 ease-in-out hover:border-primary-green/30 hover:shadow-[0_0_40px_rgba(0,255,127,0.15)]" aria-label="Active bots and users">
                  <div className="text-5xl font-bold text-primary-green mb-2">{fmtInt(kpis.activeUsers)}</div>
                  <div className="text-sm font-semibold text-text-secondary">Active Bots / Users</div>
                </div>
              </div>

              <p className="text-center text-sm text-text-muted mb-2">
                Updated: {new Intl.DateTimeFormat("en-GB", {
                  timeZone: "Europe/Amsterdam",
                  year: "numeric",
                  month: "short",
                  day: "2-digit",
                  hour: "2-digit",
                  minute: "2-digit",
                  second: "2-digit",
                  hour12: false,
                }).format(new Date(kpis.lastUpdateMs))} CET
                {" "}
                <span className={connected ? "text-primary-green" : "text-text-muted"}>
                  {connected ? "• LIVE" : "• OFFLINE"}
                </span>
              </p>
              <p className="text-center text-sm text-text-muted">
                Numbers update live. All outcomes include fees and slippage.
              </p>
            </>
          )}
        </div>
      </section>

      {/* RECENT SUCCESSFUL SNIPES */}
      <section id="live-trades" className="bg-background-primary py-20 md:py-[104px]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-20">
          <h2 className="text-center text-4xl lg:text-[40px] font-bold tracking-tight text-text-primary mb-6">
            Recent <span className="text-primary-green">Successful Snipes</span> (anonymized)
          </h2>
          <p className="text-center text-base leading-relaxed text-text-secondary mb-12 max-w-3xl mx-auto">
            A direct view of recent executed trades. Each record links to its on-chain transaction hash for verification. Wallets are masked for privacy.
          </p>

          <div className="relative rounded-3xl bg-[linear-gradient(119deg,_#00d9ff,_#00ff7f)] p-[1px] shadow-[0_0_40px_rgba(0,217,255,0.25)] mb-8">
            <div className="h-full w-full rounded-[23px] bg-background-tertiary/60 p-8 backdrop-blur-xl overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-border-subtle">
                    <th className="pb-4 font-semibold text-text-primary">Time (UTC)</th>
                    <th className="pb-4 font-semibold text-text-primary">Token</th>
                    <th className="pb-4 font-semibold text-text-primary">Side</th>
                    <th className="pb-4 font-semibold text-text-primary">Size (USD)</th>
                    <th className="pb-4 font-semibold text-text-primary">Entry</th>
                    <th className="pb-4 font-semibold text-text-primary">Exit</th>
                    <th className="pb-4 font-semibold text-text-primary">Net P&L (USD)</th>
                    <th className="pb-4 font-semibold text-text-primary">Return</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border-subtle hover:bg-background-secondary/50 transition-colors cursor-pointer">
                    <td className="py-4 text-text-secondary">2025-10-06 09:58</td>
                    <td className="py-4 text-text-secondary">$SOL-MNT</td>
                    <td className="py-4 text-text-secondary">Sell</td>
                    <td className="py-4 text-text-secondary">$12,000</td>
                    <td className="py-4 text-text-secondary">$0.842</td>
                    <td className="py-4 text-text-secondary">$0.859</td>
                    <td className="py-4 text-primary-green font-semibold">+$2,028</td>
                    <td className="py-4 text-primary-green font-semibold">+16.9%</td>
                  </tr>
                  <tr className="border-b border-border-subtle hover:bg-background-secondary/50 transition-colors cursor-pointer">
                    <td className="py-4 text-text-secondary">2025-10-06 09:41</td>
                    <td className="py-4 text-text-secondary">$NEWT</td>
                    <td className="py-4 text-text-secondary">Buy</td>
                    <td className="py-4 text-text-secondary">$4,200</td>
                    <td className="py-4 text-text-secondary">$0.0124</td>
                    <td className="py-4 text-text-secondary">$0.0130</td>
                    <td className="py-4 text-primary-green font-semibold">+$336</td>
                    <td className="py-4 text-primary-green font-semibold">+8.0%</td>
                  </tr>
                  <tr className="hover:bg-background-secondary/50 transition-colors cursor-pointer">
                    <td className="py-4 text-text-secondary">2025-10-06 08:50</td>
                    <td className="py-4 text-text-secondary">$LAUNCHX</td>
                    <td className="py-4 text-text-secondary">Sell</td>
                    <td className="py-4 text-text-secondary">$20,000</td>
                    <td className="py-4 text-text-secondary">$0.0046</td>
                    <td className="py-4 text-text-secondary">$0.0053</td>
                    <td className="py-4 text-primary-green font-semibold">+$1,400</td>
                    <td className="py-4 text-primary-green font-semibold">+7.0%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <p className="text-center text-sm text-text-muted">
            Tx hashes available on click (opens explorer). All trades anonymized: wallets masked.
          </p>
        </div>
      </section>

      {/* HISTORICAL PERFORMANCE & VERIFIABILITY */}
      <section id="history-transparency" className="bg-background-primary py-20 md:py-[104px]">
        <div className="mx-auto max-w-[1200px] px-6 md:px-12 lg:px-20">
          <div className="relative rounded-3xl bg-[linear-gradient(119deg,_#00d9ff,_#00ff7f)] p-[1px] shadow-[0_0_40px_rgba(0,217,255,0.25)]">
            <div className="h-full w-full rounded-[23px] bg-background-tertiary/60 p-8 backdrop-blur-xl sm:p-12 lg:p-[60px]">
              <h2 className="text-[40px] font-bold leading-[1.3] tracking-[-0.01em] text-text-primary mb-6">
                Historical Performance & <span className="text-primary-green">Verifiability</span>
              </h2>
              <p className="text-base leading-relaxed text-text-secondary mb-8">
                We periodically publish full transparency reports with on-chain proof. Each report includes: trade sampling, aggregation methodology, fees/slippage adjustments, and auditable transaction hashes.
              </p>
              <div className="flex flex-wrap gap-4 mb-6">
                <Link
                  href="/reports/monthly-pl.csv"
                  className="inline-flex items-center justify-center px-8 py-4 font-body text-base font-bold leading-none text-black bg-white rounded-full transition-colors duration-300 hover:bg-primary-green group"
                >
                  Monthly P&L (CSV)
                  <div className="ml-2 shrink-0">
                    <Image
                      src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/af5db15b-f5d8-4f95-970a-a043630c22a7-goodcrypto-app/assets/svgs/arrow-deg-4.svg?"
                      width={14}
                      height={14}
                      alt="arrow"
                    />
                  </div>
                </Link>
                <Link
                  href="/reports/verified-transactions.csv"
                  className="inline-flex items-center justify-center px-8 py-4 font-body text-base font-bold leading-none text-black bg-white rounded-full transition-colors duration-300 hover:bg-primary-green group"
                >
                  Verified Transaction List (CSV)
                  <div className="ml-2 shrink-0">
                    <Image
                      src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/af5db15b-f5d8-4f95-970a-a043630c22a7-goodcrypto-app/assets/svgs/arrow-deg-4.svg?"
                      width={14}
                      height={14}
                      alt="arrow"
                    />
                  </div>
                </Link>
                <Link
                  href="/reports/methodology.pdf"
                  className="inline-flex items-center justify-center px-8 py-4 font-body text-base font-bold leading-none text-black bg-white rounded-full transition-colors duration-300 hover:bg-primary-green group"
                >
                  Methodology (PDF)
                  <div className="ml-2 shrink-0">
                    <Image
                      src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/af5db15b-f5d8-4f95-970a-a043630c22a7-goodcrypto-app/assets/svgs/arrow-deg-4.svg?"
                      width={14}
                      height={14}
                      alt="arrow"
                    />
                  </div>
                </Link>
              </div>
              <p className="text-sm text-text-muted">
                Past performance is illustrative and not a promise. Trading crypto involves risk and volatility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section id="case-studies" className="bg-background-primary py-20 md:py-[104px]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-20">
          <h2 className="text-center text-4xl lg:text-[40px] font-bold tracking-tight text-text-primary mb-12">
            Case Studies — <span className="text-primary-green">Real users, verified outcomes</span>
          </h2>

          <div className="bg-background-secondary border border-border-subtle rounded-3xl p-8 mb-6 transition-all duration-300 ease-in-out hover:border-primary-green/30 hover:shadow-[0_0_40px_rgba(0,255,127,0.15)]">
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="flex-shrink-0">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/af5db15b-f5d8-4f95-970a-a043630c22a7/generated_images/polished-case-study-card-with-abstract-g-7d81bcc2-20251006120609.jpg?"
                  width={300}
                  height={150}
                  alt="Case study card with quote, small P&L chart, and a verified link"
                  className="rounded-2xl"
                />
              </div>
              <div className="flex-grow">
                <h3 className="text-2xl font-semibold text-primary-green mb-2">User A (Pro Plan)</h3>
                <p className="text-base text-text-secondary leading-normal">
                  Ran P.O.V Sniper for 30 days on a $50k deploy. Net P&L: <span className="text-primary-green font-semibold">+$8,950</span> (after fees). Win rate: <span className="text-primary-green font-semibold">69%</span>. Strategy: aggressive launch-sniping with conservative stop-loss. Includes anonymized on-chain proof link.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-background-tertiary border border-border-emphasis rounded-2xl p-6 text-center">
            <p className="text-base text-text-secondary">
              <span className="text-primary-green font-semibold">Want your results featured?</span> Submit your verified on-chain logs for review.
            </p>
          </div>
        </div>
      </section>

      {/* VERIFICATION BADGES */}
      <section id="verification-badges" className="bg-background-primary py-20 md:py-[104px]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-20">
          <h2 className="text-center text-4xl lg:text-[40px] font-bold tracking-tight text-text-primary mb-12">
            Verified Reports & <span className="text-primary-green">Audit</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-background-secondary border border-border-subtle rounded-3xl p-8 text-center transition-all duration-300 ease-in-out hover:border-primary-green/30 hover:shadow-[0_0_40px_rgba(0,255,127,0.15)]">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary-green/10 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-primary-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary-green mb-2">Third-party audit</h3>
              <p className="text-base text-text-secondary">Smart contract & backend audit (PDF)</p>
            </div>

            <div className="bg-background-secondary border border-border-subtle rounded-3xl p-8 text-center transition-all duration-300 ease-in-out hover:border-primary-green/30 hover:shadow-[0_0_40px_rgba(0,255,127,0.15)]">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary-green/10 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-primary-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary-green mb-2">On-chain verification</h3>
              <p className="text-base text-text-secondary">Link to sample tx list with block explorer proof</p>
            </div>

            <div className="bg-background-secondary border border-border-subtle rounded-3xl p-8 text-center transition-all duration-300 ease-in-out hover:border-primary-green/30 hover:shadow-[0_0_40px_rgba(0,255,127,0.15)]">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary-green/10 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-primary-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary-green mb-2">Security</h3>
              <p className="text-base text-text-secondary">Non-custodial, API key encrypted, never holds user funds</p>
            </div>
          </div>
        </div>
      </section>

      {/* CHARTS & VISUALS */}
      <section id="charts" className="bg-background-primary py-20 md:py-[104px]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-20">
          <h2 className="text-center text-4xl lg:text-[40px] font-bold tracking-tight text-text-primary mb-6">
            Charts & <span className="text-primary-green">Visuals</span>
          </h2>

          <div className="mb-12 text-center">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/af5db15b-f5d8-4f95-970a-a043630c22a7/generated_images/large-cumulative-equity-curve-chart-with-2b3d933b-20251006120558.jpg?"
              width={1200}
              height={675}
              alt="Equity curve chart with KPI cards and an on-chain verified badge"
              className="rounded-2xl w-full"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-background-secondary border border-border-subtle rounded-3xl p-8">
              <h3 className="text-xl font-semibold text-primary-green mb-4">Equity curve (All-time)</h3>
              <p className="text-base text-text-secondary mb-4">Cumulative P&L over time</p>
              <div className="h-48 bg-background-tertiary rounded-lg flex items-center justify-center">
                <p className="text-text-muted">Chart placeholder - data wired to live API</p>
              </div>
            </div>

            <div className="bg-background-secondary border border-border-subtle rounded-3xl p-8">
              <h3 className="text-xl font-semibold text-primary-green mb-4">Win rate by hour</h3>
              <p className="text-base text-text-secondary mb-4">Heatmap of profitable launch windows</p>
              <div className="h-48 bg-background-tertiary rounded-lg flex items-center justify-center">
                <p className="text-text-muted">Chart placeholder - data wired to live API</p>
              </div>
            </div>

            <div className="bg-background-secondary border border-border-subtle rounded-3xl p-8">
              <h3 className="text-xl font-semibold text-primary-green mb-4">Avg return by token category</h3>
              <p className="text-base text-text-secondary mb-4">Bar chart (launch tokens vs established)</p>
              <div className="h-48 bg-background-tertiary rounded-lg flex items-center justify-center">
                <p className="text-text-muted">Chart placeholder - data wired to live API</p>
              </div>
            </div>

            <div className="bg-background-secondary border border-border-subtle rounded-3xl p-8">
              <h3 className="text-xl font-semibold text-primary-green mb-4">Slippage & fees breakdown</h3>
              <p className="text-base text-text-secondary mb-4">Pie chart</p>
              <div className="h-48 bg-background-tertiary rounded-lg flex items-center justify-center">
                <p className="text-text-muted">Chart placeholder - data wired to live API</p>
              </div>
            </div>
          </div>

          <p className="text-center text-sm text-text-muted">
            Charts update live via secure WebSocket feed.
          </p>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="bg-background-primary py-20 md:py-[104px]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-20">
          <h2 className="text-center text-4xl lg:text-[40px] font-bold tracking-tight text-text-primary mb-12">
            Testimonials <span className="text-primary-green">(anonymized)</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-background-secondary border border-border-subtle rounded-3xl p-8 transition-all duration-300 ease-in-out hover:border-primary-green/30 hover:shadow-[0_0_40px_rgba(0,255,127,0.15)]">
              <div className="mb-4">
                <svg className="w-10 h-10 text-primary-green" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="text-lg text-text-secondary leading-relaxed mb-4">
                "P.O.V Sniper repeatedly caught launches others missed — simple to set and the on-chain proof convinced our compliance team."
              </p>
              <p className="text-sm text-text-muted">— Trader, Europe</p>
            </div>

            <div className="bg-background-secondary border border-border-subtle rounded-3xl p-8 transition-all duration-300 ease-in-out hover:border-primary-green/30 hover:shadow-[0_0_40px_rgba(0,255,127,0.15)]">
              <div className="mb-4">
                <svg className="w-10 h-10 text-primary-green" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="text-lg text-text-secondary leading-relaxed mb-4">
                "The demo showed real trades in under 10 minutes. Setup was fast and the non-custodial approach gave us confidence."
              </p>
              <p className="text-sm text-text-muted">— Quant trader, APAC</p>
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
            quality={100}
          />
        </div>

        <div className="container relative z-10">
          <div className="flex flex-col items-center justify-center text-center gap-8">
            <div className="max-w-3xl">
              <h2 className="text-[64px] font-bold leading-[1.1] text-white uppercase mb-8">
                Start Your <span className="text-primary-green">Free 7-Day Demo</span>
              </h2>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link
                  href="/demo"
                  className="inline-flex items-center justify-center bg-white text-background-primary rounded-full py-[15px] px-8 text-base font-semibold uppercase transition-transform duration-300 hover:scale-105"
                >
                  START A FREE 7-DAY DEMO
                  <span className="ml-2 flex-shrink-0">
                    <Image
                      src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/af5db15b-f5d8-4f95-970a-a043630c22a7-goodcrypto-app/assets/svgs/arrow-deg-4.svg?"
                      alt="arrow icon"
                      width={14}
                      height={14}
                    />
                  </span>
                </Link>
                <Link
                  href="/reports/latest.pdf"
                  className="inline-flex items-center justify-center bg-transparent border border-white/30 text-white rounded-full py-[15px] px-8 text-base font-semibold uppercase transition-all duration-300 hover:bg-white/10 hover:border-primary-green"
                >
                  DOWNLOAD TRANSPARENCY REPORT (PDF)
                </Link>
              </div>
              <p className="mt-6 text-sm font-normal leading-relaxed text-text-muted max-w-2xl mx-auto">
                Trading crypto is risky. Use risk capital you can afford to lose. P.O.V Sniper provides tools and automation; it does not guarantee profits.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}