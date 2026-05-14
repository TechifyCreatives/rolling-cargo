"use client";

import React from "react";
import Image from "next/image";
import { GalleryItem } from "@/types/gallery.types";

interface LightboxProps {
  isOpen: boolean;
  onClose: () => void;
  image: GalleryItem | null;
  currentIndex: number;
  totalImages: number;
  onNavigate: (direction: "prev" | "next") => void;
  liked: boolean;
  onToggleLike: () => void;
  onShare: () => void;
  onDownload: () => void;
  zoom: number;
  rotation: number;
  setZoom: React.Dispatch<React.SetStateAction<number>>;
  setRotation: (rotation: number) => void;
  isSlideshow: boolean;
  setIsSlideshow: (slideshow: boolean) => void;
  getYoutubeEmbedUrl: (url: string) => string;
}

const Lightbox: React.FC<LightboxProps> = ({
  isOpen,
  onClose,
  image,
  currentIndex,
  totalImages,
  onNavigate,
  zoom,
  rotation,
  setZoom,
  setRotation,
  isSlideshow,
  setIsSlideshow,
  getYoutubeEmbedUrl,
}) => {
  if (!isOpen || !image) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
      onClick={onClose}
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-50 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm border border-white/20"
        aria-label="Close lightbox"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <line
            x1="18"
            y1="6"
            x2="6"
            y2="18"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <line
            x1="6"
            y1="6"
            x2="18"
            y2="18"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </button>

      {/* Navigation Buttons */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onNavigate("prev");
        }}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm border border-white/20"
        aria-label="Previous image"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <polyline
            points="15 18 9 12 15 6"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <button
        onClick={(e) => {
          e.stopPropagation();
          onNavigate("next");
        }}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm border border-white/20"
        aria-label="Next image"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <polyline
            points="9 18 15 12 9 6"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* Zoom / Rotate / Slideshow Controls - Only show for images */}
      {image.type === "image" && (
        <div className="absolute top-6 left-1/2 transform -translate-x-1/2 z-50 flex items-center gap-3">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setZoom((prev: number) => Math.max(prev - 0.25, 0.5));
            }}
            className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm border border-white/20"
            aria-label="Zoom out"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8" strokeWidth="2" />
              <line
                x1="16"
                y1="16"
                x2="22"
                y2="22"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
          <span className="text-white text-sm bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm border border-white/20 font-medium">
            {Math.round(zoom * 100)}%
          </span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setZoom((prev: number) => Math.min(prev + 0.25, 3));
            }}
            className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm border border-white/20"
            aria-label="Zoom in"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8" strokeWidth="2" />
              <line
                x1="21"
                y1="21"
                x2="16"
                y2="16"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setRotation((rotation + 90) % 360);
            }}
            className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm border border-white/20"
            aria-label="Rotate"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                d="M2 12a10 10 0 1 0 10 10"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M2 12l6 6 6-6"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsSlideshow(!isSlideshow);
            }}
            className={`p-2 rounded-full backdrop-blur-sm border border-white/20 ${
              isSlideshow
                ? "bg-blue-500 text-white"
                : "bg-white/10 text-white hover:bg-white/20"
            }`}
            aria-label={isSlideshow ? "Stop slideshow" : "Start slideshow"}
          >
            {isSlideshow ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <rect x="6" y="4" width="4" height="16" />
                <rect x="14" y="4" width="4" height="16" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <polygon points="6 4 18 12 6 20" />
              </svg>
            )}
          </button>
        </div>
      )}

      {/* Media Container */}
      <div
        className="relative max-w-[90vw] max-h-[85vh] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {image.type === "image" && (
          <Image
            src={image.image!}
            alt={image.title}
            width={1200}
            height={800}
            className="object-contain w-auto h-auto max-w-full max-h-[85vh] transition-transform duration-300 ease-in-out"
            style={{
              transform: `scale(${zoom}) rotate(${rotation}deg)`,
            }}
          />
        )}

        {image.type === "video" && image.video && (
          <iframe
            src={getYoutubeEmbedUrl(image.video)}
            title={image.title}
            className="w-full aspect-video"
            style={{
              minWidth: "800px",
              minHeight: "450px",
              maxWidth: "90vw",
              maxHeight: "85vh",
            }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        )}
      </div>

      {/* >>> THUMBNAIL FOR VIDEO (NEW) <<< */}
      {image.type === "video" && image.thumbnail && (
        <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 z-50">
          <Image
            src={image.thumbnail}
            alt="Video thumbnail"
            width={80}
            height={60}
            className="rounded-md border border-white/30 opacity-90"
          />
        </div>
      )}

      {/* Image Info */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-50 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-6 py-3 max-w-2xl">
        <h3 className="text-white font-semibold text-lg mb-1">{image.title}</h3>
        <p className="text-white/80 text-sm">{image.description}</p>
        <div className="flex items-center gap-4 mt-2 text-white/60 text-xs">
          <span>
            {currentIndex + 1} / {totalImages}
          </span>
          <span>•</span>
          <span>{image.category}</span>
        </div>
      </div>
    </div>
  );
};

export default Lightbox;
