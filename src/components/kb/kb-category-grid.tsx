import Link from "next/link";
import { 
  Rocket, 
  Settings, 
  TrendingUp, 
  Sliders, 
  Shield, 
  AlertCircle, 
  Code, 
  Zap,
  FileText,
  BookOpen
} from "lucide-react";

const categories = [
  {
    slug: "getting-started",
    title: "Getting Started",
    description: "Learn the basics and get up and running in minutes",
    icon: Rocket,
    articleCount: 5,
    color: "text-primary-green"
  },
  {
    slug: "installation",
    title: "Installation & Setup",
    description: "Complete guide to installing and configuring your bot",
    icon: Settings,
    articleCount: 5,
    color: "text-accent-teal"
  },
  {
    slug: "strategies",
    title: "Strategies & Guides",
    description: "Master trading strategies from Grid to POV detection",
    icon: TrendingUp,
    articleCount: 6,
    color: "text-primary-green"
  },
  {
    slug: "bot-controls",
    title: "Bot Controls & Settings",
    description: "Understand every feature and setting of your bot",
    icon: Sliders,
    articleCount: 5,
    color: "text-accent-teal"
  },
  {
    slug: "security",
    title: "Security & Best Practices",
    description: "Keep your funds safe with proper security measures",
    icon: Shield,
    articleCount: 5,
    color: "text-warning-orange"
  },
  {
    slug: "troubleshooting",
    title: "Troubleshooting & FAQ",
    description: "Solutions to common issues and frequently asked questions",
    icon: AlertCircle,
    articleCount: 4,
    color: "text-error-red"
  },
  {
    slug: "developer",
    title: "Developer & API Docs",
    description: "API reference and integration guides for developers",
    icon: Code,
    articleCount: 5,
    color: "text-accent-teal"
  },
  {
    slug: "advanced",
    title: "Advanced Topics",
    description: "Deep dives into backtesting, optimization, and research",
    icon: Zap,
    articleCount: 5,
    color: "text-primary-green"
  },
  {
    slug: "changelog",
    title: "Changelog & Releases",
    description: "Track new features, updates, and migration guides",
    icon: FileText,
    articleCount: 1,
    color: "text-text-muted"
  },
  {
    slug: "glossary",
    title: "Glossary & Resources",
    description: "Terminology, external links, and educational content",
    icon: BookOpen,
    articleCount: 3,
    color: "text-text-secondary"
  }
];

export default function KBCategoryGrid() {
  return (
    <section className="py-16 lg:py-20 bg-background-primary">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
          Browse by <span className="text-primary-green">Category</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Link
                key={category.slug}
                href={`/knowledge-base/${category.slug}`}
                className="group bg-background-secondary border border-border-subtle rounded-2xl p-6 hover:border-primary-green/30 hover:shadow-[0_0_40px_rgba(0,255,127,0.15)] transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`w-12 h-12 rounded-xl bg-background-tertiary flex items-center justify-center mb-4 group-hover:bg-primary-green/10 transition-colors ${category.color}`}>
                  <Icon className="w-6 h-6" />
                </div>
                
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary-green transition-colors">
                  {category.title}
                </h3>
                
                <p className="text-text-secondary text-sm mb-4">
                  {category.description}
                </p>
                
                <div className="text-xs text-text-muted">
                  {category.articleCount} article{category.articleCount !== 1 ? 's' : ''}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}