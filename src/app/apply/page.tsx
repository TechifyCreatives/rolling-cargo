import React from "react";
import ApplyPage from "../shared/Components/ApplyPage/ApplyPage";
import Banner from "../shared/Components/Banner/Banner";
import { applyBannerContent } from "@/data/data";

const page = () => {
  return (
    <div>
      <Banner content={applyBannerContent} imageSrc="image4.jpg" />
      <ApplyPage />
    </div>
  );
};

export default page;
