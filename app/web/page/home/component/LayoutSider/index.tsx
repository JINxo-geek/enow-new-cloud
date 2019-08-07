import React, { Component } from "react";
import { Layout, Menu, Icon, Button, Row, Col, Divider, Popover } from "antd";
import "./LayoutSider.less";
import { logobg, contentMsg, timecapsule } from "./LayoutSiderConfig";
import Util from "../../../../util/Util";

const content = (
  <div className="newpopover">
    {contentMsg.map(item => {
      return (
        <p>
          <img className="iconsize" src={item.imgType} />
          <Button type="link" className="btncolor">
            {item.text}
          </Button>
        </p>
      );
    })}
  </div>
);

class LayoutSider extends Component {
  render() {
    return (
      <div className="layout">
        <Row>
          <Col>
            <div className="logo" style={logobg} />
          </Col>
        </Row>
        <Row>
          <Col>
            <Popover placement="bottom" content={content} trigger="click">
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
                <img className="iconsize" src={timecapsule} />
                &thinsp;&thinsp;
                <span>我的文档</span>
              </Menu.Item>
              <Menu.Item key="2">
                <img className="iconsize" src={timecapsule} />
                &thinsp;&thinsp;
                <span>时间胶囊</span>
              </Menu.Item>
              <div>
                <Divider />
              </div>
              <Menu.Item key="3">
                <img className="iconsize" src={timecapsule} />
                &thinsp;&thinsp;
                <span>回收站</span>
              </Menu.Item>
            </Menu>
          </Col>
        </Row>
      </div>
    );
  }
}

export default LayoutSider;
