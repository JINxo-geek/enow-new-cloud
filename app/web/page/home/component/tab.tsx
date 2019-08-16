import React, { Component } from "react";
import { Layout, Divider } from "antd";
const { Sider } = Layout;
import "./tab.less";
import LayoutSider from "./LayoutSider";
import LayoutHeader from "../containers/Header/Header";
import MyContent from "../containers/Content/MyContent/MyContent";
import About from "./About";
import TimeCapsule from "./TimeCapsule";
import RecycleBin from "./RecycleBin";
import { Route, Switch, withRouter } from "react-router-dom";
class Tab extends Component {
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
            <LayoutHeader accountMsg={{}} />
            <div>
              <Switch>
                <Route path="/project/table" component={MyContent} />
                <Route path="/project/recyclebin" component={RecycleBin} />
                <Route path="/project/timecapsule" component={TimeCapsule} />
                <Route path="/project/about" component={About} />
              </Switch>
            </div>
          </Layout>
        </Layout>
      </div>
    );
  }
}
export default Tab;
