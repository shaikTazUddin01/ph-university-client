import {
  TQueryParams,
  TResponseRedux,
  TResponseStudentData,
  TStudnet,
} from "../../../types";
import { baseApi } from "../../api/baseApi";

const userManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createStudent: builder.mutation({
      query: (data) => ({
        url: "users/create-student",
        method: "POST",
        body: data,
      }),
    }),
    getStudents: builder.query({
      query: (args) => {
        console.log(args);
        const params = new URLSearchParams();
        if (args) {
          args?.forEach((item: TQueryParams) => {
            params.append(item.name, item.value as string);
          });
        }
        return {
          url: "/students",
          method: "GET",
          params: params,
        };
      },
      transformResponse: (
        response: TResponseRedux<TResponseStudentData<TStudnet[]>>
      ) => {
        // console.log("response=>",response);

        return {
          data: response?.data?.result,
          meta: response?.data?.meta,
        };
      },
    }),
    getSingleStudent: builder.query({
      query: (studentId) => ({
        url: `/students/${studentId}`,
        method: "GET",
      }),
    }),
    getFaculty: builder.query({
      query: () => ({
        url: "/faculty",
        method: "GET",
      }),
    }),
    getFacultyByCourse: builder.query({
      query: (id) => ({
        url: `/faculty/${id}`,
        method: "GET",
      }),
    }),
    addFaculty: builder.mutation({
      query: (args) => {
        console.log("--->>", {faculties:args.faculties});
        return {
          url: `/course/${args?.id}/assign-faculties`,
          method: "PUT",
          body:{faculties:args.faculties},
        };
      },
    }),
  }),
});

export const {
  useCreateStudentMutation,
  useGetStudentsQuery,
  useGetSingleStudentQuery,
  useGetFacultyQuery,
  useGetFacultyByCourseQuery,
  useAddFacultyMutation,
} = userManagementApi;
