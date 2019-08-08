import React from "react";
import { Popover, Icon, Button, Divider } from "antd";
import "./indexclass.less";
import file from "@images/file.png";
import showModal from "./index";

const tableTitle = "我的文档";

let dataSource = [
  {
    key: "1",
    name: "文件夹",
    date: "2014-12-24",
    size: "823KB",
    type: "folder"
  },
  {
    key: "2",
    name: "文件夹2",
    date: "2014-12-24",
    size: "823KB",
    type: "folder"
  },
  {
    key: "3",
    name: "文件夹3",
    date: "2014-12-24",
    size: "823KB",
    type: "folder"
  },
  {
    key: "4",
    name: "文件",
    date: "2014-12-24",
    size: "4MB",
    type: "file"
  },
  {
    key: "5",
    name: "文件2",
    date: "2014-12-24",
    size: "4MB",
    type: "file"
  },
  {
    key: "6",
    name: "文件3",
    date: "2014-12-24",
    size: "4MB",
    type: "file"
  },
  {
    key: "7",
    name: "文件4",
    date: "2014-12-24",
    size: "4MB",
    type: "file"
  },
  {
    key: "8",
    name: "文件5",
    date: "2014-12-24",
    size: "4MB",
    type: "file"
  },
  {
    key: "9",
    name: "文件6",
    date: "2014-12-24",
    size: "4MB",
    type: "file"
  }
];
const bttonclass = {
  width: 204,
  height: 40,
  marginLeft: 30,
  marginTop: 23,
  backgroundColor: "rgba(101,173,89,1)",
  color: "rgba(255,255,255,1)",
  borderRadius: "2px 2px 2px 2px",
  fontSize: 14,
  fontFamily: "Roboto",
  boxShadow: "0px 3px 3px 0px"
};
const contentMsg = [
  {
    text: "分享",
    func: () => {
      console.log("被点击");
    }
  },
  {
    text: "远程演示",
    func: () => {
      console.log("被点击");
    }
  },
  {
    text: "录制胶囊",
    func: () => {
      console.log("被点击");
    }
  },
  {
    text: "历史版本",
    func: () => {
      console.log("被点击");
    }
  },
  {
    text: "Divider"
  },
  {
    text: "重命名",
    func: () => {
      console.log("被点击");
    }
  },
  {
    text: "移动到",
    func: () => {
      console.log("被点击");
    }
  },
  {
    text: "新建副本",
    func: () => {
      console.log("被点击");
    }
  },
  {
    text: "Divider"
  },
  {
    text: "删除",
    func: () => {
      console.log("被点击");
    }
  }
];

const renderFileType = (text, record) => {
  return record.type == "file" ? (
    <div style={{ display: "inline-flex", marginTop: "10px" }}>
      <img width={12} height={17} src={file} style={{ marginTop: 3 }} />
      <p>&emsp;&thinsp;{text}</p>
    </div>
  ) : (
    <div style={{ display: "inline-flex", marginTop: "10px" }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        fill="rgb(224, 152, 101)"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        style={{ marginTop: 3 }}
      >
        <path d="M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z" />
      </svg>
      <p>&emsp;{text}</p>
    </div>
  );
};

const content = (
  <div className="popover">
    {contentMsg.map(item => {
      if (item.text == "Divider") {
        return <Divider className="btnframe" />;
      }
      return (
        <p className="btnframe">
          <Button type="link" className="btncolor">
            {item.text}
          </Button>
        </p>
      );
    })}
  </div>
);

const renderAction = (text, record) => {
  if (record.showSate && record.type == "file") {
    return (
      <div>
        <Icon type="share-alt" onClick={showModal.showModal} />
        &emsp;&thinsp;
        <Popover placement="bottom" content={content} trigger="click">
          <Icon type="align-center" />
        </Popover>
      </div>
    );
  } else {
    return <div />;
  }
};

const columns = [
  {
    title: "名称",
    dataIndex: "name",
    key: "name",
    render: renderFileType
  },
  {
    title: "更新时间",
    dataIndex: "date",
    key: "date"
  },
  {
    title: "大小",
    dataIndex: "size",
    key: "size"
  },
  {
    title: "",
    width: 120,
    dataIndex: "key",
    key: "key",
    render: renderAction
  }
];
export {
  dataSource,
  bttonclass,
  contentMsg,
  renderAction,
  content,
  renderFileType,
  columns,
  tableTitle
};
