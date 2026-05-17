import axios from "axios";
import { axiosInstance } from "../../../app/config/axiosInstance";

export const fetchApi = async () => {
  let res = await axiosInstance.get("/entry/fetch-entries");
  return res;
};
