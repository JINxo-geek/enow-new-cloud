import React from "react";
import { Modal, Row, Col, Select, Button, message } from "antd";
import "./ShareModal.less";
//@ts-ignore
import file from "@images/file.png";
import QRCode from "qrcode.react";
import copy from "copy-to-clipboard";
const { Option } = Select;

const shareUrl = "http://www.baidu.com";

function ShareModal(props) {
  const shareContent = {};
  const handleChange = value => {
    console.log(value);
  };
  const copyUrl = () => {
    try {
      copy(shareUrl);
    } catch (e) {
      message.error("复制失败" + e);
    }
    message.success("复制成功");
  };

  return (
    <Modal
      // title={}
      title={
        <div>
          <i className="demo-icon icon-ok-squared">&#xf15c;</i>
          {props.ShareModalContent.name}
        </div>
      }
      visible={props.onVisibleChange}
      onCancel={props.handleCancel}
      footer={null}
    >
      <Row>
        <Col span={4} offset={1}>
          分享有效期
        </Col>

        <Col span={4}>
          <Select
            className="select"
            labelInValue
            size="small"
            defaultValue={{ key: "7day" }}
            onChange={handleChange}
          >
            <Option value="7day">7天</Option>
            <Option value="30day">30天</Option>
            <Option value="forever">永久</Option>
          </Select>
        </Col>
        <Col span={4}>分享形式</Col>
        <Col span={4}>
          <Select
            style={{ border: 0 }}
            className="select"
            size="small"
            labelInValue
            defaultValue={{ key: "public" }}
            onChange={handleChange}
          >
            <Option value="public">公开</Option>
            <Option value="encrypt">加密</Option>
          </Select>
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <div className="QRtop">
            <div className="QRframe">
              <p className="QRtip">扫二维码，打开链接即可分享给你的好友</p>
              <QRCode size={106} value={shareUrl} />
            </div>
          </div>
        </Col>
        <Col span={12}>
          <div className="textframe">
            <div className="text">
              【希沃白板5】课件分享:
              <br />
              {`《${props.ShareModalContent.name}》`}
              <br />
              {shareUrl}
              <br />
            </div>
            <Button className="btncopy" onClick={copyUrl}>
              复制链接
            </Button>
          </div>
        </Col>
      </Row>
    </Modal>
  );
}

export default ShareModal;
