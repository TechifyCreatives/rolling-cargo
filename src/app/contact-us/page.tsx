import React from "react";
import ContactBanner from "../shared/Components/ContactBanner/ContactBanner";
import Banner from "../shared/Components/Banner/Banner";
import { contactBannerContent } from "@/data/data";

const page = () => {
  return (
    <div>
      <Banner content={contactBannerContent} imageSrc="/Contact-Us.jpg" />
      <ContactBanner />
    </div>
  );
};

export default page;
