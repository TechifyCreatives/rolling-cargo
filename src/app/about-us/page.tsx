import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "About Us",
  description:
    "Learn about Rolling Cargo, a Kenyan international freight forwarder moving air and sea cargo from the UK, Dubai, China, Turkey, Italy, the Netherlands and South Africa since day one.",
  path: "/about-us",
});

import React from "react";
import AboutUs from "../shared/Components/AboutUs/AboutUs";
import MissionVisionPriorities from "../shared/Components/MissionVisionPriorities/MissionVisionPriorities";
import StatisticsGrid from "../shared/Components/StatisticsGrid/StastisticsGrid";
import Banner from "../shared/Components/Banner/Banner";
import { aboutUsBannerContent } from "@/data/data";

const page = () => {
  return (
    <div>
      <Banner content={aboutUsBannerContent} imageSrc="/About Us Page.jpg" />
      <AboutUs />
      <MissionVisionPriorities />
      <StatisticsGrid />
    </div>
  );
};

export default page;
