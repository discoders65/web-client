import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="hidden w-full h-[80px]  bg-[#0b4127] px-12 xl:px-0 lg:block">
      <section className="flex justify-between max-w-7xl mx-auto items-center h-full">
        <div className="text-slate-200">
          <h1 className="text-2xl font-bold font-navbarFont ">
            Groomer <span className="text-orange-700 text-2xl">.</span>
          </h1>
        </div>
        <div className="text-slate-200 flex items-center">
          <ul className="flex gap-16 font-semibold text-base mr-10">
            <li className="font-navbarFont">Services</li>
            <li className="font-navbarFont">Our story</li>
            <li className="font-navbarFont">Our team</li>
            <li className="font-navbarFont">Contact</li>
          </ul>
          <button className="border  px-4 py-1 rounded-sm hover:bg-green-500 hover:border-green-600 transition-all">
            Join
          </button>
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
