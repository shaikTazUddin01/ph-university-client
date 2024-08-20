import { Button, Modal, Table } from "antd";
import type { TableColumnsType } from "antd";

import { useGetAllCoursesQuery } from "../../../redux/features/admin/CourseManagement/CourseManagementApi";
import { useState } from "react";
// import { TCourseData } from "../../../types";
import PhForm from "../../../component/form/PhForm";
import { FieldValues, SubmitHandler } from "react-hook-form";
// import PhInput from "../../../component/form/PhInput";
import { useAddFacultyMutation, useGetFacultyQuery } from "../../../redux/features/userManagement/userManagementApi";
import PhSelect from "../../../component/form/PhSelect";
import { toast } from "sonner";
import { TResponse } from "../../../types";

type TDataType = {
  key: string;
  title: string;
  code: string;
};

const Courses = () => {
  const { data: courses, isFetching } = useGetAllCoursesQuery(undefined);

  // console.log(registretedSemester);
  const coursesData = courses?.data;
  // console.log(coursesData);

  // console.log(coursesData);

  const columns: TableColumnsType<TDataType> = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },

    {
      title: "Code",
      dataIndex: "code",
      key: "code",
    },

    {
      title: "Action",
      key: "action",
      render: (item) => {
        // console.log("item-->", item);
        return <AddFaculty item={item} />;
      },
      width: "1%",
    },
  ];

  const tableData = coursesData?.map(
    ({ _id, title, code }: { _id: string; title: string; code: number }) => ({
      key: _id,

      title,
      code,
    })
  );

  //   console.log(tableData);

  //   const onChange: TableProps<TDataType>["onChange"] = (
  //     pagination,
  //     filters,
  //     sorter,
  //     extra
  //   ) => {
  //     console.log("params", pagination, filters, sorter, extra);
  //   };

  return (
    <div>
      <Table
        loading={isFetching}
        columns={columns}
        className=""
        pagination={false}
        dataSource={tableData}
        // onChange={onChange}
      />
    </div>
  );
};

const AddFaculty = ({ item }: any) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data: faculty } = useGetFacultyQuery(undefined);
  const [addFaculty]=useAddFacultyMutation()

//   console.log("faculty", faculty);

  const facultyOptions = faculty?.data?.map((item: Record<string, string>) => ({
    label: item?.name,
    value: item?._id,
  }));

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleAddFaculty: SubmitHandler<FieldValues> = async(data) => {
    console.log(data);
    console.log(item);
    const facultyData = {
      id: item?.key,
      faculties:data?.faculty,
    };
    console.log(facultyData);
    const toastId = toast.loading("creating...");

    try {
       const res=await addFaculty(facultyData) as TResponse<any>
    
    // console.log(res);
    if (res?.error) {
      toast.error(res?.error?.data?.message, { id: toastId, duration: 1000 });
    } else {
      toast.success("faculty created", {
        id: toastId,
        duration: 1000,
      });
    }
  } catch (error) {
    toast.error("something is wrong", { id: toastId, duration: 1000 });
  }
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Add Faculty
      </Button>
      <Modal open={isModalOpen} footer={null} onCancel={handleCancel}>
        <PhForm onSubmit={handleAddFaculty}>
          <PhSelect
          mode="multiple"
            label="Faculty"
            name="faculty"
            options={facultyOptions}
          ></PhSelect>
          <Button htmlType="submit">Submit</Button>
        </PhForm>
      </Modal>
    </>
  );
};

export default Courses;
