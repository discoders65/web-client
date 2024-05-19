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
    <section className={`w-full py-20 rounded-xl mb-20 ${index %2 ===0 ? "bg-sky-10 " :"bg-violet-50" }`}>
      <div
        className={`max-w-[1400px] mx-auto  flex flex-col  md:flex-row rounded-2xl  ${
          index % 2 !== 0 && "md:flex-row-reverse"
        } ${!isLastItem && "border-b"} ${index %2 ===0 ? "bg-blue-200 " :"bg-violet-200"}`}
      >
        <div className="flex-1 flex flex-col  items-center">
        <h3 className=" mt-10 text-3xl font-heroSectionFont font-semibold text-slate-600 text-center ">
            {petCategory.label}
          </h3>
          <div className="w-fit flex h-fit  justify-center   ">
            <img
              src={petCategory.image}
              className="max-w-[150px] sm:max-w-[190px] md:max-w-[400px]  object-cover object-center"
              alt=""
            />
          </div>
    
        </div>
        <div className="flex-1 py-20 x flex flex-col  lg:px-0   ">
        {petCategory.popularServices.map((service, i) => {
            const isLastItem = i === petCategory.popularServices.length - 1;
            return (
              <div
                className={`flex justify-between py-5 px-20 font-semibold text-slate-700 ${
                  !isLastItem && "border-b "
                } ${index %2 ===0 ? "border-sky-0 " :"border-violet-100" }`}
              >
                <div className="flex-1 flex items-center">
                  <span className="text-slate-700">{service.name}</span>
                </div>
                <div className="w-1/5 flex flex-col items-center ">
                  <span className="text-base ">{service.price} <span className=" text-xs">zł</span></span>
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
