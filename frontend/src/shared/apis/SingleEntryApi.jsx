import { axiosInstance } from "../../app/config/axiosInstance";

export const singleEntryApi = async (id) => {
  let { data } = await axiosInstance.get(`/entry/fetch-single-entry/${id}`);
  return data.data;
};
