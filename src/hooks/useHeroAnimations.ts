import { CONFIG } from "@/data/data";
import { useEffect, useState } from "react";

export const useImageRotation = (imagesLength: number) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % imagesLength);
    }, CONFIG.IMAGE_TRANSITION_INTERVAL);
    return () => clearInterval(intervalId);
  }, [imagesLength]);

  return currentImageIndex;
};

export const usePopup = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, CONFIG.POPUP_DELAY);
    return () => clearTimeout(timer);
  }, []);

  return { showPopup, setShowPopup };
};
