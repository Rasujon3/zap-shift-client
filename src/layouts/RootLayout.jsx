import React from "react";
import { Outlet } from "react-router";
import Footer from "../pages/shared/footer/footer";
import Navbar from "../pages/Shared/Navbar/Navbar";

const RootLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer />
    </div>
  );
};

export default RootLayout;
