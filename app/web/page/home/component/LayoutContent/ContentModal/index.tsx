import React, { Component } from "react";
import { Modal } from "antd";

class ContentModal extends Component {
  render() {
    return (
      <Modal
        title="Basic Modal"
        visible={this.state.visible}
        onCancel={this.handleCancel}
        onOk={this.handleOk}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    );
  }
}

export default ContentModal;
