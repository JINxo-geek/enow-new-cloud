import React, { Component } from "react";
import { Table } from "antd";
import "./MyContentTable.less";

export interface ContentTableProps {
  dataSource: any;
  tableTitle: any;
  columns: any;
  changeCurrentRow: Function;
  loading: boolean;
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
    const {
      columns,
      changeCurrentRow,
      dataSource,
      tableTitle,
      loading
    } = this.props;
    return (
      <Table
        loading={loading}
        pagination={false}
        dataSource={dataSource}
        columns={columns}
        title={() => {
          return tableTitle;
        }}
        rowKey={record => record.id}
        onRow={(record: any) => {
          return {
            onMouseEnter: event => {
              if (record.isGroup == false) {
                document.getElementsByClassName(
                  `action${record.id}`
                )[0].style.display = "block";
              }
              changeCurrentRow(record);
            },
            onMouseLeave: event => {
              if (record.isGroup == false) {
                document.getElementsByClassName(
                  `action${record.id}`
                )[0].style.display = "none";
              }
            }
          };
        }}
      />
    );
  }
}

export default MyContentTable;
