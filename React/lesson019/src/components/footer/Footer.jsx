import { useStateValue } from "@/context";
import React from "react";

const Footer = () => {
   const [value, dispatch] = useStateValue();

   return (
      <footer className="flex gap-5">
         <p>Footer</p>
         <button onClick={() => dispatch({ type: "INC", payload: 1 })}>Increment</button>
         <button onClick={() => dispatch({ type: "INC", payload: 10 })}>Increment 10</button>
         <button onClick={() => dispatch({ type: "INC", payload: 100 })}>Increment 100</button>
         <button onClick={() => dispatch({ type: "DEC" })}>Decrement</button>
         <button onClick={() => dispatch({ type: "CHANGE" })}>Changa home</button>
      </footer>
   );
};

export default Footer;
