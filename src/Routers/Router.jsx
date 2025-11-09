import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import AvailableFoods from "../Pages/AvailableFoods";
import LogIn from "../Pages/LogIn";
import Register from "../Pages/Register";
import FoodDetails from "../Componants/FoodDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        path: "/",
        element: <Home />,
      },
      {
        path: "/availableFoods",
        loader: () => fetch("http://localhost:3000/available-foods"),
        element: <AvailableFoods />,
      },
      {
        path: "/food/foodDetails/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/food/foodDetails/${params.id}`),
        element: <FoodDetails />,
      },
      {
        path: "/login",
        element: <LogIn />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
