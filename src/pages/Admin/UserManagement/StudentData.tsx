import React from "react";
import { Button, Space, Table } from "antd";
import type { TableColumnsType, TableProps } from "antd";
import { useGetStudentsQuery } from "../../../redux/features/userManagement/userManagementApi";
// import { TStudnet } from "../../../types";

type TDataType ={
  key: React.Key;
  fullname: string;
  id: string;
}

const StudentData = () => {
  const { data: StudentData, isLoading } = useGetStudentsQuery(undefined);
  if (isLoading) {
    return <p>Loading...</p>;
  }
//   const stableData = StudentData?.data?.result;

  console.log(StudentData);

  const columns: TableColumnsType<TDataType> = [
      {
        title: "Name",
        dataIndex: "fullname",
      },
    {
      title: "Roll No.",
      dataIndex: "id",
    },
    {
        title:"Action",
        key:'action',
        render:()=>(
            <Space>
            <Button>Details</Button>
            <Button>Update</Button>
            <Button>Status</Button>
            </Space>
        ),
        width:'1%'

    }
  ];

  const tableData = StudentData?.data?.map(({ fullname, id, _id }) => ({
    id,
    key: _id,
    fullname,
  })) ;

//   console.log(tableData);

  const onChange: TableProps<TDataType>["onChange"] = (
    pagination,
    filters,
    sorter,
    extra
  ) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  return (
    <div>
      <Table
        columns={columns}
        className=""
        dataSource={tableData}
        onChange={onChange}
      />
    </div>
  );
};

export default StudentData;
