import React, { Component } from "react";
import { Table } from "antd";
import { dataSource, tableTitle } from "../dataSource";
import "../indexclass.less";
export interface ContentTableProps {
  columns: any;
  changeCurrentRow: Function;
}
class ContentTable extends Component<ContentTableProps> {
  columns: any;
  changeCurrentRow: any;
  constructor(props: ContentTableProps) {
    super(props);
    this.columns = props.columns;
    this.state = {};
    this.changeCurrentRow = props.changeCurrentRow;
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
              this.changeCurrentRow(record);
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
