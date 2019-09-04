import React, { Component } from 'react';
import { Avatar, Badge, Input, Row, Col, Popover, Button, Divider } from 'antd';
import './Header.less';
import { connect } from 'react-redux';
import { searchFile } from '../../../../store/actions/searchFile';
import SearchBar from '../../sections/SearchBar';
const mapStateToProps = store => {
  return { ...store };
};
const mapDispatchToProps = (dispatch: any) => ({
  searchFile: values => {
    dispatch(searchFile(values));
  }
});

export interface ContainersHeaderProps {
  searchFile?: any;
}
interface ContainersHeaderState {
  accountMsg: any;
}
class ContainersHeader extends Component<
  ContainersHeaderProps,
  ContainersHeaderState
> {
  state: ContainersHeaderState = {
    accountMsg: {
      name: 'JINxo',
      level: '100',
      msg: '小学英语老师',
      photoUrl: 'http://edu.seewo.com/res/head/1/0_1_80.png'
    }
  };
  private content: any;
  constructor(props: any) {
    super(props);
    this.content = null;
  }

  componentWillMount() {
    this.content = (
      <div className="headerpopover">
        <span className="name"> {this.state.accountMsg.name}</span>
        <span className="grade">Lv{this.state.accountMsg.level}</span>
        <div className="introduce">{this.state.accountMsg.msg}</div>
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
            <SearchBar searchFile={this.props.searchFile} />
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContainersHeader);
