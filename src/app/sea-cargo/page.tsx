import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Sea Cargo & Sea Freight to Kenya",
  description:
    "Cost-effective sea freight to Mombasa and Nairobi. Full container (FCL) and groupage (LCL) shipping from China, Dubai, the UK, the Netherlands and Turkey, charged per CBM.",
  path: "/sea-cargo",
});

import React from "react";
import Seacargotext from "../shared/Components/Seacargotext/Seacargotext";
import { seaCargoBannerContent } from "@/data/data";
import Banner from "../shared/Components/Banner/Banner";
import JsonLd from "../shared/Components/Seo/JsonLd";
import { serviceSchema, breadcrumbSchema } from "@/lib/schema";

const page = () => {
  return (
    <div>
      <JsonLd
        data={[
          serviceSchema({
            name: "Sea Cargo & Sea Freight to Kenya",
            description:
              "Cost-effective full container (FCL) and groupage (LCL) sea freight to Mombasa and Nairobi from China, Dubai, the UK, the Netherlands and Turkey, charged per cubic metre.",
            path: "/sea-cargo",
            serviceType: "Sea freight forwarding",
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Our Services", path: "/our-services" },
            { name: "Sea Cargo", path: "/sea-cargo" },
          ]),
        ]}
      />
      <Banner content={seaCargoBannerContent} imageSrc="/Sea Freight Page.jpg" />
      <Seacargotext />
    </div>
  );
};

export default page;
