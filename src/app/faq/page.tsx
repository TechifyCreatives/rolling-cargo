import React from "react";
import Faq from "../shared/Components/Faq/Faq";
import Banner from "../shared/Components/Banner/Banner";
import { faqBannerContent } from "@/data/data";

const page = () => {
  return (
    <div>
      <Banner content={faqBannerContent} imageSrc="/FAQ.jpg" />
      <Faq />
    </div>
  );
};

export default page;
