import React, { Component } from 'react';
import { Menu, Divider } from 'antd';
import { Link } from 'react-router-dom';
import './SiderMenu.less';
export interface SiderMenuProps {
  timecapsule: any;
}
export interface SiderMenuState {}

class SiderMenu extends Component<SiderMenuProps, SiderMenuState> {
  render() {
    const { timecapsule } = this.props;
    return (
      <Menu className="menu">
        <Menu.Item key="1">
          <Link to={`/project/mycontent`}>
            <i className="demo-icon icon-doc-text-inv">&#xf15c;</i>
            &thinsp;
            <span>我的文档</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to={`/project/timecapsule`}>
            <img className="iconsize" src={timecapsule} />
            &thinsp;
            <span>时间胶囊</span>
          </Link>
        </Menu.Item>
        <div>
          <Divider />
        </div>
        <Menu.Item key="3">
          <Link to={`/project/recyclebin`}>
            <i className="demo-icon icon-trash">&#xe83d;</i>
            &thinsp;
            <span>回收站</span>
          </Link>
        </Menu.Item>
      </Menu>
    );
  }
}

export default SiderMenu;
