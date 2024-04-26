import React from "react";
import GroomingServices from "../Constants/GroomingServices";
import GroomingServiceCard from "./GroomingServiceCard";
import images from "../Constants/imaegs";

const GroomingServicesContainer: React.FC = () => {
  return (
    <section className="w-full bg-[#192733]  ">
      <img src={images.LayerImage2} alt="" />
      <div className="max-w-[1400px] mx-auto ">
        <h2 className="text-3xl  font-heroSectionFont text-slate-100 font-semibold">
          You need it, we've got it
        </h2>
        <div className="flex gap-5 w-full py-6 ">
          {GroomingServices.map((service) => {
            return (
              <GroomingServiceCard
                service={service}
                className="w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-21px)]  "
              />
            );
          })}
        </div>
      </div>
      <img src={images.LayerImage3} alt="" />
    </section>
  );
};

export default GroomingServicesContainer;
