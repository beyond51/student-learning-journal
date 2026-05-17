import { axiosInstance } from "../../../app/config/axiosInstance";

export const registerapi = async (formdata) => {
  let { data } = axiosInstance.post("/auth/register", formdata);
  return data;
};
export const loginapi = async (formdata) => {
  let { data } = axiosInstance.post("/auth/login", formdata);
  return data;
};
