import { TResponseRedux, TSemesterRegistration } from "../../../../types";
import { baseApi } from "../../../api/baseApi";

export const semesterManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    
    createSemesterRegistration: builder.mutation({
      query: (data) => ({
        url: "/semesterRegistration/create-semester-registration",
        method: "POST",
        body: data,
      }),
      invalidatesTags:['semester']
    }),
    registratedSemester: builder.query({
      query: () => ({
        url: "/semesterRegistration",
        method: "GET",
      }),
      transformResponse:(response:TResponseRedux<TSemesterRegistration[]>)=>{
        // console.log("object--->",response);
        return{
          data:response?.data
        }    
      },
      providesTags:['semester']
    }),
    updateSemesterRegistration: builder.mutation({
      query: (args) => ({
        url: `/semesterRegistration/${args.id}`,
        method: "PATCH",
        body: {status:args.status},
      }),
      invalidatesTags:['semester']
    }),
    
  }),
});

export const { useCreateSemesterRegistrationMutation ,useRegistratedSemesterQuery,useUpdateSemesterRegistrationMutation} =
  semesterManagementApi;
