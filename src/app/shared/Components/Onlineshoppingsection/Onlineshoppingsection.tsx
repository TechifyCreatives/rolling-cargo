import { Camera, Phone, Mail, MapPin } from 'lucide-react';
import Link from 'next/link';

interface IconItemProps {
  icon: React.ReactNode;
  text: string;
}

const IconItem = ({ icon, text }: IconItemProps) => (
  <div className="flex items-center gap-3">
    <div className="text-blue-600">
      {icon}
    </div>
    <span className="text-gray-600">{text}</span>
  </div>
);

const Onlineshoppingsection = () => {
  return (
    <section className="relative min-h-screen p-8">
      {/* Image Side */}
      <div className="absolute right-0 top-8 bottom-8 w-1/2 hidden lg:block">
        <img 
          src="/banner2.jpg" 
          alt="Section Image" 
          className="h-full w-full object-cover rounded-lg shadow-xl"
        />
      </div>

      {/* Content Container */}
      <div className="container mx-auto">
        <div className="relative lg:w-3/5 bg-white rounded-lg shadow-lg p-8 lg:p-12 z-10">
          {/* Top Section */}
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Strategically Located 
            </h2>
            <p className="text-xl text-blue-600">
              In 9+ Countries
            </p>
          </div>

          {/* Middle Section */}
          <div className="mb-12">
            <p className="text-gray-600 leading-relaxed">
              We have extensive and well-established partnerships with different industry players. This enables us to offer better and most competitive rates. We deliver using the shortest possible transit time with optimum routings that are cost efficient.
            </p>
          </div>

          <div className='flex bg-[#640e0e] text-white p-4 rounded text-center'>
            <button>
              <Link href='/about-us'>About Us</Link>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Image */}
      <div className="lg:hidden w-full h-64 mt-8">
        <img 
          src="/banner2.jpg" 
          alt="Section Image" 
          className="h-full w-full object-cover rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
};

export default Onlineshoppingsection;