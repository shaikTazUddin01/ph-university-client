//get current year

import { Button, Col, Flex } from "antd";
import PhForm from "../../../component/form/PhForm";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { useGetAcademicFacultyQuery } from "../../../redux/features/academicFaculty/academicFacultyApi";
import PhSelectWithWatch from "../../../component/form/PhSelectWithWatch";
import PhInput from "../../../component/form/PhInput";
import { useEffect, useState } from "react";
import { useRegistratedSemesterQuery } from "../../../redux/features/admin/semesterManagement/semesterManagementApi";
import { useGetAcademicDepartmentQuery } from "../../../redux/features/academicDepartment/academicDepertmentApi";
import PhSelect from "../../../component/form/PhSelect";
import {
  useAddOfferedCourseMutation,
  useGetAllCoursesQuery,
} from "../../../redux/features/admin/CourseManagement/CourseManagementApi";
import { useGetFacultyQuery } from "../../../redux/features/userManagement/userManagementApi";
import { dayOptions } from "../../../constants/global";
import { TResponse } from "../../../types";
import { toast } from "sonner";

const OfferCourse = () => {
  // get academic faculty
  const { data: academicFaculty, isLoading: aLoading } =
    useGetAcademicFacultyQuery(undefined);
  // get semester registration
  const { data: semesterRegistration, isLoading: rLoading } =
    useRegistratedSemesterQuery(undefined);

  // get academic Department
  const { data: academicDepartment, isLoading: adLoading } =
    useGetAcademicDepartmentQuery(undefined);
  // get academic course
  const { data: course, isLoading: cLoading } =
    useGetAllCoursesQuery(undefined);
  // state management
  const [courseid, setCourseId] = useState("");
  const [faculty, setFaculty] = useState(null);
  const [facultyOptions, setFacultyOptions] = useState(undefined);
  // get faculty options
  const { data: Allfaculty, isLoading: FLoading } =
    useGetFacultyQuery(undefined);
  // add offercourse
  const [addOfferCourse] = useAddOfferedCourseMutation();
  useEffect(() => {
    if (courseid) {
      setFaculty(Allfaculty.data);
      console.log("faculty", faculty);
      // created OPtions
      const facultyselctedOptions = faculty?.map((item: any) => ({
        label: item?.name,
        value: item?._id,
      }));

      setFacultyOptions(facultyselctedOptions);
    }
  }, [courseid, Allfaculty, faculty]);

  //loading
  if (aLoading || rLoading || adLoading || cLoading || FLoading) {
    return <p>Loading...</p>;
  }
  // created OPtions
  const academicFacultyOptions = academicFaculty?.data?.map((item) => ({
    label: item.name,
    value: item._id,
  }));
  // created OPtions
  const semesterRegistrationOptions = semesterRegistration?.data?.map(
    (item) => ({
      label: `${item.academicSemester.name} ${item.academicSemester.year}`,
      value: item._id,
    })
  );
  // created OPtions
  const academicDepartmentOptions = academicDepartment?.data?.map(
    (item: any) => ({
      label: item.name,
      value: item._id,
    })
  );
  // created OPtions
  const courseOptions = course?.data?.map((item: any) => ({
    label: `${item.title} (${item.code})`,
    value: item._id,
  }));

  //handle submit
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log(data);
    const toastId = toast.loading("creating...");
    // // const name = nameOptions[Number(data?.name) - 1]?.label;
    const OfferedCourse = {
      ...data,

      maxCapacity: Number(data.maxCapacity),
      section: Number(data.section),
    };
    // // console.log(object);

    try {
      const res = (await addOfferCourse(OfferedCourse)) as TResponse<any>;
      console.log(res);
      if (res?.error) {
        toast.error(res?.error?.data?.message, { id: toastId, duration: 1000 });
      } else {
        toast.success("created a new semester", {
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
          <PhSelect
            label="Semester Registration"
            name="semesterRegistration"
            options={semesterRegistrationOptions}
          ></PhSelect>

          <PhSelect
            label="Academic Faculty"
            name="academicFaculty"
            options={academicFacultyOptions}
          ></PhSelect>

          <PhSelect
            label="Academic Department"
            name="academicDepartment"
            options={academicDepartmentOptions}
          ></PhSelect>

          <PhSelectWithWatch
            label="Course"
            onValueChange={setCourseId}
            name="course"
            options={courseOptions}
          ></PhSelectWithWatch>

          <PhSelect
            name="faculty"
            label="Faculty"
            disabled={!courseid}
            options={facultyOptions}
          ></PhSelect>

          <PhInput
            name="maxCapacity"
            label="Max Capacity"
            type="text"
            disabled={!courseid}
          ></PhInput>
          <PhInput
            name="section"
            label="Section"
            type="text"
            disabled={!courseid}
          ></PhInput>

          <PhSelect
            name="days"
            label="Days"
            mode="multiple"
            options={dayOptions}
            disabled={!courseid}
          ></PhSelect>
          <PhInput
            name="startTime"
            label="Start Time"
            type="text"
            disabled={!courseid}
          ></PhInput>
          <PhInput
            name="endTime"
            label="end Time"
            type="text"
            disabled={!courseid}
          ></PhInput>
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
