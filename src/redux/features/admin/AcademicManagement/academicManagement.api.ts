import { baseApi } from "../../../api/baseApi";

export const academicManagement = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    academicSemester: builder.query({
      query: () => ({
        url: "/academic-semesters",
        method: "GET",
      }),
      transformResponse: (response) => {
        // console.log("insdafhjk--->>", response);
        return {
          data:response?.data
        };
      },
    }),
    createAcademicSemester: builder.mutation({
      query: (data) => ({
        url: "/academic-semesters",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useAcademicSemesterQuery, useCreateAcademicSemesterMutation } =
  academicManagement;
