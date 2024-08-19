//get current year

import { Button, Col, Flex } from "antd";
import PhForm from "../../../component/form/PhForm";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { useGetAcademicFacultyQuery } from "../../../redux/features/academicFaculty/academicFacultyApi";
import PhSelectWithWatch from "../../../component/form/PhSelectWithWatch";
import PhInput from "../../../component/form/PhInput";
import { useState } from "react";

const OfferCourse = () => {
  const { data: academicFaculty ,isLoading} = useGetAcademicFacultyQuery(undefined);
const [id,setId]=useState('')
if (isLoading) {
    return <p>Loading...</p>
}
// console.log(!id);
  const academicFacultyOptions  = academicFaculty?.data?.map((item) => ({
    label: item.name,
    value: item._id,
  }));
//   console.log(academicFacultyOptions);
  //handle submit
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log(data);
    // const toastId = toast.loading("creating...");
    // // const name = nameOptions[Number(data?.name) - 1]?.label;
    // const semesterData = {
    //   ...data,

    //    minCredit: Number(data.minCredit),
    //   maxCredit: Number(data.maxCredit),
    // };
    // // console.log(object);

    // try {
    //   const res = (await createSemester(semesterData)) as TResponse<any>;
    //   console.log(res);
    //   if (res?.error) {
    //     toast.error(res?.error?.data?.message, { id: toastId, duration: 1000 });
    //   } else {
    //     toast.success("created a new semester", {
    //       id: toastId,
    //       duration: 1000,
    //     });
    //   }
    // } catch (error) {
    //   toast.error("something is wrong", { id: toastId, duration: 1000 });
    // }
  };

  return (
    <Flex justify="center" align="center">
      <Col span={11} className="bg-gray-300 p-10 rounded-xl">
        <PhForm onSubmit={onSubmit}>
            <PhSelectWithWatch label="Academic Faculty" onValueChange={setId} name="academicFaculty" options={academicFacultyOptions}></PhSelectWithWatch>
            <PhInput name="test" label="test" type="text" disabled={!id}></PhInput>
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

export default OfferCourse;
