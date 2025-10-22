import { notFound } from "next/navigation";
import KBSidebar from "@/components/kb/kb-sidebar";
import KBBreadcrumbs from "@/components/kb/kb-breadcrumbs";
import { getCategory, getCategoryArticles } from "@/lib/kb-content";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const resolvedParams = await params;
  const category = getCategory(resolvedParams.category);

  if (!category) {
    notFound();
  }

  const articles = getCategoryArticles(resolvedParams.category);

  return (
    <main className="min-h-screen bg-background-primary text-text-primary">

      <div className="container mx-auto px-6 py-12">
        <div className="flex gap-8">
          <KBSidebar currentCategory={resolvedParams.category} />
          
          <div className="flex-1 max-w-4xl">
            <KBBreadcrumbs 
              items={[
                { label: "Knowledge Base", href: "/knowledge-base" },
                { label: category.title }
              ]}
            />

            <h1 className="text-4xl lg:text-5xl font-bold mt-8 mb-4">
              {category.title}
            </h1>
            <p className="text-lg text-text-secondary mb-12">
              {category.description}
            </p>

            <div className="grid gap-6">
              {articles.map((article) => (
                <Link
                  key={article.slug}
                  href={`/knowledge-base/${resolvedParams.category}/${article.slug}`}
                  className="group bg-background-secondary border border-border-subtle rounded-2xl p-6 hover:border-primary-green/30 hover:shadow-[0_0_30px_rgba(0,255,127,0.1)] transition-all duration-300"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-primary-green transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-text-secondary mb-3">
                        {article.description}
                      </p>
                      <div className="flex items-center gap-4 text-sm text-text-muted">
                        <span>{article.readTime}</span>
                        {article.tags && (
                          <div className="flex gap-2">
                            {article.tags.slice(0, 3).map((tag) => (
                              <span key={tag} className="px-2 py-1 bg-background-tertiary rounded text-xs">
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-primary-green opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}