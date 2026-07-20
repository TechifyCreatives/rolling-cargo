import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Our Logistics & Freight Services",
  description:
    "Air freight, sea freight, customs clearance, warehousing, supplier payments and online shopping — the full Rolling Cargo service range for importing into Kenya.",
  path: "/our-services",
});

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
