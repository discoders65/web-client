import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="w-full h-[80px] bg-[#0b4127]  ">
      <section className="flex justify-between max-w-7xl mx-auto items-center h-full">
        <div className="text-slate-200">
          <h1 className="text-2xl font-semibold ">
            Groomer <span className="text-orange-700 text-2xl">.</span>
          </h1>
        </div>
        <div className="text-slate-200 flex items-center">
          <ul className="flex gap-16 font-semibold text-base mr-10">
            <li>Services</li>
            <li>Our story</li>
            <li>Our team</li>
            <li>Contact</li>
          </ul>
          <button className="border-2  px-3 py-1 rounded-sm">Join</button>
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
