"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

interface GridItem {
  id: number;
  heading: string;
  paragraph: string;
  buttonText: string;
  backgroundImage: string;
}

const gridItems: GridItem[] = [
  {
    id: 1,
    heading: "Heading 1",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    buttonText: "Learn More",
    backgroundImage: "/image1.jpg",
  },
  {
    id: 2,
    heading: "Heading 1",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    buttonText: "Learn More",
    backgroundImage: "/image1.jpg",
  },
  {
    id: 3,
    heading: "Heading 1",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    buttonText: "Learn More",
    backgroundImage: "/image1.jpg",
  },
  {
    id: 4,
    heading: "Heading 1",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    buttonText: "Learn More",
    backgroundImage: "/image1.jpg",
  },
  {
    id: 5,
    heading: "Heading 1",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    buttonText: "Learn More",
    backgroundImage: "/image1.jpg",
  },
];

const GridSection: React.FC = () => {
  const [expandedItem, setExpandedItem] = useState<number | null>(null);
  const [backgroundImage, setBackgroundImage] = useState("/image2.jpg");
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const preloadImages = async () => {
      try {
        const imagePromises = gridItems.map((item) => {
          return new Promise((resolve, reject) => {
            if (!item.backgroundImage) {
              reject(new Error("Invalid background image"));
              return;
            }
            const img = new Image();
            img.src = item.backgroundImage;
            img.onload = resolve;
            img.onerror = reject;
          });
        });

        await Promise.all(imagePromises);
        setImagesLoaded(true);
      } catch (error) {
        console.error("Error preloading images:", error);
      }
    };

    preloadImages();
  }, []);

  const toggleExpand = (id: number) => {
    setExpandedItem(expandedItem === id ? null : id);
  };

  return (
    <section className="relative w-full">
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          layout="fill"
          priority
          quality={75}
          placeholder="blur"
          blurDataURL="/placeholder.jpg"
          objectFit="cover"
          alt="Background"
          className="transition-opacity duration-300"
        />
      </div>
      <div className="relative z-10 bg-black bg-opacity-50">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {gridItems.map((item) => (
              <div
                key={item.id}
                className="bg-white bg-opacity-80 p-6 rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
                onMouseEnter={() =>
                  imagesLoaded && setBackgroundImage(item.backgroundImage)
                }
                onMouseLeave={() =>
                  imagesLoaded && setBackgroundImage("/default-background.jpg")
                }
              >
                <h2 className="text-xl font-bold mb-4">{item.heading}</h2>
                <p className="mb-4">
                  {expandedItem === item.id
                    ? item.paragraph
                    : `${item.paragraph.slice(0, 100)}...`}
                </p>
                <button
                  onClick={() => toggleExpand(item.id)}
                  className="text-blue-600 hover:text-blue-800 font-semibold"
                >
                  {expandedItem === item.id ? "Read Less" : "Read More"}
                </button>
                <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-300">
                  {item.buttonText}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GridSection;
