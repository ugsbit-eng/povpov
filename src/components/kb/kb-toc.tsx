"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

interface Heading {
  id: string;
  text: string;
  level: number;
}

interface KBTableOfContentsProps {
  headings: Heading[];
}

export default function KBTableOfContents({ headings }: KBTableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "0% 0% -80% 0%" }
    );

    headings.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [headings]);

  if (headings.length === 0) return null;

  return (
    <div className="sticky top-24">
      <div className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-4">
        On this page
      </div>
      <nav className="space-y-2">
        {headings.map((heading) => (
          <Link
            key={heading.id}
            href={`#${heading.id}`}
            className={`block text-sm transition-colors ${
              activeId === heading.id
                ? "text-primary-green font-medium"
                : "text-text-muted hover:text-text-primary"
            }`}
            style={{ paddingLeft: `${(heading.level - 2) * 12}px` }}
          >
            {heading.text}
          </Link>
        ))}
      </nav>
    </div>
  );
}