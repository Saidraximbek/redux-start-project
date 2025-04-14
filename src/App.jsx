import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import MainLayout from "./layout/MainLayout";
import { loader as HomeLoader } from "./pages/Home";
import { loader as ProductLoader } from "./pages/Product";
import Product from "./pages/Product";
const App = () => {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />,
          loader: HomeLoader
     
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
         
        },
        {
          path: "/product/:id",
          element: <Product />,
          loader: ProductLoader
         
        },
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
};

export default App;
