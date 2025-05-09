import React, { useEffect, useState } from "react";
import Form from "./Form";
import Cards from "./Cards";

const TodoList = () => {
   const [data, setData] = useState(JSON.parse(localStorage.getItem("data")) || []);
   const [count, setCount] = useState(1);

   useEffect(() => {
      localStorage.setItem("data", JSON.stringify(data));
   }, [data]);

   return (
      <div className="container mx-auto">
         <h2 className="text-center text-2xl">Blog</h2>
         <Form setData={setData} />
         <Cards data={data} setData={setData} />
      </div>
   );
};

export default React.memo(TodoList);
