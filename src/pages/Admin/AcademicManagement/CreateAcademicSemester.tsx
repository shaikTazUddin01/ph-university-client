import PhForm from "../../../component/form/PhForm";
// import PhInput from "../../../component/form/PhInput";
import { Button, Col, Flex } from "antd";
import { FieldValues, SubmitHandler } from "react-hook-form";
import PhSelect from "../../../component/form/PhSelect";

const nameOptions = [
  { value: "01", label: "Autumn" },
  { value: "02", label: "Summer" },
  { value: "03", label: "Fall" },
];

const currentYear = new Date().getFullYear();
// console.log(currentYear);

const yearOptions = [0, 1, 2, 3, 4].map((number) => ({
  value: String(currentYear + number),
  label: String(currentYear + number),
}));

const monthOptions = [
  {
    value: "January",
    label: "January",
  },
  {
    value: "February",
    label: "February",
  },
  {
    value: "March",
    label: "March",
  },
  {
    value: "April",
    label: "April",
  },
  {
    value: "May",
    label: "May",
  },
  {
    value: "June",
    label: "June",
  },
  {
    value: "July",
    label: "July",
  },
  {
    value: "August",
    label: "August",
  },
  {
    value: "September",
    label: "September",
  },
  {
    value: "October",
    label: "October",
  },
  {
    value: "November",
    label: "November",
  },
  {
    value: "December",
    label: "December",
  },
];

const CreateAcademicSemester = () => {
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const name = nameOptions[Number(data?.nameSemester) - 1]?.label;
    const semesterData = {
      name,
      code: data.nameSemester,
      year: data?.year,
      startMonth: data?.startMonth,
      endMonth: data?.endMonth,
    };
    console.log(semesterData);
  };

  return (
    <Flex justify="center" align="center" className="">
      <Col span={11}>
        <PhForm onSubmit={onSubmit}>
          {/* <PhInput type="text" name="name" label="name"></PhInput>
          <PhInput type="text" name="year" label="year"></PhInput> */}
          <PhSelect
            label={"Semester  "}
            name={"nameSemester"}
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
