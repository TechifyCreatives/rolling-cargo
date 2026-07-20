import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Track Your Shipment",
  description:
    "Track your Rolling Cargo shipment in real time. Enter your tracking number for live location updates and estimated delivery times.",
  path: "/tracking",
});

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
