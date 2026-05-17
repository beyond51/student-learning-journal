import { axiosInstance } from "../../../app/config/axiosInstance";

export const fetchStatsApi = async () => {
  let { data } = await axiosInstance.get("/dashboard/stats");
  return data.data;
};
