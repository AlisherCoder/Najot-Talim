import React, { useState } from "react";
import Book from "./Book";
import { useStateValue } from "@/context";
import Form from "../form/Update";

const Books = () => {
   const [state] = useStateValue();
   const [updateBook, setUpdateBook] = useState("");
   return (
      <div className="container mx-auto mb-4 relative">
         <h2 className="mb-4 text-2xl font-bold">Books</h2>
         <div className=" grid grid-cols-4 gap-3">
            {state?.books?.map((book) => (
               <Book key={book?.id} data={book} setUpdateBook={setUpdateBook} />
            ))}
         </div>
         <Form className="absolute left-[50%] right-[50%] translate-x-[-50%]" data={updateBook} />
      </div>
   );
};

export default Books;
