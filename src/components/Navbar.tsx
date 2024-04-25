import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="w-full h-[80px] bg-[#1b1d21]  ">
      <section className="flex justify-between max-w-7xl mx-auto items-center h-full">
        <div className="text-slate-200">
          <h1 className="text-2xl font-semibold ">
            Groomer <span className="text-orange-700 text-2xl">.</span>
          </h1>
        </div>
        <div className="text-slate-200 ">
          <ul className="flex gap-14 font-semibold text-base">
            <li>Services</li>
            <li>About</li>
            <li>Contact</li>
            <li>Carrer</li>
          </ul>
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
