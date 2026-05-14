"use client";
import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CATEGORIES, GALLERY_ITEMS } from "@/data/data";
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

const GalleryPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState<boolean>(false);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [likedImages, setLikedImages] = useState<Set<number>>(new Set());
  const [sortBy, setSortBy] = useState<"date" | "views" | "likes" | "title">(
    "date"
  );
  const [zoom, setZoom] = useState<number>(1);
  const [rotation, setRotation] = useState<number>(0);
  const [isSlideshow, setIsSlideshow] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<"photos" | "videos">("photos");

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
          return b.likes - a.likes;
        case "title":
          return a.title.localeCompare(b.title);
        default:
          return 0;
      }
    });

    // Filter by active tab
    return filtered.filter((item) =>
      activeTab === "photos" ? item.type === "image" : item.type === "video"
    );
  }, [searchTerm, selectedCategory, sortBy, activeTab]);

  const getYoutubeEmbedUrl = (url: string) => {
    // Convert various YouTube URL formats to embed format
    const videoIdMatch = url.match(
      /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/
    );
    if (videoIdMatch && videoIdMatch[1]) {
      return `https://www.youtube.com/embed/${videoIdMatch[1]}`;
    }
    return url; // Return original if already in embed format or can't parse
  };

  const navigateImage = React.useCallback(
    (direction: "prev" | "next") => {
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
  }, [isSlideshow, isLightboxOpen, currentImageIndex, navigateImage]);

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
      const newSet = new Set(prev);
      if (newSet.has(imageId)) {
        newSet.delete(imageId);
      } else {
        newSet.add(imageId);
      }
      return newSet;
    });
  };

  const handleShare = async (image: GalleryItem) => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: image.title,
          text: image.description,
          url: window.location.href,
        });
      } catch (error) {
        console.log("Error sharing:", error);
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard!");
    }
  };

  const handleDownload = (image: GalleryItem) => {
    const link = document.createElement("a");
    link.href = image.image || "";
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
        case "=":
        case "+":
          setZoom((prev) => Math.min(prev + 0.25, 3));
          break;
        case "-":
          setZoom((prev) => Math.max(prev - 0.25, 0.5));
          break;
        case "r":
          setRotation((prev) => (prev + 90) % 360);
          break;
        case " ":
          e.preventDefault();
          setIsSlideshow(!isSlideshow);
          break;
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isLightboxOpen, currentImageIndex, isSlideshow, navigateImage]);

  return (
    <div className="min-h-screen bg-gradient-to-br pt-10 from-slate-50 via-white to-blue-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Tab Switcher */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8 flex justify-center space-x-4"
        >
          <button
            onClick={() => setActiveTab("photos")}
            className={`px-6 py-2 rounded-full transition-all ${
              activeTab === "photos"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            Photos
          </button>
          <button
            onClick={() => setActiveTab("videos")}
            className={`px-6 py-2 rounded-full transition-all ${
              activeTab === "videos"
                ? "bg-purple-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            Videos
          </button>
        </motion.div>

        {/* Gallery View */}
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

        {/* No Results */}
        {filteredImages.length === 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center py-20"
          >
            <div className="text-gray-300 mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="80"
                height="80"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="M21 21l-4.35-4.35" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-600 mb-4">
              No items found
            </h3>
            <p className="text-gray-500 text-lg max-w-md mx-auto">
              Try adjusting your search terms or filters to discover more
              amazing content
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("all");
              }}
              className="mt-6 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Clear Filters
            </motion.button>
          </motion.div>
        )}

        {/* Lightbox */}
        <Lightbox
          isOpen={isLightboxOpen}
          onClose={closeLightbox}
          image={selectedImage}
          currentIndex={currentImageIndex}
          totalImages={filteredImages.length}
          onNavigate={navigateImage}
          liked={likedImages.has(selectedImage?.id || 0)}
          onToggleLike={() => toggleLike(selectedImage?.id || 0)}
          onShare={() => handleShare(selectedImage || filteredImages[0])}
          onDownload={() => handleDownload(selectedImage || filteredImages[0])}
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

export default GalleryPage;
