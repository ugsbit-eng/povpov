import { Clock, Calendar, Tag, User } from "lucide-react";

interface Article {
  title: string;
  description: string;
  author?: string;
  updatedAt?: string;
  version?: string;
  tags?: string[];
  readTime?: string;
}

interface KBArticleMetaProps {
  article: Article;
}

export default function KBArticleMeta({ article }: KBArticleMetaProps) {
  return (
    <div className="flex flex-wrap items-center gap-4 pb-6 border-b border-border-subtle text-sm text-text-muted">
      {article.author && (
        <div className="flex items-center gap-2">
          <User className="w-4 h-4" />
          <span>{article.author}</span>
        </div>
      )}
      
      {article.updatedAt && (
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4" />
          <span>Updated {article.updatedAt}</span>
        </div>
      )}
      
      {article.readTime && (
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4" />
          <span>{article.readTime}</span>
        </div>
      )}

      {article.version && (
        <div className="flex items-center gap-2">
          <Tag className="w-4 h-4" />
          <span>Version {article.version}</span>
        </div>
      )}

      {article.tags && article.tags.length > 0 && (
        <div className="flex items-center gap-2 flex-wrap">
          {article.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-background-tertiary rounded text-xs text-text-secondary"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}