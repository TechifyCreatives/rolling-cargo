import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Customs Clearance Services in Kenya",
  description:
    "Licensed customs clearing and forwarding in Kenya. Rolling Cargo handles tariff classification, duty payment on your behalf, transit handling and consultancy.",
  path: "/custom-clearance",
});

import React from "react";
import Customclearencetext from "../shared/Components/Customclearencetext/Customclearencetext";
import Banner from "../shared/Components/Banner/Banner";
import JsonLd from "../shared/Components/Seo/JsonLd";
import { serviceSchema, breadcrumbSchema } from "@/lib/schema";
import { customClearenceBannerContent } from "@/data/data";

const page = () => {
  return (
    <div>
      <JsonLd
        data={[
          serviceSchema({
            name: "Customs Clearance Services in Kenya",
            description:
              "Licensed customs clearing and forwarding in Kenya covering tariff classification, payment of customs duties on the client's behalf, transit customs handling and consultancy.",
            path: "/custom-clearance",
            serviceType: "Customs clearance",
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Our Services", path: "/our-services" },
            { name: "Customs Clearance", path: "/custom-clearance" },
          ]),
        ]}
      />
      <Banner
        content={customClearenceBannerContent}
        imageSrc="/CustomsClearancePage.jpeg"
      />
      <Customclearencetext />
    </div>
  );
};

export default page;
