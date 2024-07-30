import { baseApi } from "../../api/baseApi";

const academicDepartmentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAcademicDepartment: builder.query({
      query: () => ({
        url:'/academic-department',
        method:"GET"
      }),
    }),
  }),
});

export const{useGetAcademicDepartmentQuery}=academicDepartmentApi