import React, { Component } from 'react';
import { Avatar, Badge, Input, Icon, Row, Col } from 'antd';
import logo from '@images/logo.png'
const { Search } = Input;
const logobg = {
    backgroundImage: `url(${logo})`,
    width: 120, height: 32, marginLeft: 30, marginTop: 23,
}
const bttonclass = {
    width: 204, height: 40, marginLeft: 30, marginTop: 23,
    backgroundColor: 'rgba(101,173,89,1)',
    color: 'rgba(255,255,255,1)',
    borderRadius: '2px 2px 2px 2px',
    fontSize: 14, fontFamily: 'Roboto',
    boxShadow: '0px 3px 3px 0px',
}
class LayoutHeader extends Component {

    render() {
        return <div style={{ marginTop: 23 }}>
            <Row>
                <Col span={21} offset={1}> <Search
                    placeholder="搜索文档"
                    onSearch={value => console.log(value)}
                    style={{ width: 552, height: 40 }}
                /></Col>
                <Col span={1}>
                    <Badge count={1} offset={[0, 30]}>
                        <Avatar shape="circle" icon="user" />
                    </Badge>
                </Col>
                <Col span={1}>

                </Col>
            </Row>
        </div>
    }
}

export default LayoutHeader;