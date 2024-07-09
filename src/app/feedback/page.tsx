import React from "react";
import ShippingFeedbackSection from "../shared/Components/ShippingFeedbackSection/ShippingFeedbackSection";
import Bannerfeedback from "../shared/Components/Bannerfeedback/Bannerfeedback";

const page = () => {
  return (
    <div className="pt-10">
      <Bannerfeedback />
      <h1 className="text-4xl font-bold text-center my-8">
        Your Shipping Experience Matters
      </h1>
      <ShippingFeedbackSection />
    </div>
  );
};

export default page;
