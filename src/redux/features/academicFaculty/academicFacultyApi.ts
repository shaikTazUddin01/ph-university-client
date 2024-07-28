import { baseApi } from "../../api/baseApi";

export const academicFacultyApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createAcademicFaculty: builder.mutation({
      query: (data) => ({
        url: "/academic-faculty/create-faculty",
        method: "POST",
        body: data,
      }),
    }),
    getAcademicFaculty:builder.query({
        query:()=>({
            url:"/academic-faculty/academic-faculty",
            method:"GET"
        })
    })
  }),
});

export const { useCreateAcademicFacultyMutation ,useGetAcademicFacultyQuery} = academicFacultyApi;
