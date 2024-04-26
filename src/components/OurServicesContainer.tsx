import React from "react";
import GroomingServiceCategories from "../Constants/GroomingServiceCategories";
import GroomingServiceCard from "./GroomingServiceCard";
import images from "../Constants/imaegs";
import ServiceCategoryCard from "./ServiceCategoryCard";

const OurServicesContainer: React.FC = () => {
  return (
    <section className="w-full bg-[#f6f9fc] ">
      <img src={images.LayerImage} alt="" />
      <div className="max-w-[1400px] mx-auto ">
        <h2 className="text-3xl  font-heroSectionFont text-slate-700 font-semibold mb-12">
          Our Services Include:
        </h2>
        <div className="flex gap-5 w-full  ">
          {GroomingServiceCategories.map((service) => {
            return (
              <ServiceCategoryCard
                service={service}
                className="w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-21px)]  "
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OurServicesContainer;
