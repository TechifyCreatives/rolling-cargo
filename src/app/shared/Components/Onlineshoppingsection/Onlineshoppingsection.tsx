import React from 'react';
import { Camera, Phone, Mail, MapPin } from 'lucide-react';
import Link from 'next/link';

interface IconItemProps {
  icon: React.ReactNode;
  text: string;
}

const IconItem = ({ icon, text }: IconItemProps) => (
  <div className="flex items-center gap-3">
    <div className="text-blue-600">
      {React.cloneElement(icon as React.ReactElement, { 
        size: 20,
        className: 'md:w-6 md:h-6'
      })}
    </div>
    <span className="text-gray-600 text-sm md:text-base">{text}</span>
  </div>
);

const Onlineshoppingsection = () => {
  return (
    <section className="w-full bg-white py-8 md:py-8">
      {/* Mobile Image */}
      <div className="md:hidden w-full h-48 mb-6">
        <img 
          src="/banner2.jpg" 
          alt="Section Image" 
          className="h-full w-full object-cover rounded-lg shadow-lg"
        />
      </div>

      {/* Desktop Image Side */}
      <div className="absolute right-0 top-0 bottom-0 w-1/2 hidden md:block">
        <img 
          src="/banner2.jpg" 
          alt="Section Image" 
          className="h-full w-full object-cover rounded-lg shadow-xl"
        />
      </div>

      {/* Content Container */}
      <div className="container mx-auto flex items-center">
        <div className="w-full md:w-3/5 bg-white rounded-lg shadow-lg p-6 md:p-8 lg:p-12 z-10">
          {/* Top Section */}
          <div className="mb-6 md:mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-2 md:mb-4">
              Strategically Located 
            </h2>
            <p className="text-lg md:text-xl text-[#640e0e]">
              In 9+ Countries
            </p>
          </div>

          {/* Middle Section */}
          <div className="mb-8 md:mb-12">
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              We have extensive and well-established partnerships with different industry players. This enables us to offer better and most competitive rates. We deliver using the shortest possible transit time with optimum routings that are cost efficient.
            </p>
          </div>

          <Link 
            href="/about-us" 
            className="group inline-flex items-center gap-2 bg-[#640e0e] hover:bg-[#8B0000] text-white text-sm font-medium px-4 md:px-5 py-2 md:py-2.5 rounded-lg transition-all duration-300 ease-out hover:shadow-md hover:translate-y-[-1px]"
          >
            About Us
            <svg 
              className="w-4 h-4 transition-transform duration-300 ease-out transform group-hover:translate-x-0.5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Onlineshoppingsection;