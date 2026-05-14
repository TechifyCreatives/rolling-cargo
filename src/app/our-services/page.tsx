import React from "react";
import OurServices from "../shared/Components/OurServices/OurServices";
import Banner from "../shared/Components/Banner/Banner";
import { servicesBannerContent } from "@/data/data";

const page = () => {
  return (
    <div>
      <Banner content={servicesBannerContent} imageSrc="/OurServicePage.jpg" />
      <OurServices />
    </div>
  );
};

export default page;
