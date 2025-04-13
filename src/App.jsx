import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import MainLayout from "./layout/MainLayout";
import { loader as HomeLoader } from "./pages/Home";
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
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
};

export default App;
