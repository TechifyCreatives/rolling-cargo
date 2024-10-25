import React from 'react';

export interface TrackingResult {
  waybill: string;
  status: string;
  location: string;
  eta: string;
}

interface TrackingResultsProps {
  results: TrackingResult[];
}

const TrackingResults: React.FC<TrackingResultsProps> = ({ results }) => {
  return (
    <div className="mt-4">
      {results.map((result) => (
        <div key={result.waybill} className="bg-gray-50 p-3 rounded mb-2">
          <p className="font-semibold">Waybill: {result.waybill}</p>
          <p>Status: {result.status}</p>
          <p>Location: {result.location}</p>
          <p>ETA: {result.eta}</p>
        </div>
      ))}
    </div>
  );
};

export default TrackingResults;