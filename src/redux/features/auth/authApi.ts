import { baseApi } from "../../api/baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (userInFo) => ({
        url: "/auth/login",
        method: "POST",
        body: userInFo,
        
      }),
    }),
    changePass: builder.mutation({
      query: (changePass) => ({
        url: "/auth/change-passwod",
        method: "POST",
        body: changePass,
        
      }),
    }),
  }),
});

export const { useLoginMutation,useChangePassMutation} = authApi;
