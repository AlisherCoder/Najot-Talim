import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

const Layout = () => {
  return (
    <>
      <Header />
      <main className="min-h-[70vh] flex-1">
        <Outlet />
      </main>
      <Footer/>
    </>
  );
};

export default Layout;
