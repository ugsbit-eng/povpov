"use client";

export default function EasyStepsSniper() {
  const steps = [
    {
      step: "01",
      title: "Connect Your Wallet",
      desc: "Click and choose one of the supported wallets. For Solana-native use, we recommend. If you use EVM chains or cross-chain features, you can also connect MetaMask or other compatible wallets."
    },
    {
      step: "02",
      title: "Claim Your $50 Trading Credit",
      desc: "Get started risk-free claim a one-time credited to your account. This gives you real trades to test the bot's performance without risking your own funds. The credit is applied instantly after you accept the offer and can be used to run the bot in live mode."
    },
    {
      step: "03",
      title: "Configure & Start the P.O.V Sniper BOT",
      desc: "You'll be redirected to the backend dashboard. From there you can choose a mode (Basic or Advanced), set the trade amount, select risk parameters (stop loss / take profit / max drawdown), pick a strategy, and start the bot. Basic mode provides recommended defaults for quick setup. You can still tweak trade size and risk."
    },
    {
      step: "04",
      title: "Optional: Advanced Mode (For Experienced Traders)",
      desc: "For experienced traders who want full control, enable. This unlocks deep strategy customization: multi-layer stop loss behavior, trailing stop parameters, take-profit scaling, custom signal filters, order routing preferences, and experimental BETA features for fine-grained order execution. Use this only if you understand the mechanics, otherwise stick with Basic."
    }
  ];

  return (
    <section className="bg-background-primary py-20 lg:py-28">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl lg:text-3xl font-bold text-text-primary mb-8">
            Easy Steps to Start Trading with <span className="text-primary-green">P.O.V Sniper Bot</span>
          </h3>
          <div className="space-y-6">
            {steps.map((step, idx) => (
              <div 
                key={idx} 
                className="flex gap-6 items-start p-6 bg-background-secondary rounded-xl border border-border-subtle hover:border-primary-green transition-all"
              >
                <div className="flex-shrink-0 w-16 h-16 bg-primary-green/10 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary-green">{step.step}</span>
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-semibold text-text-primary mb-2">{step.title}</h4>
                  <p className="text-text-secondary">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}