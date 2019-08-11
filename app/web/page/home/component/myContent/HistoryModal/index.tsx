import React from "react";
import { Modal, Table, Select } from "antd";
import "./HistoryModal.less";

function HistoryModal(props) {
  const histroycolumns: any = [
    {
      title: "版本号",
      dataIndex: "uid",
      key: "uid",
      render: () => {}
    },
    {
      title: "修改时间",
      dataIndex: "name",
      key: "name"
    },
    {
      title: "",
      dataIndex: "",
      key: "name",
      render: () => {}
    }
  ];
  const dataSource = [];
  const handleChange = value => {
    console.log(value);
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
      <Table dataSource={dataSource} columns={histroycolumns} />
    </Modal>
  );
}

export default HistoryModal;
