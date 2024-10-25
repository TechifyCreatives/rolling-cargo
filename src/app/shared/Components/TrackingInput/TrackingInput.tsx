import React from 'react';
import { Search } from 'lucide-react';

interface TrackingInputProps {
  trackingNumber: string;
  onTrackingNumberChange: (value: string) => void;
  onTrack: () => void;
  isLoading: boolean;
  isMobile?: boolean;
}

const TrackingInput: React.FC<TrackingInputProps> = ({
  trackingNumber,
  onTrackingNumberChange,
  onTrack,
  isLoading,
  isMobile = false,
}) => {
  return (
    <div className="flex space-x-2">
      <input
        type="text"
        placeholder={isMobile ? "Enter tracking number" : "Track your shipment"}
        className={`${
          isMobile
            ? "flex-grow p-2 border rounded-l focus:outline-none focus:ring-2 focus:ring-[#0f1031]"
            : "bg-transparent border-none focus:outline-none text-sm w-40 lg:w-48 px-2"
        }`}
        value={trackingNumber}
        onChange={(e) => onTrackingNumberChange(e.target.value)}
      />
      <button 
        onClick={onTrack}
        className={`${
          isMobile
            ? "bg-[#0f1031] text-white px-4 rounded-r"
            : "bg-[#0f1031] text-white p-1 rounded"
        } hover:bg-[#1a1b4b] transition-colors duration-300`}
        disabled={isLoading}
      >
        {isMobile ? (
          isLoading ? "..." : "Track"
        ) : (
          <Search size={16} />
        )}
      </button>
    </div>
  );
};

export default TrackingInput;