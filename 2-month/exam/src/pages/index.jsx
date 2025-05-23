import React, { lazy } from "react";
import { useRoutes } from "react-router-dom"; // V5 -> V6 -> V7
import { Suspense } from "@/utils";
import Detail from "./detail/Detail";
const Layout = lazy(() => import("./layout/Layout"));
const Home = lazy(() => import("./home/Home"));

const MainRouters = () => {
   return useRoutes([
      {
         path: "/",
         element: (
            <Suspense>
               <Layout />
            </Suspense>
         ),
         children: [
            {
               path: "/",
               element: (
                  <Suspense>
                     <Home />
                  </Suspense>
               ),
            },
            {
               path: "/books/:id",
               element: (
                  <Suspense>
                     <Detail />
                  </Suspense>
               ),
            },
         ],
      },
   ]);
};

export default MainRouters;
