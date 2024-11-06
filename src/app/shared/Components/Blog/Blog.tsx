"use client"
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface BlogSection {
  title: string;
  content: string[];
}

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  sections: BlogSection[];
  category: string;
  image: string;
  author: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Dangerous Goods List & Items We Don't Ship",
    excerpt: "Important information about items that require declaration or cannot be shipped.",
    sections: [
      {
        title: "Must be Declared",
        content: ["Items or substances that may pose a health, safety, property or environmental risk and are listed or classified in accordance with the KCCA Technical Instructions as dangerous goods."]
      },
      {
        title: "Declarable Items Include",
        content: [
          "Air Compressor",
          "Nail Polish",
          "Perfumes",
          "Perfumes Raw Materials",
          "Aerosols",
          "Engine",
          "Car Batteries",
          "Car Airbag",
          "Dry Ice",
          "Items Having Magnet Inside (Example Speakers)",
          "Paints",
          "Thinner",
          "Sanitizer",
          "Glue & Other Adhesives",
          "Gas Cylinder & Items Contains Gas Inside (Compressed Gas)",
          "Fire Extinguisher",
          "Pesticides",
          "Bleach",
          "Fuel & Fuel Contain Equipment Or Machine (Petrol/Diesel Etc)",
          "Cleaning Liquids & Sprays",
          "Fertilizer",
          "Chemicals",
          "Lighter Fuel",
          "Poison",
          "Oxygen Generator",
          "Laundry Products",
          "Acid",
          "Electronic Cigarette",
          "Agriculture Chemicals",
          "Hair Tonic",
          "Alcoholic Substance",
          "Charcoal",
          "Smart Wheels (Hover Boards)"
        ]
      },
      {
        title: "Items We Do Not Ship",
        content: [
          "Cigarettes",
          "Phones",
          "Money",
          "Sex Toys",
          "Ammunition/Firearms",
          "Drug substances",
          "Shisha",
          "Lithium batteries",
          "Vapes",
          "and Accessories"
        ]
      }
    ],
    category: "Shipping Policy",
    image: "/Dangerous Goods List & Items We Don't Ship.jpg",
    author: "Rolling Cargo"
  },
  {
    id: 2,
    title: "Efficient Cargo Shipping from the UK to Kenya",
    excerpt: "How Rolling Cargo Simplifies Your Logistics",
    sections: [
      {
        title: "Overview",
        content: [
          "When shipping cargo from the UK to Kenya, efficiency and reliability are key factors. At Rolling Cargo, we provide tailored air and sea freight solutions to ensure your goods arrive on time and in perfect condition. Whether it's small packages or large commercial shipments, we handle the complexities of customs clearance, documentation, and logistics."
        ]
      },
      {
        title: "Why Choose Rolling Cargo for UK Shipments",
        content: [
          "Affordable sea freight from the UK to Kenya",
          "Fast air freight services with guaranteed delivery timelines",
          "Streamlined customs clearance to avoid delays",
          "Expert handling of fragile and high-value goods"
        ]
      }
    ],
    category: "Shipping News",
    image: "/big-ben-westminster-bridge-on-river-thames-in-lon-2023-11-27-05-36-07-utc.jpg",
    author: "Rolling Cargo"
  },
  {
    id: 3,
    title: "Dubai Time Change",
    excerpt: "Stay informed about our Dubai Time Change",
    sections: [
      {
        title: "New Operating Hours",
        content: [
          "Monday to Thursday & Saturday: 8am-10:30pm",
          "Friday: 8am-12pm, open 2pm-10:30pm",
          "Sunday: Closed"
        ]
      },
      {
        title: "Important Notice",
        content: [
          "Our Dubai branch operates 6 days a week as per Dubai time change",
          "These changes align with the newly announced weekend schedule"
        ]
      }
    ],
    category: "Shipping News",
    image: "/Dubai Time Change.jpg",
    author: "Rolling Cargo"
  },
  {
    id: 4,
    title: "Affordable Sea Freight from Turkey",
    excerpt: "The Key to Successful Kenyan Imports",
    sections: [
      {
        title: "Our Services",
        content: [
          "With Turkey becoming a leading hub for manufacturing, businesses in Kenya are increasingly sourcing products from Turkish suppliers. Rolling Cargo provides cost-effective sea freight solutions, ensuring safe, timely, and affordable transport of your goods from Turkey to Kenya. Our comprehensive service covers everything from pick-up to customs clearance, giving you peace of mind."
        ]
      },
      {
        title: "Benefits of Using Rolling Cargo for Turkish Imports",
        content: [
          "Competitive sea freight rates from Turkey",
          "Efficient handling of bulk cargo and large volumes",
          "Secure warehousing options in Turkey",
          "Streamlined customs and clearance processes",
          "Dedicated account managers for personalised support"
        ]
      }
    ],
    category: "Shipping News",
    image: "/Blog2.jpg",
    author: "Rolling Cargo"
  },
  {
    id: 5,
    title: "Connecting South Africa to Kenya",
    excerpt: "Road and Air Freight Solutions by Rolling Cargo",
    sections: [
      {
        title: "Our Services",
        content: [
          "As trade between South Africa and Kenya grows, the demand for reliable cargo solutions has increased. Rolling Cargo offers both road and air freight options, making it easy for businesses to transport goods safely and swiftly. Whether it's perishable items, machinery, or general cargo, our logistics experts are on hand to ensure seamless transportation, with regular updates and a commitment to meeting your deadlines."
        ]
      },
      {
        title: "Why Rolling Cargo is the Best Choice for South Africa Imports",
        content: [
          "Flexible road and air freight services",
          "Real-time tracking and cargo management",
          "Professional handling of sensitive and high-value goods",
          "Door-to-door delivery options for added convenience",
          "Efficient cross-border shipping with minimal delays"
        ]
      }
    ],
    category: "Shipping News",
    image: "/aerial-view-of-green-point-in-cape-town-2023-11-27-05-30-14-utc.jpg",
    author: "Rolling Cargo"
  },
  {
    id: 6,
    title: "Seamless Sea Freight from the Netherlands",
    excerpt: "Importing to Kenya with Rolling Cargo",
    sections: [
      {
        title: "Our Services",
        content: [
          "The Netherlands, known for its advanced logistics network, is a major trade partner with Kenya. Rolling Cargo specialises in sea freight solutions from Holland to Kenya, handling everything from agricultural products to heavy machinery. Our team ensures your cargo is loaded, transported, and cleared at the port efficiently, reducing transit times and costs."
        ]
      },
      {
        title: "Top Reasons to Choose Rolling Cargo for Dutch Imports",
        content: [
          "Efficient sea freight routes from the Netherlands to Kenya",
          "Timely customs clearance to avoid delays at Mombasa port",
          "Handling of large-scale shipments, including heavy equipment",
          "Secure storage and warehousing in the Netherlands",
          "Expert advice on import regulations and documentation"
        ]
      }
    ],
    category: "Shipping News",
    image: "/Blog 4 Seamless Sea Freight from the Netherlands Importing to Kenya with Rolling Cargo.jpg",
    author: "Rolling Cargo"
  },
  {
    id: 7,
    title: "Streamlining Cargo Imports from China to Kenya",
    excerpt: "How Rolling Cargo Supports Your Business",
    sections: [
      {
        title: "Our Services",
        content: [
          "China remains one of Kenya's largest trading partners, and importing goods from China requires a reliable logistics partner. At Rolling Cargo, we specialise in both air and sea freight services, providing a complete package from door-to-door delivery, customs clearance, and warehousing. Whether you're importing electronics, clothing, or heavy machinery, we ensure that your cargo arrives on time and within budget."
        ]
      },
      {
        title: "Key Features of Rolling Cargo's China Import Services",
        content: [
          "Fast and reliable air freight from China to Kenya",
          "Cost-effective sea freight solutions for large shipments",
          "Full customs support to streamline import processes",
          "Real-time tracking for transparency at every stage",
          "Warehousing options in China for pre-shipment storage"
        ]
      }
    ],
    category: "Shipping News",
    image: "/Blog 5 Streamlining Cargo Imports from China to Kenya How Rolling Cargo Supports Your Business.jpg",
    author: "Rolling Cargo"
  },
  {
    id: 8,
    title: "Cargo Shipping Solutions from Dubai to Kenya",
    excerpt: "Rolling Cargo Delivers Excellence",
    sections: [
      {
        title: "Our Services",
        content: [
          "Dubai is a key transit hub for global trade, and Rolling Cargo provides expert logistics solutions for businesses importing from the UAE. Whether you're moving consumer goods, electronics, or construction materials, we offer both air and sea freight options tailored to meet your needs. Our team in Dubai ensures every detail is managed, from pickup to delivery in Kenya."
        ]
      },
      {
        title: "Why Rolling Cargo is Your Go-To Partner for Dubai Imports",
        content: [
          "Fast air freight for time-sensitive shipments",
          "Economical sea freight for larger cargo loads",
          "Secure and insured transport for valuable goods",
          "Real-time tracking and 24/7 customer support",
          "Expertise in handling customs clearance in Dubai and Kenya"
        ]
      }
    ],
    category: "Shipping News",
    image: "/Blog 6 Cargo Shipping Solutions from Dubai to Kenya Rolling Cargo Delivers Excellence.jpg",
    author: "Rolling Cargo"
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
                <div className="prose max-w-none">
                  {selectedPost.sections.map((section, index) => (
                    <div key={index} className="mb-6">
                      <h3 className="text-xl font-bold mb-3 text-gray-800">{section.title}</h3>
                      {section.content.map((paragraph, pIndex) => (
                        <div key={pIndex} className="mb-2">
                          {section.content.length > 1 ? (
                            <li className="text-gray-700">{paragraph}</li>
                          ) : (
                            <p className="text-gray-700">{paragraph}</p>
                          )}
                        </div>
                      ))}
                    </div>
                  ))}
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