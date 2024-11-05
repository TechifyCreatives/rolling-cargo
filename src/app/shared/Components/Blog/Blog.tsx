"use client"
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  image: string;
  author: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Dangerous Goods List & Items We Don't Ship",
    excerpt: "Important information about items that require declaration or cannot be shipped.",
    content: `
      <strong>Must be Declared</strong>
      Items or substances that may pose a health, safety, property or environmental risk and are listed or classified in accordance with the KCCA Technical Instructions as dangerous goods.

      <strong>Declarable Items Include:</strong>
      Air Compressor, Nail Polish, Perfumes, Perfumes Raw Materials, Aerosols, Engine, Car Batteries, Car Airbag, Dry Ice, Items Having Magnet Inside (Example Speakers), Paints, Thinner, Sanitizer, Glue & Other Adhesives, Gas Cylinder & Items Contains Gas Inside (Compressed Gas), Fire Extinguisher, Pesticides, Bleach, Fuel & Fuel Contain Equipment Or Machine (Petrol/Diesel Etc), Cleaning Liquids & Sprays, Fertilizer, Chemicals, Lighter Fuel, Poison, Oxygen Generator, Laundry Products, Acid, Electronic Cigarette, Agriculture Chemicals, Hair Tonic, Alcoholic Substance, Charcoal, Smart Wheels (Hover Boards)

      <strong>ITEMS WE DO NOT SHIP:</strong>
      Cigarettes, Phones, Money, Sex Toys, Ammunition/Firearms, Drug substances, Shisha, Lithium batteries, Vapes, and Accessories

      Please ensure you declare all applicable items and refrain from attempting to ship prohibited items. This helps maintain safety and compliance with shipping regulations.
    `,
    category: "Shipping Policy",
    image: "/Dangerous Goods List & Items We Don't Ship.jpg",
    author: "Kennedy Mwangi"
  },
  {
    id: 2,
    title: "Efficient Cargo Shipping from the UK to Kenya.",
    excerpt: "How Rolling Cargo Simplifies Your Logistics",
    content: `
      <strong>Keywords:</strong>
      UK to Kenya cargo shipping, freight services UK, air freight from UK to Kenya, sea freight services, import cargo UK Kenya

      When shipping cargo from the UK to Kenya, efficiency and reliability are key factors. At Rolling Cargo, we provide tailored air and sea freight solutions to ensure your goods arrive on time and in perfect condition. Whether it's small packages or large commercial shipments, we handle the complexities of customs clearance, documentation, and logistics. Discover how our services stand out with competitive rates, real-time tracking, and dedicated customer support.

      <strong>Why Choose Rolling Cargo for UK Shipments?</strong>
      1. Affordable sea freight from the UK to Kenya
      2. Fast air freight services with guaranteed delivery timelines
      3. Streamlined customs clearance to avoid delays
      4. Expert handling of fragile and high-value goods
    `,
    category: "Shipping News",
    image: "/big-ben-westminster-bridge-on-river-thames-in-lon-2023-11-27-05-36-07-utc.jpg",
    author: "Kennedy Mwangi"
  },
  {
    id: 3,
    title: "Dubai Time Change",
    excerpt: "Stay informed about our Dubai Time Change",
    content: "Dear Customer, our Dubai branch timings will be changing to align with the newly announced weekend. New timings are: Mon-Thu & Sat: 8am-10:30pm, Fri: 8am-12pm,open 2pm-10:30pm Sun: Closed. Our dubai branch operate 6 days a week as per dubai time change",
    category: "Shipping News",
    image: "/Dubai Time Change.jpg",
    author: "Kennedy Mwangi"
  },
  {
    id: 4,
    title: "Affordable Sea Freight from Turkey",
    excerpt: "The Key to Successful Kenyan Imports",
    content: `
      <strong>Keywords:</strong>
      Turkey to Kenya shipping, sea freight Turkey, affordable shipping Turkey, cargo services from Turkey, shipping logistics Kenya

      With Turkey becoming a leading hub for manufacturing, businesses in Kenya are increasingly sourcing products from Turkish suppliers. Rolling Cargo provides cost-effective sea freight solutions, ensuring safe, timely, and affordable transport of your goods from Turkey to Kenya. Our comprehensive service covers everything from pick-up to customs clearance, giving you peace of mind.

      <strong>Benefits of Using Rolling Cargo for Turkish Imports:</strong>
      1. Competitive sea freight rates from Turkey
      2. Efficient handling of bulk cargo and large volumes
      3. Secure warehousing options in Turkey
      4. Streamlined customs and clearance processes
      5. Dedicated account managers for personalised support
    `,
    category: "Shipping News",
    image: "/Blog2.jpg",
    author: "Kennedy Mwangi"
  },
  {
    id: 5,
    title: "Connecting South Africa to Kenya",
    excerpt: "Road and Air Freight Solutions by Rolling Cargo",
    content: `
      <strong>Keywords:</strong>
      South Africa Kenya freight, air freight South Africa, road freight services South Africa, cargo transport from South Africa, import services Kenya

      As trade between South Africa and Kenya grows, the demand for reliable cargo solutions has increased. Rolling Cargo offers both road and air freight options, making it easy for businesses to transport goods safely and swiftly. Whether it's perishable items, machinery, or general cargo, our logistics experts are on hand to ensure seamless transportation, with regular updates and a commitment to meeting your deadlines.

      <strong>Why Rolling Cargo is the Best Choice for South Africa Imports:</strong>
      1. Flexible road and air freight services
      2. Real-time tracking and cargo management
      3. Professional handling of sensitive and high-value goods
      4. Door-to-door delivery options for added convenience
      5. Efficient cross-border shipping with minimal delays
    `,
    category: "Shipping News",
    image: "/aerial-view-of-green-point-in-cape-town-2023-11-27-05-30-14-utc.jpg",
    author: "Kennedy Mwangi"
  },
  {
    id: 6,
    title: "Seamless Sea Freight from the Netherlands",
    excerpt: "Importing to Kenya with Rolling Cargo",
    content: `
      <strong>Keywords:</strong>
      Netherlands to Kenya sea freight, freight forwarding Netherlands, shipping from Holland, import services Kenya, sea cargo logistics

      The Netherlands, known for its advanced logistics network, is a major trade partner with Kenya. Rolling Cargo specialises in sea freight solutions from Holland to Kenya, handling everything from agricultural products to heavy machinery. Our team ensures your cargo is loaded, transported, and cleared at the port efficiently, reducing transit times and costs.

      <strong>Top Reasons to Choose Rolling Cargo for Dutch Imports</strong>
      1. Efficient sea freight routes from the Netherlands to Kenya
      2. Timely customs clearance to avoid delays at Mombasa port
      3. Handling of large-scale shipments, including heavy equipment
      4. Secure storage and warehousing in the Netherlands
      5. Expert advice on import regulations and documentation
    `,
    category: "Shipping News",
    image: "/Blog 4 Seamless Sea Freight from the Netherlands Importing to Kenya with Rolling Cargo.jpg",
    author: "Kennedy Mwangi"
  },
  {
    id: 7,
    title: "Streamlining Cargo Imports from China to Kenya: ",
    excerpt: "How Rolling Cargo Supports Your Business",
    content: `
      <strong>Keywords:</strong>
      China to Kenya cargo, shipping from China to Kenya, air and sea freight China Kenya, cargo logistics China, import services Kenya

      China remains one of Kenya's largest trading partners, and importing goods from China requires a reliable logistics partner. At Rolling Cargo, we specialise in both air and sea freight services, providing a complete package from door-to-door delivery, customs clearance, and warehousing. Whether you're importing electronics, clothing, or heavy machinery, we ensure that your cargo arrives on time and within budget.

      <strong>Key Features of Rolling Cargo's China Import Services:</strong>
      1. Fast and reliable air freight from China to Kenya
      2. Cost-effective sea freight solutions for large shipments
      3. Full customs support to streamline import processes
      4. Real-time tracking for transparency at every stage
      5. Warehousing options in China for pre-shipment storage
    `,
    category: "Shipping News",
    image: "/Blog 5 Streamlining Cargo Imports from China to Kenya How Rolling Cargo Supports Your Business.jpg",
    author: "Kennedy Mwangi"
  },
  {
    id: 8,
    title: "Cargo Shipping Solutions from Dubai to Kenya Rolling Cargo Delivers Excellence",
    excerpt: "Rolling Cargo Delivers Excellence",
    content: `
      <strong>Keywords:</strong>
      Dubai to Kenya shipping, air freight Dubai, sea freight Dubai to Kenya, cargo services Dubai, logistics Dubai Kenya

      Dubai is a key transit hub for global trade, and Rolling Cargo provides expert logistics solutions for businesses importing from the UAE. Whether you're moving consumer goods, electronics, or construction materials, we offer both air and sea freight options tailored to meet your needs. Our team in Dubai ensures every detail is managed, from pickup to delivery in Kenya.

      <strong>Why Rolling Cargo is Your Go-To Partner for Dubai Imports:</strong>
      1. Fast air freight for time-sensitive shipments
      2. Economical sea freight for larger cargo loads
      3. Secure and insured transport for valuable goods
      4. Real-time tracking and 24/7 customer support
      5. Expertise in handling customs clearance in Dubai and Kenya
    `,
    category: "Shipping News",
    image: "/Blog 6 Cargo Shipping Solutions from Dubai to Kenya Rolling Cargo Delivers Excellence.jpg",
    author: "Kennedy Mwangi"
  }
];

const Blog: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const openModal = (post: BlogPost) => {
    setSelectedPost(post);
  };

  const closeModal = () => {
    setSelectedPost(null);
  };

  return (
    <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-5xl font-extrabold text-center mb-12 text-gray-800">
        Shipping Insights
      </h1>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <motion.div
            key={post.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
            whileHover={{ y: -5 }}
          >
            <div className="relative h-56">
              <Image
                src={post.image}
                alt={post.title}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="p-6">
              <span className="inline-block bg-blue-100 text-[#0f1031] text-xs px-3 py-1 rounded-full mb-3 font-semibold">
                {post.category}
              </span>
              <h2 className="text-2xl font-bold mb-3 text-gray-800">{post.title}</h2>
              <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">{post.author}</span>
                <button
                  onClick={() => openModal(post)}
                  className="bg-[#0f1031] hover:bg-[#640e0e] text-white font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105"
                >
                  Read More
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedPost && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
          >
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              className="bg-white rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="p-8">
                <h2 className="text-3xl font-bold mb-6 text-gray-800">{selectedPost.title}</h2>
                <div className="relative h-80 mb-6 rounded-lg overflow-hidden">
                  <Image
                    src={selectedPost.image}
                    alt={selectedPost.title}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="flex justify-between text-sm text-gray-500 mb-6">
                  <span className="font-medium">{selectedPost.author}</span>
                </div>
                <div className="prose max-w-none" 
                  dangerouslySetInnerHTML={{ __html: selectedPost.content }}>
                </div>
                <button
                  onClick={closeModal}
                  className="mt-8 bg-[#0f1031] hover:bg-[#640e0e] text-white font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Blog;