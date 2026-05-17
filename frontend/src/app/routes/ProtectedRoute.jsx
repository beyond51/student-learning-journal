import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";

const ProtectedRoute = () => {
  let { isauthenticated, isloading } = useSelector((store) => store.user);

  if (isauthenticated) return <Navigate to="/home/dashboard" />;

  return <Outlet />;
};

export default ProtectedRoute;
