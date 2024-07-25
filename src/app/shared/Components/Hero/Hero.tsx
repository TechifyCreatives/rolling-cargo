"use client";
import React, { useState, useEffect } from "react";
import { FaSearch, FaEnvelope } from "react-icons/fa";

type TabType = "tracking" | "contact";

const backgroundImages = [
  "/image1.jpg",
  "/image2.jpg",
  "/image3.jpg",
  // Add more image paths as needed
];

const Hero: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>("tracking");
  const [trackingOption, setTrackingOption] = useState("container");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % backgroundImages.length
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div
      className="relative h-[500px] bg-cover bg-center transition-all duration-1000"
      style={{ backgroundImage: `url(${backgroundImages[currentImageIndex]})` }}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-white drop-shadow-lg">
          Air and Sea Cargo Experts
        </h1>
      </div>

      <div className="absolute bottom-0 right-0 bg-white bg-opacity-90 rounded-tl-lg shadow-lg p-4 md:p-6 w-full max-w-md">
        <div className="flex mb-4">
          <button
            className={`flex-1 py-2 px-4 text-center ${
              activeTab === "tracking"
                ? "bg-[#0f1031] text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setActiveTab("tracking")}
          >
            Tracking
          </button>
          <button
            className={`flex-1 py-2 px-4 text-center ${
              activeTab === "contact"
                ? "bg-[#0f1031] text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setActiveTab("contact")}
          >
            Contact Us
          </button>
        </div>

        {activeTab === "tracking" && (
          <div>
            <div className="mb-4">
              <select
                className="w-full p-2 border rounded"
                value={trackingOption}
                onChange={(e) => setTrackingOption(e.target.value)}
              >
                <option value="container">
                  Container / Bill of Lading Number
                </option>
                <option value="booking">Booking Number</option>
              </select>
            </div>
            <div className="flex">
              <input
                type="text"
                placeholder={`Enter ${
                  trackingOption === "container"
                    ? "Container / Bill of Lading"
                    : "Booking"
                } Number`}
                className="flex-grow p-2 border rounded-l"
              />
              <button className="bg-[#0f1031] text-white p-2 rounded-r">
                <FaSearch />
              </button>
            </div>
          </div>
        )}

        {activeTab === "contact" && (
          <div>
            <input
              type="text"
              placeholder="Name"
              className="w-full p-2 border rounded mb-2"
            />
            <input
              type="tel"
              placeholder="Phone"
              className="w-full p-2 border rounded mb-2"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-2 border rounded mb-2"
            />
            <textarea
              placeholder="Message"
              className="w-full p-2 border rounded mb-2"
              rows={3}
            ></textarea>
            <button className="w-full bg-[#0f1031] text-white p-2 rounded">
              Submit
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;
