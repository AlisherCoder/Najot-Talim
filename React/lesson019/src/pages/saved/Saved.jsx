import Main from "@/components/main/Main";
import MovieView from "@/components/movie-view/MovieView";
import { useStateValue } from "@/context";
import React from "react";

const Saved = () => {
   const [state, dispatch] = useStateValue();
   console.log(state.saved);

   return (
      <div>
         <h2>Saved</h2>
         <MovieView movies={state.saved} />
         {/* <Main /> */}
      </div>
   );
};

export default Saved;
