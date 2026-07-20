import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Gallery",
  description:
    "Photos of Rolling Cargo operations — our warehouses, air and sea freight handling, team and cargo facilities across Kenya and abroad.",
  path: "/gallery",
});

import React from "react";
import GalleryPage from "../shared/Components/GalleryPage/GalleryPage";

const page = () => {
  return (
    <div>
      <GalleryPage />
    </div>
  );
};

export default page;
