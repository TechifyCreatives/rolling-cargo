import React from "react";
import TrackingSection from "../shared/Components/TrackingSection/TrackingSection";
import { trackingBannerContent } from "@/data/data";
import Banner from "../shared/Components/Banner/Banner";

const page = () => {
  return (
    <div>
      <Banner
        content={trackingBannerContent}
        imageSrc="/OnlineShoppingTwo.jpg"
      />
      <TrackingSection />
    </div>
  );
};

export default page;
