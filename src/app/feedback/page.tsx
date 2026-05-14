import React from "react";
import ShippingFeedbackSection from "../shared/Components/ShippingFeedbackSection/ShippingFeedbackSection";
import Banner from "../shared/Components/Banner/Banner";
import { feedbackBannerContent } from "@/data/data";

const page = () => {
  return (
    <div className="pt-10">
      <Banner content={feedbackBannerContent} imageSrc="/FeedbackPage.jpg" />
      <h1 className="text-4xl font-bold text-center my-8">
        Your Shipping Experience Matters
      </h1>
      <ShippingFeedbackSection />
    </div>
  );
};

export default page;
