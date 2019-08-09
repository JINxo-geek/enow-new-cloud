import React, { Component } from "react";
import { Table } from "antd";
import { dataSource, tableTitle } from "../dataSource";

export interface ContentTableProps {
  columns: any;
}
class ContentTable extends Component<ContentTableProps> {
  columns: any;
  constructor(props: ContentTableProps) {
    super(props);
    this.columns = props.columns;
    this.state = {};
  }

  render() {
    return (
      <Table
        dataSource={dataSource}
        columns={this.columns}
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
