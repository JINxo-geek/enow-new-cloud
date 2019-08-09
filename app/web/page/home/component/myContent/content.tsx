import React from "react";
import { Divider, Button } from "antd";

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

export default (
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
