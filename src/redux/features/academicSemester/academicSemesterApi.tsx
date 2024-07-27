
import { TResponseRedux } from "../../../types";
import { TacademicSemester } from "../../../types/academicSemester.type";
import { baseApi } from "../../api/baseApi";

export const academicSemesterApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    academicSemester: builder.query({
      query: () => ({
        url: "/academic-semesters",
        method: "GET",
      }),
      transformResponse:(response:TResponseRedux<TacademicSemester[]>)=>{
        console.log("object--->",response);
        return{
          data:response?.data
        }    
      }
    }),
    createAcademicSemester: builder.mutation({
      query: ( semesterData ) => ({
        
        url: "/academic-semesters",
        method: "POST",
        body: semesterData,
      }),
    }),
  }),
});

export const { useAcademicSemesterQuery ,useCreateAcademicSemesterMutation} = academicSemesterApi;
