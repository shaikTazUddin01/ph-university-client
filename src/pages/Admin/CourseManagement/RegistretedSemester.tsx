import React from "react";
import { Button, Space, Table } from "antd";
import type { TableColumnsType } from "antd";

import { useRegistratedSemesterQuery } from "../../../redux/features/admin/semesterManagement/semesterManagementApi";
// import { TStudnet } from "../../../types";

type TDataType = {
  
  name: string;
  startDate: string;
  endDate: string;
  status: string;
};

const RegistretedSemester = () => {
  const { data: registretedSemester, isFetching } =
    useRegistratedSemesterQuery(undefined);
console.log(registretedSemester);
  const registretedSemesterData = registretedSemester?.data;
  console.log(registretedSemesterData);

  const columns: TableColumnsType<TDataType> = [
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Status",
      dataIndex: "status",
    },
    {
      title: "Start Date",
      dataIndex: "startDate",
    },
    {
      title: "End Date",
      dataIndex: "endDate",
    },
    {
      title: "Action",
      key: "action",
      render: (item) => {
        console.log("item-->", item);
        return (
          <Space>
            <Button>Update</Button>
          </Space>
        );
      },
      width: "1%",
    },
  ];

  const tableData = registretedSemesterData?.map(
    ({ academicSemester, startDate, endDate, status }) => ({
      name: `${academicSemester.name} ${academicSemester.year}`,
      startDate,
      endDate,
      status,
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

export default RegistretedSemester;
