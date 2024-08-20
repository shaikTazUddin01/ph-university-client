import React from "react";
import { Table } from "antd";
import type { TableColumnsType, TableProps } from "antd";
import { useGetAcademicFacultyQuery } from "../../../redux/features/academicFaculty/academicFacultyApi";
import { TAcademicFaculty } from "../../../types/academicFaculty.type";

export type TTableData=Pick<TAcademicFaculty,'name'> &{no:number;key:string}

const AcademicFaculty = () => {
  const { data: academicFaculty } = useGetAcademicFacultyQuery(undefined);
  // console.log(academicFaculty);
  const columns: TableColumnsType<TTableData> = [
    {
      title: "No.",
      dataIndex: "no",
    },
    {
      title: "Name",
      dataIndex: "name",
      showSorterTooltip: { target: "full-header" },
    }
  ];

  const tableData = academicFaculty?.data?.map(({ _id, name },idx) => ({
    key: _id,
    no: idx + 1,
    name: name,
  }));

  const onChange: TableProps<TTableData>["onChange"] = (
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
        dataSource={tableData}
        onChange={onChange}
        showSorterTooltip={{ target: "sorter-icon" }}
      />
    </div>
  );
};

export default AcademicFaculty;
