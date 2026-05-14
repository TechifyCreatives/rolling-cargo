import React from "react";
import ImageCard from "../ImageCard/ImageCard";
import { GalleryItem, GalleryListProps } from "@/types/gallery.types";

const GalleryList: React.FC<GalleryListProps> = ({
  items,
  likedImages,
  toggleLike,
  handleShare,
  handleDownload,
  openLightbox,
}) => {
  return (
    <div className="space-y-6">
      {items.map((item, index) => (
        <ImageCard
          key={item.id}
          item={item}
          index={index}
          layout="list"
          liked={likedImages.has(item.id)}
          openLightbox={openLightbox}
        />
      ))}
    </div>
  );
};

export default GalleryList;
