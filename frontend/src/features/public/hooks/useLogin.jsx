import { useNavigate } from "react-router";

export const useLogin = () => {
  let navigate = useNavigate();

  let navigateToAuthFn = () => {
    navigate("/auth");
  };

  return { navigateToAuthFn };
};
