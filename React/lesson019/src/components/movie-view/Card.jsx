import React from "react";
import { useNavigate } from "react-router-dom";
import { FaBookmark, FaRegBookmark } from "react-icons/fa";
import { useStateValue } from "@/context";

const Card = ({ item }) => {
   const url = import.meta.env.VITE_IMAGE_URL;
   const navigate = useNavigate();
   const [state, dispatch] = useStateValue();

   return (
      <div className="">
         <div className="relative">
            <img onClick={() => navigate(`/movie/${item.id}`)} className="object-cover" loading="lazy" src={url + item.poster_path} alt="" />
            <button onClick={() => dispatch({ type: "SAVED", payload: item })} className="absolute top-2 right-2 p-2">
               {state.saved.some(({ id }) => id === item.id) ? <FaBookmark className="text-2xl" /> : <FaRegBookmark className="text-2xl" />}
            </button>
         </div>
         <div>
            <h3>{item.title}</h3>
            <p>{item.vote_average}</p>
         </div>
      </div>
   );
};
export default React.memo(Card);
