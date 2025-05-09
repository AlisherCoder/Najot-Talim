import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";

const Header = () => {
   return (
      <header className="bg-blue-200">
         <div className="container mx-auto flex gap-6 h-20 items-center ">
            <h2>Header</h2>
            <NavLink className="text-gray-700 header__link" to={"/"}>
               Home
            </NavLink>
            <NavLink className="text-gray-700 header__link" to={"/laylo"}>
               About
            </NavLink>
            <NavLink className="text-gray-700 header__link" to={"/contact/us"}>
               Contact
            </NavLink>
            <NavLink className="text-gray-700 header__link" to={"/login"}>
               Login
            </NavLink>
            <NavLink className="text-gray-700 header__link" to={"/blog"}>
               Blog
            </NavLink>
         </div>
      </header>
   );
};

export default Header;
