import React from "react";
import Hero from "../components/Hero";
import OurServicesContainer from "../components/OurServicesContainer";
import OurCommitmentContainer from "../components/OurCommitmentContainer";
import ExclusiveCombosContainer from "../components/ExclusiveCombosContainer";
import Introduction from "../components/Introduction";
import ExclusiveCombossContainer from "../components/ExclusiveCombossContainer";

const Home: React.FC = () => {
  return (
    <div className="h-auto w-full">
      <Hero />
      <OurCommitmentContainer />
      <Introduction/>
      <OurServicesContainer />
      <ExclusiveCombossContainer />
    </div>
  );
};

export default Home;
