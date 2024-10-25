import { Clock, Users, Star, Trophy } from 'lucide-react';

interface IconItemProps {
  icon: React.ReactNode;
  text: string;
}

const IconItem = ({ icon, text }: IconItemProps) => (
  <div className="flex items-center gap-3">
    <div className="text-indigo-600">
      {icon}
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
              Experience Excellence
            </h2>
            <p className="text-xl text-indigo-600">
              Discover our achievements
            </p>
          </div>

          {/* Middle Section */}
          <div className="mb-12">
            <p className="text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do 
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut 
              enim ad minim veniam, quis nostrud exercitation ullamco laboris 
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
              reprehenderit in voluptate velit esse cillum dolore eu fugiat 
              nulla pariatur.
            </p>
          </div>

          {/* Bottom Section with different background */}
          <div className="bg-indigo-50 rounded-lg p-8 shadow-inner">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              Our Key Metrics
            </h3>
            
            {/* First Row of Icons */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <IconItem 
                icon={<Clock size={24} />} 
                text="10+ Years Experience"
              />
              <IconItem 
                icon={<Users size={24} />} 
                text="500+ Happy Clients"
              />
            </div>

            {/* Second Row of Icons */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <IconItem 
                icon={<Star size={24} />} 
                text="4.9 Average Rating"
              />
              <IconItem 
                icon={<Trophy size={24} />} 
                text="15 Industry Awards"
              />
            </div>
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