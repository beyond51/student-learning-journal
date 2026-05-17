import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../slices/AuthSlice";
import ErrorReducer from "../slices/GlobalErrorSlice";
export let store = configureStore({
  reducer: {
    user: authReducer,
    error: ErrorReducer,
  },
});
