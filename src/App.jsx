import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { loader as HomeLoader } from "./pages/Home";
const App = () => {
  const routes = createBrowserRouter ([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index
        }
      ]
    }
  ])
  return <div>App</div>;
};

export default App;
