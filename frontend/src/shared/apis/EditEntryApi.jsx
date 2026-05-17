import { axiosInstance } from "../../app/config/axiosInstance";

export const editentryApi = async (id, formData) => {
  let { data } = await axiosInstance.post(`/entry/edit-entry/${id}`, formData);
  return data;
};
