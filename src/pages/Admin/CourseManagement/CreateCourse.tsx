import PhForm from "../../../component/form/PhForm";

import { Button, Col, Flex } from "antd";
import { FieldValues, SubmitHandler } from "react-hook-form";
import PhSelect from "../../../component/form/PhSelect";



import { toast } from "sonner";
import { TResponse } from "../../../types/global";

import PhInput from "../../../component/form/PhInput";

import { useAddCourseMutation, useGetAllCoursesQuery } from "../../../redux/features/admin/CourseManagement/CourseManagementApi";
import { ReactNode } from "react";

//get current year

const CreateCourse = () => {
const {data:courses,isLoading}=useGetAllCoursesQuery(undefined)

// create course
const[addCourse]=useAddCourseMutation()

if (isLoading) {
    return <p>Loading...</p>
}

const courseOption=courses.data.map((course:Record<string,any>)=>({
    label:course.title,
    value:course._id

}))
 
// console.log(courseOption);
 
  //handle submit
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    // console.log(data);
    const toastId = toast.loading("creating...");
    // const name = nameOptions[Number(data?.name) - 1]?.label;
    const courseData = {
      ...data,
      credits:Number(data.credits),
      code:Number(data.code),
      isDeleted:false,
      perRequisteCourses:data.perRequisteCourses.map((item:ReactNode)=>({
        courses:item,
        isDeleted:false
      }))
      

    };
    console.log(courseData);

    try {
      const res = (await addCourse(courseData)) as TResponse<any>;
      console.log(res);
      if (res?.error) {
        toast.error(res?.error?.data?.message, { id: toastId, duration: 1000 });
      } else {
        toast.success("created add new course", {
          id: toastId,
          duration: 1000,
        });
      }
    } catch (error) {
      toast.error("something is wrong", { id: toastId, duration: 1000 });
    }
  };

  return (
    <Flex justify="center" align="center">
      <Col span={11} className="bg-gray-300 p-10 rounded-xl">
        <PhForm onSubmit={onSubmit}>
          <PhInput name="title" label="Title" type="text"></PhInput>
          <PhInput name="prefix" label="Prefix" type="text"></PhInput>

          <PhSelect
            label={"PerRequiste Courses"}
            name={"perRequisteCourses"}
            options={courseOption}
            mode="multiple"
          ></PhSelect>

          

          
          <PhInput type="text" name="code" label="Code"></PhInput>
          <PhInput type="text" name="credits" label="Credit"></PhInput>
          
          <Flex justify="end" className="mt-5">
            <Button htmlType="submit" type="primary">
              submit
            </Button>
          </Flex>
        </PhForm>
      </Col>
    </Flex>
  );
};



export default CreateCourse;