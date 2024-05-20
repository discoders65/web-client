import React from "react";

import ServiceCard from "./ServiceCard";


interface IPetCategoryCardProps {
  petCategory: {
    label: string;
    image: string;
    header:string;
    popularServices: {
      name: string;
      price: string;
      time: string;
      description:string;
    }[];
  };
  index: number;
  isLastItem: boolean;
}

const PetCategoryCard: React.FC<IPetCategoryCardProps> = ({
  petCategory,
  index,
  isLastItem,
}) => {
  return (
<section className={ `w-full mx-auto flex flex-col py-10 ${index % 2 !== 0 ? "bg-emerald-50" : index === 0 ? "bg-orange-50" : "bg-blue-100"}` }>



<div className="max-w-[1300px] mx-auto">
  
<div className="flex flex-row justify-between mb-12  ">

<div className="flex-1 text-3xl font-bold"></div>

<div className="text-xl font-semibold"></div>
</div>


<div className="  flex justify-between  border-slate-900">
{petCategory.popularServices.map((service)=>{
  return(
<ServiceCard service={service}/>
  )
})}

</div>
  </div>

    </section>
  );
};

export default PetCategoryCard;
