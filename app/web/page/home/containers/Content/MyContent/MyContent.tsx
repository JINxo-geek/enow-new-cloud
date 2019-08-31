import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Row,
  Col,
  Spin,
  Icon,
  Menu,
  Dropdown,
  Alert,
  notification
} from "antd";
import MyContentTable from "../../../sections/MyContentTable";
import ShareModal from "../../../sections/ShareModal";
import HistoryModal from "../../../sections/HistoryModal";
import MoveFileModal from "../../../sections/MoveFileModal";
import MyContentMsg from "./MyContentMsg";
import { tableTitle } from "./MyContentData";
import { parseFileSize } from "../../../../../helpers/util";
import { timeBeauty } from "../../../../../helpers/timeBeauty";
import TableName from "../../../sections/TableName";
import { getAllGroup } from "../../../../../store/actions/get.allGroup";
import { moveHere } from "../../../../../store/actions/post.moveHere";
import { getHistory } from "../../../../../store/actions/get.history";
import _ from "lodash";
import "./MyContent.less";

const mapStateToProps = store => {
  return store.getAllGroup;
};

const mapDispatchToProps = (dispatch: any) => ({
  getAllGroup: values => {
    dispatch(getAllGroup(values));
  },
  moveHere: values => {
    dispatch(moveHere(values));
  },
  getHistory: values => {
    dispatch(getHistory(values));
  }
});
interface MyContentProps {
  getCoursewareGroup?: any;
  myContent?: any;
  getCourseware?: any;
  getSubFile?: any;
  getShareLink?: any;
  postShare?: object;
  getAllGroup?: any;
  allGroup?: object;
  moveHere?: any;
  getHistory?: any;
}
class MyContent extends Component<MyContentProps> {
  columns: any;
  modalContent: any = {};
  currentRow: any = {};
  shareType: any = { type: 0, expiredDay: 30 };
  iconLoading: boolean = true;
  preParentId: string = "";
  state = {
    hasMore: { x: 1.8, has: false },
    dataSource: [],
    dataSourceOrigin: [],
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
        width: 360,
        render: this.renderFileType
      },
      {
        title: "更新时间",
        dataIndex: "update_time",
        key: "update_time",
        width: 200,
        render: this.renderTime
      },
      {
        title: "大小",
        dataIndex: "size",
        key: "size",
        align: "right",
        render: this.renderSize
      },
      {
        title: "",
        dataIndex: "id",
        key: "id",
        width: 168,
        align: "right",
        render: this.renderAction
      }
    ];
  }
  /* 监听数据变动 */
  static getDerivedStateFromProps(nextProps, prevState) {
    const { partContentdata } = nextProps.getCourseware;
    if (
      JSON.stringify(partContentdata) !==
      JSON.stringify(prevState.dataSourceOrigin)
    ) {
      let has = true;
      if (partContentdata.length < 30) {
        //如果课件数少于30时，不显示loading
        has = false;
      }
      return {
        dataSourceOrigin: partContentdata,
        dataSource: partContentdata.slice(0, 22),
        hasMore: { has: has, x: 1.8 }
      };
    } else {
      console.log("数据未变动");
      return {
        ...prevState
      };
    }
  }

  /* 监听滚动 */
  handleOnScroll() {
    document
      .getElementsByClassName("ant-layout")[1]
      .addEventListener("scroll", this.scrollFn(), false);
  }
  scrollFn = () => {
    return _.throttle(() => {
      const ele = document.getElementsByClassName("ant-layout")[1];
      const scrollTop = document.getElementsByClassName("ant-layout")[1]
        .scrollTop; //设置或获取位于对象最顶端和窗口中可见内容的最顶端之间的距离
      const scrollHeight = ele.scrollHeight; //获取对象的滚动高度。
      const clientHeight = ele.clientHeight; //网页可见区域高
      const heightFromBottom = scrollHeight - scrollTop - clientHeight;
      if (heightFromBottom < 100 && this.state.hasMore.has) {
        if (this.state.dataSource.length < this.state.dataSourceOrigin.length) {
          let x = this.state.hasMore.x;
          let dataSource = this.state.dataSourceOrigin.slice(0, 30 * x);
          x = x + 1;
          this.setState({
            dataSource: dataSource,
            hasMore: { has: true, x: x }
          });
        } else {
          this.setState({ hasMore: { has: false } });
        }
      } else if (heightFromBottom < 10 && this.state.hasMore.has == false) {
        //可以写无更多课件提示
      }
    }, 1000);
  };
  componentDidMount = () => {
    this.props.getCoursewareGroup();
    this.handleOnScroll();
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
        if (item.text == "Divider") {
          return <Menu.Divider key={index} />;
        } else if (item.text == "删除") {
          return (
            <Menu.Item onClick={() => this.selectFunc(item.text)} key={index}>
              <p className="btndelete">{item.text}</p>
            </Menu.Item>
          );
        } else {
          return (
            <Menu.Item onClick={() => this.selectFunc(item.text)} key={index}>
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
  //显示分享
  showShareModal = e => {
    this.modalContent.name = e.name;
    this.modalContent.key = e.key;
    //重置选项
    this.shareType = { type: 0, expiredDay: 30 };
    let { id } = this.currentRow;
    let { type, expiredDay } = this.shareType;
    this.props.getShareLink({ id, type, expiredDay, linkLock: true });
    this.setState({
      shareModalVisible: true
    });
  };
  //生成新的分享链接
  changeShareType = e => {
    console.log("e", e);
    this.shareType.type = e.type;
    this.shareType.expiredDay = e.expiredDay;
    let { id } = this.currentRow;
    let { type, expiredDay } = this.shareType;
    this.iconLoading = true;
    this.props.getShareLink({ id, type, expiredDay, linkLock: true });
    //this.shareType
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
    this.modalContent.id = e.id;

    this.props.getHistory({ id: this.modalContent.id });
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
    if (e == "none" || e == undefined) {
      console.log("none");
      notification.open({
        message: "没有选择文件夹"
      });
      return;
    }
    this.props.moveHere({
      parentId: e,
      coursewareIds: [this.currentRow.id],
      updata_time: new Date().getTime()
    });
    this.setState({
      moveFileModalVisible: false
    });
  };
  showMoveFileModal = e => {
    this.modalContent.name = e.name;
    this.modalContent.key = e.key;
    console.log("showMoveFileModal");
    this.props.getAllGroup();
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
      <div className="inline">
        <i className="demo-icon icon-doc-text-inv">&#xf15c;</i>
        <TableName title={text} lineClampNum={2} data={record} />
      </div>
    ) : (
      <div className="inline">
        <i className="demo-icon icon-folder">&#xf14a;</i>
        <TableName
          getSubFile={this.props.getSubFile}
          title={text}
          lineClampNum={2}
          data={record}
        />
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
          <Spin spinning={this.props.getCourseware.tableLoading}>
            <MyContentTable
              dataSource={this.state.dataSource}
              tableTitle={tableTitle}
              columns={this.columns}
              changeCurrentRow={this.changeCurrentRow}
            />
          </Spin>
          {this.state.hasMore.has ? (
            <Spin tip="加载更多课件中..." size="large">
              <Alert
                message="温馨小提示"
                description="课件太多太混乱，快用文件夹给课件分类吧！"
                type="info"
              />
            </Spin>
          ) : (
            ""
          )}
          {this.state.shareModalVisible ? (
            <ShareModal
              postShare={this.props.postShare}
              shareType={this.shareType}
              changeShareType={this.changeShareType}
              iconLoading={this.iconLoading}
              modalContent={this.modalContent}
              handleCancel={this.shareCancel}
              handleOk={this.shareOk}
              onVisibleChange={this.state.shareModalVisible}
            />
          ) : (
            " "
          )}
          {this.state.historyModalVisible ? (
            <HistoryModal
              modalContent={this.modalContent}
              handleCancel={this.historyCancel}
              onVisibleChange={this.state.historyModalVisible}
            />
          ) : (
            ""
          )}
          {this.state.moveFileModalVisible ? (
            <MoveFileModal
              moveFileOk={this.moveFileOk}
              treeData={this.props.allGroup}
              modalContent={this.modalContent}
              handleCancel={this.moveFileCancel}
              onVisibleChange={this.state.moveFileModalVisible}
            />
          ) : (
            ""
          )}
        </Col>
      </Row>
    );
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyContent);
