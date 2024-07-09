import Image from 'next/image';
import { FaShip, FaAnchor, FaGlobe, FaBox } from 'react-icons/fa';

const ShippingSection = () => {
  return (
    <section className="relative min-h-screen bg-cover bg-center flex items-center justify-center py-20 px-4 md:px-8" style={{backgroundImage: "url('/image1.jpg')"}}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 max-w-4xl mx-auto text-white text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Moving the World, Together.
        </h2>
        <hr className="w-1/4 mx-auto border-t-2 border-white mb-6" />
        <p className="text-lg mb-8">
          Our global shipping network is developed for our customers. By focusing on delivering best-in-class service to our customers, we are always available to help you with your particular needs and offer you a one-stop-shop solution for your next shipping request.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition duration-300">
          Read More About MSC
        </button>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: FaShip, text: "Global Shipping" },
            { icon: FaAnchor, text: "Port Operations" },
            { icon: FaGlobe, text: "Worldwide Network" },
            { icon: FaBox, text: "Cargo Solutions" }
          ].map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <item.icon className="text-4xl mb-4" />
              <p className="text-lg font-semibold">{item.text}</p>
              {index < 3 && (
                <div className="hidden lg:flex items-center mt-4">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="w-1 h-1 bg-white rounded-full mx-1"></div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShippingSection;