import React from "react";
import Banneraboutus from "../shared/Components/Banneraboutus/Banneraboutus";
import AboutUs from "../shared/Components/AboutUs/AboutUs";
import MissionVisionPriorities from "../shared/Components/MissionVisionPriorities/MissionVisionPriorities";
import StatisticsGrid from "../shared/Components/StatisticsGrid/StastisticsGrid";

const page = () => {
  return (
    <div>
      <Banneraboutus />
      <AboutUs />
      <MissionVisionPriorities />
      <StatisticsGrid />
    </div>
  );
};

export default page;
