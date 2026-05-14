"use client";

import React, { useState, useEffect, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CATEGORIES, GALLERY_ITEMS } from "@/data/data";
import SearchBar from "../SearchBar/SearchBar";
import CategoryFilter from "../CategoryFilter/CategoryFilter";
import GalleryGrid from "../GalleryGrid/GalleryGrid";
import GalleryList from "../GalleryList/GalleryList";
import Lightbox from "../Lightbox/Lightbox";
import { GalleryItem } from "@/types/gallery.types";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.3 },
  },
};

const Galler: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [likedImages, setLikedImages] = useState<Set<number>>(new Set());
  const [sortBy, setSortBy] = useState<"date" | "views" | "likes" | "title">(
    "date"
  );
  const [zoom, setZoom] = useState(1);
  const [rotation, setRotation] = useState(0);
  const [isSlideshow, setIsSlideshow] = useState(false);

  /**
   * ✅ REQUIRED: YouTube embed helper
   * This satisfies LightboxProps and prevents Vercel TS failure
   */
  const getYoutubeEmbedUrl = useCallback((url: string) => {
    if (!url) return "";

    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);

    return match && match[2]?.length === 11
      ? `https://www.youtube.com/embed/${match[2]}`
      : "";
  }, []);

  const filteredImages = useMemo(() => {
    let filtered = GALLERY_ITEMS.filter((item) => {
      const matchesSearch =
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.tags.some((tag) =>
          tag.toLowerCase().includes(searchTerm.toLowerCase())
        );

      const matchesCategory =
        selectedCategory === "all" || item.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });

    filtered.sort((a, b) => {
      switch (sortBy) {
        case "date":
          return new Date(b.date).getTime() - new Date(a.date).getTime();
        case "views":
          return b.views - a.views;
        case "likes":
          return new Date(b.date).getTime() - new Date(a.date).getTime();
        case "title":
          return a.title.localeCompare(b.title);
        default:
          return 0;
      }
    });

    return filtered;
  }, [searchTerm, selectedCategory, sortBy]);

  const navigateImage = useCallback(
    (direction: "prev" | "next") => {
      if (!filteredImages.length) return;

      const newIndex =
        direction === "next"
          ? (currentImageIndex + 1) % filteredImages.length
          : (currentImageIndex - 1 + filteredImages.length) %
            filteredImages.length;

      setCurrentImageIndex(newIndex);
      setSelectedImage(filteredImages[newIndex]);
      setZoom(1);
      setRotation(0);
    },
    [currentImageIndex, filteredImages]
  );

  useEffect(() => {
    if (isSlideshow && isLightboxOpen) {
      const interval = setInterval(() => {
        navigateImage("next");
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isSlideshow, isLightboxOpen, navigateImage]);

  const openLightbox = (image: GalleryItem, index: number) => {
    setSelectedImage(image);
    setCurrentImageIndex(index);
    setIsLightboxOpen(true);
    setZoom(1);
    setRotation(0);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    setSelectedImage(null);
    setIsSlideshow(false);
    document.body.style.overflow = "unset";
  };

  const toggleLike = (imageId: number) => {
    setLikedImages((prev) => {
      const next = new Set(prev);
      next.has(imageId) ? next.delete(imageId) : next.add(imageId);
      return next;
    });
  };

  const handleShare = async (image: GalleryItem) => {
    if (navigator.share) {
      await navigator.share({
        title: image.title,
        text: image.description,
        url: window.location.href,
      });
    } else {
      await navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard!");
    }
  };

  const handleDownload = (image: GalleryItem) => {
    const link = document.createElement("a");
    link.href = image.image ?? "";
    link.download = `${image.title.replace(/\s+/g, "-").toLowerCase()}.jpg`;
    link.click();
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isLightboxOpen) return;

      switch (e.key) {
        case "Escape":
          closeLightbox();
          break;
        case "ArrowLeft":
          navigateImage("prev");
          break;
        case "ArrowRight":
          navigateImage("next");
          break;
        case "+":
        case "=":
          setZoom((z) => Math.min(z + 0.25, 3));
          break;
        case "-":
          setZoom((z) => Math.max(z - 0.25, 0.5));
          break;
        case "r":
          setRotation((r) => (r + 90) % 360);
          break;
        case " ":
          e.preventDefault();
          setIsSlideshow((s) => !s);
          break;
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isLightboxOpen, navigateImage]);

  return (
    <div className="min-h-screen bg-gradient-to-br pt-10 from-slate-50 via-white to-blue-50/30">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

        <AnimatePresence mode="wait">
          {viewMode === "grid" ? (
            <GalleryGrid
              items={filteredImages}
              likedImages={likedImages}
              toggleLike={toggleLike}
              handleShare={handleShare}
              handleDownload={handleDownload}
              openLightbox={openLightbox}
            />
          ) : (
            <GalleryList
              items={filteredImages}
              likedImages={likedImages}
              toggleLike={toggleLike}
              handleShare={handleShare}
              handleDownload={handleDownload}
              openLightbox={openLightbox}
            />
          )}
        </AnimatePresence>

        {/* ✅ FIXED LIGHTBOX */}
        <Lightbox
          isOpen={isLightboxOpen}
          onClose={closeLightbox}
          image={selectedImage}
          currentIndex={currentImageIndex}
          totalImages={filteredImages.length}
          onNavigate={navigateImage}
          liked={likedImages.has(selectedImage?.id ?? 0)}
          onToggleLike={() => toggleLike(selectedImage?.id ?? 0)}
          onShare={() => handleShare(selectedImage ?? filteredImages[0])}
          onDownload={() => handleDownload(selectedImage ?? filteredImages[0])}
          zoom={zoom}
          rotation={rotation}
          isSlideshow={isSlideshow}
          setIsSlideshow={setIsSlideshow}
          setZoom={setZoom}
          setRotation={setRotation}
          getYoutubeEmbedUrl={getYoutubeEmbedUrl}
        />
      </div>
    </div>
  );
};

export default Galler;
