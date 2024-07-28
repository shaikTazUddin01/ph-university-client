import React from "react";
import { Table } from "antd";
import type { TableColumnsType, TableProps } from "antd";
import { useGetAcademicFacultyQuery } from "../../../redux/features/academicFaculty/academicFacultyApi";

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}

const AcademicFaculty = () => {
  const { data: academicFaculty } = useGetAcademicFacultyQuery(undefined);
  console.log(academicFaculty);
  const columns: TableColumnsType<DataType> = [
    {
      title: "No.",
      dataIndex: "no",
    },
    {
      title: "Name",
      dataIndex: "name",
      showSorterTooltip: { target: "full-header" },
      //   filters: [
      //     {
      //       text: "Joe",
      //       value: "Joe",
      //     },
      //     {
      //       text: "Jim",
      //       value: "Jim",
      //     },
      //     {
      //       text: "Submenu",
      //       value: "Submenu",
      //       children: [
      //         {
      //           text: "Green",
      //           value: "Green",
      //         },
      //         {
      //           text: "Black",
      //           value: "Black",
      //         },
      //       ],
      //     },
      //   ],

      //   onFilter: (value, record) => record.name.indexOf(value as string) === 0,
      //   sorter: (a, b) => a.name.length - b.name.length,
      //   sortDirections: ["descend"],
    },

    // {
    //   title: "Age",
    //   dataIndex: "age",
    // //   defaultSortOrder: "descend",
    // //   sorter: (a, b) => a.age - b.age,
    // },
    // {
    //   title: "Address",
    //   dataIndex: "address",
    // }
  ];

  const tableData = academicFaculty?.data?.map(({ _id, name }, idx) => ({
    key: _id,
    no: idx + 1,
    name: name,
  }));

  const onChange: TableProps<DataType>["onChange"] = (
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
