import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";

const ProtectedAuth = () => {
  let { isauthenticated, isloading } = useSelector((store) => store.user);

  if (isloading)
    return (
      <div className="h-screen w-screen flex items-center justify-center ">
        <div className="flex items-center justify-center p-6">
          <div className="w-8 h-8 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>
        </div>
        <h1 className="text-xl font-semibold  ">loading...</h1>
      </div>
    );
  if (!isauthenticated) return <Navigate to="/" />;

  return <Outlet />;
};

export default ProtectedAuth;
