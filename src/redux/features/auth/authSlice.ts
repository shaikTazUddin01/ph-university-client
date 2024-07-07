import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";
// import { useAppSelector } from "../hooks";


export type TUser = {
  exp: number;
  iat: number;
  role: string;
  userId: string;
};

export type TInitialState = {
  user: null | TUser;
  token: null | string;
};

const initialState: TInitialState = {
  user: null,
  token: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { user, token } = action.payload;
      (state.user = user), (state.token = token);
    },
    logout: (state) => {
      (state.user = null), (state.token = null);
    },
  },
});

export const { setUser, logout } = authSlice.actions;

export const currentUser=(state:RootState)=>state.auth.user

export default authSlice.reducer;
