"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

const mainNavLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/results", label: "Results" },
  { href: "/guide", label: "Guide" },
  { href: "/guide-2", label: "Guide 2" },
  { href: "/bot", label: "Trading Bot" },
  { href: "/knowledge-base", label: "Knowledge Base" },
];

const moreNavLinks = [
  { href: "https://goodcrypto.app/about-us/", label: "About us" },
  { href: "https://goodcrypto.app/security/", label: "Security" },
  { href: "https://goodcrypto.app/blog/", label: "Blog" },
  { href: "https://goodcrypto.app/faq/", label: "FAQ" },
  { href: "https://goodcrypto.app/liquidity-checker/", label: "Liquidity Checker" },
  { href: "https://goodcrypto.app/crypto-screener-check-live-cryptocurrency-prices/", label: "Crypto Screener" },
];

const languages = [
  { code: "UA", href: "https://goodcrypto.app/uk/solana-trading-bot/" },
  { code: "RU", href: "https://goodcrypto.app/ru/solana-trading-bot/" },
  { code: "PT", href: "https://goodcrypto.app/pt-pt/bot-de-negociacao-solana/" },
  { code: "ES", href: "https://goodcrypto.app/es/solana-trading-bot/" },
  { code: "TR", href: "https://goodcrypto.app/tr/solana-trading-bot/" },
  { code: "FR", href: "https://goodcrypto.app/fr/solana-trading-bot/" },
  { code: "DE", href: "https://goodcrypto.app/de/solana-trading-bot/" },
  { code: "IT", href: "https://goodcrypto.app/it/solana-trading-bot/" },
  { code: "ID", href: "https://goodcrypto.app/id/solana-trading-bot/" },
  { code: "KO", href: "https://goodcrypto.app/ko/solana-trading-bot/" },
  { code: "VI", href: "https://goodcrypto.app/vi/solana-trading-bot/" },
  { code: "CN", href: "https://goodcrypto.app/zh-hans/solana-trading-bot/" },
];


export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const pathname = usePathname();

  const renderNavLink = (link: { href: string; label: string; external?: boolean; }, className?: string) => {
    const isActive = pathname === link.href;
    const commonClasses = `text-base font-medium hover:text-primary transition-colors ${isActive ? 'text-primary' : 'text-white'}`;
    if (link.external) {
      return (
        <a
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`${commonClasses} ${className}`}
        >
          {link.label}
        </a>
      );
    }
    return (
      <Link href={link.href} className={`${commonClasses} ${className}`}>
        {link.label}
      </Link>
    );
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[rgba(10,22,40,0.75)] backdrop-blur-lg border-b border-border-subtle">
      <div className="container mx-auto px-6 lg:px-20 h-20">
        <div className="hidden xl:grid grid-cols-3 items-center h-full">
          <div className="justify-self-start">
            <Link href="https://goodcrypto.app/" aria-label="Home page">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/POV-Sniper-Solana-auto-trading-bot-logo-top-1759778575228.png"
                alt="P.O.V Sniper BOT logo"
                width={300}
                height={72}
                priority
                className="h-16 w-auto"
              />
            </Link>
          </div>

          <nav className="flex items-center justify-center gap-8">
            {mainNavLinks.map((link) => <div key={link.href}>{renderNavLink(link)}</div>)}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center gap-1 text-white text-base font-medium hover:text-primary transition-colors outline-none">
                  More <ChevronDown className="h-4 w-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-background-secondary border-border-subtle" align="center">
                {moreNavLinks.map(link => (
                  <DropdownMenuItem key={link.href} asChild>
                    <Link href={link.href} className="text-text-primary focus:bg-background-tertiary w-full cursor-pointer">
                      {link.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>

          <div className="flex items-center justify-self-end gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center gap-1 text-white text-base font-medium hover:text-primary transition-colors outline-none border border-border-subtle rounded-md px-3 py-1.5">
                  EN <ChevronDown className="h-4 w-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-24 max-h-60 overflow-y-auto bg-background-secondary border-border-subtle">
                <DropdownMenuItem asChild>
                  <a href="#" className="text-text-primary focus:bg-background-tertiary w-full cursor-pointer">EN</a>
                </DropdownMenuItem>
                {languages.map(lang => (
                  <DropdownMenuItem key={lang.code} asChild>
                    <a href={lang.href} className="text-text-primary focus:bg-background-tertiary w-full cursor-pointer">
                      {lang.code}
                    </a>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <a
              href="https://click.goodcrypto.app/b9EC/8k29u7to"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 bg-white text-background-primary text-base font-semibold rounded-lg hover:bg-primary-green-alt transition-colors"
            >
              Launch App
            </a>
          </div>
        </div>

        {/* Mobile Header */}
        <div className="flex xl:hidden items-center justify-between h-full">
          <Link href="https://goodcrypto.app/" aria-label="Home page">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/POV-Sniper-Solana-auto-trading-bot-logo-top-1759778575228.png"
              alt="P.O.V Sniper BOT logo"
              width={240}
              height={56}
              priority
              className="h-12 w-auto"
            />
          </Link>
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6 text-white" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[340px] bg-background-secondary p-0 border-r border-border-subtle flex flex-col">
              <div className="flex items-center justify-between p-6 border-b border-border-subtle">
                <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                  <Image
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/POV-Sniper-Solana-auto-trading-bot-logo-top-1759778575228.png"
                    alt="P.O.V Sniper BOT logo"
                    width={180}
                    height={42}
                    className="h-10 w-auto"
                  />
                </Link>
                <SheetClose asChild>
                  <Button variant="ghost" size="icon">
                    <X className="h-6 w-6 text-text-secondary" />
                  </Button>
                </SheetClose>
              </div>

              <div className="flex-grow overflow-y-auto p-6">
                <nav className="flex flex-col gap-y-6">
                  {mainNavLinks.map(link => (
                    <div key={link.href} onClick={() => setIsMobileMenuOpen(false)}>{renderNavLink(link)}</div>
                  ))}
                  <div>
                    <p className="text-white text-base font-medium mb-4">More</p>
                    <div className="flex flex-col gap-4 pl-4 border-l border-border-subtle">
                      {moreNavLinks.map(link => (
                        <div key={link.href} onClick={() => setIsMobileMenuOpen(false)}>
                          <Link href={link.href} className="text-text-secondary text-base hover:text-primary transition-colors">
                            {link.label}
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                </nav>
              </div>

              <div className="p-6 border-t border-border-subtle">
                <a
                  href="https://click.goodcrypto.app/b9EC/8k29u7to"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-block text-center px-6 py-2.5 bg-white text-background-primary text-base font-semibold rounded-lg hover:bg-primary-green-alt transition-colors mb-4"
                >
                  Launch App
                </a>
                <p className="text-sm text-text-muted mb-2">Change Language</p>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button className="w-full flex items-center justify-between gap-1 text-white text-base font-medium hover:text-primary transition-colors outline-none border border-border-subtle rounded-md px-3 py-1.5 text-left">
                      EN <ChevronDown className="h-4 w-4" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-[calc(100%-48px)] bg-background-tertiary border-border max-h-48 overflow-y-auto">
                    <DropdownMenuItem asChild>
                      <a href="#" className="text-text-primary focus:bg-background-secondary w-full cursor-pointer">EN</a>
                    </DropdownMenuItem>
                    {languages.map(lang => (
                      <DropdownMenuItem key={lang.code} asChild>
                        <a href={lang.href} className="text-text-primary focus:bg-background-secondary w-full cursor-pointer">
                          {lang.code}
                        </a>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}