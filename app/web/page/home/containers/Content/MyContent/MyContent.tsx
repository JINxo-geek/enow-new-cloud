import React, { Component } from "react";
import { Row, Col, Divider, Icon, Menu, Dropdown } from "antd";
import MyContentTable from "../../../sections/MyContentTable";
import ShareModal from "../../../sections/ShareModal";
import HistoryModal from "../../../sections/HistoryModal";
import MoveFileModal from "../../../sections/MoveFileModal";
import MyContentMsg from "./MyContentMsg";
import { tableTitle } from "./MyContentData";
import { parseFileSize } from "../../../../../helpers/util";
import { timeBeauty } from "../../../../../helpers/timeBeauty";
import TableName from "../../../sections/TableName";
import uuid from "uuid";
import "./MyContent.less";
interface MyContentProps {
  getCoursewareGroup?: any;
  myContent?: any;
  getCourseware?: any;
}
class MyContent extends Component<MyContentProps> {
  columns: any;
  modalContent: any = {};
  currentRow: any = {};
  private _dataSource: any = [];
  dataSourceOrigin: any = [];
  dataSourceCache: any = [];
  private _loading: boolean = true;
  loadingFlag: boolean = true;
  state = {
    shareModalVisible: false,
    historyModalVisible: false,
    moveFileModalVisible: false
  };

  constructor(props: any) {
    super(props);
    this.columns = [
      {
        title: "名称",
        dataIndex: "name",
        key: "name",
        width: 460,
        render: this.renderFileType
      },
      {
        title: "更新时间",
        dataIndex: "update_time",
        key: "update_time",
        render: this.renderTime
      },
      {
        title: "大小",
        dataIndex: "size",
        key: "size",
        render: this.renderSize
      },
      {
        title: "操作",
        dataIndex: "id",
        key: "id",
        width: 200,
        render: this.renderAction
      }
    ];
  }
  /* 监听数据变动 */

  get dataSource() {
    console.log("this.props.getCourseware", this.props);
    const { myContentdata } = this.props.getCourseware;
    console.log("myContentdata", myContentdata);
    if (
      JSON.stringify(this.dataSourceOrigin) !== JSON.stringify(myContentdata)
    ) {
      console.log("数据变动");
      this.loadingFlag = false;
      this.dataSourceOrigin = myContentdata;
      this.dataSourceCache = myContentdata;
    }
    return this.dataSourceCache;
  }

  get loading() {
    if (this.loadingFlag) {
      return true;
    } else {
      return false;
    }
  }

  componentDidMount = () => {
    this.props.getCoursewareGroup();
  };

  changeCurrentRow = record => {
    this.currentRow = record;
  };

  selectFunc = e => {
    console.log("selectFunc", e);
    switch (e) {
      case "分享":
        this.showShareModal(this.currentRow);
        break;
      case "历史版本":
        this.showHistoryModal(this.currentRow);
        break;
      case "移动到":
        this.showMoveFileModal(this.currentRow);
        break;
    }
  };
  menu = (
    <Menu>
      {MyContentMsg.map((item, index) => {
        var idx = uuid.v4();
        if (item.text == "Divider") {
          return <Menu.Divider key={idx} />;
        } else if (item.text == "删除") {
          return (
            <Menu.Item onClick={() => this.selectFunc(item.text)} key={idx}>
              <p className="btndelete">{item.text}</p>
            </Menu.Item>
          );
        } else {
          return (
            <Menu.Item onClick={() => this.selectFunc(item.text)} key={idx}>
              {item.text}
            </Menu.Item>
          );
        }
      })}
    </Menu>
  );

  //显示下拉菜单
  handleVisibleChange = popoverVisible => {
    this.setState({ popoverVisible });
  };
  // 分享
  shareCancel = e => {
    console.log(e);
    this.setState({
      shareModalVisible: false
    });
  };
  shareOk = e => {
    console.log(e);
    this.setState({
      shareModalVisible: false
    });
  };

  showShareModal = e => {
    this.modalContent.name = e.name;
    this.modalContent.key = e.key;
    this.setState({
      shareModalVisible: true
    });
  };
  // 历史
  historyCancel = e => {
    console.log(e);
    this.setState({
      historyModalVisible: false
    });
  };
  historyOk = e => {
    console.log(e);
    this.setState({
      historyModalVisible: false
    });
  };
  showHistoryModal = e => {
    this.modalContent.name = e.name;
    this.modalContent.key = e.key;
    this.setState({
      historyModalVisible: true
    });
  };
  // 移动
  moveFileCancel = e => {
    console.log(e);
    this.setState({
      moveFileModalVisible: false
    });
  };
  moveFileOk = e => {
    console.log(e);
    this.setState({
      moveFileModalVisible: false
    });
  };
  showMoveFileModal = e => {
    this.modalContent.name = e.name;
    this.modalContent.key = e.key;
    console.log("showMoveFileModal");
    this.setState({
      moveFileModalVisible: true
    });
  };

  /* 渲染操作 */

  renderAction = (text, record) => {
    if (record.isGroup == false) {
      return (
        <div className={`action${record.id}`} style={{ display: "none" }}>
          <Icon
            type="share-alt"
            onClick={() => {
              this.showShareModal(record);
            }}
          />
          &emsp;&thinsp;
          <Dropdown overlay={this.menu} trigger={["click"]}>
            <Icon type="align-center" />
          </Dropdown>
        </div>
      );
    } else {
      return <div />;
    }
  };

  /* 渲染名称 */

  renderFileType = (text, record) => {
    return record.isGroup == false ? (
      <div style={{ display: "inline-flex" }}>
        <i className="demo-icon icon-doc-text-inv">&#xf15c;</i>
        <TableName title={text} lineClampNum={2} data={record} />
      </div>
    ) : (
      <div style={{ display: "inline-flex" }}>
        <i className="demo-icon icon-folder">&#xf14a;</i>
        {/* <p className="namesize">&emsp;{text}</p> */}
        <TableName title={text} lineClampNum={2} data={record} />
      </div>
    );
  };

  /* 渲染文件大小 */
  renderSize = (text, record) => {
    return (
      <p className="smallsize">
        {record.isGroup ? "" : parseFileSize(record.size)}
      </p>
    );
  };

  /* 渲染文件大小 */
  renderTime = (text, record) => {
    return <p className="smallsize">{timeBeauty(record.update_time)}</p>;
  };

  render() {
    console.log("props", this.props);
    return (
      <Row>
        <Col span={22} offset={1}>
          <MyContentTable
            dataSource={this.dataSource}
            loading={this.loading}
            tableTitle={tableTitle}
            columns={this.columns}
            changeCurrentRow={this.changeCurrentRow}
          />
          <ShareModal
            modalContent={this.modalContent}
            handleCancel={this.shareCancel}
            handleOk={this.shareOk}
            onVisibleChange={this.state.shareModalVisible}
          />
          <HistoryModal
            modalContent={this.modalContent}
            handleCancel={this.historyCancel}
            onVisibleChange={this.state.historyModalVisible}
          />
          <MoveFileModal
            modalContent={this.modalContent}
            handleCancel={this.moveFileCancel}
            onVisibleChange={this.state.moveFileModalVisible}
          />
        </Col>
      </Row>
    );
  }
}
export default MyContent;
