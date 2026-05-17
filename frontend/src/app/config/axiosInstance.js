import axios from "axios";

export let axiosInstance = axios.create({
  baseURL: "http://localhost:3000/api",
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
