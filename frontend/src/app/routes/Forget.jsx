import axios from "axios";
import React, { useState } from "react";
import { axiosInstance } from "../config/axiosInstance";
import { useDispatch, useSelector } from "react-redux";
import { removeError, setError } from "../slices/GlobalErrorSlice";
import { useNavigate } from "react-router";
const Forget = () => {
  const [studentEmail, setstudentEmail] = useState("");
  let dispatch = useDispatch();
  let { error } = useSelector((store) => store.error);

  const handlechange = (e) => {
    setstudentEmail(e.target.value);
  };
  let sendEmailFn = async (e) => {
    e.preventDefault();
    try {
      let res = await axiosInstance.post("/auth/forget-password", {
        studentEmail,
      });
      window.open("https://mail.google.com/mail/u/0/#inbox", "_blank");
    } catch (error) {
      dispatch(setError(error));
      setTimeout(() => {
        dispatch(removeError());
      }, 2000);
    }
  };
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-indigo-100 via-white to-purple-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-3xl border border-gray-400 p-8">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-indigo-400 text-white rounded-2xl flex items-center justify-center mx-auto text-2xl font-bold">
            SJ
          </div>

          <h1 className="text-3xl font-bold text-gray-800 mt-4">
            Forget Password
          </h1>

          <p className="text-gray-500 mt-2">
            Enter your email to reset your password
          </p>
        </div>

        <form onSubmit={sendEmailFn} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium mb-2"
            >
              Email Address
            </label>

            <input
              onChange={handlechange}
              type="email"
              placeholder="Enter your email"
              id="email"
              className="w-full px-4 py-3 border border-gray-300 rounded-2xl outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
            />
            {error && <h1 className="text-red-600">*{error}</h1>}
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-2xl font-semibold transition shadow-md"
          >
            Send Reset Link
          </button>
        </form>

        <p className="text-center text-gray-500 text-sm mt-6">
          Remember your password?{" "}
          <a
            href="/auth"
            className="text-indigo-600 hover:underline font-medium"
          >
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default Forget;
