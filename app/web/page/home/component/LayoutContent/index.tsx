import React, { Component } from "react";
import { Row, Col, Table } from "antd";
import "./indexclass.less";
import { dataSource, columns, tableTitle } from "./dataSource.tsx";
import { TableListItem } from "./tableData";

class LayoutContent extends Component {
  render() {
    return (
      <Row>
        <Col span={22} offset={1}>
          <Table
            dataSource={dataSource}
            columns={columns}
            title={() => {
              return tableTitle;
            }}
            onRow={record => {
              return {
                onMouseEnter: event => {
                  record.showSate = true;
                  this.forceUpdate();
                },
                onMouseLeave: event => {
                  record.showSate = false;
                  this.forceUpdate();
                }
              };
            }}
          />
        </Col>
      </Row>
    );
  }
}

export default LayoutContent;
