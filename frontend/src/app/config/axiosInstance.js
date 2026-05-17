import axios from "axios";

export let axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },

  (error) => {
    const message = error?.response?.data?.message || "Something went wrong";

    return Promise.reject(message);
  },
);
