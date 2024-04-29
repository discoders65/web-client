import React from "react";

interface IExclusiveComboCard {
  className: string;
  service: {
    label: string;
    services: string[];
    icon: string;
    price: string;
  };
}

const ExclusiveComboCard: React.FC<IExclusiveComboCard> = ({
  className,
  service,
}) => {
  return (
    <div
      className={` border-[0.5px] border-slate-700  mx-10 md:mx-5  rounded-lg p-8 flex  flex-col  gap-9 ${className}`}
    >
      <service.icon className="w-10 h-auto text-green-300 mx-auto" />
      <h2 className="text-lg font-bold font-navbarFont text-slate-200 w-full">
        {service.label}
      </h2>

      <ul className=" w-full text-slate-100 list-disc px-4">
        {service.services?.map((service) => {
          return <li>{service}</li>;
        })}
      </ul>
      <h3 className="text-2xl text-slate-100 text-center">{service?.price}</h3>
      <button className="text-slate-100 bg-emerald-600 px-2 py-2.5 rounded font-semibold hover:bg-emerald-500 transition-all  ">
        Make a Reservation
      </button>
    </div>
  );
};

export default ExclusiveComboCard;
