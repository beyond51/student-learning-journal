import React, { useState } from "react";
import { Outlet } from "react-router";
import Register from "../features/auth/components/Register";
import Login from "../features/auth/components/Login";

const Authlayout = () => {
  const [toggle, settoggle] = useState(false);
  return (
    <div className="min-h-screen w-screen flex items-center justify-center p-3 bg-gray-300">
      {toggle ? (
        <Register settoggle={settoggle} />
      ) : (
        <Login settoggle={settoggle} />
      )}
    </div>
  );
};

export default Authlayout;
