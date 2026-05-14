import React from "react";
import Head from "next/head";
import Blog from "../shared/Components/Blog/Blog";
import Banner from "../shared/Components/Banner/Banner";
import { blogBannerContent } from "@/data/data";

const page: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Shipping Insights | OceanWave Logistics</title>
        <meta
          name="description"
          content="Stay updated with the latest trends and news in the shipping industry"
        />
      </Head>

      <main>
        <Banner content={blogBannerContent} imageSrc="/RC Jan-72.jpg" />
        <div className="container mx-auto py-8"></div>
        <Blog />
      </main>
    </div>
  );
};

export default page;
