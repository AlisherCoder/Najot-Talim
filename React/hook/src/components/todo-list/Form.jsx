import React, { useRef, useState } from "react";

const Form = ({ setData }) => {
   const title = useRef(null);
   const [desc, setDesc] = useState("");

   const handleSubmit = (e) => {
      e.preventDefault();

      const newBlog = {
         title: title.current.value,
         desc,
         id: new Date().getTime(),
      };

      setData((prev) => [...prev, newBlog]);

      setDesc("");

      title.current.value = "";
   };

   return (
      <form className="shadow p-5 border border-gray-100 rounded   flex gap-3 my-6" action="" onSubmit={handleSubmit}>
         <input className="border border-gray-200 outline-0 indent-2.5 flex-1 h-10 rounded focus:border-gray-500 focus:shadow" type="text" ref={title} required />
         <input className="border border-gray-200 outline-0 indent-2.5 flex-1 h-10 rounded focus:border-gray-500 focus:shadow" type="text" value={desc} onChange={(event) => setDesc(event.target.value)} required />
         <button className="h-10 bg-slate-800 text-white px-5 rounded">Submit</button>
      </form>
   );
};

export default React.memo(Form);
