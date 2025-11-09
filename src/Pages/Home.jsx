import React from "react";
import Banner from "../Componants/Banner";
import FeatureFoods from "../Componants/HomeComponants/FeatureFoods";
import HowItWorks from "../Componants/HomeComponants/HowItWorks";
import OurMission from "../Componants/HomeComponants/OurMission";

const Home = () => {
  return <div>
    <Banner></Banner>
    <FeatureFoods></FeatureFoods>
    <HowItWorks></HowItWorks>
    <OurMission></OurMission>
  </div>;
};

export default Home;
