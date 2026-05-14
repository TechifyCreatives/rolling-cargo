// src/components/AboutUs.tsx
import { aboutContent, aboutQuote } from "@/data/data";
import React from "react";

const AboutUs: React.FC = () => {
  return (
    <section className="container mx-auto px-10 py-16">
      {/* Quote Section */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-16">
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <p className="text-2xl italic text-gray-600">
            {aboutQuote.quoteText}
          </p>
        </div>
        <div className="w-px h-20 bg-gray-300 hidden md:block"></div>
        <div className="w-full md:w-1/2 text-right">
          <p className="text-xl font-semibold">{aboutQuote.authorName}</p>
          <p className="text-gray-600">{aboutQuote.authorTitle}</p>
        </div>
      </div>

      {/* About Us Content */}
      <div>
        <h2 className="text-3xl font-bold mb-4">{aboutContent.title}</h2>
        <hr className="border-t-2 border-[#640e0e] mb-6" />
        <p className="text-lg text-gray-700 text-center leading-relaxed whitespace-pre-line">
          {aboutContent.description}
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
