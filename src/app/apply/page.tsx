import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Apply for a Role",
  description:
    "Submit your application to join Rolling Cargo. Send us your details and CV for open logistics and freight forwarding positions.",
  path: "/apply",
});

import React from "react";
import ApplyPage from "../shared/Components/ApplyPage/ApplyPage";
import Banner from "../shared/Components/Banner/Banner";
import { applyBannerContent } from "@/data/data";

const page = () => {
  return (
    <div>
      <Banner content={applyBannerContent} imageSrc="image4.jpg" />
      <ApplyPage />
    </div>
  );
};

export default page;
