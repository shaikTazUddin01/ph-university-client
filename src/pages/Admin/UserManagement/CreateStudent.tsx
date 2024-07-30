import { FieldValues, SubmitHandler } from "react-hook-form";
import PhForm from "../../../component/form/PhForm";
import PhInput from "../../../component/form/PhInput";
import { Button, Col, Divider, Row } from "antd";
import PhSelect from "../../../component/form/PhSelect";
import { BloodGroupOptions, GenderOptions } from "../../../constants/global";
import PhDatePicker from "../../../component/form/PhDatePicker";
import { useAcademicSemesterQuery } from "../../../redux/features/academicSemester/academicSemesterApi";
import { useGetAcademicDepartmentQuery } from "../../../redux/features/academicDepartment/academicDepertmentApi";

const CreateStudent = () => {
  //get academic department data
  const { data: AData } = useGetAcademicDepartmentQuery(undefined);
  //get academic semester data
  const { data: sData, isLoading } = useAcademicSemesterQuery(undefined);
// academic semester options
  const academicSemesterOptions =
    sData?.data?.map((item) => ({
      key: item?._id,
      label: `${item?.name} ${item?.year}`,
      value: item.name,
    })) || [];
    // academic Department options
  const academicDepartmentOptions =
    AData?.data?.map((item) => ({
      key: item?._id,
      label: item?.name,
      value: item.name,
    })) || [];


  if (isLoading) {
    return <p>Loading...</p>;
  }
  //   console.log(sData?.data);

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    // console.log(data);

    const studentData={
      password:"student123",
      studentInfo:{
        data
      }
    }

    const formData = new FormData();

    formData.append("data", JSON.stringify(studentData));

    //! this for development
    console.log(Object.fromEntries(formData));
  };

  return (
    <Row>
      <Col span={24} className="bg-gray-300 p-5">
        <PhForm onSubmit={onSubmit}>
          {/* personal Information */}
          <Divider>Personal InFo.</Divider>
          <Row gutter={8}>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PhInput
                label="First Name"
                name="name.firstName"
                type="text"
              ></PhInput>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PhInput
                label="Middle Name"
                name="name.middleName"
                type="text"
              ></PhInput>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PhInput
                label="Last Name"
                name="name.lastName"
                type="text"
              ></PhInput>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              {/* <PhInput label="Gender" name="gender" type="text"></PhInput> */}
              <PhSelect
                label="Gender"
                name="gender"
                options={GenderOptions}
              ></PhSelect>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PhDatePicker
                label="Date Of Birth"
                name="dateOfBirth"
              ></PhDatePicker>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PhSelect
                label="Blood Group"
                name="bloodgroup"
                options={BloodGroupOptions}
              ></PhSelect>
            </Col>
          </Row>
          {/* Contact Information */}
          <Divider>Contact InFo.</Divider>
          <Row gutter={8}>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PhInput label="Email" name="email" type="email"></PhInput>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PhInput label="Contact" name="contactNo" type="text"></PhInput>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PhInput
                label="Emergency Contact"
                name="emergencyContactNo"
                type="text"
              ></PhInput>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PhInput
                label="Present Address"
                name="presentAddress"
                type="text"
              ></PhInput>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PhInput
                label="Permanent Address"
                name="permanentAddress"
                type="text"
              ></PhInput>
            </Col>
          </Row>
          {/* Guardian Information */}
          <Divider>Guardian</Divider>
          <Row gutter={8}>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PhInput
                label="Father Name"
                name="guardian.fatherName"
                type="text"
              ></PhInput>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PhInput
                label="Father Occupation"
                name="guardian.fatherOccupation"
                type="text"
              ></PhInput>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PhInput
                label="Father ContactNo"
                name="guardian.fatherContactNo"
                type="text"
              ></PhInput>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PhInput
                label="Mother Name"
                name="guardian.motherName"
                type="text"
              ></PhInput>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PhInput
                label="Mother Occupation"
                name="guardian.motherOccupation"
                type="text"
              ></PhInput>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PhInput
                label="Mother ContactNo"
                name="guardian.motherContactNo"
                type="text"
              ></PhInput>
            </Col>
          </Row>
          {/* Local Guardian Information */}
          <Divider>Local Guardian</Divider>
          <Row gutter={8}>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PhInput
                label="Name"
                name="localGuardian.name"
                type="text"
              ></PhInput>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PhInput
                label="Occupation"
                name="localGuardian.occupation"
                type="text"
              ></PhInput>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PhInput
                label="ContactNo"
                name="localGuardian.contactNo"
                type="text"
              ></PhInput>
            </Col>

            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PhInput
                label="Address"
                name="localGuardian.address"
                type="text"
              ></PhInput>
            </Col>
          </Row>
          {/* Admition information */}
          <Divider>Admition Semester</Divider>
          <Row gutter={8}>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PhSelect
                label="Academic Semester"
                name="academicSemester"
                options={academicSemesterOptions}
              ></PhSelect>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PhSelect
                label="Academic Department"
                name="academicDepartment"
                options={academicDepartmentOptions}
              ></PhSelect>
            </Col>
          </Row>

          <div className="flex justify-end">
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </div>
        </PhForm>
      </Col>
    </Row>
  );
};

export default CreateStudent;
