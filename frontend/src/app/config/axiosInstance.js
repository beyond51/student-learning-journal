import axios from "axios";

export let axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});

axiosInstance.interceptors.response.use(
  // success
  (response) => {
    return response;
  },

  // error
  (error) => {
    // backend error message
    const message = error?.response?.data?.message || "Something went wrong";

    // attach clean message
    return Promise.reject(message);
  },
);
