import React from "react";
import Onlineshoppingtext from "../shared/Components/Onlineshoppingtext/Onlineshoppingtext";
import { onlineShoppingBannerContent } from "@/data/data";
import Banner from "../shared/Components/Banner/Banner";

const page = () => {
  return (
    <div>
      <Banner
        content={onlineShoppingBannerContent}
        imageSrc="/OnlineShoppingPage.jpg"
      />
      <Onlineshoppingtext />
    </div>
  );
};

export default page;
