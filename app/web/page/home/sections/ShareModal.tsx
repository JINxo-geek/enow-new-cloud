import React from 'react';
import { Modal, Row, Col, Select, Button, message } from 'antd';
import './ShareModal.less';
// @ts-ignore
import file from '@images/file.png';
import QRCode from 'qrcode.react';
import copy from 'copy-to-clipboard';
const { Option } = Select;

function ShareModal(props) {
  const { link, password, type, linkLock } = props.postShare;
  let iconLoading = props.iconLoading;
  if (props.postShare.linkLock == false) {
    iconLoading = false;
  } else {
  }
  const shareUrl = link;
  const shareType = props.shareType;
  const handleChange = value => {
    shareType.expiredDay = value.key;
  };
  const handleChange2 = value => {
    shareType.type = value.key;
  };
  const copyUrl = () => {
    try {
      if (password == '') {
        copy(shareUrl);
      } else {
        copy('链接' + shareUrl + '密码' + password);
      }
    } catch (e) {
      message.error('复制失败' + e);
    }
    message.success('复制成功');
  };

  return (
    <Modal
      title={
        <div>
          <i className="demo-icon icon-doc-text-inv">&#xf15c;</i>
          {props.modalContent.name}
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
            defaultValue={{ key: `${props.shareType.expiredDay}` }}
            onChange={handleChange}
          >
            <Option value="7">7天</Option>
            <Option value="30">30天</Option>
            <Option value="0">永久</Option>
          </Select>
        </Col>
        <Col span={4}>分享形式</Col>
        <Col span={4}>
          <Select
            className="select"
            size="small"
            labelInValue
            defaultValue={{ key: `${props.shareType.type}` }}
            onChange={handleChange2}
          >
            <Option value="0">公开</Option>
            <Option value="1">加密</Option>
          </Select>
        </Col>
        <Col span={4}>
          <Button
            icon="plus"
            loading={iconLoading}
            onClick={() => {
              props.changeShareType(shareType);
            }}
            className="btnLink"
          >
            创建新链接
          </Button>
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
              {`《${props.modalContent.name}》`}
              <br />
              <a href={shareUrl} target={'_blank'}>
                {shareUrl}
              </a>
              <br />
              {password !== '' ? `密码${password}` : ''}
            </div>
            <Button className="btncopy" onClick={copyUrl}>
              {password !== '' ? '复制链接和密码' : '复制链接'}
            </Button>
          </div>
        </Col>
      </Row>
    </Modal>
  );
}

export default ShareModal;
