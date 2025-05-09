import React, { useEffect, useState } from "react";
import { api } from "../../api";
import toast from "react-hot-toast";

const About = () => {
   const [catValue, setCatValue] = useState("");
   const [loading, setLoading] = useState(false);
   const [categories, setCategories] = useState(null);
   const [reload, setReload] = useState(false);
   const [updateId, setUpdateId] = useState(null);

   const handleSubmit = (e) => {
      e.preventDefault();

      setLoading(true);

      const category = { name: catValue };

      if (setUpdateId) {
         api.patch(`categories/${updateId}`, category).then(() => {
            setCatValue("");
            toast.success("Update successfully");
            setReload((p) => !p);
            setUpdateId(null);
         });
      } else {
         api.post("/categories", { name: catValue })
            .then(() => {
               setCatValue("");
               toast.success("Category is created");
               setReload((p) => !p);
            })
            .catch((err) => {
               toast.error(err.response.data.message);
            })
            .finally(() => {
               setLoading(false);
            });
      }
   };

   useEffect(() => {
      api.get("/categories").then((res) => {
         setCategories(res.data);
      });
   }, [reload]);

   const handleDelete = (id) => {
      api.delete(`/categories/${id}`).then(() => {
         setReload((p) => !p);
      });
   };

   const handleUpdate = (cat) => {
      setCatValue(cat.name);
      setUpdateId(cat.id);
   };

   return (
      <div id="about" className="w-[400px] mx-auto">
         <h2>Category</h2>
         <form action="" onSubmit={handleSubmit} className="">
            <input required value={catValue} onChange={(e) => setCatValue(e.target.value)} type="text" className="border" />
            <button disabled={loading}>{loading ? "Loading.." : "Create"}</button>
         </form>

         <ul className="container mx-auto flex flex-wrap gap-1.5 ">
            {categories?.data?.map((cat) => (
               <li key={cat.id} href="#" className="px-1 py-0.5 bg-gray-600 text-amber-50 rounded-2xl">
                  {cat.name}
                  <button onClick={() => handleDelete(cat.id)} className="bg-red-500">
                     Delete
                  </button>
                  <button onClick={() => handleUpdate(cat)} className="bg-green-500">
                     Update
                  </button>
               </li>
            ))}
         </ul>
      </div>
   );
};

export default About;
