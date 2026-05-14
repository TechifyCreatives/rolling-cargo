import { airCargoContent } from "@/data/data";
import React from "react";

const AirCargoText: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center my-10 bg-blue-50 px-2">
      <div className="w-full max-w-4xl bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-4xl font-bold mb-4 text-center">
          {airCargoContent.title}
        </h1>
        <hr className="border-t-4 border-[#640e0e] rounded-full w-1/2 mx-auto mb-6" />
        <p className="text-gray-700 text-center leading-relaxed whitespace-pre-line">
          {airCargoContent.description}
        </p>
      </div>
    </div>
  );
};

export default AirCargoText;
