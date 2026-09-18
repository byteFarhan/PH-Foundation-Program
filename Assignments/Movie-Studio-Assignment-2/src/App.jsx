import { useEffect, useState } from "react";
import FooterComp from "./components/FooterComp";
import HeroComp from "./components/HeroComp";
import MovieCard from "./components/MovieCard";
import NavbarComp from "./components/NavbarComp";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
// import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import AllMovies from "./pages/AllMovies";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "all-movies",
        element: <AllMovies />,
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
