// page.tsx
import React from "react";
import Head from "next/head";
import Blog from "../shared/Components/Blog/Blog";
import Bannerblog from "../shared/Components/Bannerblog/Bannerblog";

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

      <main className="container mx-auto px-4 py-8">
        <Bannerblog />
        <Blog />
      </main>
    </div>
  );
};

export default page;
