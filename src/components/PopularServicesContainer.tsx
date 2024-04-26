import React from "react";
import ServiceCard from "./PopularServiceCard";
import PopularServices from "../Constants/popularServices";
import images from "../Constants/imaegs";

const PopularServicesContainer: React.FC = () => {
  return (
    <section className="w-full py-8 ">
      <div className="max-w-[1400px] mx-auto ">
        <h2 className="text-3xl mt-8 font-heroSectionFont text-slate-700 font-semibold">
          Popular services
        </h2>
        <div className="flex gap-5 w-full py-6 ">
          {PopularServices.map((service) => {
            return (
              <ServiceCard
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

export default PopularServicesContainer;
