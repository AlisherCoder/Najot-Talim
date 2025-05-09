import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./home/Home";
import About from "./about/About";
import Contact from "./contact/Contact";
import Login from "./login/Login";
import Layout from "./layout/Layout";
import NotFound from "./not-found/NotFound";

const MainRouters = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/laylo" element={<About />} />
        <Route path="/contact/us" element={<Contact />} />
        <Route path="*" element={<NotFound/>} />
      </Route>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default MainRouters;




