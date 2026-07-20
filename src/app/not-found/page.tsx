import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: false },
};

import React from "react";
import PageNotFound from "../shared/Components/not-found/PageNotFound";

const page = () => {
  return (
    <div>
      <PageNotFound />
    </div>
  );
};

export default page;
