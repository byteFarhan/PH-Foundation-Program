import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
// import { createBrowserRouter } from "react-router";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import AllMovies from "./pages/AllMovies";

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
