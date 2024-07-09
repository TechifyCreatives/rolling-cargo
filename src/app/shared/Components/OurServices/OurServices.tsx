// components/OurServices.tsx

import React from "react";
import Link from "next/link";

interface Service {
  title: string;
  description: string;
  icon: string;
  slug: string;
}

const services: Service[] = [
  {
    title: "Air Cargo",
    description:
      "Fast and reliable air shipping solutions for time-sensitive cargo.",
    icon: "✈️",
    slug: "air-cargo",
  },
  {
    title: "Sea Cargo",
    description: "Cost-effective sea shipping for large volumes of goods.",
    icon: "🚢",
    slug: "sea-cargo",
  },
  {
    title: "Custom Clearance",
    description: "Expert assistance with customs procedures and documentation.",
    icon: "📋",
    slug: "custom-clearance",
  },
  {
    title: "Online Shopping",
    description:
      "Convenient shipping solutions for e-commerce businesses and online shoppers.",
    icon: "🛒",
    slug: "online-shopping",
  },
];

const OurServices: React.FC = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md flex flex-col"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4 flex-grow">
                {service.description}
              </p>
              <Link href={`/services/${service.slug}`} className="inline-block">
                <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300">
                  Read More
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
