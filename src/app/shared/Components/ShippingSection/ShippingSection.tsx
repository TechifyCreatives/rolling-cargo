import Image from "next/image";
import Link from "next/link";
import { Ship, Plane, ShoppingBag, FileCheck } from "lucide-react";

const ShippingSection = () => {
  return (
    <section
      className="relative min-h-screen bg-cover bg-center flex items-center justify-center py-20 px-4 md:px-8"
      style={{ backgroundImage: "url('/image1.jpg')" }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 max-w-4xl mx-auto text-white text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Moving the World, Together.
        </h2>
        <hr className="w-1/4 mx-auto border-t-2 border-[#640e0e] mb-6" />
        <p className="text-lg mb-8">
          We offer a wide range of air and sea freight services to Kenya, with a primary focus on reliability and communication that our customers can depend upon.
        </p>
        <button className="bg-[#640e0e] hover:bg-bg-[#0f1031] text-white font-bold py-3 px-6 rounded-full transition duration-300">
          <Link href='/about-us'>Read More About Rolling Cargo</Link>
        </button>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: Ship, text: "Sea Freight" },
            { icon: Plane, text: "Air Freight" },
            { icon: ShoppingBag, text: "Online Shopping" },
            { icon: FileCheck, text: "Custom Clearance" },
          ].map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <item.icon className="w-12 h-12 mb-4" />
              <p className="text-lg font-semibold">{item.text}</p>
              <div className="hidden lg:flex items-center mt-4">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="w-1 h-1 bg-white rounded-full mx-1"
                  ></div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShippingSection;