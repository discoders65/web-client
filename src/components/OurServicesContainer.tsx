import React from "react";
import GroomingServiceCategories from "../Constants/GroomingServiceCategories";
import GroomingServiceCard from "./ExclusiveComboCard";
import images from "../Constants/imaegs";
import ServiceCategoryCard from "./ServiceCategoryCard";
import { Link } from "react-router-dom";
import PetCategoryCard from "./PetCategoryCard";

const OurServicesContainer: React.FC = () => {
  return (
    <section className="w-full bg-blue-100  ">
      <div className=" mx-auto py-16  flex flex-col ">
        <h2 className="text-3xl font-extrabold font-navbarFont text-slate-700 ">
          Popular services
        </h2>
        {GroomingServiceCategories.map((petCategory, index) => {
          const isLastItem = index === GroomingServiceCategories.length - 1;
          return (
            <PetCategoryCard
              key={index}
              petCategory={petCategory}
              isLastItem={isLastItem}
              index={index}
            />
          );
        })}
      </div>
    </section>
  );
};

export default OurServicesContainer;
