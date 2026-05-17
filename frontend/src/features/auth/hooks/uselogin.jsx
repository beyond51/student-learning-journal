import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { axiosInstance } from "../../../app/config/axiosInstance";
import toast from "react-hot-toast";
import { setUser } from "../../../app/slices/AuthSlice";
import { removeError, setError } from "../../../app/slices/GlobalErrorSlice";

export const uselogin = () => {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  const navigateToForgetFn = () => {
    navigate("/forget-password");
  };
  const formsubmit = async (e) => {
    try {
      let { data } = await axiosInstance.post("/auth/login", e);

      toast.success("user logged in successfully", {
        style: {
          backgroundColor: "#22c55e",
          color: "white",
          width: "320px",
          fontSize: "16px",
          padding: "16px",
          borderRadius: "10px",
        },
      });
      navigate("/home/dashboard");
      dispatch(setUser(data.data));
    } catch (error) {
      dispatch(setError(error));
      setTimeout(() => {
        dispatch(removeError());
      }, 2000);
    }
  };
  return { navigateToForgetFn, formsubmit };
};
