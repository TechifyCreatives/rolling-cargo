import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Frequently Asked Questions",
  description:
    "Answers on Rolling Cargo shipping rates, delivery timeframes, tracking, insurance, customs charges, supplier payments and which countries we ship from.",
  path: "/faq",
});

import React from "react";
import Faq from "../shared/Components/Faq/Faq";
import Banner from "../shared/Components/Banner/Banner";
import JsonLd from "../shared/Components/Seo/JsonLd";
import { faqSchema, breadcrumbSchema } from "@/lib/schema";
import { faqBannerContent } from "@/data/data";

const page = () => {
  return (
    <div>
      <JsonLd
        data={[
          faqSchema(),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "FAQ", path: "/faq" },
          ]),
        ]}
      />
      <Banner content={faqBannerContent} imageSrc="/FAQ.jpg" />
      <Faq />
    </div>
  );
};

export default page;
