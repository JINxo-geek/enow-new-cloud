import React, { Component } from "react";
import { Layout, Menu, Icon, Button, Divider, Row, Col } from "antd";
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
import "./tab.css";
import LayoutSider from "./LayoutSider";
import LayoutHeader from "./LayoutHeader";
import LayoutContent from "./LayoutContent";
// const TabPane = Tabs.TabPane;
// const tabItemClick = (key) => {
//   console.log('tab click', key);
// };
// https://github.com/gaearon/react-hot-loader/issues/525
// must export, not export default
export class Tab extends Component {
  render() {
    return (
      <div>
        <Layout style={{ height: "100vh" }}>
          <Sider width={263} style={{ backgroundColor: "rgba(255,255,255,1)" }}>
            <LayoutSider />
          </Sider>
          <Divider type="vertical" style={{ margin: 0 }} />
          <Layout
            style={{ height: "100vh", backgroundColor: "rgba(255,255,255,1)" }}
          >
            <LayoutHeader />
            <Content>
              <LayoutContent />
            </Content>
          </Layout>
        </Layout>
      </div>
    );
  }
}
