import { createSlice } from "@reduxjs/toolkit";

export const authReducer = createSlice({
  name: "auth",
  initialState: {
    isLoggedIn: false,
    user: { token: "", username: "", userId: "" },
  },
  reducers: {
    loginUser(state, action) {
      return {
        ...state,
        isLoggedIn: true,
        user: {
          token: action.payload.token,
          username: action.payload.username,
          userId: action.payload.userId,
        },
      };
    },

    logout(state) {
      return {
        ...state,
        isLoggedIn: false,
        user: { token: "", username: "", userId: "" },
      };
    },
  },
});

export const { login, logout } = authReducer.actions;

export default authReducer.reducer;
