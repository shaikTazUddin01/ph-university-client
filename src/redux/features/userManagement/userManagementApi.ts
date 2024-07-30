import { TResponseRedux, TResponseStudentData, TStudnet } from "../../../types";
import { baseApi } from "../../api/baseApi";


const userManagementApi=baseApi.injectEndpoints({
    endpoints:(builder)=>({
        createStudent:builder.mutation({
            query:(data)=>({
                url:"users/create-student",
                method:"POST",
                body:data
            })
        }),
        getStudents:builder.query({
            query:()=>({
                url:"/students",
                method:"GET"
            }),
            transformResponse:(response:TResponseRedux<TResponseStudentData<TStudnet[]>>)=>{
              // console.log("response=>",response);
    
              return(
                {
                  data:response?.data?.result
                }
              )
            }
        })
    })
})

export const{useCreateStudentMutation,useGetStudentsQuery}=userManagementApi