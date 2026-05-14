// src/types/gallery.types.ts

export interface GalleryItem {
  id: number;
  title: string;
  description: string;
  image?: string;
  video?: string;
  thumbnail?: string;
  category: string;
  tags: string[];
  date: string;
  views: number;
  likes: number;
  comments?: number;
  type: "image" | "video";
}

export interface Category {
  id: string;
  name: string;
  count: number;
}

interface ImageCardProps {
  item: GalleryItem;
  index: number;
  layout?: "grid" | "list";
  liked: boolean;
  toggleLike: () => void;
  handleShare: () => void;
  handleDownload: () => void;
  openLightbox: (item: GalleryItem, index: number) => void;
}

export interface GalleryGridProps {
  items: GalleryItem[];
  likedImages: Set<number>;
  toggleLike: (id: number) => void;
  handleShare: (item: GalleryItem) => void;
  handleDownload: (item: GalleryItem) => void;
  openLightbox: (item: GalleryItem, index: number) => void;
}

export interface GalleryListProps {
  items: GalleryItem[];
  likedImages: Set<number>;
  toggleLike: (id: number) => void;
  handleShare: (item: GalleryItem) => void;
  handleDownload: (item: GalleryItem) => void;
  openLightbox: (item: GalleryItem, index: number) => void;
}
