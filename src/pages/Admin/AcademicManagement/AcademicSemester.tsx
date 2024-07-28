import React from "react";
import { Table } from "antd";
import type { TableColumnsType, TableProps } from "antd";
import { useAcademicSemesterQuery } from "../../../redux/features/academicSemester/academicSemesterApi";

interface TDataType {
  key: React.Key;
  name: string;
  code: string;
  year: string;
  startMonth: string;
  endMonth: string;
}

const AcademicSemester = () => {
  const { data: academicSemester, isLoading } =
    useAcademicSemesterQuery(undefined);
  console.log(academicSemester);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  const columns: TableColumnsType<TDataType> = [
    {
      title: "Name",
      dataIndex: "name",
      filters: [
        {
          text: "Autumn",
          value: "Autumn",
        },
        {
          text: "Summer",
          value: "Summer",
        },
        {
          text: "Fall",
          value: "Fall",
        },
        
      ],
      filterMode: "tree",
      filterSearch: true,
      onFilter: (value, record) => record.name.startsWith(value as string),
      width: "30%",
    },
    {
      title: "Code",
      dataIndex: "code",
      // sorter: (a, b) => a.age - b.age,
    },
    {
      title: "Year",
      dataIndex: "year",

    },
    {
      title: "Start Month",
      dataIndex: "startMonth",
    },
    {
      title: "End Month",
      dataIndex: "endMonth",
    },
  ];

  const tableData = academicSemester?.data?.map(
    ({ name, code, year, startMonth, endMonth ,_id}) => ({
      key: _id,
      name,
      code,
      year,
      startMonth,
      endMonth,
    })
  );

  
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
      <Table columns={columns} className="" dataSource={tableData} onChange={onChange} />
    </div>
  );
};

export default AcademicSemester;
