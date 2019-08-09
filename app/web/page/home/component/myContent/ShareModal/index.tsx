import React, { Component } from "react";
import { Modal } from "antd";

function ShareModal(props) {
  return (
    <Modal
      title="Basic Modal"
      visible={props.onVisibleChange}
      onCancel={props.handleCancel}
      onOk={props.handleOk}
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Modal>
  );
}

export default ShareModal;
