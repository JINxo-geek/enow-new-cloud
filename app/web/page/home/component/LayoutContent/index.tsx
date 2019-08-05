import React, { Component } from 'react';
import { Row, Col, Table, Popover, Icon, Button, Divider } from 'antd';
import './indexclass.less'
import file from '@images/file.png'
import { TableListItem } from './tableData';


const bttonclass = {
    width: 204, height: 40, marginLeft: 30, marginTop: 23,
    backgroundColor: 'rgba(101,173,89,1)',
    color: 'rgba(255,255,255,1)',
    borderRadius: '2px 2px 2px 2px',
    fontSize: 14, fontFamily: 'Roboto',
    boxShadow: '0px 3px 3px 0px',
}
const dataSource = [
    {
        key: '1',
        name: '文件夹',
        date: '2014-12-24',
        size: '823KB',
        type: 'folder'
    },
    {
        key: '2',
        name: '文件夹',
        date: '2014-12-24',
        size: '823KB',
        type: 'folder'
    },
    {
        key: '3',
        name: '文件夹',
        date: '2014-12-24',
        size: '823KB',
        type: 'folder'
    },
    {
        key: '4',
        name: '文件',
        date: '2014-12-24',
        size: '4MB',
        type: 'file'
    },
    {
        key: '5',
        name: '文件',
        date: '2014-12-24',
        size: '4MB',
        type: 'file'
    },
    {
        key: '6',
        name: '文件',
        date: '2014-12-24',
        size: '4MB',
        type: 'file'
    },
    {
        key: '7',
        name: '文件',
        date: '2014-12-24',
        size: '4MB',
        type: 'file'
    },
    {
        key: '8',
        name: '文件',
        date: '2014-12-24',
        size: '4MB',
        type: 'file'
    },
    {
        key: '9',
        name: '文件',
        date: '2014-12-24',
        size: '4MB',
        type: 'file'
    },
];

const columns = [
    {
        title: '名称',
        dataIndex: 'name',
        key: 'name',
        render: (text, record) => {
            console.log('record', record)

            return record.type == 'file' ? <div style={{ display: 'inline-flex' }}>
                <img width={12} height={17} src={file} />
                <p>&emsp;&thinsp;{text}</p>
            </div> : <div style={{ display: 'inline-flex' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="rgb(224, 152, 101)" width="18" height="18" viewBox="0 0 24 24"><path d="M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"></path></svg>
                    <p>&emsp;{text}</p>
                </div>;
        }
    },
    {
        title: '更新时间',
        dataIndex: 'date',
        key: 'date',
    },
    {
        title: '大小',
        dataIndex: 'size',
        key: 'size',
    },
    {
        title: '',
        dataIndex: 'key',
        key: 'key',
        render: (text, record) => {

            const content = (
                <div style={{ display: 'block', width: 150 }}>
                    <p><Button type="link" className='btncolor'>分享</Button></p>
                    <p><Button type="link" className='btncolor'>远程演示</Button></p>
                    <p><Button type="link" className='btncolor'>录制胶囊</Button></p>
                    <p><Button type="link" className='btncolor'>历史版本</Button></p>
                    <Divider />
                    <p><Button type="link" className='btncolor'>重命名</Button></p>
                    <p><Button type="link" className='btncolor'>移动到</Button></p>
                    <p><Button type="link" className='btncolor'>新建副本</Button></p>
                    <Divider />
                    <p><Button type="link" className='btncolor'>删除</Button></p>
                </div>
            );
            return <div>
                <Popover placement="bottom">
                    <Icon type="share-alt" onClick={() => { console.log('点击') }} />
                    &emsp;&thinsp;
                </Popover>
                <Popover placement="bottom" content={content} trigger="click" >
                    <Icon type="align-center" />
                </Popover>
            </div>
        }
    },
];
class LayoutContent extends Component {


    render() {
        return (
            <Row>
                <Col span={22} offset={1}>
                    <Table dataSource={dataSource} columns={columns} title={() => '我的文档'} />
                </Col>
            </Row>)

    }
}

export default LayoutContent;