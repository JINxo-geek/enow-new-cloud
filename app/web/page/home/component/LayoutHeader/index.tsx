import React, { Component } from "react";
import { Avatar, Badge, Input, Row, Col, Popover, Button } from "antd";
const { Search } = Input;
import "./LayoutHeadercss.less";
interface LayoutHeaderState {
  accountMsg: any;
}
class LayoutHeader extends Component<LayoutHeaderState> {
  private content: any;
  constructor(props: any) {
    super(props);
    this.content = null;
  }

  state: LayoutHeaderState = {
    accountMsg: {
      name: "凌轩",
      level: "15",
      msg: "小学英语老师",
      photoUrl: "http://thumb10.jfcdns.com/2018-06/bce5b10ae530f530.png"
    }
  };

  render() {
    return (
      <div className="headerframe">
        <Row>
          <Col span={21} offset={1}>
            {" "}
            <Search
              placeholder="搜索文档"
              onSearch={value => console.log(value)}
              className="search"
            />
          </Col>
          <Col span={1}>
            <Popover placement="bottom" content={this.content} trigger="click">
              <Badge count={1} offset={[0, 30]}>
                <Avatar shape="circle" icon="user" />
              </Badge>
            </Popover>
          </Col>
          <Col span={1} />
        </Row>
      </div>
    );
  }
}

export default LayoutHeader;
