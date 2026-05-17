import { createSlice } from "@reduxjs/toolkit";

let ErrorSlice = createSlice({
  name: "error",
  initialState: {
    error: null,
  },
  reducers: {
    setError: (state, action) => {
      state.error = action.payload;
    },
    removeError: (state, action) => {
      state.error = null;
    },
  },
});
export let { setError, removeError } = ErrorSlice.actions;
export default ErrorSlice.reducer;
