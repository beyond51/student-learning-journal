import { useDispatch } from "react-redux";
import { axiosInstance } from "../../app/config/axiosInstance";
import { deleteUser } from "../../app/slices/AuthSlice";
import { useNavigate } from "react-router";
import { setError } from "../../app/slices/GlobalErrorSlice";

export const useLogoutHook = () => {
  let dispatch = useDispatch();
  let navigate = useNavigate();

  let handleLogout = async () => {
    try {
      let res = await axiosInstance.get("/auth/logout");
      dispatch(deleteUser());
      navigate("/");
    } catch (error) {
      dispatch(setError(error));
    }
  };

  return { handleLogout };
};
