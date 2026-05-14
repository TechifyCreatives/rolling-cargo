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
}
