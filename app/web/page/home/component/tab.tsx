import React, { Component } from "react";
import { Layout, Divider } from "antd";
const { Sider } = Layout;
import "./tab.css";
import LayoutSider from "./LayoutSider";
import LayoutHeader from "./LayoutHeader";
import myContent from "./myContent";
import About from "./About";
import timeCapsule from "./timeCapsule";
import recycleBin from "./recycleBin";
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
                <Route path="/project/table" component={myContent} />
                <Route path="/project/recyclebin" component={recycleBin} />
                <Route path="/project/timecapsule" component={timeCapsule} />
                <Route path="/project/about" component={About} />
              </Switch>
            </div>
          </Layout>
        </Layout>
      </div>
    );
  }
}
export default withRouter(Tab);
