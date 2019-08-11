import React, { Component } from "react";
import { Layout, Menu, Icon, Button, Row, Col, Divider, Popover } from "antd";
import "./LayoutSider.less";
import { logobg, btnContentMsg, timecapsule } from "./LayoutSiderConfig";
import { Link } from "react-router-dom";
import NewFolderModal from "../NewFolderModal";

class LayoutSider extends Component {
  state = { newFolderModalVisible: false };
  showNewFolderModalVisible = () => {
    this.setState({ newFolderModalVisible: true });
  };
  cancelNewFolderModalVisible = () => {
    this.setState({ newFolderModalVisible: false });
  };
  content = (
    <div className="newpopover">
      {btnContentMsg.map(item => {
        var icon = <i />;
        switch (item.imgType) {
          case "brush":
            icon = <i className="demo-icon icon-brush">&#xf1fc;</i>;
            break;
          case "folder":
            icon = <i className="demo-icon icon-folder">&#xf14a;</i>;
            break;
          case "upload":
            icon = <i className="demo-icon  icon-upload">&#xe801;</i>;
            break;
          case "timecapsule":
            icon = <img className="iconsize" src={timecapsule} />;
            break;
        }
        return (
          <p>
            {icon}
            <Button
              type="link"
              className="btncolor"
              onClick={() => {
                this.buttonFun(item.text);
              }}
            >
              {item.text}
            </Button>
          </p>
        );
      })}
    </div>
  );
  buttonFun(text) {
    switch (text) {
      case "新建文件夹":
        this.showNewFolderModalVisible();
    }
  }
  render() {
    return (
      <div className="layout">
        <NewFolderModal
          newFolderModalVisible={this.state.newFolderModalVisible}
          cancelNewFolderModalVisible={this.cancelNewFolderModalVisible}
        />
        <Row>
          <Col>
            <div className="logo" style={logobg} />
          </Col>
        </Row>
        <Row>
          <Col>
            <Popover placement="bottom" content={this.content} trigger="click">
              <Button className="bttonclass">
                <div className="vertical">
                  <span className="buttontext">+</span>&thinsp;<span>新建</span>
                </div>
              </Button>
            </Popover>
          </Col>
        </Row>
        <Row>
          <Col>
            <Menu className="menu">
              <Menu.Item key="1">
                <Link to={`/project/table`}>
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
          </Col>
        </Row>
      </div>
    );
  }
}

export default LayoutSider;
