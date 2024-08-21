import { baseApi } from "../api/baseApi";


export const enrollCourseApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    myOfferCourse: builder.query({
      query: () => ({
        url: "/offeredCourse/my-offered-courses/",
        method: "GET",
      }),
      providesTags:['enrollCourse']
      
    }),
    enrollCourse: builder.mutation({
      query: (data) => ({
        url: "enrolled-Course/create-enrolled-course",
        method: "POST",
        body:data
      }),
      invalidatesTags:['enrollCourse']
    }),
    
})
})

export const { useMyOfferCourseQuery,useEnrollCourseMutation} = enrollCourseApi;
