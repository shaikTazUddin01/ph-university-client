import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";
import { setUser } from "../features/auth/authSlice";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:5000/api/v1",
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token;

    if (token) {
      headers.set("authorization", token);
    }
    return headers;
  },
});

const baseQueryWithRefreshToken = async (args, api, extraOptions) => {
  const result = await baseQuery(args, api, extraOptions);
  if (result?.error?.status == 401) {
    console.log("sending refresh token");
    const res = await fetch("http://localhost:5000/api/v1/auth/refresh-token", {
      method: "post",
      credentials: "include",
    });
    const data = await res.json();
    console.log(data?.data?.accessToken);
    console.log("get state", api.getState());
    const user = (api.getState() as RootState).auth.user;
    // console.log("dispatch",api.dispatch());
    api.dispatch(
      setUser({
        user,
        token: data?.data?.accessToken,
      })
    );
  }

  return result;
};

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQueryWithRefreshToken,
  endpoints: () => ({}),
});
