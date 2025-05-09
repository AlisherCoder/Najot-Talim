import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import "./style.css";

const Header = () => {
  const { pathname } = useLocation();
  const isDark = pathname === "/laylo";
  const [toggleNavbar, setToggleNavbar] = useState(false)

  return (
    <header className={`${isDark ? "bg-black text-white" : "bg-blue-200"} `}>
      <div className="container mx-auto flex gap-6 h-20 items-center ">
        <div className="flex-1">
          <Link to={"/"}>
            <h2>Logoo</h2>
          </Link>
        </div>
        <ul className={`flex gap-6 duration-300 max-[700px]:fixed max-[700px]:w-[70%] max-[700px]:bg-blue-300 max-[700px]:top-0  max-[700px]:h-screen max-[700px]:flex-col max-[700px]:p-8 ${toggleNavbar ? "max-[700px]:left-[0]": "max-[700px]:-left-[70%]"}`}>
          <li>
            <NavLink onClick={()=> setToggleNavbar(false)} className=" header__link" to={"/"}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink onClick={()=> setToggleNavbar(false)} className=" header__link" to={"/laylo"}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink onClick={()=> setToggleNavbar(false)} className=" header__link" to={"/contact/us"}>
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink onClick={()=> setToggleNavbar(false)} className=" header__link" to={"/login"}>
              Login
            </NavLink>
          </li>
        </ul>
        <button onClick={()=> setToggleNavbar(p => !p)} className="hidden max-[700px]:block">
          <div className="w-8 h-1 bg-black mt-0.5 rounded"></div>
          <div className="w-8 h-1 bg-black mt-0.5 rounded"></div>
          <div className="w-8 h-1 bg-black mt-0.5 rounded"></div>
        </button>

      </div>
    </header>
  );
};

export default Header;
