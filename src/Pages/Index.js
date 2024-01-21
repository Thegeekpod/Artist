import React from "react";
import Header from "../Component/Header";
import Footer from "../Component/Footer";
import { Outlet } from "react-router-dom";

const Index = () => {
  return (
    <>
      <div id="canvas">
        <div id="box_wrapper">
          <Header />
          <Outlet />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Index;
