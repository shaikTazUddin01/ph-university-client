import React from "react";
import PhForm from "../../../component/form/PhForm";
import PhInput from "../../../component/form/PhInput";
import { Button, Col, Flex } from "antd";
import { FieldValues, SubmitHandler } from "react-hook-form";
import PhSelect from "../../../component/form/PhSelect";

const CreateAcademicSemester = () => {
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };

  return (
    <Flex justify="center" align="center">
      <Col span={11}>
        <PhForm onSubmit={onSubmit}>
          <PhInput type="text" name="name" label="name"></PhInput>
          <PhInput type="text" name="year" label="year"></PhInput>
          <PhSelect></PhSelect>
          <Flex justify="end" className="mt-5">
            <Button
              htmlType="submit"
              type="primary"
            >
              submit
            </Button>
          </Flex>
        </PhForm>
      </Col>
    </Flex>
  );
};

export default CreateAcademicSemester;
