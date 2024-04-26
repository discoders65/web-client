import React from "react";

interface IGroomingServiceCard {
  className: string;
  service: {
    label: string;
    textContent: string;
    icon: string;
  };
}

const GroomingServiceCard: React.FC<IGroomingServiceCard> = ({
  className,
  service,
}) => {
  return (
    <div
      className={`rounded-lg p-8 flex flex-col items-center gap-3 ${className}`}
    >
      <service.icon className="w-10 h-auto text-green-300" />
      <h2 className="text-lg font-bold font-navbarFont text-slate-200">
        {service.label}
      </h2>
      <span className="text-center text-slate-300">{service.textContent}</span>
    </div>
  );
};

export default GroomingServiceCard;
