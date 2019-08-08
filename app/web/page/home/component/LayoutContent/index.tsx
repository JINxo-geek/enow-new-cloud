import React, { Component } from "react";
import { Row, Col, Table, Modal, Icon, Popover, Button } from "antd";
import "./indexclass.less";
import ContentTable from "./ContentTable";
import { TableListItem } from "./tableData";

class LayoutContent extends Component {
  state = { visible: false };
  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };
  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };
  public showModal = () => {
    this.setState({
      visible: true
    });
  };

  render() {
    return (
      <Row>
        <Col span={22} offset={1}>
          <ContentTable />
        </Col>
      </Row>
    );
  }
}

export default LayoutContent;
// export { renderAction, renderFileType };
