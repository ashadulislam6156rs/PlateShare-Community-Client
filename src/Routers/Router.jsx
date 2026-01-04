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
import AboutUs from "../Pages/AboutUs";
import DashboardLayout from "../Layouts/DashboardLayout";
import UsersManagement from "../Pages/Admin/UsersManagement";
import MyProfile from "../Pages/MyProfile";

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
        element: <AvailableFoods />,
      },
      {
        path: "/food/foodDetails/:id",
        element: <FoodDetails />,
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
        path: "/aboutUs",
        element: <AboutUs />,
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
  {
    path: "/dashboard",
    errorElement: <Error_404></Error_404>,
    hydrateFallbackElement: <Loading></Loading>,
    element: (
      <PrivateRoutes>
        <DashboardLayout></DashboardLayout>
      </PrivateRoutes>
    ),
    children: [
      {
        path: "addFood",
        element: <AddFood></AddFood>,
      },
      {
        path: "manageMyFoods",
        element: <ManageMyFoods></ManageMyFoods>,
      },
      {
        path: "myFoodRequests",
        element: <MyFoodRequests></MyFoodRequests>,
      },
      {
        path: "usersManagement",
        element: <UsersManagement></UsersManagement>,
      },
      {
        path: "my-profile",
        element: <MyProfile></MyProfile>,
      },
      {
        path: "updateMyFood/:id",
        loader: ({ params }) =>
          fetch(
            `https://plateshare-community-server.vercel.app/update-food/${params.id}`
          ),
        element: <UpdateMyFood></UpdateMyFood>,
      },
    ],
  },
]);

export default router;
