import React from "react";
import NavbarLinks from "../Constants/NavbarLinks";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="hidden w-full h-[80px]  bg-[#0b4127] px-12 xl:px-0 lg:block">
      <section className="flex justify-between max-w-7xl mx-auto items-center h-full">
        <div className="text-slate-200">
          <Link to="/">
            <h1 className="text-2xl font-bold font-navbarFont ">
              Groomer <span className="text-orange-700 text-2xl">.</span>
            </h1>
          </Link>
        </div>
        <div className="text-slate-200 flex items-center">
          <ul className="flex gap-16 font-semibold text-base mr-10">
            {NavbarLinks.map(({ label, link }) => {
              return (
                <Link to={link} key={label}>
                  <li>{label}</li>
                </Link>
              );
            })}
          </ul>
          <Link to="/register">
            <button className="border  px-4 py-1 rounded-sm hover:bg-green-500 hover:border-green-600 transition-all">
              Join
            </button>
          </Link>
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
