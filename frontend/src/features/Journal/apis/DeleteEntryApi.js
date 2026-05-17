import { axiosInstance } from "../../../app/config/axiosInstance";

export const deleteEntryApi = async (id) => {
  let { data } = await axiosInstance.get(`/entry/delete/${id}`);
  return data;
};
