import React from "react";
import Aircargotext from "../shared/Components/Aircargotext/Aircargotext";
import Banner from "../shared/Components/Banner/Banner";
import { airCargoBannerContent } from "@/data/data";

const page = () => {
  return (
    <div>
      <Banner content={airCargoBannerContent} imageSrc="/AirfreightPage.jpg" />
      <Aircargotext />
    </div>
  );
};

export default page;
