import { createSlice } from "@reduxjs/toolkit";

let authSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    isauthenticated: false,
    isloading: true,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.isauthenticated = true;
      state.isloading = false;
    },
    deleteUser: (state) => {
      state.user = null;
      state.isauthenticated = false;
      state.isloading = false;
    },
  },
});
export let { setUser, deleteUser } = authSlice.actions;
export default authSlice.reducer;
