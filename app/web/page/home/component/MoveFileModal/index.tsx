import React from "react";
import { Modal, Row, Col, Input, Button, message } from "antd";

function MoveFileModal(props) {
  return (
    <Modal
      title={
        <div>
          <i className="demo-icon icon-folder">&#xf14a;</i>
          {props.modalContent.name}
        </div>
      }
      visible={props.onVisibleChange}
      onCancel={props.handleCancel}
      footer={[
        <Button type="link">新建文件夹</Button>,
        <Button key="newfolderok" onClick={props.handleCancel}>
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
      <p>移动到</p>
    </Modal>
  );
}

export default MoveFileModal;
