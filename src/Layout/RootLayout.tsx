import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const RootLayout = () => {
  return (
    <div className="h-screen w-full">
      <Navbar />
      <section className="h-auto">
        <Outlet />
      </section>
      <Footer />
    </div>
  );
};

export default RootLayout;
