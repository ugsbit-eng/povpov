"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, ChevronRight } from "lucide-react";
import { getAllCategories } from "@/lib/kb-content";

interface KBSidebarProps {
  currentCategory?: string;
  currentArticle?: string;
}

export default function KBSidebar({ currentCategory, currentArticle }: KBSidebarProps) {
  const categories = getAllCategories();
  const [expandedCategories, setExpandedCategories] = useState<string[]>([currentCategory || ""]);

  const toggleCategory = (slug: string) => {
    setExpandedCategories(prev =>
      prev.includes(slug) ? prev.filter(s => s !== slug) : [...prev, slug]
    );
  };

  return (
    <aside className="hidden lg:block w-64 flex-shrink-0">
      <div className="sticky top-24 max-h-[calc(100vh-8rem)] overflow-y-auto">
        <nav className="space-y-1">
          {categories.map((category) => {
            const isExpanded = expandedCategories.includes(category.slug);
            const isCurrent = currentCategory === category.slug;

            return (
              <div key={category.slug}>
                <button
                  onClick={() => toggleCategory(category.slug)}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isCurrent
                      ? "bg-primary-green/10 text-primary-green"
                      : "text-text-secondary hover:text-text-primary hover:bg-background-tertiary"
                  }`}
                >
                  <span>{category.title}</span>
                  {isExpanded ? (
                    <ChevronDown className="w-4 h-4" />
                  ) : (
                    <ChevronRight className="w-4 h-4" />
                  )}
                </button>

                {isExpanded && category.articles && (
                  <div className="ml-3 mt-1 space-y-1 border-l border-border-subtle pl-3">
                    {category.articles.map((article) => {
                      const isCurrentArticle = currentArticle === article.slug;
                      return (
                        <Link
                          key={article.slug}
                          href={`/knowledge-base/${category.slug}/${article.slug}`}
                          className={`block px-3 py-1.5 rounded-lg text-sm transition-colors ${
                            isCurrentArticle
                              ? "bg-primary-green/10 text-primary-green font-medium"
                              : "text-text-muted hover:text-text-primary hover:bg-background-tertiary"
                          }`}
                        >
                          {article.title}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}