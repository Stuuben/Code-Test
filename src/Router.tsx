import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./components/Layout";
import { elements } from "chart.js";
import { Home } from "./components/Home";
import { AnagramApp } from "./components/AnagramApp";
import { DashboardApp } from "./components/DashboardApp";
import { PuppiesApp } from "./components/PuppiesApp";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        index: true,
      },
      {
        path: "/anagram",
        element: <AnagramApp></AnagramApp>,
      },
      {
        path: "/dashboard",
        element: <DashboardApp></DashboardApp>,
      },
      {
        path: "/puppies",
        element: <PuppiesApp></PuppiesApp>,
      },
    ],
  },
]);
