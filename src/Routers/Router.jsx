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
import ViewAllFoods from "../Pages/ViewAllFoods";
import Loading from "../Loading/Loading";
import Error_404 from "../Componants/ErrorPages/Error_404";
import TermsAndConditions from "../Pages/TermsAndConditions";
import PrivacyPolicy from "../Pages/PrivacyPolicy";
import ContactUs from "../Pages/ContactUs";

const router = createBrowserRouter([
  {
    path: "/",
    hydrateFallbackElement: <Loading></Loading>,
    element: <MainLayout />,
    errorElement: <Error_404 />,
    children: [
      {
        index: true,
        path: "/",
        element: <Home />,
      },
      {
        path: "/viewAllFoods",
        element: <ViewAllFoods></ViewAllFoods>,
      },
      {
        path: "/availableFoods",
        loader: () =>
          fetch(
            "https://plateshare-community-server.vercel.app/available-foods"
          ),
        element: <AvailableFoods />,
      },
      {
        path: "/food/foodDetails/:id",
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
        loader: ({ params }) =>
          fetch(
            `https://plateshare-community-server.vercel.app/update-food/${params.id}`
          ),
        element: (
          <PrivateRoutes>
            <UpdateMyFood></UpdateMyFood>
          </PrivateRoutes>
        ),
      },
      {
        path: "/termsAndConditions",
        element: <TermsAndConditions />,
      },
      {
        path: "/privacyPolicy",
        element: <PrivacyPolicy />,
      },
      {
        path: "/contactUs",
        element: <ContactUs />,
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
