import React from "react";
import Banner from "../shared/Components/Banner/Banner";
import { costEstimatorBannerContent } from "@/data/data";

const page = () => {
  return (
    <div>
      <Banner
        content={costEstimatorBannerContent}
        imageSrc="/CostEstimator.jpg"
      />
    </div>
  );
};

export default page;
