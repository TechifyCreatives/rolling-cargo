import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Online Shopping & Buy-For-Me Service",
  description:
    "Shop from Amazon, Alibaba and UK, Dubai and China stores and let Rolling Cargo pay your supplier, consolidate your parcels and ship them to Kenya door to door.",
  path: "/online-shopping",
});

import React from "react";
import Onlineshoppingtext from "../shared/Components/Onlineshoppingtext/Onlineshoppingtext";
import { onlineShoppingBannerContent } from "@/data/data";
import Banner from "../shared/Components/Banner/Banner";
import JsonLd from "../shared/Components/Seo/JsonLd";
import { serviceSchema, breadcrumbSchema } from "@/lib/schema";

const page = () => {
  return (
    <div>
      <JsonLd
        data={[
          serviceSchema({
            name: "Online Shopping & Buy-For-Me Service",
            description:
              "Shop from Amazon, Alibaba and stores in the UK, Dubai and China and let Rolling Cargo pay your supplier, consolidate your parcels and ship them to Kenya door to door.",
            path: "/online-shopping",
            serviceType: "Procurement and shipping",
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Our Services", path: "/our-services" },
            { name: "Online Shopping", path: "/online-shopping" },
          ]),
        ]}
      />
      <Banner
        content={onlineShoppingBannerContent}
        imageSrc="/OnlineShoppingPage.jpg"
      />
      <Onlineshoppingtext />
    </div>
  );
};

export default page;
