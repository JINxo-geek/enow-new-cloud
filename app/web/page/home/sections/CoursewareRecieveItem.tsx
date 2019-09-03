import React from 'react';
import { List, Avatar, Icon, Button } from 'antd';
import './CoursewareRecieveList.less';
const file = require('@images/file.png');

function CoursewareRecieveList(props) {
  const data = [
    {
      title: '测试勿动_胶囊回归测试课件-支持元素录制'
    },
    {
      title: '测试勿动_胶囊回归测试课件-支持元素录制'
    },
    {
      title: '测试勿动_胶囊回归测试课件-支持元素录制'
    },
    {
      title: '测试勿动_胶囊回归测试课件-支持元素录制'
    }
  ];

  return (
    <List
      bordered={true}
      size="small"
      itemLayout="horizontal"
      dataSource={data}
      renderItem={item => (
        <List.Item
          actions={[
            <a key="list-loadmore-edit">接受</a>,
            <a key="list-loadmore-more">忽略</a>
          ]}
        >
          <List.Item.Meta
            avatar={<Avatar src={file} />}
            title={<a href="https://ant.design">{item.title}</a>}
            description="作者 | 日期 文件大小"
          />
        </List.Item>
      )}
    />
  );
}

export default CoursewareRecieveList;
