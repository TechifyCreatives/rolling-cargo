import React from "react";
import Customclearencetext from "../shared/Components/Customclearencetext/Customclearencetext";
import Banner from "../shared/Components/Banner/Banner";
import { customClearenceBannerContent } from "@/data/data";

const page = () => {
  return (
    <div>
      <Banner
        content={customClearenceBannerContent}
        imageSrc="/CustomsClearancePage.jpeg"
      />
      <Customclearencetext />
    </div>
  );
};

export default page;
