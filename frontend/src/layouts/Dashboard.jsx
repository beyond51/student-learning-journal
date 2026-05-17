import React, { useState } from "react";
import Navbar from "../shared/components/Navbar";
import { Outlet } from "react-router";

const Dashboard = () => {
  const [searchInput, setsearchInput] = useState("");

  return (
    <div className="h-screen w-screen">
      <Navbar setsearchInput={setsearchInput} searchInput={searchInput} />
      <Outlet context={{ searchInput, setsearchInput }} />
    </div>
  );
};

export default Dashboard;
