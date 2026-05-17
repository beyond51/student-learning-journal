import { axiosInstance } from "../../app/config/axiosInstance";

export const SearchApi = async (SearchApi) => {
  let { data } = await axiosInstance.get(`/entry/getEntry/${SearchApi}`);
  return data.data;
};
