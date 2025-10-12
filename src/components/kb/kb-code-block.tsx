"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";

interface KBCodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
}

export default function KBCodeBlock({ code, language = "bash", filename }: KBCodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="my-6 rounded-xl overflow-hidden bg-background-tertiary border border-border-subtle">
      {filename && (
        <div className="px-4 py-2 bg-background-secondary border-b border-border-subtle text-sm text-text-muted">
          {filename}
        </div>
      )}
      <div className="relative">
        <pre className="p-4 overflow-x-auto text-sm">
          <code className={`language-${language}`}>{code}</code>
        </pre>
        <button
          onClick={handleCopy}
          className="absolute top-3 right-3 p-2 bg-background-secondary hover:bg-primary-green/20 border border-border-subtle rounded-lg transition-colors group"
          aria-label="Copy code"
        >
          {copied ? (
            <Check className="w-4 h-4 text-primary-green" />
          ) : (
            <Copy className="w-4 h-4 text-text-muted group-hover:text-primary-green" />
          )}
        </button>
      </div>
    </div>
  );
}