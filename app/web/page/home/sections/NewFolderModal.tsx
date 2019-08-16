import React from "react";
import { Modal, Input, Button } from "antd";

function NewFolderModal(props) {
  return (
    <Modal
      title={
        <div>
          <i className="demo-icon icon-folder">&#xf14a;</i>
          新建文件夹
        </div>
      }
      visible={props.newFolderModalVisible}
      onCancel={props.cancelNewFolderModalVisible}
      footer={[
        <Button key="newfolderok" onClick={props.cancelNewFolderModalVisible}>
          取消
        </Button>,
        <Button
          key="newfolderno"
          className="btngreen"
          onClick={props.cancelNewFolderModalVisible}
        >
          确定
        </Button>
      ]}
    >
      <Input placeholder="输入文件夹名称" />
    </Modal>
  );
}

export default NewFolderModal;
