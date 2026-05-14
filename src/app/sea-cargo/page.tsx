import React from "react";
import Seacargotext from "../shared/Components/Seacargotext/Seacargotext";
import { seaCargoBannerContent } from "@/data/data";
import Banner from "../shared/Components/Banner/Banner";

const page = () => {
  return (
    <div>
      <Banner content={seaCargoBannerContent} imageSrc="/Sea Freight Page.jpg" />
      <Seacargotext />
    </div>
  );
};

export default page;
