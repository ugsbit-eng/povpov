import { notFound } from "next/navigation";
import Navigation from "@/components/sections/navigation";
import KBSidebar from "@/components/kb/kb-sidebar";
import KBBreadcrumbs from "@/components/kb/kb-breadcrumbs";
import KBTableOfContents from "@/components/kb/kb-toc";
import KBArticleMeta from "@/components/kb/kb-article-meta";
import KBFeedbackWidget from "@/components/kb/kb-feedback-widget";
import KBArticleNav from "@/components/kb/kb-article-nav";
import MDXArticleRenderer from "@/components/kb/mdx-article-renderer";
import { getArticle, getCategory, getAdjacentArticles } from "@/lib/kb-content";

export default async function ArticlePage({ params }: { params: Promise<{ category: string; article: string }> }) {
  const resolvedParams = await params;

  const article = getArticle(resolvedParams.category, resolvedParams.article);
  const category = getCategory(resolvedParams.category);
  
  if (!article || !category) {
    notFound();
  }

  const { prev, next } = getAdjacentArticles(resolvedParams.category, resolvedParams.article);

  return (
    <main className="min-h-screen bg-background-primary text-text-primary">
      <div className="pt-[72px]">
        <Navigation />
      </div>

      <div className="container mx-auto px-6 py-12">
        <div className="flex gap-8">
          <KBSidebar currentCategory={resolvedParams.category} currentArticle={resolvedParams.article} />
          
          <article className="flex-1 max-w-3xl">
            <KBBreadcrumbs 
              items={[
                { label: "Knowledge Base", href: "/knowledge-base" },
                { label: category.title, href: `/knowledge-base/${resolvedParams.category}` },
                { label: article.title }
              ]}
            />

            <h1 className="text-4xl lg:text-5xl font-bold mt-8 mb-6">
              {article.title}
            </h1>

            <KBArticleMeta article={article} />

            <div className="prose prose-invert max-w-none mt-8 mb-12">
              <MDXArticleRenderer category={resolvedParams.category} slug={resolvedParams.article} />
            </div>

            <KBFeedbackWidget articleId={`${resolvedParams.category}/${resolvedParams.article}`} />

            <KBArticleNav prev={prev} next={next} category={resolvedParams.category} />
          </article>

          <div className="hidden xl:block w-64">
            <KBTableOfContents headings={[]} />
          </div>
        </div>
      </div>
    </main>
  );
}