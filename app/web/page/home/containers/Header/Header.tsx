import React, { Component } from "react";
import { Avatar, Badge, Input, Row, Col, Popover, Button, Divider } from "antd";
const { Search } = Input;
import "./Header.less";
interface ContainersHeaderState {
  accountMsg: any;
}
class ContainersHeader extends Component<ContainersHeaderState> {
  private content: any;
  constructor(props: any) {
    super(props);
    this.content = null;
  }

  state: ContainersHeaderState = {
    accountMsg: {
      name: "凌轩",
      level: "15",
      msg: "小学英语老师",
      photoUrl: "http://edu.seewo.com/res/head/1/0_1_80.png"
    }
  };

  componentWillMount() {
    this.content = (
      <div className="headerpopover">
        <span> {this.state.accountMsg.name}</span>
        <span>Lv{this.state.accountMsg.level}</span>
        <div>{this.state.accountMsg.msg}</div>
        <Divider />
        <p>
          <Button type="link" className="btncolor">
            我的特权
          </Button>
        </p>
        <p>
          <Button type="link" className="btncolor">
            账号设置
          </Button>
        </p>
        <Divider />
        <p>
          <Button type="link" className="btncolor">
            退出账号
          </Button>
        </p>
      </div>
    );
  }
  render() {
    return (
      <div className="headerframe">
        <Row>
          <Col span={21} offset={1}>
            <Search
              placeholder="搜索文档"
              onSearch={value => console.log(value)}
              className="search"
            />
          </Col>
          <Col span={1}>
            <Popover placement="bottom" content={this.content} trigger="click">
              <Badge count={3} offset={[0, 30]}>
                <Avatar
                  src={this.state.accountMsg.photoUrl}
                  shape="circle"
                  icon="user"
                />
              </Badge>
            </Popover>
          </Col>
          <Col span={1} />
        </Row>
      </div>
    );
  }
}

export default ContainersHeader;
