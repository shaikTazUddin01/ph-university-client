import { Button, Layout, Menu } from "antd";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  // UserOutlined,
  // VideoCameraOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
// import MenuItem from "antd/es/menu/MenuItem";
const { Header, Sider, Content, Footer } = Layout;

const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout style={{ height: "100vh" }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        {/* <div
          style={{ color: "white", display: "flex", justifyContent: "center" }}
        >
        </div> */}
        <div
          style={{ color: "white", display: "flex", justifyContent: "center" }}
        >
          <h1>PhU</h1>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items ={[
            {
              key: "Dashboard",
              icon: <UploadOutlined />,
              label: <NavLink to={'/admin/dashboard'}>Dashboard</NavLink>,
            },
            {
              key: "user management",
              label: "User Management",
              children: [
                {
                  key: "createAdmin",
                  label: <NavLink to={'/admin/create-admin'}>Create Admin</NavLink>,
                },
                {
                  key: "createFaculty",
                  label:<NavLink to={'/admin/create-faculty'}>Create Faculty</NavLink>,
                },
                {
                  key: "createStudent",
                  label:<NavLink to={'/admin/create-student'}>Create Student</NavLink>,
                },
              ],
            },
           
            
          ]}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0 }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
              color: "white",
            }}
          />
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
          }}
        >
          <Outlet></Outlet>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
