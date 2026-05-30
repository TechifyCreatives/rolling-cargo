"use client";
import React, { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Youtube, ExternalLink } from "lucide-react";
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
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center py-20"
          >
            {activeTab === "videos" ? (
              <div className="flex flex-col items-center gap-6">
                <div className="bg-red-600 rounded-2xl p-5">
                  <Youtube className="w-12 h-12 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-700 mb-2">
                    Watch Our Videos on YouTube
                  </h3>
                  <p className="text-gray-500 mb-6">
                    Visit our channel to see all our latest videos
                  </p>
                </div>
                <Link
                  href="https://www.youtube.com/@RollingCargo/videos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-3 rounded-xl transition-colors duration-200"
                >
                  <Youtube className="w-5 h-5" />
                  Watch on YouTube
                </Link>
              </div>
            ) : (
              <>
                <h3 className="text-2xl font-bold text-gray-600 mb-4">
                  No items found
                </h3>
                <p className="text-gray-500 text-lg max-w-md mx-auto">
                  Try adjusting your search terms or filters
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
              </>
            )}
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

      {/* YouTube Channel Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="bg-gradient-to-br from-[#0f1031] to-[#1a1548] py-16 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="flex flex-col items-center text-center mb-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-red-600 rounded-xl p-3">
                <Youtube className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Watch Our Videos
              </h2>
            </div>
            <p className="text-gray-300 text-lg max-w-2xl">
              Subscribe to our YouTube channel for shipping tips, service
              updates, office tours, and more.
            </p>
          </div>

          {/* Channel Card */}
          <Link
            href="https://www.youtube.com/@RollingCargo/videos"
            target="_blank"
            rel="noopener noreferrer"
            className="group block rounded-2xl overflow-hidden border border-white/10 shadow-2xl hover:border-red-500/50 transition-all duration-300"
          >
            {/* Banner */}
            <div className="relative bg-gradient-to-r from-red-700 to-red-500 h-36 flex items-center justify-center">
              <div className="absolute inset-0 bg-black/20" />
              <div className="relative flex flex-col items-center gap-2">
                <div className="bg-white/10 backdrop-blur-sm rounded-full p-5 group-hover:scale-110 transition-transform duration-300">
                  <Youtube className="w-12 h-12 text-white" />
                </div>
              </div>
            </div>

            {/* Channel Info */}
            <div className="bg-[#1a1548] px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-center sm:text-left">
                <h3 className="text-white text-xl font-bold">Rolling Cargo</h3>
                <p className="text-gray-400 text-sm mt-1">
                  @RollingCargo · Shipping tips, updates & more
                </p>
              </div>
              <div className="flex items-center gap-2 bg-red-600 group-hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors duration-200 shrink-0">
                <Youtube className="w-5 h-5" />
                Watch on YouTube
                <ExternalLink className="w-4 h-4 ml-1" />
              </div>
            </div>
          </Link>

          {/* Secondary link */}
          <div className="flex justify-center mt-6">
            <Link
              href="https://www.youtube.com/@RollingCargo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white text-sm underline underline-offset-4 transition-colors duration-200"
            >
              Visit full channel page →
            </Link>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default GalleryPage;
