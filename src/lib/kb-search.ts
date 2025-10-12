// Knowledge Base search functionality using Lunr.js

import { getAllCategories } from "./kb-content";

interface SearchResult {
  title: string;
  description: string;
  url: string;
  category: string;
  score: number;
}

// Simple search implementation - in production, use Lunr.js or Algolia
export function searchArticles(query: string): SearchResult[] {
  const categories = getAllCategories();
  const results: SearchResult[] = [];
  const lowerQuery = query.toLowerCase();

  categories.forEach(category => {
    category.articles?.forEach(article => {
      let score = 0;
      
      // Title match (highest weight)
      if (article.title.toLowerCase().includes(lowerQuery)) {
        score += 10;
      }
      
      // Description match
      if (article.description.toLowerCase().includes(lowerQuery)) {
        score += 5;
      }
      
      // Tag match
      if (article.tags?.some(tag => tag.toLowerCase().includes(lowerQuery))) {
        score += 3;
      }
      
      // Category match
      if (category.title.toLowerCase().includes(lowerQuery)) {
        score += 2;
      }

      if (score > 0) {
        results.push({
          title: article.title,
          description: article.description,
          url: `/knowledge-base/${category.slug}/${article.slug}`,
          category: category.title,
          score
        });
      }
    });
  });

  // Sort by score descending
  return results.sort((a, b) => b.score - a.score).slice(0, 10);
}

// Initialize Lunr index (for production use)
export function initializeLunrIndex() {
  // This would be implemented with lunr.js in production
  // Example:
  // const idx = lunr(function () {
  //   this.ref('id');
  //   this.field('title', { boost: 10 });
  //   this.field('description', { boost: 5 });
  //   this.field('tags', { boost: 3 });
  //   this.field('category', { boost: 2 });
  //   
  //   documents.forEach(doc => this.add(doc));
  // });
  
  console.log("Lunr index initialized (placeholder)");
}