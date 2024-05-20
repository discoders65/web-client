import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const RootLayout = () => {
  return (
    <div className=" flex flex-col  w-full ">
      <Navbar />
      <section className=" ">
        <Outlet />
      </section>
      <Footer />
    </div>
  );
};

export default RootLayout;
