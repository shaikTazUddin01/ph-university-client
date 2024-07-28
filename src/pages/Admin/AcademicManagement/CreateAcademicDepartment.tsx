import { Button, Col } from "antd";
import PhForm from "../../../component/form/PhForm";
import PhInput from "../../../component/form/PhInput";

import { FieldValues, SubmitHandler } from "react-hook-form";

const CreateAcademicDepartment = () => {
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log(data);
  };

  return (
    <div className="flex justify-center">
      <Col span={11} className="bg-gray-300 p-5 rounded-lg">
        <PhForm onSubmit={onSubmit}>
          <PhInput
            type="text"
            name="name"
            label="Academic Department"
          ></PhInput>
          <PhInput
            type="text"
            name="academicFaculty"
            label="Academic Faculty"
          ></PhInput>
          <div className="flex justify-end">
            <Button htmlType="submit" type="primary">
              Create
            </Button>
          </div>
        </PhForm>
      </Col>
    </div>
  );
};

export default CreateAcademicDepartment;
