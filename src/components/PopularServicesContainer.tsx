import React from "react";
import CONSTANTS from "../Constants";


import ServiceCard from "./ServiceCard";

const PopularServicesContainer: React.FC = () => {
  return (
    
      <section className={ `w-full mx-auto flex flex-col py-10  "bg-blue-100"}` }>
      
      
      
      <div className="max-w-[1300px] mx-auto py-10">
        
      <div className="flex flex-row justify-between mb-12  ">
      
      <h2 className="flex-1 text-3xl font-bold mb-5">Popularne Usługi</h2>
      
     <button className="bg-blue-500 text-white px-2 rounded-lg">Zobacz więcej</button>
      </div>
      
      
      <div className="  flex justify-between  border-slate-900 flex-wrap">
      {CONSTANTS.POPULAR_SERVICES.map((service)=>{
        return(
      <ServiceCard 
      service={service}
      className="w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-21px)]"
      />
        )
      })}
      
      </div>
        </div>
      <button className="bg-blue-600 w-fit mx-auto font-semibold text-white py-3 px-3 rounded-lg ">Zobacz więcej</button>
          </section>
        )
  
};

export default PopularServicesContainer;
