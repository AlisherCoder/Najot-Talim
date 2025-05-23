import { useStateValue } from "@/context";
import React, { useState } from "react";

const Form = ({ data }) => {
   const [state, dispatch] = useStateValue();

   const [name, setName] = useState("");
   const [genre, setGenre] = useState("");
   const [author, setAuthor] = useState("");
   const [desc, setDesc] = useState("");
   const [date, setDate] = useState("");

   const handleSubmit = (e) => {
      e.preventDefault();

      const newBook = {
         id: data.id,
         name,
         author,
         genre,
         desc,
         date,
      };

      dispatch({ type: "UPDATE", payload: newBook });

      setGenre("");
      setName("");
      setAuthor("");
      setDesc("");
      setDate("");
   };

   console.log(data);

   return (
      <div className="container mx-auto py-4">
         <h2 className="mb-4 text-2xl font-bold">Forms Update</h2>
         <form className="grid grid-cols-2 gap-2" action="" onSubmit={handleSubmit}>
            <input required value={name} onChange={(e) => setName(e.target.value)} className="border  border-gray-200 p-2 rounded" type="text" placeholder="Name" />
            <input required value={author} onChange={(e) => setAuthor(e.target.value)} className="border  border-gray-200 p-2 rounded" type="text" placeholder="Author" />
            <input required value={genre} onChange={(e) => setGenre(e.target.value)} className="border  border-gray-200 p-2 rounded" type="text" placeholder="Genre" />
            <input required value={desc} onChange={(e) => setDesc(e.target.value)} className="border  border-gray-200 p-2 rounded" type="text" placeholder="Description" />
            <input required value={date} onChange={(e) => setDate(e.target.value)} className="border  border-gray-200 p-2 rounded" type="date" placeholder="Date" />
            <button className="p-2 rounded bg-slate-900 text-white">Update</button>
         </form>
      </div>
   );
};

export default Form;
