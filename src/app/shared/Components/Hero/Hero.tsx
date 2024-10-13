"use client"
import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { X, Plane, Ship, Package, Bell } from "lucide-react";
import axios from "axios";

const backgroundImages = [
  "/banner.jpg",
  "/banner2.jpg",
  "/banner3.jpg",
];

interface CustomAlertProps {
  onClose: () => void;
}

const CustomAlert: React.FC<CustomAlertProps> = ({ onClose }) => (
  <div className="bg-white shadow-lg rounded-lg p-4 max-w-md w-full relative">
    <div className="flex items-center mb-2">
      <Bell className="mr-2 text-blue-500" />
      <h3 className="text-lg font-semibold">ANNOUNCEMENT!</h3>
    </div>
    <p className="text-sm text-gray-600 mb-4">
      To help us serve you more efficiently, please share the details below when sending your cargo to us:
    </p>
    <ul className="list-disc pl-5 mb-4 text-sm text-gray-600">
      <li>Name</li>
      <li>Contact</li>
      <li>Mode of shipping (air or by sea)</li>
    </ul>
    <p className="text-sm text-gray-600 mb-4">
      For all other queries, talk to us on <strong>+254709 286 286</strong>
    </p>
    <div className="mt-4">
      <h4 className="font-semibold mb-2">Contact Us</h4>
      <button className="bg-[#0f1031] text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300">
        Contact Us
      </button>
    </div>
    <button
      onClick={onClose}
      className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
    >
      <X size={20} />
    </button>
  </div>
);

interface TrackingResult {
  waybill: string;
  status: string;
  location: string;
  eta: string;
}

const Hero: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [trackingNumber, setTrackingNumber] = useState<string>("RD56364");
  const [trackingResults, setTrackingResults] = useState<TrackingResult[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % backgroundImages.length
      );
    }, 5000);

    const popupTimeout = setTimeout(() => {
      setShowPopup(true);
    }, 1000);

    handleTrack();

    return () => {
      clearInterval(intervalId);
      clearTimeout(popupTimeout);
    };
  }, []);

  const closePopup = () => {
    setShowPopup(false);
  };

  const handleTrack = async () => {
    setIsLoading(true);
    setError("");
    setTrackingResults([]);

    try {
      const response = await axios.get<TrackingResult[]>(`https://rolling-cargo.appspot.com/master/websiteTrackingData`, {
        params: {
          waybill: trackingNumber,
        },
      });
      
      if (response.data && response.data.length > 0) {
        setTrackingResults(response.data);
      } else {
        setError("No tracking information found for the given waybill number.");
      }
    } catch (err) {
      setError("Failed to fetch tracking information. Please try again.");
    } finally {
      setIsLoading(false);
    }
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
              value={trackingNumber}
              onChange={(e) => setTrackingNumber(e.target.value)}
            />
            <button 
              className="bg-[#0f1031] text-white p-2 rounded-r hover:bg-[#1a1b4b] transition-colors duration-300"
              onClick={handleTrack}
              disabled={isLoading}
            >
              {isLoading ? "..." : <FaSearch />}
            </button>
          </div>
          {error && (
            <p className="text-red-500 mt-2 text-sm">{error}</p>
          )}
        </div>
      </div>

      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <CustomAlert onClose={closePopup} />
        </div>
      )}

      {trackingResults.length > 0 && (
        <div className="mt-8 max-w-4xl mx-auto p-4">
          <h2 className="text-2xl font-bold mb-4">Tracking Results</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {trackingResults.map((result) => (
              <div key={result.waybill} className="bg-white p-4 rounded shadow">
                <h3 className="font-bold mb-2">
                  Waybill: {result.waybill}
                </h3>
                <p>Status: {result.status}</p>
                <p>Location: {result.location}</p>
                <p>ETA: {result.eta}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;