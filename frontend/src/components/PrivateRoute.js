import React, {useContext} from "react";
import {Outlet, Navigate} from "react-router-dom";
import {AuthContext} from "../context/AuthContext";

const PrivateRoute = () => {
  const {user} = useContext(AuthContext);

  return user ? <Outlet /> : <Navigate to="/" replace />;

  // return <Outlet />;
};

export default PrivateRoute;
