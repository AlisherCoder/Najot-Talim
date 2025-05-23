import { useStateValue } from "@/context";
import React from "react";
import { useNavigate } from "react-router-dom";

const Book = ({ data, setUpdateBook }) => {
   const [state, dispatch] = useStateValue();
   const navigate = useNavigate();

   return (
      <>
         <div className="border border-gray-200 rounded p-3 relative">
            <div className="w-full h-40 bg-gray-200 rounded"></div>
            <div>
               <h3 className="text-2xl">{data.name}</h3>
               <strong className="block my-3">{data.author}</strong>
               <div className="flex gap-4">
                  <button onClick={() => navigate(`/books/${data.id}`)} className="text-green-600 cursor-pointer">
                     See more
                  </button>
                  <button onClick={() => setUpdateBook((p) => (p = data))} className="text-gray-600 cursor-pointer">
                     Edit
                  </button>
                  <button onClick={() => dispatch({ type: "DELETE", payload: data.id })} className="text-red-400 cursor-pointer">
                     Delete
                  </button>
               </div>
            </div>
         </div>
      </>
   );
};

export default Book;
