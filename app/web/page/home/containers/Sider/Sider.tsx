import React, { Component } from "react";
import { Button, Row, Col, Popover } from "antd";
import "./Sider.less";
import { logobg, btnContentMsg, timecapsule } from "./SiderConfig";
import SiderMenu from "../../sections/SiderMenu";
import NewFolderModal from "../../sections/NewFolderModal";

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
          <p key={item.imgType}>
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
            <SiderMenu timecapsule={timecapsule} />
          </Col>
        </Row>
      </div>
    );
  }
}

export default LayoutSider;
