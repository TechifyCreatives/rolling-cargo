import React from 'react'
import { Plane, Ship, ShoppingBag, FileCheck } from 'lucide-react';
import Link from 'next/link';

interface IconItemProps {
  icon: React.ReactNode;
  text: string;
}

const IconItem = ({ icon, text }: IconItemProps) => (
  <div className="flex items-center gap-3">
    <div className="p-2 rounded-lg" style={{ backgroundColor: '#640e0e' }}>
      {React.cloneElement(icon as React.ReactElement, { 
        size: 24,
        color: 'white'
      })}
    </div>
    <span className="text-gray-600">{text}</span>
  </div>
);

const Servicessection = () => {
  return (
    <section className="relative min-h-screen p-8">
      {/* Image Side - Left */}
      <div className="absolute left-0 top-8 bottom-8 w-1/2 hidden lg:block">
        <img 
          src="/image2.jpg" 
          alt="Section Image" 
          className="h-full w-full object-cover rounded-lg shadow-xl"
        />
      </div>

      {/* Content Container */}
      <div className="container mx-auto">
        <div className="relative lg:w-3/5 bg-white rounded-lg shadow-lg p-8 lg:p-12 z-10 ml-auto">
          {/* Top Section */}
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Cargo Shipping
            </h2>
            <p className="text-xl text-indigo-600">
              With Rolling Cargo
            </p>
          </div>

          {/* Middle Section */}
          <div className="mb-12">
            <p className="text-gray-600 leading-relaxed">
              Discover shipping and logistics service options from Rolling Cargo.
            </p>
          </div>

          {/* Bottom Section with different background */}
          <div className="bg-indigo-50 rounded-lg p-8 shadow-inner">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              Our Services
            </h3>
            
            {/* First Row of Icons */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <IconItem 
                icon={<Plane />} 
                text="Air Freight"
              />
              <IconItem 
                icon={<Ship />} 
                text="Sea Freight"
              />
            </div>

            {/* Second Row of Icons */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
          <div className='flex bg-[#640e0e] text-white p-4 rounded text-center'>
            <button>
              <Link href='/services'>Our Services</Link>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Image */}
      <div className="lg:hidden w-full h-64 mb-8">
        <img 
          src="/image2.jpg" 
          alt="Section Image" 
          className="h-full w-full object-cover rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
};

export default Servicessection;