// Knowledge Base content structure and retrieval

export interface Article {
  slug: string;
  title: string;
  description: string;
  author?: string;
  updatedAt?: string;
  version?: string;
  tags?: string[];
  readTime?: string;
  content?: string;
}

export interface Category {
  slug: string;
  title: string;
  description: string;
  articles?: Article[];
}

// Content database - in production, this would come from a CMS or file system
const kbContent: Category[] = [
  {
    slug: "getting-started",
    title: "Getting Started",
    description: "Learn the basics and get up and running in minutes",
    articles: [
      {
        slug: "welcome",
        title: "Welcome & Overview",
        description: "What P.O.V Sniper BOT is, who should use it, and security notes",
        author: "P.O.V Team",
        updatedAt: "January 2025",
        version: "1.0",
        tags: ["introduction", "overview", "security"],
        readTime: "5 min read"
      },
      {
        slug: "how-it-works",
        title: "How It Works",
        description: "High-level architecture: wallets, DEXs, and order engine",
        author: "P.O.V Team",
        updatedAt: "January 2025",
        version: "1.0",
        tags: ["architecture", "technical"],
        readTime: "8 min read"
      },
      {
        slug: "quickstart",
        title: "Quickstart: Setup in 10 Minutes",
        description: "Get started quickly with wallet setup, funding, and first trade",
        author: "P.O.V Team",
        updatedAt: "January 2025",
        version: "1.0",
        tags: ["quickstart", "tutorial", "beginner"],
        readTime: "10 min read"
      },
      {
        slug: "system-requirements",
        title: "System Requirements",
        description: "OS, recommended VPS specs, and browser compatibility",
        author: "P.O.V Team",
        updatedAt: "January 2025",
        version: "1.0",
        tags: ["requirements", "hardware"],
        readTime: "3 min read"
      },
      {
        slug: "pricing-plans",
        title: "Pricing & Plans",
        description: "Feature comparison across different subscription tiers",
        author: "P.O.V Team",
        updatedAt: "January 2025",
        version: "1.0",
        tags: ["pricing", "plans", "features"],
        readTime: "4 min read"
      }
    ]
  },
  {
    slug: "installation",
    title: "Installation & Setup",
    description: "Complete guide to installing and configuring your bot",
    articles: [
      {
        slug: "install-guide",
        title: "Install P.O.V Sniper BOT",
        description: "Complete installation guide for Docker, binary, and cloud deployment",
        author: "P.O.V Team",
        updatedAt: "January 2025",
        version: "1.0",
        tags: ["installation", "docker", "deployment"],
        readTime: "15 min read"
      },
      {
        slug: "wallet-setup",
        title: "Configuring Wallet and Keys",
        description: "Setup Phantom, Ledger, or Solflare with security best practices",
        author: "P.O.V Team",
        updatedAt: "January 2025",
        version: "1.0",
        tags: ["wallet", "security", "keys"],
        readTime: "12 min read"
      },
      {
        slug: "dex-connection",
        title: "Connecting to Solana DEXs",
        description: "Configure Raydium, Orca, Jupiter, and Serum integrations",
        author: "P.O.V Team",
        updatedAt: "January 2025",
        version: "1.0",
        tags: ["DEX", "integration", "solana"],
        readTime: "10 min read"
      },
      {
        slug: "api-keys",
        title: "Setting Up API Keys & RPC",
        description: "Configure node endpoints, rate limiting, and API access",
        author: "P.O.V Team",
        updatedAt: "January 2025",
        version: "1.0",
        tags: ["API", "RPC", "configuration"],
        readTime: "8 min read"
      },
      {
        slug: "vps-deployment",
        title: "Running on VPS / Docker / Desktop",
        description: "Platform-specific deployment guides for various environments",
        author: "P.O.V Team",
        updatedAt: "January 2025",
        version: "1.0",
        tags: ["VPS", "docker", "deployment"],
        readTime: "12 min read"
      }
    ]
  },
  {
    slug: "strategies",
    title: "Strategies & Guides",
    description: "Master trading strategies from Grid to POV detection",
    articles: [
      {
        slug: "strategy-overview",
        title: "Strategy Overview",
        description: "Introduction to Grid, DCA, Scalping, Trend Following, and more",
        author: "P.O.V Team",
        updatedAt: "January 2025",
        version: "1.0",
        tags: ["strategies", "overview"],
        readTime: "10 min read"
      },
      {
        slug: "grid-trading",
        title: "Grid Trading Strategy",
        description: "Configure Grid Trading with examples and backtest results",
        author: "P.O.V Team",
        updatedAt: "January 2025",
        version: "1.0",
        tags: ["grid", "strategy", "tutorial"],
        readTime: "15 min read"
      },
      {
        slug: "dca-strategy",
        title: "DCA Strategy Explained",
        description: "Dollar Cost Averaging use cases and parameter configuration",
        author: "P.O.V Team",
        updatedAt: "January 2025",
        version: "1.0",
        tags: ["DCA", "strategy"],
        readTime: "12 min read"
      },
      {
        slug: "scalping-guide",
        title: "Scalping Guide",
        description: "Risk settings, slippage handling, and quick profit strategies",
        author: "P.O.V Team",
        updatedAt: "January 2025",
        version: "1.0",
        tags: ["scalping", "advanced"],
        readTime: "14 min read"
      },
      {
        slug: "pov-strategy",
        title: "POV Strategy Deep-Dive",
        description: "Price, Orderflow, Volume detection with pseudocode and charts",
        author: "P.O.V Team",
        updatedAt: "January 2025",
        version: "1.0",
        tags: ["POV", "advanced", "orderflow"],
        readTime: "20 min read"
      },
      {
        slug: "custom-strategy",
        title: "Custom Strategy Builder",
        description: "Build your own strategies with our visual builder tool",
        author: "P.O.V Team",
        updatedAt: "January 2025",
        version: "1.0",
        tags: ["custom", "builder", "advanced"],
        readTime: "18 min read"
      }
    ]
  },
  {
    slug: "bot-controls",
    title: "Bot Controls & Settings",
    description: "Understand every feature and setting of your bot",
    articles: [
      {
        slug: "ui-walkthrough",
        title: "Bot UI Walkthrough",
        description: "Complete guide to dashboard, charts, and control panels",
        author: "P.O.V Team",
        updatedAt: "January 2025",
        version: "1.0",
        tags: ["UI", "interface", "tutorial"],
        readTime: "12 min read"
      },
      {
        slug: "risk-management",
        title: "Risk Management Settings",
        description: "Configure TP/SL, max drawdown, and volatility filters",
        author: "P.O.V Team",
        updatedAt: "January 2025",
        version: "1.0",
        tags: ["risk", "settings", "important"],
        readTime: "15 min read"
      },
      {
        slug: "backtester",
        title: "Backtester Usage",
        description: "Test strategies and interpret performance results",
        author: "P.O.V Team",
        updatedAt: "January 2025",
        version: "1.0",
        tags: ["backtest", "testing"],
        readTime: "10 min read"
      },
      {
        slug: "alerts-notifications",
        title: "Alerts & Notifications",
        description: "Setup Telegram, Discord, and email notifications",
        author: "P.O.V Team",
        updatedAt: "January 2025",
        version: "1.0",
        tags: ["alerts", "notifications"],
        readTime: "8 min read"
      },
      {
        slug: "reports-export",
        title: "Exporting Reports & Trade History",
        description: "Generate and export detailed trading reports",
        author: "P.O.V Team",
        updatedAt: "January 2025",
        version: "1.0",
        tags: ["reports", "export"],
        readTime: "6 min read"
      }
    ]
  },
  {
    slug: "security",
    title: "Security & Best Practices",
    description: "Keep your funds safe with proper security measures",
    articles: [
      {
        slug: "private-key-handling",
        title: "Private Key Handling",
        description: "Security posture and recommended practices for key management",
        author: "P.O.V Team",
        updatedAt: "January 2025",
        version: "1.0",
        tags: ["security", "keys", "critical"],
        readTime: "10 min read"
      },
      {
        slug: "wallet-types",
        title: "Read-Only vs Trading Wallet",
        description: "When to use different wallet configurations for safety",
        author: "P.O.V Team",
        updatedAt: "January 2025",
        version: "1.0",
        tags: ["security", "wallets"],
        readTime: "7 min read"
      },
      {
        slug: "backups-recovery",
        title: "Backups & Recovery",
        description: "Seed phrase management and hardware wallet integration",
        author: "P.O.V Team",
        updatedAt: "January 2025",
        version: "1.0",
        tags: ["backup", "recovery", "critical"],
        readTime: "9 min read"
      },
      {
        slug: "attack-vectors",
        title: "Common Attack Vectors",
        description: "RPC poisoning, phishing, and mitigation strategies",
        author: "P.O.V Team",
        updatedAt: "January 2025",
        version: "1.0",
        tags: ["security", "threats"],
        readTime: "12 min read"
      },
      {
        slug: "compliance",
        title: "Compliance & Legal Notes",
        description: "Legal disclaimer and compliance considerations",
        author: "P.O.V Team",
        updatedAt: "January 2025",
        version: "1.0",
        tags: ["legal", "compliance"],
        readTime: "5 min read"
      }
    ]
  },
  {
    slug: "troubleshooting",
    title: "Troubleshooting & FAQ",
    description: "Solutions to common issues and frequently asked questions",
    articles: [
      {
        slug: "checklist",
        title: "Troubleshooting Checklist",
        description: "Step-by-step guide to diagnose common problems",
        author: "P.O.V Team",
        updatedAt: "January 2025",
        version: "1.0",
        tags: ["troubleshooting", "guide"],
        readTime: "8 min read"
      },
      {
        slug: "error-codes",
        title: "Error Codes & Resolution",
        description: "Complete reference table of error codes and fixes",
        author: "P.O.V Team",
        updatedAt: "January 2025",
        version: "1.0",
        tags: ["errors", "reference"],
        readTime: "10 min read"
      },
      {
        slug: "faq",
        title: "Frequently Asked Questions",
        description: "30+ common questions about minimum balance, latency, fees, and safety",
        author: "P.O.V Team",
        updatedAt: "January 2025",
        version: "1.0",
        tags: ["FAQ", "common"],
        readTime: "15 min read"
      },
      {
        slug: "support-channels",
        title: "Community & Support Channels",
        description: "Where to get help: Discord, Telegram, and email support",
        author: "P.O.V Team",
        updatedAt: "January 2025",
        version: "1.0",
        tags: ["support", "community"],
        readTime: "3 min read"
      }
    ]
  },
  {
    slug: "developer",
    title: "Developer & API Docs",
    description: "API reference and integration guides for developers",
    articles: [
      {
        slug: "api-overview",
        title: "API Overview",
        description: "Introduction to API endpoints and authentication",
        author: "P.O.V Team",
        updatedAt: "January 2025",
        version: "1.0",
        tags: ["API", "developer"],
        readTime: "8 min read"
      },
      {
        slug: "webhooks",
        title: "Webhooks & Events",
        description: "Event model for trade_executed, order_placed, and alerts",
        author: "P.O.V Team",
        updatedAt: "January 2025",
        version: "1.0",
        tags: ["webhooks", "events", "API"],
        readTime: "10 min read"
      },
      {
        slug: "api-examples",
        title: "API Request Examples",
        description: "Sample curl requests and JavaScript SDK snippets",
        author: "P.O.V Team",
        updatedAt: "January 2025",
        version: "1.0",
        tags: ["examples", "code", "API"],
        readTime: "12 min read"
      },
      {
        slug: "web-integration",
        title: "Web UI Component Integration",
        description: "Embed charts and simulated bot into your own applications",
        author: "P.O.V Team",
        updatedAt: "January 2025",
        version: "1.0",
        tags: ["integration", "web", "embedding"],
        readTime: "15 min read"
      },
      {
        slug: "sdk-guide",
        title: "SDK Examples",
        description: "JavaScript/TypeScript SDK for common tasks and workflows",
        author: "P.O.V Team",
        updatedAt: "January 2025",
        version: "1.0",
        tags: ["SDK", "javascript", "typescript"],
        readTime: "18 min read"
      }
    ]
  },
  {
    slug: "advanced",
    title: "Advanced Topics",
    description: "Deep dives into backtesting, optimization, and research",
    articles: [
      {
        slug: "backtesting-methodology",
        title: "Backtesting Methodology",
        description: "Data sources, slippage modeling, and performance metrics",
        author: "P.O.V Team",
        updatedAt: "January 2025",
        version: "1.0",
        tags: ["backtest", "advanced", "research"],
        readTime: "16 min read"
      },
      {
        slug: "parameter-optimization",
        title: "Parameter Optimization",
        description: "Optimize strategy parameters while avoiding overfitting",
        author: "P.O.V Team",
        updatedAt: "January 2025",
        version: "1.0",
        tags: ["optimization", "advanced"],
        readTime: "14 min read"
      },
      {
        slug: "risk-metrics",
        title: "Risk-Adjusted Performance",
        description: "Understanding Sharpe ratio, Sortino ratio, and other metrics",
        author: "P.O.V Team",
        updatedAt: "January 2025",
        version: "1.0",
        tags: ["risk", "metrics", "advanced"],
        readTime: "12 min read"
      },
      {
        slug: "multi-pair",
        title: "Multi-Pair & Portfolio Management",
        description: "Managing multiple trading pairs and portfolio allocation",
        author: "P.O.V Team",
        updatedAt: "January 2025",
        version: "1.0",
        tags: ["portfolio", "advanced"],
        readTime: "15 min read"
      },
      {
        slug: "roadmap",
        title: "Roadmap & Upcoming Features",
        description: "Future development plans and versioned feature releases",
        author: "P.O.V Team",
        updatedAt: "January 2025",
        version: "1.0",
        tags: ["roadmap", "future"],
        readTime: "6 min read"
      }
    ]
  },
  {
    slug: "changelog",
    title: "Changelog & Releases",
    description: "Track new features, updates, and migration guides",
    articles: [
      {
        slug: "v1-0-release",
        title: "Version 1.0 Release Notes",
        description: "Initial release with upgrade instructions and migration guides",
        author: "P.O.V Team",
        updatedAt: "January 2025",
        version: "1.0",
        tags: ["release", "changelog"],
        readTime: "8 min read"
      }
    ]
  },
  {
    slug: "glossary",
    title: "Glossary & Resources",
    description: "Terminology, external links, and educational content",
    articles: [
      {
        slug: "glossary",
        title: "Trading Glossary",
        description: "50+ terms: arbitrage, slippage, liquidity, mempool, and more",
        author: "P.O.V Team",
        updatedAt: "January 2025",
        version: "1.0",
        tags: ["glossary", "reference"],
        readTime: "12 min read"
      },
      {
        slug: "external-resources",
        title: "External Resources",
        description: "Solana docs, DEX documentation, and research papers",
        author: "P.O.V Team",
        updatedAt: "January 2025",
        version: "1.0",
        tags: ["resources", "links"],
        readTime: "5 min read"
      },
      {
        slug: "video-tutorials",
        title: "Video Tutorials",
        description: "YouTube and hosted video guides for visual learners",
        author: "P.O.V Team",
        updatedAt: "January 2025",
        version: "1.0",
        tags: ["video", "tutorials"],
        readTime: "varies"
      }
    ]
  }
];

export function getAllCategories(): Category[] {
  return kbContent;
}

export function getCategory(slug: string): Category | undefined {
  return kbContent.find(cat => cat.slug === slug);
}

export function getCategoryArticles(categorySlug: string): Article[] {
  const category = getCategory(categorySlug);
  return category?.articles || [];
}

export function getArticle(categorySlug: string, articleSlug: string): Article | undefined {
  const category = getCategory(categorySlug);
  return category?.articles?.find(article => article.slug === articleSlug);
}

export function getAdjacentArticles(categorySlug: string, articleSlug: string): { prev?: Article; next?: Article } {
  const articles = getCategoryArticles(categorySlug);
  const currentIndex = articles.findIndex(article => article.slug === articleSlug);
  
  return {
    prev: currentIndex > 0 ? articles[currentIndex - 1] : undefined,
    next: currentIndex < articles.length - 1 ? articles[currentIndex + 1] : undefined
  };
}

export function getArticleContent(categorySlug: string, articleSlug: string): string {
  // In production, this would load actual MDX content from files
  // For now, return placeholder content
  const article = getArticle(categorySlug, articleSlug);
  if (!article) return "";
  
  return `# ${article.title}\n\n${article.description}\n\nContent loading...`;
}