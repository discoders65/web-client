import React from "react";

const Footer: React.FC = () => {
  return (
    <nav className="w-full h-[100px]  bg-slate-600 boroder-t-2  ">
      <section className="flex justify-between max-w-7xl mx-auto items-center h-full">
        <div className="text-slate-200 flex items-center">
          <h1 className="text-2xl font-semibold ">
            Groomer <span className="text-orange-700 text-2xl">.</span>
          </h1>
          <span className="text-slate-300 text-sm">
            © Groomer International Ltd. 2024
          </span>
        </div>
        <div className="text-slate-200 ">
          <ul className="flex gap-14 font-semibold text-base">
            <li>fb</li>
            <li>instagram</li>
            <li>twitter</li>
          </ul>
        </div>
      </section>
    </nav>
  );
};

export default Footer;
