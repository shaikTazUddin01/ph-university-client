import { Layout, Menu } from "antd";

import { sidebarGenerator } from "../../utiles/sidebarGenerator";
import { adminPaths } from "../../routers/admin.routes";
import { studentPaths } from "../../routers/student.routes";
import { facultyPaths } from "../../routers/faculty.routes";
import { useAppSelector } from "../../redux/features/hooks";
import { currentToken, TUser } from "../../redux/features/auth/authSlice";
import { verifyToken } from "../../utiles/verifyToken";
const { Sider } = Layout;

const userRole = {
  Admin: "admin",
  Faculty: "faculty",
  Student: "student",
};

const Sidebar = ({ collapsed }: { collapsed: boolean }) => {
  const token = useAppSelector(currentToken);
  let sidebarItems;

  let user;
  
  if (token) {
    user = verifyToken(token as string);
  }
  // const role = "admin";
  // console.log(user);
  switch ((user as TUser)!.role) {
    case userRole.Admin:
      sidebarItems = sidebarGenerator(adminPaths, userRole.Admin);
      break;
    case userRole.Faculty:
      sidebarItems = sidebarGenerator(facultyPaths, userRole.Faculty);
      break;
    case userRole.Student:
      sidebarItems = sidebarGenerator(studentPaths, userRole.Student);
      break;

    default:
      break;
  }

  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      style={{ height: "100vh", position: "sticky", top: "0" }}
    >
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
