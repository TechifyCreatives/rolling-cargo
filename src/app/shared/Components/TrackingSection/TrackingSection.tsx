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
    <section className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6">Tracking</h2>

      <hr className="h-1 bg-blue-200 rounded-full mb-6" />

      <div className="mb-6">
        <label className="inline-flex items-center mr-6">
          <input
            type="radio"
            className="form-radio"
            name="trackingType"
            value="container"
            checked={trackingType === "container"}
            onChange={() => setTrackingType("container")}
          />
          <span className="ml-2">Container/Bill of Lading Number</span>
        </label>
        <label className="inline-flex items-center">
          <input
            type="radio"
            className="form-radio"
            name="trackingType"
            value="booking"
            checked={trackingType === "booking"}
            onChange={() => setTrackingType("booking")}
          />
          <span className="ml-2">Booking Number</span>
        </label>
      </div>

      <div className="flex mb-6">
        <input
          type="text"
          className="flex-grow px-4 py-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder={
            trackingType === "container"
              ? "Enter Container/Bill of Lading Number"
              : "Enter Booking Number"
          }
          value={trackingNumber}
          onChange={(e) => setTrackingNumber(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white px-6 py-2 rounded-r-md hover:bg-blue-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          onClick={handleTrack}
          disabled={isLoading}
        >
          {isLoading ? "Tracking..." : "Track"}
        </button>
      </div>

      {error && <p className="text-red-500 mb-4">{error}</p>}

      {trackingResults.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {trackingResults.map((result) => (
            <div key={result.id} className="bg-white p-4 rounded shadow">
              <h3 className="font-bold mb-2">Tracking ID: {result.id}</h3>
              <p>Status: {result.status}</p>
              <p>Location: {result.location}</p>
              <p>ETA: {result.eta}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default TrackingSection;
