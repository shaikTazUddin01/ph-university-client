import { Button, Layout } from "antd";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,

  // UserOutlined,
  // VideoCameraOutlined,
} from "@ant-design/icons";

import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useState } from "react";

// import MenuItem from "antd/es/menu/MenuItem";
const { Header, Content } = Layout;

const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout style={{ height: "100vh" }}>
        <Sidebar collapsed={collapsed}></Sidebar>
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
      </Layout>
    </Layout>
  );
};

export default MainLayout;
