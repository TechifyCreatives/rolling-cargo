import React from "react";
import Terms from "../shared/Components/Terms/Terms";
import Banner from "../shared/Components/Banner/Banner";
import { termsBannerContent } from "@/data/data";

const page = () => {
  return (
    <div>
      <Banner content={termsBannerContent} imageSrc="/banner.jpg" />
      <Terms />
    </div>
  );
};

export default page;
