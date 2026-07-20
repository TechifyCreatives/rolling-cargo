import React from "react";
import type { Metadata } from "next";
import DashboardPage from "../shared/Components/admin/dashboard/Dashboard";

export const metadata: Metadata = {
  title: "Admin",
  robots: { index: false, follow: false },
};

const page = () => {
  return (
    <div>
      <DashboardPage />
    </div>
  );
};

export default page;
