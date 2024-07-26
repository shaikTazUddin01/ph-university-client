import { baseApi } from "../../api/baseApi";

export const academicSemesterApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    academicSemester: builder.query({
      query: () => ({
        url: "/academic-semesters",
        method: "GET",
      }),
    }),
    createAcademicSemester: builder.mutation({
      query: ({ semesterData }) => ({
        
        url: "/academic-semesters",
        method: "POST",
        body: semesterData,
      }),
    }),
  }),
});

export const { useAcademicSemesterQuery ,useCreateAcademicSemesterMutation} = academicSemesterApi;
