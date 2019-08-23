import React, { Component } from "react";
import { Row, Col, Divider, Icon, Menu, Dropdown } from "antd";
import MyContentTable from "../../../sections/MyContentTable";
import ShareModal from "../../../sections/ShareModal";
import HistoryModal from "../../../sections/HistoryModal";
import MoveFileModal from "../../../sections/MoveFileModal";
import MyContentMsg from "./MyContentMsg";
import { dataSource, tableTitle } from "./MyContentData";
import uuid from "uuid";
import "./MyContent.less";

interface MyContentProps {
  getCourseware?: any;
  myContent?: any;
}
class MyContent extends Component<MyContentProps> {
  columns: any;
  modalContent: any = {};
  currentRow = {};
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
        render: this.renderFileType
      },
      {
        title: "更新时间",
        dataIndex: "date",
        key: "date"
      },
      {
        title: "大小",
        dataIndex: "size",
        key: "size"
      },
      {
        title: "",
        width: 120,
        dataIndex: "key",
        key: "key",
        render: this.renderAction
      }
    ];
    this.props.getCourseware();
  }

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
    console.log("触发2", "e.name", e.name, "e.key", e.key);
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
  renderFileType = (text, record) => {
    return record.isGroup == false ? (
      <div style={{ display: "inline-flex", marginTop: "10px" }}>
        <i className="demo-icon icon-doc-text-inv">&#xf15c;</i>
        <p>&emsp;&thinsp;{text}</p>
      </div>
    ) : (
      <div style={{ display: "inline-flex", marginTop: "10px" }}>
        <i className="demo-icon icon-folder">&#xf14a;</i>
        <p>&emsp;{text}</p>
      </div>
    );
  };

  render() {
    return (
      <Row>
        <Col span={22} offset={1}>
          <MyContentTable
            dataSource={dataSource}
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
