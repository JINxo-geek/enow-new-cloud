import React, { Component } from "react";
import { Row, Col, Table, Divider, Icon, Popover, Button } from "antd";
import "./indexclass.less";
import ContentTable from "./ContentTable";
import ShareModal from "./ShareModal";
import HistoryModal from "./HistoryModal";
import contentMsg from "./contentMsg";
//@ts-ignore
import file from "@images/file.png";

class MyContent extends Component {
  modalContent: any = {};
  state = {
    shareModalVisible: false,
    historyModalVisible: false,
    currentRow: {},
    popoverVisible: false
  };

  constructor(props: any) {
    super(props);
    this.columns;
    this.renderFileType;
    this.renderAction;
  }
  content = (
    <div>
      {contentMsg.map(item => {
        if (item.text == "Divider") {
          return <Divider className="btnframe" />;
        }
        return (
          <p className="btnframe">
            <Button
              type="link"
              className="btncolor"
              onClick={() => {
                this.setState({ popoverVisible: false });
                this.selectFunc(item.text);
              }}
            >
              {item.text}
            </Button>
          </p>
        );
      })}
    </div>
  );
  changeCurrentRow = record => {
    this.setState({ currentRow: record });
  };

  selectFunc = e => {
    switch (e) {
      case "分享":
        this.showShareModal(this.state.currentRow);
        break;
      case "历史版本":
        this.showhistoryModal(this.state.currentRow);
        break;
    }
  };
  handleVisibleChange = popoverVisible => {
    this.setState({ popoverVisible });
  };
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
  showhistoryModal = e => {
    this.modalContent.name = e.name;
    this.modalContent.key = e.key;
    this.setState({
      historyModalVisible: true
    });
  };
  renderAction = (text, record) => {
    if (record.showSate && record.type == "file") {
      return (
        <div>
          <Icon
            type="share-alt"
            onClick={() => {
              this.showShareModal(record);
            }}
          />
          &emsp;&thinsp;
          <Popover
            visible={this.state.popoverVisible}
            placement="bottom"
            content={this.content}
            trigger="click"
            onVisibleChange={this.handleVisibleChange}
          >
            <Icon type="align-center" />
          </Popover>
        </div>
      );
    } else {
      return <div />;
    }
  };
  renderFileType = (text, record) => {
    return record.type == "file" ? (
      <div style={{ display: "inline-flex", marginTop: "10px" }}>
        <img width={12} height={17} src={file} style={{ marginTop: 3 }} />
        <p>&emsp;&thinsp;{text}</p>
      </div>
    ) : (
      <div style={{ display: "inline-flex", marginTop: "10px" }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          fill="rgb(224, 152, 101)"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          style={{ marginTop: 3 }}
        >
          <path d="M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z" />
        </svg>
        <p>&emsp;{text}</p>
      </div>
    );
  };

  columns = [
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

  render() {
    return (
      <Row>
        <Col span={22} offset={1}>
          <ContentTable
            columns={this.columns}
            changeCurrentRow={this.changeCurrentRow}
          />
          <ShareModal
            ShareModalContent={this.modalContent}
            handleCancel={this.shareCancel}
            handleOk={this.shareOk}
            onVisibleChange={this.state.shareModalVisible}
          />
          <HistoryModal
            historyModalContent={this.modalContent}
            handleCancel={this.historyCancel}
            onVisibleChange={this.state.historyModalVisible}
          />
        </Col>
      </Row>
    );
  }
}
export default MyContent;
