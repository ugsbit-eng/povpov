import Footer from "@/components/sections/footer";
import Image from "next/image";

export default function GuidePage() {
  return (
    <main className="min-h-screen bg-background-primary text-text-primary">
      {/* Hero Section */}
      <section className="relative bg-background-primary py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/af5db15b-f5d8-4f95-970a-a043630c22a7-goodcrypto-app/assets/svgs/lines-bg-3.svg?"
            alt=""
            fill
            className="object-cover"
          />
        </div>
        <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
          <h1 className="text-4xl lg:text-6xl font-bold tracking-tight text-center mb-6">
            Trading Bot <span className="text-primary-green">Guide</span>
          </h1>
          <p className="text-lg lg:text-xl text-text-secondary text-center max-w-3xl mx-auto">
            Master the art of automated trading with goodcryptoX. This comprehensive guide will help you set up, configure, and optimize your Solana trading bots for maximum profitability.
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="bg-background-primary py-20 lg:py-28">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-8">
              <span className="text-primary-green">Overview</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-base lg:text-lg text-text-secondary leading-relaxed">
                  goodcryptoX trading bots are advanced automated tools designed to execute trades on the Solana blockchain with speed and precision. These bots leverage cutting-edge algorithms to monitor market conditions 24/7 and execute trades based on your predefined strategies.
                </p>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-text-primary">Key Benefits:</h3>
                  <ul className="space-y-3 text-text-secondary">
                    <li className="flex items-start gap-3">
                      <span className="text-primary-green mt-1">•</span>
                      <span>24/7 automated trading without constant monitoring</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary-green mt-1">•</span>
                      <span>Lightning-fast execution on Solana network</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary-green mt-1">•</span>
                      <span>Advanced risk management with stop-loss and take-profit</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary-green mt-1">•</span>
                      <span>Multiple strategy options for different market conditions</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary-green mt-1">•</span>
                      <span>Non-custodial solution - you maintain full control of your funds</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="relative h-[400px] rounded-2xl overflow-hidden border border-border-subtle">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/af5db15b-f5d8-4f95-970a-a043630c22a7/generated_images/modern-dark-themed-trading-dashboard-int-59bc508a-20251006073744.jpg?"
                  alt="Trading Bot Overview Dashboard"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick-Start Section */}
      <section className="bg-background-secondary py-20 lg:py-28">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-center">
              <span className="text-primary-green">Quick-Start</span> in 5 Steps
            </h2>
            
            <div className="space-y-8 mb-12">
              {[
                {
                  step: "01",
                  title: "Connect Your Wallet",
                  description: "Link your Solana wallet (Phantom, Solflare, or any compatible wallet) to the goodcryptoX platform. Ensure you have SOL for transaction fees."
                },
                {
                  step: "02",
                  title: "Fund Your Trading Account",
                  description: "Transfer the tokens you want to trade to your connected wallet. Start with a small amount to familiarize yourself with the platform."
                },
                {
                  step: "03",
                  title: "Choose Your Strategy",
                  description: "Select from Grid Bot, DCA Bot, or Sniper Bot based on your trading goals. Each strategy is optimized for different market conditions."
                },
                {
                  step: "04",
                  title: "Configure Parameters",
                  description: "Set your entry price, exit targets, stop-loss levels, and position size. Use recommended presets or customize for your risk tolerance."
                },
                {
                  step: "05",
                  title: "Launch and Monitor",
                  description: "Activate your bot and monitor performance through the dashboard. Adjust parameters as needed based on market conditions."
                }
              ].map((item, index) => (
                <div key={index} className="flex gap-6 items-start p-6 bg-background-tertiary rounded-xl border border-border-subtle hover:border-primary-green transition-all">
                  <div className="flex-shrink-0 w-16 h-16 bg-primary-green/10 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary-green">{item.step}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-text-primary mb-2">{item.title}</h3>
                    <p className="text-text-secondary leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="relative h-[300px] rounded-2xl overflow-hidden border border-border-subtle">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/af5db15b-f5d8-4f95-970a-a043630c22a7/generated_images/isometric-3d-illustration-showing-a-5-st-f978c0d2-20251006073754.jpg?"
                alt="Quick Start Process Diagram"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Installation Section */}
      <section className="bg-background-primary py-20 lg:py-28">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-8">
              <span className="text-primary-green">Installation</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative h-[350px] rounded-2xl overflow-hidden border border-border-subtle">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/af5db15b-f5d8-4f95-970a-a043630c22a7/generated_images/3d-rendered-solana-wallet-interface-with-c3bcf8bd-20251006073802.jpg?"
                  alt="Installation Steps Illustration"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="space-y-6">
                <p className="text-base lg:text-lg text-text-secondary leading-relaxed">
                  goodcryptoX is a web-based platform that requires no installation. Simply access the platform through your browser and connect your wallet to get started.
                </p>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-text-primary">Prerequisites:</h3>
                  <ul className="space-y-3 text-text-secondary">
                    <li className="flex items-start gap-3">
                      <span className="text-primary-green mt-1">✓</span>
                      <span>A compatible Solana wallet (Phantom, Solflare, Backpack, etc.)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary-green mt-1">✓</span>
                      <span>SOL tokens for transaction fees (minimum 0.1 SOL recommended)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary-green mt-1">✓</span>
                      <span>Modern web browser (Chrome, Firefox, Brave, or Edge)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary-green mt-1">✓</span>
                      <span>Stable internet connection for uninterrupted bot operation</span>
                    </li>
                  </ul>
                </div>

                <div className="p-4 bg-background-tertiary rounded-lg border border-border-emphasis">
                  <p className="text-sm text-text-secondary">
                    <span className="text-primary-green font-semibold">Pro Tip:</span> Enable browser notifications to receive real-time alerts about your bot's trading activity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Configuration Section */}
      <section className="bg-background-secondary py-20 lg:py-28">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-12">
              <span className="text-primary-green">Configuration</span>
            </h2>
            
            <div className="space-y-8">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-6 bg-background-tertiary rounded-xl border border-border-subtle">
                  <h3 className="text-xl font-semibold text-primary-green mb-4">Grid Bot Settings</h3>
                  <ul className="space-y-2 text-text-secondary text-sm">
                    <li>• Price range (upper/lower bounds)</li>
                    <li>• Number of grid levels</li>
                    <li>• Investment amount per grid</li>
                    <li>• Profit percentage per trade</li>
                  </ul>
                </div>

                <div className="p-6 bg-background-tertiary rounded-xl border border-border-subtle">
                  <h3 className="text-xl font-semibold text-primary-green mb-4">DCA Bot Settings</h3>
                  <ul className="space-y-2 text-text-secondary text-sm">
                    <li>• Investment amount per buy</li>
                    <li>• Buy interval (time or price drop)</li>
                    <li>• Maximum number of orders</li>
                    <li>• Take profit percentage</li>
                  </ul>
                </div>

                <div className="p-6 bg-background-tertiary rounded-xl border border-border-subtle">
                  <h3 className="text-xl font-semibold text-primary-green mb-4">Sniper Bot Settings</h3>
                  <ul className="space-y-2 text-text-secondary text-sm">
                    <li>• Token contract address</li>
                    <li>• Buy amount and slippage</li>
                    <li>• Auto-sell conditions</li>
                    <li>• Gas price priority</li>
                  </ul>
                </div>
              </div>

              <div className="relative h-[400px] rounded-2xl overflow-hidden border border-border-subtle">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/af5db15b-f5d8-4f95-970a-a043630c22a7/generated_images/advanced-trading-bot-configuration-dashb-cea4f78d-20251006073811.jpg?"
                  alt="Bot Configuration Interface"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="bg-background-tertiary p-6 rounded-xl border border-border-subtle">
                <h3 className="text-xl font-semibold text-text-primary mb-4">Risk Management Parameters</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-primary-green font-semibold mb-3">Stop-Loss Settings</h4>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      Set a maximum loss percentage to automatically close positions when the price moves against you. Recommended: 5-15% for volatile markets.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-primary-green font-semibold mb-3">Take-Profit Settings</h4>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      Define target profit levels to secure gains automatically. Use multiple take-profit levels to scale out of positions gradually.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategies Section */}
      <section className="bg-background-primary py-20 lg:py-28">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-center">
              Trading <span className="text-primary-green">Strategies</span>
            </h2>
            
            <div className="space-y-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-text-primary">Grid Trading Strategy</h3>
                  <p className="text-text-secondary leading-relaxed">
                    Best for ranging markets with predictable price oscillations. The bot places buy and sell orders at predetermined intervals, profiting from market volatility.
                  </p>
                  <ul className="space-y-2 text-text-secondary">
                    <li className="flex items-start gap-3">
                      <span className="text-primary-green">→</span>
                      <span>Ideal for sideways or ranging markets</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary-green">→</span>
                      <span>Generates consistent small profits over time</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary-green">→</span>
                      <span>Works well with established tokens like SOL, BTC, ETH</span>
                    </li>
                  </ul>
                </div>
                <div className="relative h-[300px] rounded-2xl overflow-hidden border border-border-subtle">
                  <Image
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/af5db15b-f5d8-4f95-970a-a043630c22a7/generated_images/grid-trading-strategy-visualization-show-b6b7f3ec-20251006073819.jpg?"
                    alt="Grid Trading Strategy Diagram"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="relative h-[300px] rounded-2xl overflow-hidden border border-border-subtle order-2 md:order-1">
                  <Image
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/af5db15b-f5d8-4f95-970a-a043630c22a7/generated_images/dollar-cost-averaging-strategy-chart-sho-5693703c-20251006073826.jpg?"
                    alt="DCA Trading Strategy Diagram"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="space-y-4 order-1 md:order-2">
                  <h3 className="text-2xl font-bold text-text-primary">DCA Strategy</h3>
                  <p className="text-text-secondary leading-relaxed">
                    Dollar Cost Averaging systematically buys during price dips, lowering your average entry price and maximizing profits when the market recovers.
                  </p>
                  <ul className="space-y-2 text-text-secondary">
                    <li className="flex items-start gap-3">
                      <span className="text-primary-green">→</span>
                      <span>Perfect for accumulating positions during dips</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary-green">→</span>
                      <span>Reduces emotional trading decisions</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary-green">→</span>
                      <span>Effective in trending and volatile markets</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-text-primary">Sniper Strategy</h3>
                  <p className="text-text-secondary leading-relaxed">
                    Execute lightning-fast trades on new token launches or specific price targets. Perfect for catching opportunities in highly volatile situations.
                  </p>
                  <ul className="space-y-2 text-text-secondary">
                    <li className="flex items-start gap-3">
                      <span className="text-primary-green">→</span>
                      <span>Automated buying at token launch or liquidity addition</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary-green">→</span>
                      <span>Front-running capabilities for time-sensitive trades</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary-green">→</span>
                      <span>High risk, high reward for experienced traders</span>
                    </li>
                  </ul>
                </div>
                <div className="relative h-[300px] rounded-2xl overflow-hidden border border-border-subtle">
                  <Image
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/af5db15b-f5d8-4f95-970a-a043630c22a7/generated_images/high-speed-sniper-bot-visualization-with-6b599265-20251006073835.jpg?"
                    alt="Sniper Trading Strategy Diagram"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Risk & Security Section */}
      <section className="bg-background-secondary py-20 lg:py-28">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-12">
              Risk Management & <span className="text-primary-green">Security</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div className="space-y-6">
                <div className="p-6 bg-background-tertiary rounded-xl border border-border-subtle">
                  <h3 className="text-xl font-semibold text-primary-green mb-4">Risk Management Best Practices</h3>
                  <ul className="space-y-3 text-text-secondary">
                    <li className="flex items-start gap-3">
                      <span className="text-primary-green mt-1">1.</span>
                      <span>Never invest more than you can afford to lose</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary-green mt-1">2.</span>
                      <span>Start with small positions to test strategies</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary-green mt-1">3.</span>
                      <span>Always use stop-loss orders to limit downside</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary-green mt-1">4.</span>
                      <span>Diversify across multiple strategies and tokens</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary-green mt-1">5.</span>
                      <span>Monitor bot performance regularly and adjust parameters</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary-green mt-1">6.</span>
                      <span>Keep sufficient SOL for transaction fees at all times</span>
                    </li>
                  </ul>
                </div>

                <div className="p-6 bg-background-tertiary rounded-xl border border-border-subtle">
                  <h3 className="text-xl font-semibold text-primary-green mb-4">Security Features</h3>
                  <ul className="space-y-3 text-text-secondary">
                    <li className="flex items-start gap-3">
                      <span className="text-primary-green">✓</span>
                      <span>Non-custodial architecture - you control your private keys</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary-green">✓</span>
                      <span>Encrypted wallet connections and secure API endpoints</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary-green">✓</span>
                      <span>Regular security audits and smart contract reviews</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary-green">✓</span>
                      <span>Two-factor authentication support for account access</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="relative h-[500px] rounded-2xl overflow-hidden border border-border-subtle">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/af5db15b-f5d8-4f95-970a-a043630c22a7/generated_images/cybersecurity-and-risk-management-visual-9c223377-20251006073843.jpg?"
                  alt="Security and Risk Management Illustration"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-background-primary py-20 lg:py-28">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-center">
              Frequently Asked <span className="text-primary-green">Questions</span>
            </h2>
            
            <div className="space-y-6">
              {[
                {
                  question: "How much capital do I need to start trading with bots?",
                  answer: "You can start with as little as $50-$100 worth of tokens. However, we recommend starting with at least $500 to see meaningful results while maintaining proper risk management. Remember to keep extra SOL for transaction fees (approximately 0.1-0.2 SOL)."
                },
                {
                  question: "Are the trading bots running 24/7?",
                  answer: "Yes, once activated, your bots run continuously on our secure servers. They monitor the market and execute trades automatically based on your configured parameters, even when you're not actively watching."
                },
                {
                  question: "Can I stop or modify my bot after it's running?",
                  answer: "Absolutely! You can pause, stop, or adjust your bot's parameters at any time through the dashboard. Changes take effect immediately, though any pending orders will complete first."
                },
                {
                  question: "What fees does goodcryptoX charge?",
                  answer: "goodcryptoX charges a small percentage of profits generated (typically 2-5% depending on your subscription tier). You'll also pay standard Solana network transaction fees, which are usually under $0.01 per transaction."
                },
                {
                  question: "How do I know which strategy to choose?",
                  answer: "Start by analyzing market conditions: Use Grid Bot for ranging markets, DCA Bot for accumulating during dips, and Sniper Bot for new token launches. We recommend trying Grid Bot first as it's most beginner-friendly."
                },
                {
                  question: "Is my wallet and funds safe?",
                  answer: "Yes. goodcryptoX is non-custodial, meaning you always maintain control of your private keys and funds. The bots only have permission to execute trades; they cannot withdraw your funds to other addresses."
                },
                {
                  question: "What happens if the bot makes a losing trade?",
                  answer: "Your configured stop-loss will automatically close the position to prevent further losses. No strategy wins 100% of the time, which is why proper risk management and stop-loss settings are crucial."
                },
                {
                  question: "Can I run multiple bots at the same time?",
                  answer: "Yes! You can run multiple bots with different strategies and tokens simultaneously. This allows you to diversify your trading approach and spread risk across different assets."
                }
              ].map((faq, index) => (
                <div key={index} className="p-6 bg-background-secondary rounded-xl border border-border-subtle hover:border-primary-green transition-all">
                  <h3 className="text-lg font-semibold text-text-primary mb-3">{faq.question}</h3>
                  <p className="text-text-secondary leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 relative h-[250px] rounded-2xl overflow-hidden border border-border-subtle">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/af5db15b-f5d8-4f95-970a-a043630c22a7/generated_images/friendly-faq-help-center-visualization-w-02caa761-20251006073853.jpg?"
                alt="FAQ Illustration"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}