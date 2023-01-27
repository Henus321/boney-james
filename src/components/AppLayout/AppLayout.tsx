import React from "react";
import { Outlet } from "react-router";

import Footer from "../Footer/Footer";
import Header from "../Header/Header";

import "./appLayout.scss";

const AppLayout = () => {
  return (
    <div className="app-layout">
      <Header />
      <main className="app-layout__content-container">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default AppLayout;
