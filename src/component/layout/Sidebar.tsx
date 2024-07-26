import { Layout, Menu } from "antd";

import { sidebarGenerator } from "../../utiles/sidebarGenerator";
import { adminPaths } from "../../routers/admin.routes";
import { studentPaths } from "../../routers/student.routes";
import { facultyPaths } from "../../routers/faculty.routes";
import { useAppSelector } from "../../redux/features/hooks";
import { currentUser } from "../../redux/features/auth/authSlice";
const { Sider } = Layout;

const userRole = {
  Admin: "admin",
  Faculty: "faculty",
  Student: "student",
};

const Sidebar = ({ collapsed }: { collapsed: boolean }) => {
  const user=useAppSelector(currentUser)
  let sidebarItems;
  // const role = "admin";

  switch (user!.role) {
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
    <Sider trigger={null} collapsible collapsed={collapsed} style={{height:'100vh', position:'sticky', top:'0'}}>
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
