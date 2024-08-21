import { baseApi } from "../api/baseApi";


export const enrollCourseApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    myOfferCourse: builder.query({
      query: () => ({
        url: "/offeredCourse/my-offered-courses/",
        method: "GET",
      }),
      
    }),
    
})
})

export const { useMyOfferCourseQuery} = enrollCourseApi;
