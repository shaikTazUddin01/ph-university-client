import { Button, Col } from "antd";
import PhForm from "../../../component/form/PhForm";
import PhInput from "../../../component/form/PhInput";

import { FieldValues, SubmitHandler } from "react-hook-form";
import { useCreateAcademicFacultyMutation } from "../../../redux/features/academicFaculty/academicFacultyApi";
import { toast } from "sonner";

const CreateAcademicFaculty = () => {
  const [createFaculty] = useCreateAcademicFacultyMutation();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const academicFacultyData = {
      academicFaculty: data,
    };
    const res = await createFaculty(academicFacultyData);

    console.log(res);
    if (res?.data?.success == true) {
      toast.success("New Academic Faclty Is Created");
    } else toast.error("something is wrong");
  };

  return (
    <div className="flex justify-center">
      <Col span={11} className="bg-gray-300 p-5 rounded-lg">
        <PhForm onSubmit={onSubmit}>
          <PhInput type="text" name="name" label="Academic Faculty"></PhInput>
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

export default CreateAcademicFaculty;
