import React, { useContext } from "react";
import { AuthContext } from "../AuthContext/AuthContext";
import { Navigate, useLocation } from "react-router";
import Loading from "../Loading/Loading";

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    
    const location = useLocation();


  if (loading) {
    return <Loading></Loading>
  }
  if (user && user?.email) {
    return <div>{children}</div>;
  }
  return <Navigate state={location?.pathname} to={"/login"}></Navigate>;
};

export default PrivateRoutes;
