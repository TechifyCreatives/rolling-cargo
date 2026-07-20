import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Shipping Cost Estimator",
  description:
    "Estimate your air and sea freight costs to Kenya. Calculate by actual or volumetric weight for air, and by cubic metre (CBM) for sea freight.",
  path: "/cost-estimator",
});

import React from "react";
import Banner from "../shared/Components/Banner/Banner";
import { costEstimatorBannerContent } from "@/data/data";

const page = () => {
  return (
    <div>
      <Banner
        content={costEstimatorBannerContent}
        imageSrc="/CostEstimator.jpg"
      />
    </div>
  );
};

export default page;
