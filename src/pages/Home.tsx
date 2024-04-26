import React from "react";
import Hero from "../components/Hero";
import PopularServicesContainer from "../components/PopularServicesContainer";
import GroomingServicesContainer from "../components/GroomingServicesContainer";
import OurServicesContainer from "../components/OurServicesContainer";

const Home = () => {
  return (
    <div className="h-auto w-full">
      <Hero />
      <PopularServicesContainer />
      <OurServicesContainer />
      <GroomingServicesContainer />
    </div>
  );
};

export default Home;
