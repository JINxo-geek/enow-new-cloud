import React from 'react';
import { List, Avatar, Icon, Button } from 'antd';
import './CoursewareRecieveList.less';
import { parseFileSize } from '../../../helpers/util';
import { timeBeauty } from '../../../helpers/timeBeauty';
import { lchmod } from 'fs';
const file = require('@images/file.png');

interface dataType {
  author: string;
  name: string;
  updateTime: number;
  size: number;
  coursewareId: string;
}

function CoursewareRecieveList(props) {
  const data: dataType[] = props.recivelist.data.content;

  const coursewareIgnore = e => {
    props.coursewareIgnore({ uid: e.uid });
  };
  const coursewareReceive = e => {
    // 暂时未知客户端版本，使用测试版本"NativeTest web 0.0.1"
    props.coursewareReceive({
      uid: e.uid,
      client_version: 'NativeTest web 0.0.1',
      create_time: new Date().getTime()
    });
  };
  return (
    <List
      bordered={true}
      size="small"
      itemLayout="horizontal"
      dataSource={data}
      renderItem={item => (
        <List.Item
          className="item"
          actions={[
            <Button
              onClick={() => {
                coursewareReceive(item);
              }}
              type="link"
              key="list-loadmore-edit"
            >
              接受
            </Button>,
            <Button
              onClick={() => {
                coursewareIgnore(item);
              }}
              type="link"
              className="ignorebtn"
              key="list-loadmore-more"
            >
              忽略
            </Button>
          ]}
        >
          <List.Item.Meta
            avatar={<Avatar src={file} />}
            title={<p className="title">{item.name}</p>}
            description={`${item.author} |  ${timeBeauty(
              item.updateTime
            )} ${parseFileSize(item.size)}`}
          />
        </List.Item>
      )}
    />
  );
}

export default CoursewareRecieveList;
