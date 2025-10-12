"use client";

import { useEffect, useState } from "react";
import { getArticleContent } from "@/lib/kb-content";
import KBCodeBlock from "./kb-code-block";
import KBCallout from "./kb-callout";

interface MDXArticleRendererProps {
  category: string;
  slug: string;
}

export default function MDXArticleRenderer({ category, slug }: MDXArticleRendererProps) {
  const [content, setContent] = useState<string>("");

  useEffect(() => {
    const articleContent = getArticleContent(category, slug);
    setContent(articleContent);
  }, [category, slug]);

  if (!content) {
    return (
      <div className="animate-pulse space-y-4">
        <div className="h-4 bg-background-tertiary rounded w-3/4"></div>
        <div className="h-4 bg-background-tertiary rounded"></div>
        <div className="h-4 bg-background-tertiary rounded w-5/6"></div>
      </div>
    );
  }

  // Simple markdown-like rendering for demo
  // In production, use proper MDX with next-mdx-remote or @next/mdx
  return (
    <div 
      className="prose-article"
      dangerouslySetInnerHTML={{ __html: parseMarkdown(content) }}
    />
  );
}

// Basic markdown parser for demo purposes
// Replace with proper MDX in production
function parseMarkdown(markdown: string): string {
  let html = markdown;

  // Headers
  html = html.replace(/^### (.*$)/gim, '<h3 id="$1">$1</h3>');
  html = html.replace(/^## (.*$)/gim, '<h2 id="$1">$1</h2>');
  html = html.replace(/^# (.*$)/gim, '<h1 id="$1">$1</h1>');

  // Bold and italic
  html = html.replace(/\*\*\*(.*?)\*\*\*/g, '<strong><em>$1</em></strong>');
  html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');

  // Code blocks
  html = html.replace(/```(\w+)?\n([\s\S]*?)```/g, '<pre><code class="language-$1">$2</code></pre>');
  
  // Inline code
  html = html.replace(/`([^`]+)`/g, '<code>$1</code>');

  // Links
  html = html.replace(/\[([^\]]+)\]\(([^\)]+)\)/g, '<a href="$2" class="text-primary-green hover:underline">$1</a>');

  // Lists
  html = html.replace(/^\* (.*$)/gim, '<li>$1</li>');
  html = html.replace(/^\d+\. (.*$)/gim, '<li>$1</li>');

  // Paragraphs
  html = html.replace(/\n\n/g, '</p><p>');
  html = '<p>' + html + '</p>';

  // Wrap lists
  html = html.replace(/<li>/g, '<ul><li>').replace(/<\/li>/g, '</li></ul>');
  html = html.replace(/<\/ul><ul>/g, '');

  return html;
}