import PhForm from "../../../component/form/PhForm";
// import PhInput from "../../../component/form/PhInput";
import { Button, Col, Flex } from "antd";
import { FieldValues, SubmitHandler } from "react-hook-form";
import PhSelect from "../../../component/form/PhSelect";

const nameSemester = [
  { value: "01", label: "Autumn" },
  { value: "02", label: "Summer" },
  { value: "03", label: "Fall" },
];

const CreateAcademicSemester = () => {
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const name=nameSemester[Number(data.nameSemester)-1].label
    const semesterData = {
      name,
      code:data.nameSemester,
    };
    console.log(semesterData);
  };

  return (
    <Flex justify="center" align="center">
      <Col span={11}>
        <PhForm onSubmit={onSubmit}>
          {/* <PhInput type="text" name="name" label="name"></PhInput>
          <PhInput type="text" name="year" label="year"></PhInput> */}
          <PhSelect
            label={"Semester : "}
            name={"nameSemester"}
            options={nameSemester}
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
