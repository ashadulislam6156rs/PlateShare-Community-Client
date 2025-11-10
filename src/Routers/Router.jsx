import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import AvailableFoods from "../Pages/AvailableFoods";
import LogIn from "../Pages/LogIn";
import Register from "../Pages/Register";
import FoodDetails from "../Componants/FoodDetails";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";
import AddFood from "../Pages/AddFood";
import ManageMyFoods from "../Pages/ManageMyFoods";
import MyFoodRequests from "../Pages/MyFoodRequests";
import UpdateMyFood from "../Componants/ManageMyFoodsComponants/UpdateMyFood";

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
        element: (
          <PrivateRoutes>
            <FoodDetails />
          </PrivateRoutes>
        ),
      },
      {
        path: "/addFood",
        element: (
          <PrivateRoutes>
            <AddFood></AddFood>
          </PrivateRoutes>
        ),
      },
      {
        path: "/manageMyFoods",
        element: (
          <PrivateRoutes>
            <ManageMyFoods></ManageMyFoods>
          </PrivateRoutes>
        ),
      },
      {
        path: "/myFoodRequests",
        element: (
          <PrivateRoutes>
            <MyFoodRequests></MyFoodRequests>
          </PrivateRoutes>
        ),
      },
      {
        path: "/updateMyFood/:id",
        loader: ({params}) => fetch(`http://localhost:3000/update-food/${params.id}`),
        element: (
          <PrivateRoutes>
            <UpdateMyFood></UpdateMyFood>
          </PrivateRoutes>
        ),
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
