import React from "react";
import ImageCard from "../ImageCard/ImageCard";
import { GalleryGridProps, GalleryItem } from "@/types/gallery.types";

const GalleryGrid: React.FC<GalleryGridProps> = ({
  items,
  likedImages,
  toggleLike,
  handleShare,
  handleDownload,
  openLightbox,
}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {items.map((item, index) => (
        <ImageCard
          key={item.id}
          item={item}
          index={index}
          liked={likedImages.has(item.id)}
          openLightbox={openLightbox}
        />
      ))}
    </div>
  );
};

export default GalleryGrid;
