import { useStateValue } from "@/context";
import React from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
   const { id } = useParams();
   const [{ books }] = useStateValue();

   let findBook = books.find((book) => id == book.id);

   return (
      <div className="container mx-auto grid place-items-center mt-5">
         <div className="border w-[400px]">
            <div className="w-full h-[300px] bg-gray-500"></div>
            <div className="flex gap-2.5 justify-between items-center">
               <h3>Name: {findBook.name}</h3>
               <h3>Genre: {findBook.genre}</h3>
               <strong>Author: {findBook.author}</strong>
            </div>
            <div>
               <p className="text-gray-500">{findBook.desc}</p>
               <p>{findBook.date}</p>
            </div>
         </div>
      </div>
   );
};

export default Detail;
