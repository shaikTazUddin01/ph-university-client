import PhForm from "../../../component/form/PhForm";

import { Button, Col, Flex } from "antd";
import { FieldValues, SubmitHandler } from "react-hook-form";
import PhSelect from "../../../component/form/PhSelect";

import { monthOptions } from "../../../constants/global";

import { useAcademicSemesterQuery } from "../../../redux/features/academicSemester/academicSemesterApi";
import { toast } from "sonner";
import { TResponse } from "../../../types/global";
import { TacademicSemester } from "../../../types/academicSemester.type";
import { semesterStatusOptions } from "./Constant";
import PhInput from "../../../component/form/PhInput";
import { useCreateSemesterRegistrationMutation } from "../../../redux/features/admin/semesterManagement/semesterManagementApi";
import PhDatePicker from "../../../component/form/PhDatePicker";

//get current year

const SemesterRegistration = () => {
  const { data: academicSemester, isLoading } =
    useAcademicSemesterQuery(undefined);
  const [createSemester] = useCreateSemesterRegistrationMutation();

  if (isLoading) {
    return <p>Loading...</p>;
  }
  //   console.log(academicSemester);
  const academicSemesterOptions = academicSemester?.data?.map((item) => {
    return {
      value: item._id,
      label: `${item?.name} ${item?.year}`,
    };
  });
  //   console.log(academicSemesterOptions);

  //handle submit
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log(data);
    const toastId = toast.loading("creating...");
    // const name = nameOptions[Number(data?.name) - 1]?.label;
    const semesterData = {
      ...data,

       minCredit: Number(data.minCredit),
      maxCredit: Number(data.maxCredit),
    };
    // console.log(object);

    try {
      const res = (await createSemester(semesterData)) as TResponse<any>;
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
            label={"Academic Semester"}
            name={"academicSemester"}
            options={academicSemesterOptions}
          ></PhSelect>
          <PhSelect
            label={"Status"}
            name={"status"}
            options={semesterStatusOptions}
          ></PhSelect>

          <PhDatePicker
            label={"Start Month  "}
            name={"startDate"}
          ></PhDatePicker>

          <PhDatePicker label={"End Month  "} name={"endDate"}></PhDatePicker>

          <PhInput type="text" name="minCredit" label="Min Credit"></PhInput>
          <PhInput type="text" name="maxCredit" label="Max Credit"></PhInput>
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

export default SemesterRegistration;
