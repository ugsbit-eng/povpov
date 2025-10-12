"use client";

import { useState, useEffect, useRef } from "react";
import { Search, X, ArrowRight } from "lucide-react";
import Link from "next/link";
import { searchArticles } from "@/lib/kb-search";

export default function KBSearchBar() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Array<{ title: string; description: string; url: string; category: string }>>([]);
  const [isOpen, setIsOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "/" && !["INPUT", "TEXTAREA"].includes((e.target as HTMLElement).tagName)) {
        e.preventDefault();
        document.getElementById("kb-search-input")?.focus();
      }
      if (e.key === "Escape") {
        setIsOpen(false);
        setQuery("");
      }
    };

    document.addEventListener("keydown", handleKeyPress);
    return () => document.removeEventListener("keydown", handleKeyPress);
  }, []);

  useEffect(() => {
    if (query.length > 1) {
      const searchResults = searchArticles(query);
      setResults(searchResults);
      setIsOpen(true);
    } else {
      setResults([]);
      setIsOpen(false);
    }
  }, [query]);

  return (
    <div ref={searchRef} className="relative w-full">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" />
        <input
          id="kb-search-input"
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search documentation..."
          className="w-full pl-12 pr-24 py-4 bg-background-secondary border border-border-subtle rounded-full text-text-primary placeholder:text-text-muted focus:border-primary-green focus:outline-none focus:ring-2 focus:ring-primary-green/20 transition-all"
          aria-label="Search knowledge base"
        />
        <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-2">
          {query && (
            <button
              onClick={() => {
                setQuery("");
                setIsOpen(false);
              }}
              className="text-text-muted hover:text-text-primary transition-colors"
              aria-label="Clear search"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <kbd className="hidden sm:inline-block px-2 py-1 text-xs bg-background-tertiary border border-border-subtle rounded">
            /
          </kbd>
        </div>
      </div>

      {isOpen && results.length > 0 && (
        <div className="absolute top-full mt-2 w-full bg-background-secondary border border-border-subtle rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.4)] overflow-hidden z-50 max-h-[480px] overflow-y-auto">
          <div className="p-2">
            {results.map((result, index) => (
              <Link
                key={index}
                href={result.url}
                onClick={() => {
                  setIsOpen(false);
                  setQuery("");
                }}
                className="flex items-start gap-3 p-3 rounded-xl hover:bg-background-tertiary transition-colors group"
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs text-primary-green font-medium">{result.category}</span>
                  </div>
                  <h4 className="text-sm font-semibold text-text-primary mb-1 group-hover:text-primary-green transition-colors truncate">
                    {result.title}
                  </h4>
                  <p className="text-xs text-text-secondary line-clamp-2">
                    {result.description}
                  </p>
                </div>
                <ArrowRight className="w-4 h-4 text-primary-green opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 mt-1" />
              </Link>
            ))}
          </div>
        </div>
      )}

      {isOpen && query.length > 1 && results.length === 0 && (
        <div className="absolute top-full mt-2 w-full bg-background-secondary border border-border-subtle rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.4)] p-6 text-center z-50">
          <p className="text-text-muted">No results found for &ldquo;{query}&rdquo;</p>
          <p className="text-sm text-text-secondary mt-2">Try different keywords or browse by category</p>
        </div>
      )}
    </div>
  );
}