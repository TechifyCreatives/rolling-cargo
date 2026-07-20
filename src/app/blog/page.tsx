import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Logistics & Shipping Blog",
  description:
    "Guides and updates on importing to Kenya — shipping from the UK, China, Dubai, South Africa and the Netherlands, customs tips and freight industry news.",
  path: "/blog",
});

import React from "react";
import Blog from "../shared/Components/Blog/Blog";
import Banner from "../shared/Components/Banner/Banner";
import { blogBannerContent } from "@/data/data";

const page: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <main>
        <Banner content={blogBannerContent} imageSrc="/RC Jan-72.jpg" />
        <div className="container mx-auto py-8"></div>
        <Blog />
      </main>
    </div>
  );
};

export default page;
