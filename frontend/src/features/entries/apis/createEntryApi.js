import { axiosInstance } from "../../../app/config/axiosInstance";

export const createEntryApi = async (formdata) => {
  let data = await axiosInstance.post("/entry/create-entry", formdata);
  return data;
};
