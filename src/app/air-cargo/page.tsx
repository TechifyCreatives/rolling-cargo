import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Air Cargo & Air Freight to Kenya",
  description:
    "Fast, tracked air freight into Kenya from the UK, Dubai, China, Turkey and Europe. Rolling Cargo handles collection, consolidation, customs clearance and delivery.",
  path: "/air-cargo",
});

import React from "react";
import Aircargotext from "../shared/Components/Aircargotext/Aircargotext";
import Banner from "../shared/Components/Banner/Banner";
import JsonLd from "../shared/Components/Seo/JsonLd";
import { serviceSchema, breadcrumbSchema } from "@/lib/schema";
import { airCargoBannerContent } from "@/data/data";

const page = () => {
  return (
    <div>
      <JsonLd
        data={[
          serviceSchema({
            name: "Air Cargo & Air Freight to Kenya",
            description:
              "Fast, tracked air freight into Kenya from the UK, Dubai, China, Turkey and Europe, including collection, consolidation, customs clearance and delivery.",
            path: "/air-cargo",
            serviceType: "Air freight forwarding",
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Our Services", path: "/our-services" },
            { name: "Air Cargo", path: "/air-cargo" },
          ]),
        ]}
      />
      <Banner content={airCargoBannerContent} imageSrc="/AirfreightPage.jpg" />
      <Aircargotext />
    </div>
  );
};

export default page;
