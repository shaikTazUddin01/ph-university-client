import { Button, Dropdown, Table, Tag } from "antd";
import type { TableColumnsType } from "antd";

import { useRegistratedSemesterQuery, useUpdateSemesterRegistrationMutation } from "../../../redux/features/admin/semesterManagement/semesterManagementApi";
import moment from "moment";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { useState } from "react";

type TDataType = {
  key:string;
  name: string;
  startDate: string;
  endDate: string;
  status: string;
};


const items=[
  {
    label:'UpComing',
    key:"UPCOMING"
  },
  {
    label:'OnGoing',
    key:"ONGOING"
  },
  {
    label:'Ended',
    key:"ENDED"
  },
]

const RegistretedSemester = () => {
  const { data: registretedSemester, isFetching } =
    useRegistratedSemesterQuery(undefined);
    
const [updateSemesterStatus]=useUpdateSemesterRegistrationMutation()
    const [semesterId,setSemesterId]=useState(null)

  // console.log(registretedSemester);
  const registretedSemesterData = registretedSemester?.data;
  // console.log(registretedSemesterData);

const handleUpdateStatus:SubmitHandler<FieldValues>=async(data)=>{
  const updateData={
    id:semesterId,
    status:data.key
  }
  console.log(updateData);
  const res=await updateSemesterStatus(updateData)

  console.log(res);
}

const menuProps={
  items,
  onClick:handleUpdateStatus
}


  const columns: TableColumnsType<TDataType> = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (item) => {
        let color;
        if (item === "UPCOMING") {
          color = "blue";
        }
        if (item === "ONGOING") {
          color = "green";
        }
        if (item === "ENDED") {
          color = "red";
        }
        return <Tag color={color}>{item}</Tag>;
      },
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
        // console.log("item-->", item);
        return (
          <Dropdown menu={menuProps} >
           <Button onClick={()=>setSemesterId(item.key)}>
            update
           </Button>
          </Dropdown>
        );
      },
      width: "1%",
    },
  ];

  const tableData = registretedSemesterData?.map(
    ({ _id,academicSemester, startDate, endDate, status }) => ({
      key:_id,
      name: `${academicSemester.name} ${academicSemester.year}`,
      startDate: moment(new Date(startDate)).format("MMMM"),
      endDate: moment(new Date(endDate)).format("MMMM"),
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
