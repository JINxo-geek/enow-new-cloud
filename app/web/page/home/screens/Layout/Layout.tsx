import React, { Component } from 'react';
import { Layout, Divider } from 'antd';
const { Sider } = Layout;
import ContainersSider from '../../containers/Sider/Sider';
import ContainersHeader from '../../containers/Header/Header';
import ContainerContent from '../../containers/Content/Content';
import './Layout.less';
class ScreensLayout extends Component {
  render() {
    return (
      <div>
        <Layout className="out-layout">
          <Sider width={263} className="left-sider">
            <ContainersSider />
          </Sider>
          <Divider className="divider" type="vertical" />
          <Layout className="iner-layout">
            <ContainersHeader accountMsg={{}} />
            <ContainerContent />
          </Layout>
        </Layout>
      </div>
    );
  }
}
export default ScreensLayout;
