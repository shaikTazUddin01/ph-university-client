import {  TResponseRedux } from "../../../types";
import { TAcademicFaculty } from "../../../types/academicFaculty.type";
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
        }),
        transformResponse:(response:TResponseRedux<TAcademicFaculty[]>)=>{
          // console.log("response=>",response);

          return(
            {
              data:response?.data
            }
          )
        }
    })
  }),
});

export const { useCreateAcademicFacultyMutation ,useGetAcademicFacultyQuery} = academicFacultyApi;
