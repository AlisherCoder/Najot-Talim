import React, { useEffect, useState } from "react";
import { api } from "../../api";

const Home = () => {
   const [data, setData] = useState(null);
   const [categories, setCategories] = useState(null);

   useEffect(() => {
      api.get("/products").then((res) => {
         setData(res.data);
      });
   }, []);

   useEffect(() => {
      api.get("/categories").then((res) => {
         setCategories(res.data);
      });

      console.log(categories);
   }, []);

   return (
      <div id="home" className="mt-5">
         <div className="container mx-auto flex gap-1.5 ">
            {categories?.data?.map((cat) => (
               <a key={cat.id} href="#" className="px-1 py-0.5 bg-gray-600 text-amber-50 rounded-2xl">
                  {cat.name}
               </a>
            ))}
         </div>

         <div className="container mt-5 mx-auto grid grid-cols-4 gap-4">
            {data?.data?.map((prd) => (
               <div className="border border-gray-300 p-4 text-center" key={prd.id}>
                  <img className="w-full h-64 object-cover" src={prd.img} alt="" />
                  <h3>{prd.name}</h3>
                  <p>{prd.price} USD</p>
               </div>
            ))}
         </div>
      </div>
   );
};

export default Home;
