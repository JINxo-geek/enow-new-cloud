import React, { Component } from "react";
import { Table } from "antd";
import "./MyContentTable.less";

export interface ContentTableProps {
  dataSource: any;
  tableTitle: any;
  columns: any;
  changeCurrentRow: Function;
}
class MyContentTable extends Component<ContentTableProps> {
  static defaultProps = {
    columns: [],
    changeCurrentRow: {},
    dataSource: [],
    tableTitle: ""
  };

  constructor(props: ContentTableProps) {
    super(props);
    this.state = {};
  }

  render() {
    const { columns, changeCurrentRow, dataSource, tableTitle } = this.props;
    return (
      <Table
        dataSource={dataSource}
        columns={columns}
        title={() => {
          return tableTitle;
        }}
        onRow={(record: any) => {
          return {
            onMouseEnter: event => {
              record.showSate = true;
              changeCurrentRow(record);
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

export default MyContentTable;
