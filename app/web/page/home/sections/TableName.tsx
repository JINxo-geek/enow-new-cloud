import UItableName from "../component/UItableName";
import React, { Component } from "react";
export interface TableNameProps {
  title?: string;
  lineClampNum?: number;
  data?: any;
  getSubFile?: any;
}
export interface TableNameState {}

class TableName extends Component<TableNameProps, TableNameState> {
  static defaultProps = {};
  formLayout = {};
  constructor(props: TableNameProps) {
    super(props);
    this.state = {
      formVals: {},
      currentStep: 0
    };
  }
  clickHandle() {
    let data = this.props.data;
    console.log("点击data", this.props);
    const { isGroup, version, id, name } = data;
    if (isGroup) {
      //文件夹id，传递出去，之后过滤得到parenId的子数据,同时设置当前文件夹id
      this.props.getSubFile({ parentId: id, name });
      //
      return;
    }
    // const target = process.env.target;
    // if (this.isElectron()) {
    //   const ipcRenderer = window.require('electron').ipcRenderer;
    //   ipcRenderer.send('openWindow', {
    //     url: `electron?version=${version}&from=remote#/enbx/${id}`,
    //   });
    //   return;
    // }
    window.open(
      `http://enow-kernel2.test.seewo.com/view?version=${version}&from=remote#/enbx/${id}`,
      "_blank"
    );
  }

  render() {
    const { title, lineClampNum } = this.props;
    return (
      <UItableName
        title={title}
        lineClampNum={lineClampNum}
        clickHandle={this.clickHandle.bind(this)}
      />
    );
  }
}

export default TableName;
