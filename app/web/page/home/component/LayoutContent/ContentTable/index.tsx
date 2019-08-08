import React, { Component } from "react";
import { Table } from "antd";
import { dataSource, columns, tableTitle } from "../dataSource";
class ContentTable extends Component {
  render() {
    return (
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
              console.log("移入");
              this.forceUpdate();
            },
            onMouseLeave: event => {
              record.showSate = false;
              this.forceUpdate();
            }
          };
        }}
      />
    );
  }
}

export default ContentTable;
