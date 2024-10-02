"use client";
import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { X, Plane, Ship, Package, Bell } from "lucide-react";

const backgroundImages = [
  "/banner.jpg",
  "/banner2.jpg",
  "/banner3.jpg",
  // Add more image paths as needed
];

interface CustomAlertProps {
  title: string;
  description: string;
  onClose: () => void;
}

const CustomAlert: React.FC<CustomAlertProps> = ({ title, description, onClose }) => (
  <div className="bg-white shadow-lg rounded-lg p-4 max-w-md w-full relative">
    <div className="flex items-center mb-2">
      <Bell className="mr-2 text-blue-500" />
      <h3 className="text-lg font-semibold">{title}</h3>
    </div>
    <p className="text-sm text-gray-600">{description}</p>
    <button
      onClick={onClose}
      className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
    >
      <X size={20} />
    </button>
  </div>
);

const Hero: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [showPopup, setShowPopup] = useState<boolean>(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % backgroundImages.length
      );
    }, 5000); // Change image every 5 seconds

    // Show popup after a short delay
    const popupTimeout = setTimeout(() => {
      setShowPopup(true);
    }, 1000);

    return () => {
      clearInterval(intervalId);
      clearTimeout(popupTimeout);
    };
  }, []);

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="relative">
      <div
        className="relative mt-16 h-[500px] bg-cover bg-center transition-all duration-1000 flex flex-col items-center justify-center"
        style={{ backgroundImage: `url(${backgroundImages[currentImageIndex]})` }}
      >
        <div className="icons flex items-center">
          <Plane className="text-white mr-2" size={40} />
          <Ship className="text-white mr-2" size={40} />
          </div>
        <div className="flex items-center mb-8">
          
          <h1 className="text-4xl md:text-5xl font-bold text-center text-white drop-shadow-lg">
            Air and Sea Cargo Experts 
          </h1>
        </div>

        <div className="bg-white bg-opacity-90 rounded-lg shadow-lg p-6 w-full max-w-md">
          <div className="flex items-center justify-center mb-4 text-xl font-semibold text-[#0f1031]">
            <Package className="mr-2" />
            Track Your Shipment
          </div>
          <div className="flex">
            <input
              type="text"
              placeholder="Enter Waybill Number"
              className="flex-grow p-2 border rounded-l focus:outline-none focus:ring-2 focus:ring-[#0f1031]"
            />
            <button className="bg-[#0f1031] text-white p-2 rounded-r hover:bg-[#1a1b4b] transition-colors duration-300">
              <FaSearch />
            </button>
          </div>
        </div>
      </div>

      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <CustomAlert
            title="Announcement"
            description="We're excited to announce our new express shipping service! Get your packages delivered faster than ever before."
            onClose={closePopup}
          />
        </div>
      )}
    </div>
  );
};

export default Hero;