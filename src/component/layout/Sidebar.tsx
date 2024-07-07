import { Layout, Menu } from "antd";

import { sidebarGenerator } from "../../utiles/sidebarGenerator";
import { adminPaths } from "../../routers/admin.routes";
import { studentPaths } from "../../routers/student.routes";
import { facultyPaths } from "../../routers/faculty.routes";
const { Sider } = Layout;

const userRole = {
  Admin: "admin",
  Faculty: "faculty",
  Student: "student",
};

const Sidebar = ({ collapsed }: { collapsed: boolean }) => {
  let sidebarItems;
  const role = "admin";

  switch (role) {
    case userRole.Admin:
      sidebarItems = sidebarGenerator(adminPaths, userRole.Admin);
      break;
    case userRole.Faculty:
      sidebarItems = sidebarGenerator(facultyPaths, userRole.Faculty);
      break;
    case userRole.Student:
      sidebarItems = sidebarGenerator(studentPaths, userRole.Student);
      break;
  }

  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <div
        style={{ color: "white", display: "flex", justifyContent: "center" }}
      >
        <h1 className="pt-5 text-xl font-semibold">PhU</h1>
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["1"]}
        items={sidebarItems}
      />
    </Sider>
  );
};

export default Sidebar;
