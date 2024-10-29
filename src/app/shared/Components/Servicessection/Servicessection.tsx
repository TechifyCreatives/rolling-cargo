import React from 'react';
import { Plane, Ship, ShoppingBag, FileCheck } from 'lucide-react';
import Link from 'next/link';

interface IconItemProps {
  icon: React.ReactNode;
  text: string;
}

const IconItem = ({ icon, text }: IconItemProps) => (
  <div className="flex items-center gap-3">
    <div className="p-2 rounded-lg bg-[#640e0e]">
      {React.cloneElement(icon as React.ReactElement, { 
        size: 20,
        color: 'white'
      })}
    </div>
    <span className="text-gray-600 text-sm md:text-base">{text}</span>
  </div>
);

const Servicessection = () => {
  return (
    <section className="relative w-full min-h-screen px-4 py-8 md:p-8">
      {/* Mobile Image */}
      <div className="md:hidden w-full h-48 mb-6">
        <img 
          src="/Image-beside-Shipping-Logistics.png" 
          alt="Section Image" 
          className="h-full w-full object-cover rounded-lg shadow-lg"
        />
      </div>

      {/* Desktop Image - Left Side */}
      <div className="absolute left-0 top-0 bottom-0 w-1/2 hidden md:block">
        <img 
          src="/Image-beside-Shipping-Logistics.png" 
          alt="Section Image" 
          className="h-full w-full object-cover rounded-lg shadow-xl"
        />
      </div>

      {/* Content Container */}
      <div className="container mx-auto flex items-center">
        <div className="w-full md:w-3/5 bg-white rounded-lg shadow-lg p-6 md:p-8 lg:p-12 z-10 md:ml-auto">
          {/* Top Section */}
          <div className="mb-6 md:mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
              Shipping Logistics
            </h2>
          </div>

          {/* Middle Section */}
          <div className="mb-6 md:mb-12">
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              Discover shipping and logistics service options from Rolling Cargo.
            </p>
          </div>

          {/* Bottom Section with different background */}
          <div className="bg-indigo-50 rounded-lg p-4 md:p-8 shadow-inner">
            <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-4 md:mb-6">
              Our Services
            </h3>
            
            {/* Services Grid */}
            <div className="space-y-4 md:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                <IconItem 
                  icon={<Plane />} 
                  text="Air Freight"
                />
                <IconItem 
                  icon={<Ship />} 
                  text="Sea Freight"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                <IconItem 
                  icon={<ShoppingBag />} 
                  text="Online Shopping"
                />
                <IconItem 
                  icon={<FileCheck />} 
                  text="Custom Clearance"
                />
              </div>
            </div>
          </div>

          <Link 
            href="/our-services" 
            className="group inline-flex mt-6 md:mt-4 items-center gap-2 bg-[#640e0e] hover:bg-[#8B0000] text-white text-sm font-medium px-4 md:px-5 py-2 md:py-2.5 rounded-lg transition-all duration-300 ease-out hover:shadow-md hover:translate-y-[-1px]"
          >
            Our Services
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

export default Servicessection;