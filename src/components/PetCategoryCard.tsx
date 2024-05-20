import React from "react";
import images from "../Constants/imaegs";

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
<section className={ `w-full mx-auto flex flex-col py-40 ${index % 2 !== 0 ? "bg-emerald-50" : index === 0 ? "bg-orange-50" : "bg-blue-100"}` }>



<div className="max-w-[1300px] mx-auto">
  
<div className="flex flex-row justify-between mb-12  ">

<div className="flex-1 text-3xl font-bold">{petCategory.label}</div>

<div className="text-xl font-semibold">{petCategory.header}</div>
</div>


<div className="  flex justify-between  border-slate-900">
{petCategory.popularServices.map((service)=>{
  return(
    <div className="max-w-[24%]  bg-white rounded-[20px]  w-full">
      <div>
        <img src={images.HeroImage10}className="rounded-t-[20px] w-auto h-auto object-cover" alt="" />
      </div>
<div className="p-5 flex flex-col gap-5">
<div className="text-xl font-semibold">{service.name}</div>
      <div className="text-xs text-slate-600">{service.description}</div>
      <div className="text-sm">{service.time}</div>
      <div className="text-sm">{service.price}</div>
     <button className="ml-5 bg-green-700 px-5 py-2">Umów</button>
</div>
    </div>
  )
})}

</div>
  </div>

    </section>
  );
};

export default PetCategoryCard;
