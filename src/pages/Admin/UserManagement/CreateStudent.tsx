import { FieldValues, SubmitHandler } from "react-hook-form";
import PhForm from "../../../component/form/PhForm";
import PhInput from "../../../component/form/PhInput";
import { Button, Col } from "antd";


const CreateStudent = () => {
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);

    const formData=new FormData()

    formData.append('data',JSON.stringify(data));

    //! this for development
    console.log(Object.fromEntries(formData));


  };

  return (
    <div className="flex justify-center ">
      <Col span={11} className="bg-gray-300 p-5">
        <PhForm onSubmit={onSubmit} >
          <PhInput label="name" name="name" type="text"></PhInput>
          <div className="flex justify-end">
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </div>
        </PhForm>
      </Col>
    </div>
  );
};

export default CreateStudent;
