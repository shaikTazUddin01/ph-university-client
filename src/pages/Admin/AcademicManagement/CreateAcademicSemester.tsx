import PhForm from "../../../component/form/PhForm";
// import PhInput from "../../../component/form/PhInput";
import { Button, Col, Flex } from "antd";
import { FieldValues, SubmitHandler } from "react-hook-form";
import PhSelect from "../../../component/form/PhSelect";
// import { useCreateAcademicSemesterMutation } from "../../../redux/features/academicSemester/academicSemesterApi";
import { nameOptions } from "../../../constants/semester";
import { monthOptions } from "../../../constants/global";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod/dist/zod.js";

//get current year
const currentYear = new Date().getFullYear();
const yearOptions = [0, 1, 2, 3, 4].map((number) => ({
  value: String(currentYear + number),
  label: String(currentYear + number),
}));

const CreateAcademicSemester = () => {
  // const [createSemester,result]=useCreateAcademicSemesterMutation()

  //handle submit
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const name = nameOptions[Number(data?.name) - 1]?.label;
    const semesterData = {
      name,
      code: data.name,
      year: data?.year,
      startMonth: data?.startMonth,
      endMonth: data?.endMonth,
    };
    // createSemester(semesterData)
    console.log(semesterData);
  };

  const academicSemesterSchema = z.object({
    name: z.string({ required_error: "semester is required" }),
    year: z.string({ required_error: "Year is required" }),
    startMonth: z.string({ required_error: "Start Month is required" }),
    endMonth: z.string({ required_error: "End Month is required" }),
  });

  return (
    <Flex justify="center" align="center" className="">
      <Col span={11}>
        <PhForm
          onSubmit={onSubmit}
          resolver={zodResolver(academicSemesterSchema)}
        >
          <PhSelect
            label={"Semester"}
            name={"name"}
            options={nameOptions}
          ></PhSelect>
          <PhSelect
            label={"Year "}
            name={"year"}
            options={yearOptions}
          ></PhSelect>
          <PhSelect
            label={"Start Month  "}
            name={"startMonth"}
            options={monthOptions}
          ></PhSelect>
          <PhSelect
            label={"End Month  "}
            name={"endMonth"}
            options={monthOptions}
          ></PhSelect>
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

export default CreateAcademicSemester;
