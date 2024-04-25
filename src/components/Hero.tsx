import React from "react";
import images from "../Constants/imaegs";
import Icons from "../Constants/icons";

const Hero: React.FC = () => {
  return (
    <section className=" bg-[#0b4127] w-full flex pt-3 justify-center ">
      <div className="flex  justify-between  w-[1380px] ">
        <div className=" flex-1 flex flex-col   gap-4 py-40">
          <span className="text-5xl font-semibold text-slate-100 ">
            Experience top-tier grooming.
          </span>
          <span className="text-5xl font-semibold text-slate-100 ">
            Let us pamper your furry friend
          </span>
          <span className="text-5xl font-semibold text-slate-100 ">
            to perfection.
          </span>

          <span className="text-2xl font-semibold text-gray-300 ">
            Join our satisfied clients today!
          </span>
          <div className="w-full ">
            <form className="w-full flex p-0 m-0 ">
              <input
                type="text"
                className="w-full py-2.5 px-2.5  rounded-l-sm outline-none"
              />
              <button className="bg-green-500 border-none px-6 rounded-r-sm hover:bg-green-600">
                <img src={Icons.SearchIcon} className="w-7 h-auto" alt="" />
              </button>
            </form>
            <div className="flex py-4 gap-4">
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

        <div className="w-1/2 flex justify-end ">
          <img
            src={images.HeroImage}
            alt="dog-photo"
            className="w-[400px] h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
