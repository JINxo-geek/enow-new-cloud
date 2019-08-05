import React, { Component } from 'react';
import { Layout, Menu, Icon, Button, Row, Col, Divider, Popover } from 'antd';
import logo from '@images/logo.png'
import '../LayoutContent/indexclass.less'
import { relative } from 'path';
const { SubMenu } = Menu;
const { Sider } = Layout;
const content = (<div style={{ display: 'block', width: 150 }}>
    <p>  <Icon type="pie-chart" /><Button type="link" className='btncolor'>在线白板</Button></p>
    <p>   <Icon type="pie-chart" /><Button type="link" className='btncolor'>时间胶囊</Button></p>
    <p>   <Icon type="pie-chart" /><Button type="link" className='btncolor'>新建文件夹</Button></p>
    <p>   <Icon type="pie-chart" /><Button type="link" className='btncolor'>导入PPT文档</Button></p>
</div>);
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
class LayoutSider extends Component {

    render() {
        return <div style={{ width: 263, marginRight: 0, height: "100vh" }}>

            <Row>
                <Col>  <div className="logo" style={logobg} /></Col>
            </Row>
            <Row>

                <Col>
                    <Popover placement="bottom" content={content} trigger="click"><Button style={bttonclass} >+ 新建</Button>
                    </Popover></Col>
            </Row>
            <Row>
                <Col>
                    <Menu style={{ border: 0 }}>
                        <Menu.Item key="1">
                            <Icon type="pie-chart" />
                            <span>我的文档</span>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Icon type="desktop" />
                            <span>时间胶囊</span>
                        </Menu.Item>
                        <div>  <Divider></Divider></div>
                        <Menu.Item key="3">
                            <Icon type="inbox" />
                            <span>回收站</span>
                        </Menu.Item>

                    </Menu>
                </Col>

            </Row>


        </div>
    }
}

export default LayoutSider;