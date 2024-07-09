import React from "react";
import ContactBanner from "../shared/Components/ContactBanner/ContactBanner";
import ContactPage from "../shared/Components/ContactPage/ContactPage";
import Map from "../shared/Components/Maps/Maps";

const page = () => {
  return (
    <div>
      <ContactBanner />
      {/* <ContactPage /> */}
      <Map />
    </div>
  );
};

export default page;
