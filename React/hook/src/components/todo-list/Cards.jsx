import React from "react";

const Cards = ({ data, setData }) => {
   const handleDelete = (id) => {
      if (confirm("Are you sure?")) {
         setData((prev) => prev.filter((item) => item.id !== id));
      }
   };

   return (
      <div className="flex flex-col gap-4">
         {data?.map((item) => (
            <div key={item.id} className="w-full shadow p-5 border border-gray-100 rounded">
               <div className="flex justify-between">
                  <div>
                     <h3 className="text-xl font-bold">{item.title}</h3>
                     <p>{item.desc}</p>s
                  </div>

                  <div className="flex gap-4 items-start">
                     <button className="bg-green-400 px-4 rounded">Edit</button>
                     <button onClick={() => handleDelete(item.id)} className="bg-red-400 text-white px-4 rounded">
                        Delete
                     </button>
                  </div>
               </div>
               <span className="text-right block text-sm">09:32</span>
            </div>
         ))}
      </div>
   );
};

export default React.memo(Cards);
