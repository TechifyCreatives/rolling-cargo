"use client";
import React, { useState } from "react";
import axios from "axios";

type TrackingType = "container" | "booking";
type TrackingResult = {
  id: string;
  status: string;
  location: string;
  eta: string;
};

const TrackingSection: React.FC = () => {
  const [trackingType, setTrackingType] = useState<TrackingType>("container");
  const [trackingNumber, setTrackingNumber] = useState("");
  const [trackingResults, setTrackingResults] = useState<TrackingResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleTrack = async () => {
    setIsLoading(true);
    setError("");
    setTrackingResults([]);

    try {
      // Replace with your actual API endpoint
      const response = await axios.get(`https://api.example.com/track`, {
        params: {
          type: trackingType,
          number: trackingNumber,
        },
      });
      setTrackingResults(response.data);
    } catch (err) {
      setError("Failed to fetch tracking information. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="max-w-4xl mx-auto p-4 sm:p-6">
      <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Tracking</h2>

      <hr className="h-1 bg-[#640e0e] rounded-full mb-4 sm:mb-6" />

      <div className="mb-4 sm:mb-6 space-y-2 sm:space-y-0">
        <label className="flex items-center mb-2 sm:mb-0 sm:mr-6">
          <input
            type="radio"
            className="form-radio"
            name="trackingType"
            value="container"
            checked={trackingType === "container"}
            onChange={() => setTrackingType("container")}
          />
          <span className="ml-2 text-sm sm:text-base">
            Container/Bill of Lading Number
          </span>
        </label>
        <label className="flex items-center">
          <input
            type="radio"
            className="form-radio"
            name="trackingType"
            value="booking"
            checked={trackingType === "booking"}
            onChange={() => setTrackingType("booking")}
          />
          <span className="ml-2 text-sm sm:text-base">Booking Number</span>
        </label>
      </div>

      <div className="flex flex-col sm:flex-row mb-4 sm:mb-6">
        <input
          type="text"
          className="w-full sm:flex-grow px-4 py-2 border rounded-md sm:rounded-r-none focus:outline-none focus:ring-2 focus:ring-[#640e0e] mb-2 sm:mb-0"
          placeholder={
            trackingType === "container"
              ? "Enter Container/Bill of Lading Number"
              : "Enter Booking Number"
          }
          value={trackingNumber}
          onChange={(e) => setTrackingNumber(e.target.value)}
        />
        <button
          className="w-full sm:w-auto bg-[#0f1031] text-white px-6 py-2 rounded-md sm:rounded-l-none hover:bg-[#640e0e] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#640e0e] focus:ring-opacity-50"
          onClick={handleTrack}
          disabled={isLoading}
        >
          {isLoading ? "Tracking..." : "Track"}
        </button>
      </div>

      {error && (
        <p className="text-red-500 mb-4 text-sm sm:text-base">{error}</p>
      )}

      {trackingResults.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {trackingResults.map((result) => (
            <div key={result.id} className="bg-white p-4 rounded shadow">
              <h3 className="font-bold mb-2 text-sm sm:text-base">
                Tracking ID: {result.id}
              </h3>
              <p className="text-sm sm:text-base">Status: {result.status}</p>
              <p className="text-sm sm:text-base">
                Location: {result.location}
              </p>
              <p className="text-sm sm:text-base">ETA: {result.eta}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default TrackingSection;
