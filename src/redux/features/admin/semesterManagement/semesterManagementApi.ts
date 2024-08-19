import { baseApi } from "../../../api/baseApi";

export const semesterManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    
    createSemesterRegistration: builder.mutation({
      query: (data) => ({
        url: "/semesterRegistration/create-semester-registration",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useCreateSemesterRegistrationMutation } =
  semesterManagementApi;
