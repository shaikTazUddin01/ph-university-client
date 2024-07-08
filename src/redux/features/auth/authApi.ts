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
  }),
});

export const { useLoginMutation} = authApi;
