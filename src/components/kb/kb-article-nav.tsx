import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface Article {
  slug: string;
  title: string;
}

interface KBArticleNavProps {
  prev?: Article;
  next?: Article;
  category: string;
}

export default function KBArticleNav({ prev, next, category }: KBArticleNavProps) {
  if (!prev && !next) return null;

  return (
    <nav className="mt-12 pt-8 border-t border-border-subtle grid grid-cols-1 md:grid-cols-2 gap-4">
      {prev ? (
        <Link
          href={`/knowledge-base/${category}/${prev.slug}`}
          className="group p-6 bg-background-secondary border border-border-subtle rounded-2xl hover:border-primary-green/30 hover:shadow-[0_0_30px_rgba(0,255,127,0.1)] transition-all"
        >
          <div className="flex items-center gap-2 text-sm text-text-muted mb-2">
            <ArrowLeft className="w-4 h-4" />
            <span>Previous</span>
          </div>
          <div className="text-lg font-semibold group-hover:text-primary-green transition-colors">
            {prev.title}
          </div>
        </Link>
      ) : (
        <div />
      )}

      {next && (
        <Link
          href={`/knowledge-base/${category}/${next.slug}`}
          className="group p-6 bg-background-secondary border border-border-subtle rounded-2xl hover:border-primary-green/30 hover:shadow-[0_0_30px_rgba(0,255,127,0.1)] transition-all md:text-right"
        >
          <div className="flex items-center justify-end gap-2 text-sm text-text-muted mb-2">
            <span>Next</span>
            <ArrowRight className="w-4 h-4" />
          </div>
          <div className="text-lg font-semibold group-hover:text-primary-green transition-colors">
            {next.title}
          </div>
        </Link>
      )}
    </nav>
  );
}