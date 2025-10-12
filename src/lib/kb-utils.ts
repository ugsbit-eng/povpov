// Knowledge Base utility functions

export interface Heading {
  id: string;
  text: string;
  level: number;
}

/**
 * Generate table of contents from article headings
 */
export function generateTableOfContents(): Heading[] {
  const headings: Heading[] = [];
  const articleContent = document.querySelector(".prose-article");
  
  if (!articleContent) return headings;

  const headingElements = articleContent.querySelectorAll("h2, h3, h4");
  
  headingElements.forEach((heading) => {
    const level = parseInt(heading.tagName.substring(1));
    const text = heading.textContent || "";
    let id = heading.id;
    
    // Generate ID if not present
    if (!id) {
      id = text
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");
      heading.id = id;
    }
    
    headings.push({ id, text, level });
  });

  return headings;
}

/**
 * Calculate reading time from text content
 */
export function calculateReadingTime(text: string): string {
  const wordsPerMinute = 200;
  const wordCount = text.split(/\s+/).length;
  const minutes = Math.ceil(wordCount / wordsPerMinute);
  
  return `${minutes} min read`;
}

/**
 * Generate slug from title
 */
export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

/**
 * Format date string
 */
export function formatDate(dateString: string): string {
  try {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  } catch {
    return dateString;
  }
}

/**
 * Highlight search query in text
 */
export function highlightText(text: string, query: string): string {
  if (!query) return text;
  
  const regex = new RegExp(`(${query})`, "gi");
  return text.replace(regex, '<mark class="bg-primary-green/20 text-primary-green">$1</mark>');
}

/**
 * Sanitize HTML for rendering
 */
export function sanitizeHTML(html: string): string {
  // Basic sanitization - in production, use DOMPurify
  return html
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "")
    .replace(/on\w+="[^"]*"/g, "");
}