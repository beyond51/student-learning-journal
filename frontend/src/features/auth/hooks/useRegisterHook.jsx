import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { setUser } from "../../../app/slices/AuthSlice";
import { axiosInstance } from "../../../app/config/axiosInstance";
import { removeError, setError } from "../../../app/slices/GlobalErrorSlice";

export const useRegisterHook = () => {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  const formSubmit = async (e) => {
    try {
      const formdata = new FormData();

      formdata.append("studentName", e.studentName);
      formdata.append("studentEmail", e.studentEmail);
      formdata.append("password", e.password);
      formdata.append("course", e.course);
      formdata.append("semesterYear", e.semesterYear);
      formdata.append("phoneNumber", e.phoneNumber);

      if (e.profileImage) {
        formdata.append("profileImage", e.profileImage[0]);
      }

      let { data } = await axiosInstance.post("/auth/register", formdata);

      toast.success("user registered successfully", {
        style: {
          backgroundColor: "#22c55e",
          color: "white",
          width: "320px",
          fontSize: "16px",
          padding: "16px",
          borderRadius: "10px",
        },
      });
      dispatch(setUser(data.data));
      navigate("/home/dashboard");
    } catch (error) {
      dispatch(setError(error));

      setTimeout(() => {
        dispatch(removeError());
      }, 2000);
    }
  };

  return { formSubmit };
};
