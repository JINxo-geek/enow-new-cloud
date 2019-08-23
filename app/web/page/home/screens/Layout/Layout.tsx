import React, { Component } from "react";
import { Layout, Divider } from "antd";
const { Sider } = Layout;
import ContainersSider from "../../containers/Sider/Sider";
import ContainersHeader from "../../containers/Header/Header";
import ContainerContent from "../../containers/Content/Content";
class ScreensLayout extends Component {
  render() {
    return (
      <div>
        <Layout style={{ height: "100vh" }}>
          <Sider width={263} style={{ backgroundColor: "rgba(255,255,255,1)" }}>
            <ContainersSider />
          </Sider>
          <Divider type="vertical" style={{ margin: 0 }} />
          <Layout
            style={{ height: "100vh", backgroundColor: "rgba(255,255,255,1)" }}
          >
            <ContainersHeader accountMsg={{}} />
            <ContainerContent />
          </Layout>
        </Layout>
      </div>
    );
  }
}
export default ScreensLayout;
