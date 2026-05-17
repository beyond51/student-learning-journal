import React, { useEffect, useState } from "react";
import { axiosInstance } from "../../app/config/axiosInstance";
import { useNavigate } from "react-router";

const SearchAndfilter = ({ handleLogout, setsearchInput, searchInput }) => {
  let navigate = useNavigate();

  const handlechange = async (e) => {
    setsearchInput(e.target.value);
    navigate("/home/search");
  };

  return (
    <div className=" flex items-center gap-3">
      <input
        onChange={handlechange}
        type="text"
        placeholder="topic, date, difficulty"
        className="px-4 py-2 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-indigo-500"
      />

      {/* <select className="px-4 py-2 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-indigo-500">
            <option>Filter</option>
            <option>Recent</option>
            <option>Oldest</option>
            <option>Subject</option>
        </select> */}

      <button
        onClick={handleLogout}
        className="px-4 py-2 bg-red-500 text-white rounded-xl hover:bg-red-600 transition"
      >
        Logout
      </button>
    </div>
  );
};

export default SearchAndfilter;
