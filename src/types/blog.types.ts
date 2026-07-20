export interface BlogSection {
  title: string;
  content: string[];
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  sections: BlogSection[];
  category: string;
  image: string;
  author: string;
  /**
   * URL segment for /blog/<slug>. Set it explicitly and never change it once
   * published — editing a slug breaks the live URL and any inbound links.
   */
  slug: string;
  /** ISO date (YYYY-MM-DD) used for Article schema and the visible byline. */
  datePublished: string;
}
