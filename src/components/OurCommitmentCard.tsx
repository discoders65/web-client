import React from "react";

interface IOurCommitmentCard {
  className: string;
  service: {
    label: string;
    icon: string;
  };
}

const OurCommitmentCard: React.FC<IOurCommitmentCard> = ({
  className,
  service,
}) => {
  return (
    <div
      className={` rounded-lg p-8 flex flex-col items-center gap-3 ${className}`}
    >
      <service.icon className="w-10 h-auto text-green-300" />
      <h2 className="text-lg font-bold font-navbarFont text-gray-600">
        {service.label}
      </h2>
      <span className="text-gray-600 text-center">{service.textContent}</span>
    </div>
  );
};

export default OurCommitmentCard;
