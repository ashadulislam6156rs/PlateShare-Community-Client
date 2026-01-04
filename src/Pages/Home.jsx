import React from "react";
import Banner from "../Componants/Banner";
import FeatureFoods from "../Componants/HomeComponants/FeatureFoods";
import HowItWorks from "../Componants/HomeComponants/HowItWorks";
import OurMission from "../Componants/HomeComponants/OurMission";
import Services from "../Componants/HomeComponants/Services";
import Testimonials from "../Componants/HomeComponants/Testimonials";
import Newsletter from "../Componants/HomeComponants/Newsletter";
import FAQ from "../Componants/HomeComponants/FAQ";
import Highlights from "../Componants/HomeComponants/Highlights";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <FeatureFoods></FeatureFoods>
      <Services></Services>
      <Highlights></Highlights>
      <Testimonials></Testimonials>
      <FAQ></FAQ>
      <HowItWorks></HowItWorks>
      <OurMission></OurMission>
      <Newsletter></Newsletter>
    </div>
  );
};

export default Home;
