import React from "react";
import { NavLink } from "react-router-dom";
import { IoHomeOutline, IoBookmarkOutline, IoSearchOutline } from "react-icons/io5";
import { MdOutlineMovie } from "react-icons/md";
import "./style.css";
import { useStateValue } from "@/context";

const Header = () => {
   const [state] = useStateValue();

   return (
      <header className="flex justify-center py-4 gap-6">
         <NavLink className={"flex flex-col items-center header-link"} to={"/"}>
            <IoHomeOutline className="text-2xl" />
            <span>{state.name}</span>
         </NavLink>
         <NavLink className={"flex flex-col items-center header-link"} to={"/movies"}>
            <MdOutlineMovie className="text-2xl" />
            <span>Movies</span>
         </NavLink>
         <NavLink className={"flex flex-col items-center header-link"} to={"/saved"}>
            <IoBookmarkOutline className="text-2xl" />
            <span>Saved</span>
         </NavLink>
         <NavLink className={"flex flex-col items-center header-link"} to={"/search"}>
            <IoSearchOutline className="text-2xl" />
            <span>Search</span>
         </NavLink>
         <span>{state.count}</span>
      </header>
   );
};

export default Header;
