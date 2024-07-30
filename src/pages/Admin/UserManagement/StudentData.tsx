import React, { useState } from "react";
import { Button, Pagination, Space, Table } from "antd";
import type { TableColumnsType, TableProps } from "antd";
import { useGetStudentsQuery } from "../../../redux/features/userManagement/userManagementApi";
// import { TStudnet } from "../../../types";

type TDataType = {
  key: React.Key;
  fullname: string;
  id: string;
};


const StudentData = () => {

    const [page,setPage]=useState(1);

  const {
    data: StudentData,
    isLoading,
    isFetching,
  } = useGetStudentsQuery([
    {
      name: "limit",
      value: 2,
    },
    {
      name: "page",
      value: page,
    },
    {
      name: "sort",
      value: "id",
    },
  ]);
  const metaData = StudentData?.meta;
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
      title: "Action",
      key: "action",
      render: () => (
        <Space>
          <Button>Details</Button>
          <Button>Update</Button>
          <Button>Status</Button>
        </Space>
      ),
      width: "1%",
    },
  ];

  const tableData = StudentData?.data?.map(({ fullname, id, _id }) => ({
    id,
    key: _id,
    fullname,
  }));

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
        loading={isFetching}
        columns={columns}
        className=""
        pagination={false}
        dataSource={tableData}
        onChange={onChange}
      />
      <Pagination onChange={(value)=>setPage(value)} pageSize={metaData?.limit} total={metaData?.total}></Pagination>
    </div>
  );
};

export default StudentData;
