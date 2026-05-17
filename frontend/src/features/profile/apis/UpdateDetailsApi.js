import { axiosInstance } from "../../../app/config/axiosInstance";

export const updateProfileApi = async (formdata) => {
  let { data } = await axiosInstance.post("/auth/update", formdata);
  return data;
};
