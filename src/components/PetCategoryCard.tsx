import React from "react";

interface IPetCategoryCardProps {
  petCategory: {
    label: string;
    image: string;
    popularServices: {
      name: string;
      price: string;
      time: string;
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
    <section className="w-full py-12">
      <div
        className={`max-w-7xl mx-auto  flex flex-col  md:flex-row   ${
          index % 2 !== 0 && "md:flex-row-reverse"
        } ${!isLastItem && "border-b"}`}
      >
        <div className="flex-1 flex flex-col">
          <h3 className="text-2xl font-heroSectionFont font-semibold text-slate-600 text-center ">
            {petCategory.label}
          </h3>
          <div className="w-full flex justify-center    ">
            <img
              src={petCategory.image}
              className="max-w-[150px] sm:max-w-[190px] md:max-w-[340px] h-auto"
              alt=""
            />
          </div>
        </div>
        <div className="flex-1 py-5 md:py-20 flex flex-col px-5 lg:px-0 ">
          {petCategory.popularServices.map((service, index) => {
            const isLastItem = index === petCategory.popularServices.length - 1;
            return (
              <div
                className={`flex justify-between py-5 ${
                  !isLastItem && "border-b"
                }`}
              >
                <div className="flex-1 flex items-center">
                  <span className="text-slate-700">{service.name}</span>
                </div>
                <div className="w-1/5 flex flex-col items-center ">
                  <span className="text-base ">{service.price}</span>
                  <span className="text-xs text-slate-600">{service.time}</span>
                </div>
                <div className="w-1/5 flex items-center">
                  <button className="bg-emerald-400 text-slate-700  rounded text-sm py-1.5 px-3">
                    Book
                  </button>
                </div>
              </div>
            );
          })}
          <button className=" w-fit px-3 py-2 mx-auto mt-10 rounded border border-slate-200 hover:bg-emerald-500 hover:text-white transition-all  text-slate-700 font-semibold">
            View more
          </button>
        </div>
      </div>
    </section>
  );
};

export default PetCategoryCard;
