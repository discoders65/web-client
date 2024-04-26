import React from "react";

interface IServiceCardProps {
  className: string;
  service: {
    label: string;
    icon: string;
  };
}

const ServiceCard: React.FC<IServiceCardProps> = ({ className, service }) => {
  return (
    <div
      className={`cursor-pointer  rounded-lg py-10 flex flex-col items-center gap-6 hover:shadow-md ${className}`}
    >
      <service.icon className="w-9 h-auto text-slate-700" />
      <h2 className="text-lg font-bold font-navbarFont text-slate-600">
        {service.label}
      </h2>
    </div>
  );
};

export default ServiceCard;
