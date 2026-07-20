import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Contact Us",
  description:
    "Get in touch with Rolling Cargo. Head office at 10 Funzi Road, Off Enterprise Road, Nairobi, plus offices in Dubai, China, South Africa, Italy, the Netherlands, Turkey and London.",
  path: "/contact-us",
});

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
