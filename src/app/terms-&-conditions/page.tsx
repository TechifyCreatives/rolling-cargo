import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Terms & Conditions",
  description:
    "The terms and conditions governing the use of Rolling Cargo shipping, freight forwarding and customs clearance services.",
  path: "/terms-%26-conditions",
});

import React from "react";
import Terms from "../shared/Components/Terms/Terms";
import Banner from "../shared/Components/Banner/Banner";
import { termsBannerContent } from "@/data/data";

const page = () => {
  return (
    <div>
      <Banner content={termsBannerContent} imageSrc="/banner.jpg" />
      <Terms />
    </div>
  );
};

export default page;
