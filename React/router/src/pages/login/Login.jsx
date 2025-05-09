import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
   const navigat = useNavigate();
   return (
      <div>
         <button onClick={() => navigat("/")}>Go home</button>
         <button onClick={() => navigat(-1)}>Go back</button>
      </div>
   );
};

export default Login;
