"use client";
import React, { useState } from "react";

interface TrackingDetail {
  date: string;
  message: string;
  details?: string;
}

interface ApiResponse {
  data: TrackingDetail[];
}

const TrackingSection: React.FC = () => {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [trackingResults, setTrackingResults] = useState<TrackingDetail[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleTrack = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!trackingNumber.trim()) {
      setError("Please enter a waybill number");
      return;
    }

    setIsLoading(true);
    setError("");
    setTrackingResults([]);

    try {
      // Use the local API route instead of calling the external API directly
      const response = await fetch(`/api/tracking?waybill=${encodeURIComponent(trackingNumber)}`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const responseData: ApiResponse = await response.json();
      
      if (responseData.data && responseData.data.length > 0) {
        setTrackingResults(responseData.data);
      } else {
        setError("No tracking information found for the given waybill number.");
      }
    } catch (err) {
      console.error('Tracking error:', err);
      setError("Failed to fetch tracking information. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
    } catch (e) {
      return dateString;
    }
  };

  return (
    <section className="max-w-4xl mx-auto p-4 sm:p-6">
      <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Track Your Shipment</h2>

      <hr className="h-1 bg-[#640e0e] rounded-full mb-4 sm:mb-6" />

      <form onSubmit={handleTrack} className="mb-6">
        <div className="flex flex-col sm:flex-row gap-2">
          <input
            type="text"
            className="flex-grow px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#640e0e]"
            placeholder="Enter Waybill Number (e.g., 359777)"
            value={trackingNumber}
            onChange={(e) => setTrackingNumber(e.target.value)}
            aria-label="Waybill Number Input"
          />
          <button
            type="submit"
            className="bg-[#0f1031] text-white px-6 py-2 rounded-md hover:bg-[#640e0e] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#640e0e] disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isLoading}
          >
            {isLoading ? "Tracking..." : "Track Your Shipment"}
          </button>
        </div>
      </form>

      {error && (
        <p className="text-red-500 mb-4 text-sm sm:text-base" role="alert" id="noresults">
          {error}
        </p>
      )}

      {trackingResults.length > 0 && (
        <div id="searchResults" className="space-y-4">
          {trackingResults.map((result, index) => (
            <div
              key={index}
              id="card"
              className="bg-white rounded-lg shadow-md p-4 border-l-4 border-[#640e0e]"
            >
              <p id="date" className="mb-2">
                <strong>Date: </strong>
                {formatDate(result.date)}
              </p>
              <p id="message" className="mb-2">
                <strong>Status: </strong>
                {result.message}
              </p>
              {result.details && (
                <p id="details" className="text-gray-700">
                  <strong>Details: </strong>
                  {result.details}
                </p>
              )}
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default TrackingSection;