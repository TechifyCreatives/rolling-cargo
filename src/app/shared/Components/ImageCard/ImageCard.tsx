import { GalleryItem } from "@/types/gallery.types";
import Image from "next/image";
import React from "react";

interface ImageCardProps {
  item: GalleryItem;
  index: number;
  openLightbox: (item: GalleryItem, index: number) => void;
  layout?: string;
  liked?: boolean;
}

const ImageCard: React.FC<ImageCardProps> = ({ item, index, openLightbox }) => {
  return (
    <div
      className="group relative overflow-hidden rounded-2xl bg-white/80 shadow-lg backdrop-blur-sm transition-all duration-300 hover:shadow-2xl cursor-pointer"
      onClick={() => openLightbox(item, index)}
    >
      {/* Image Container */}
      <div className="relative aspect-square">
        <Image
          src={item.image ?? "/placeholder.png"}
          alt={item.category}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          priority={index < 4} // Optimize LCP by prioritizing first few images
        />
      </div>
    </div>
  );
};

export default ImageCard;
