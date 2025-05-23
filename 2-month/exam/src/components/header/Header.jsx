import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
   return (
      <header className="bg-slate-900">
         <nav className="h-20 text-white container mx-auto flex items-center">
            <p className="text-2xl">Header</p>
            <NavLink className="ml-[200px]" to={"/"}>
               Home
            </NavLink>
         </nav>
      </header>
   );
};

export default Header;
