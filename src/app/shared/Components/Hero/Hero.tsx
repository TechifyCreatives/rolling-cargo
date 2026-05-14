"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Package,
  Plane,
  Ship,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { useFormHandler } from "@/hooks/useFormHandler";
import { useImageRotation } from "@/hooks/useHeroAnimations"; // ← removed unused usePopup
import { backgroundImages } from "@/data/data";
// Removed: import { CustomAlert } from "./CustomAlert";
import ContactForm from "./ContactForm";

const sliderImages = [
  { src: "/popone.jpeg", alt: "Cargo Ship" },
  { src: "/poptwo.jpeg", alt: "Air Freight" },
  { src: "/popthree.jpeg", alt: "Modern Warehouse" },
  { src: "/popfour.jpeg", alt: "Logistics Operations" },
  { src: "/popfive.jpeg", alt: "Global Shipping Network" },
  { src: "/popsix.jpeg", alt: "International Cargo" },
];

export default function Hero() {
  const [showContactForm, setShowContactForm] = useState(false);
  const [showImageSlider, setShowImageSlider] = useState(false);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const currentImageIndex = useImageRotation(backgroundImages.length);
  const currentImage = backgroundImages[currentImageIndex];

  const { handleSubmit } = useFormHandler();

  // Auto-show slider after 3s
  useEffect(() => {
    const timer = setTimeout(() => setShowImageSlider(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  // Auto-advance slides
  useEffect(() => {
    if (!showImageSlider) return;
    const interval = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % sliderImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [showImageSlider]);

  const nextSlide = () =>
    setCurrentSlideIndex((prev) => (prev + 1) % sliderImages.length);
  const prevSlide = () =>
    setCurrentSlideIndex(
      (prev) => (prev - 1 + sliderImages.length) % sliderImages.length
    );
  const goToSlide = (index: number) => setCurrentSlideIndex(index);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="relative mb-28"
    >
      {/* Background Hero */}
      <div className="relative mt-16 h-[250px] md:h-[400px] overflow-hidden">
        <Image
          src={currentImage.src}
          alt={currentImage.alt}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black opacity-50" />

        <motion.div
          className="relative z-10 flex flex-col items-center justify-center text-center text-white px-4 h-full"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <Plane size={48} className="text-white" />
            <Ship size={48} className="text-white" />
          </div>
          <h1 className="text-2xl md:text-4xl font-bold drop-shadow-lg max-w-3xl mx-auto my-6">
            Air and Sea Cargo Experts
          </h1>
        </motion.div>
      </div>

      {/* Services Box - Desktop */}
      <div className="hidden md:block absolute -bottom-24 left-0 right-0 z-20">
        <div className="max-w-5xl mx-auto px-4">
          <Card className="overflow-hidden shadow-xl border-none">
            <CardContent className="p-0 grid grid-cols-3 divide-x divide-gray-300">
              <Link
                href="/tracking"
                className="flex flex-col items-center justify-center p-6 text-center bg-[#0f1031] text-white transition-none"
              >
                <Package className="mb-2 w-6 h-6" />
                <h3 className="font-semibold mb-1">Track Shipment</h3>
                <p className="text-sm opacity-80">Real-time tracking system</p>
              </Link>

              <button
                onClick={() => setShowContactForm(true)}
                className="flex flex-col items-center justify-center p-6 text-center focus:outline-none hover:bg-transparent"
              >
                <Mail className="mb-2 w-6 h-6 text-primary" />
                <h3 className="font-semibold mb-1">Request Quote</h3>
                <p className="text-sm text-muted-foreground">
                  Get a customized quote
                </p>
              </button>

              <Link
                href="/contact-us"
                className="flex flex-col items-center justify-center p-6 text-center bg-[#0f1031] text-white transition-none"
              >
                <Plane className="mb-2 w-6 h-6" />
                <h3 className="font-semibold mb-1">Contact Us</h3>
                <p className="text-sm opacity-80">Reach out for support</p>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Image Slider Modal — FULL IMAGE VISIBLE */}
      <AnimatePresence>
        {showImageSlider && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm px-4"
            onClick={() => setShowImageSlider(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative w-full max-w-4xl rounded-2xl shadow-2xl overflow-hidden bg-white"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowImageSlider(false)}
                aria-label="Close image gallery"
                className="absolute top-4 right-4 z-30 p-2 bg-white/90 hover:bg-white rounded-full shadow-lg transition-all hover:scale-110"
              >
                <X className="w-6 h-6 text-gray-800" />
              </button>

              {/* Slider Container — critical fix here */}
              <div className="relative h-[400px] md:h-[500px] flex items-center justify-center bg-white">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlideIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="w-full h-full flex items-center justify-center"
                  >
                    <Image
                      src={sliderImages[currentSlideIndex].src}
                      alt={sliderImages[currentSlideIndex].alt}
                      width={800} // ← helps Next.js optimize
                      height={500} // ← set based on your actual image ratio
                      className="max-h-full max-w-full object-contain"
                      priority={currentSlideIndex === 0}
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                aria-label="Previous image"
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-white/90 hover:bg-white rounded-full shadow-lg transition-all hover:scale-110"
              >
                <ChevronLeft className="w-6 h-6 text-gray-800" />
              </button>
              <button
                onClick={nextSlide}
                aria-label="Next image"
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-white/90 hover:bg-white rounded-full shadow-lg transition-all hover:scale-110"
              >
                <ChevronRight className="w-6 h-6 text-gray-800" />
              </button>

              {/* Dots Indicator */}
              <div className="flex items-center justify-center gap-2 py-6">
                {sliderImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    aria-label={`Go to slide ${index + 1}`}
                    className={`transition-all duration-300 rounded-full ${
                      index === currentSlideIndex
                        ? "w-8 h-3 bg-[#0f1031]"
                        : "w-3 h-3 bg-gray-300 hover:bg-gray-400"
                    }`}
                  />
                ))}
              </div>

              {/* Slide Counter */}
              <div
                role="region"
                aria-live="polite"
                className="absolute top-4 left-4 z-30 px-4 py-2 bg-black/60 backdrop-blur-sm rounded-full"
              >
                <span className="text-white font-semibold text-sm">
                  {currentSlideIndex + 1} / {sliderImages.length}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Only Contact Form Modal */}
      {showContactForm && (
        <ContactForm onClose={() => setShowContactForm(false)} />
      )}

      {/* ❌ REMOVED: Announcement popup (CustomAlert) */}
    </motion.div>
  );
}
