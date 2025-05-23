const store = JSON.parse(localStorage.getItem("store"));

export const initialState = store || {
   books: [],
};

export const reducer = (state, action) => {
   switch (action.type) {
      case "BOOK":
         let store = null;
         store = { ...state, books: [...state?.books, action.payload] };

         localStorage.setItem("store", JSON.stringify(store));

         return store;
      case "DELETE":
         let data = { ...state, books: [...state.books?.filter(({ id }) => id != action.payload)] };

         localStorage.setItem("store", JSON.stringify(data));

         return data;
      default:
         return state;
   }
};
