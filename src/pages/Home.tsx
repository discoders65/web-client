import React from "react";
import Hero from "../components/Hero";
import OurServicesContainer from "../components/OurServicesContainer";
import OurCommitmentContainer from "../components/OurCommitmentContainer";
import ExclusiveCombosContainer from "../components/ExclusiveCombosContainer";

const Home: React.FC = () => {
  return (
    <div className="h-auto w-full">
      <Hero />
      <OurCommitmentContainer />
      <OurServicesContainer />
      <ExclusiveCombosContainer />
    </div>
  );
};

export default Home;
