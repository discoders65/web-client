import React from "react";
import images from "../Constants/imaegs";
import Icons from "../Constants/icons";

const Hero: React.FC = () => {
  return (
    <section className=" bg-[#0b4127] w-full flex  pt-3 justify-center px-12  2xl:px-0 ">
      <div className="flex justify-between w-[1380px] ">
        <div className="flex-1 flex flex-col py-20  gap-4 lg:py-40  ">
          <span className="text-center text-4xl xl:text-left lg:text-5xl font-semibold text-slate-100 font-heroSectionFont ">
            Experience top-tier grooming.
          </span>
          <span className="text-center text-4xl xl:text-left lg:text-5xl font-semibold text-slate-100 font-heroSectionFont">
            Let us pamper your furry
          </span>
          <span className="text-center text-4xl xl:text-left lg:text-5xl font-semibold text-slate-100 font-heroSectionFont">
            friend to perfection.
          </span>

          <span className="text-center text-4xl lg:text-left lg:text-2xl font-semibold text-gray-300 ">
            Join our satisfied clients today!
          </span>
          <div className="w-full mt-14 lg:mt-4 ">
            <form className="w-full gap-y-4 flex  flex-col lg:gap-y-0 lg:flex-row p-0 m-0 ">
              <input
                type="text"
                className="w-full py-2.5 px-2.5 rounded-sm lg:rounded-none lg:rounded-l-sm outline-none "
              />
              <button className="bg-green-500 border-none px-6 py-2 lg:py-0 lg:rounded-r-sm hover:bg-green-600">
                <img
                  src={Icons.SearchIcon}
                  className="w-7 h-auto"
                  alt="search"
                />
              </button>
            </form>
            <div className="hidden lg:flex py-4 gap-4 ">
              <span className="text-slate-200 font-bold"> Popular:</span>
              <ul className="flex gap-2.5">
                <li className="border text-sm px-2 py-1 text-slate-200 font-semibold rounded-full cursor-pointer hover:bg-slate-100 hover:text-black transition-all ">
                  Standard Haircut
                </li>
                <li className="border text-sm px-2 py-1 text-slate-200 font-semibold rounded-full cursor-pointer hover:bg-slate-100 hover:text-black">
                  Teeth Brushing
                </li>
                <li className="border text-sm px-2 py-1 text-slate-200 font-semibold rounded-full cursor-pointer hover:bg-slate-100 hover:text-black">
                  Basic Bathing
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="hidden lg:flex w-1/2  justify-end  ">
          <img
            src={images.HeroImage}
            alt="dog-photo"
            className="w-auto h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
