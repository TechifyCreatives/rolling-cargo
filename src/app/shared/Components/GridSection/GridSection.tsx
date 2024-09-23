import Link from "next/link";
import React from "react";
import { FaHandshake, FaMoneyBillWave, FaShippingFast } from 'react-icons/fa';

interface SolutionItem {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
}

const solutions: SolutionItem[] = [
  {
    icon: <FaHandshake className="w-12 h-12" />,
    title: "Contact your supplier",
    description:
      "Liaise with your supplier, agree on the prices and items you wish to buy. Give the supplier our shipping address.",
    link: "/about-us",
  },
  {
    icon: <FaMoneyBillWave className="w-12 h-12" />,
    title: "We pay on your behalf",
    description:
      "Send the funds to our Rolling Cargo Account, then we remit the payments on your behalf (Turkey)",
    link: "/about-us",
  },
  {
    icon: <FaShippingFast className="w-12 h-12" />,
    title: "Realtime Updates",
    description:
      "Once the package arrives at our warehouse, we will send you a message, keeping you posted on the tracking Info.",
    link: "/air-cargo",
  },
];

const GridSection: React.FC = () => {
  return (
    <div className="w-full bg-[url('/image1.jpg')] bg-cover bg-center">
      <div className="bg-black/70 w-full h-full py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white text-center mb-8 relative">
            <span className="relative z-10">Our Shipping Processes</span>
            {/* <span className="absolute bottom--2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-yellow-400"></span> */}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-white">
            {solutions.map((solution) => {
              if (!solution) {
                return null;
              }
              const { icon, title, description, link } = solution;
              return (
                <div
                  key={title}
                  className="flex flex-col items-center justify-between p-6 rounded-lg h-full"
                >
                  <div className="flex items-center mb-4 h-12">{icon}</div>
                  <h3 className="text-lg font-semibold text-center mb-4 h-14 flex items-center">
                    {title}
                  </h3>
                  <p className="text-sm text-center mb-6">
                    {description}
                  </p>
                </div>
              );
            })}
          </div>
          <div className="flex justify-center align-center mt-8">
            <Link
              href='/about-us' 
              className="bg-white text-center text-black px-6 py-3 rounded-full text-sm font-semibold hover:bg-yellow-400 transition-colors mt-auto"
            >
              About Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GridSection;