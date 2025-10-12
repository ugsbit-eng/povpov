"use client";

import { useEffect, useState } from "react";
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
import { generateTableOfContents } from "@/lib/kb-utils";

export default function ArticlePage({ params }: { params: { category: string; article: string } }) {
  const [headings, setHeadings] = useState<Array<{ id: string; text: string; level: number }>>([]);
  
  const article = getArticle(params.category, params.article);
  const category = getCategory(params.category);
  
  if (!article || !category) {
    notFound();
  }

  const { prev, next } = getAdjacentArticles(params.category, params.article);

  useEffect(() => {
    const extractedHeadings = generateTableOfContents();
    setHeadings(extractedHeadings);
  }, []);

  return (
    <main className="min-h-screen bg-background-primary text-text-primary">
      <div className="pt-[72px]">
        <Navigation />
      </div>

      <div className="container mx-auto px-6 py-12">
        <div className="flex gap-8">
          <KBSidebar currentCategory={params.category} currentArticle={params.article} />
          
          <article className="flex-1 max-w-3xl">
            <KBBreadcrumbs 
              items={[
                { label: "Knowledge Base", href: "/knowledge-base" },
                { label: category.title, href: `/knowledge-base/${params.category}` },
                { label: article.title }
              ]}
            />

            <h1 className="text-4xl lg:text-5xl font-bold mt-8 mb-6">
              {article.title}
            </h1>

            <KBArticleMeta article={article} />

            <div className="prose prose-invert max-w-none mt-8 mb-12">
              <MDXArticleRenderer category={params.category} slug={params.article} />
            </div>

            <KBFeedbackWidget articleId={`${params.category}/${params.article}`} />

            <KBArticleNav prev={prev} next={next} category={params.category} />
          </article>

          <div className="hidden xl:block w-64">
            <KBTableOfContents headings={headings} />
          </div>
        </div>
      </div>
    </main>
  );
}