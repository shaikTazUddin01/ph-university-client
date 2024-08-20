import { baseApi } from "../../../api/baseApi";

export const courseManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addCourse: builder.mutation({
      query: (data) => ({
        url: "/course",
        method: "POST",
        body: data,
      }),
    }),
    getAllCourses: builder.query({
      query: () => ({
        url: "/course",
        method: "GET",
      }),
    }),
    addOfferedCourse: builder.mutation({
      query: (data) => ({
        url: "/offeredCourse/create-offered-course",
        method: "POST",
        body: data,
      }),
    }),
    // updateSemesterRegistration: builder.mutation({
    //   query: (args) => ({
    //     url: `/semesterRegistration/${args.id}`,
    //     method: "PATCH",
    //     body: {status:args.status},
    //   }),
    //   invalidatesTags:['semester']
    // }),
  }),
});

export const { useGetAllCoursesQuery ,useAddCourseMutation,useAddOfferedCourseMutation} = courseManagementApi;
