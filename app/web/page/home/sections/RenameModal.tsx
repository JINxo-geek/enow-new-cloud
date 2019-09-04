import React from 'react';
import { Modal, Input, Button } from 'antd';

function RenameModal(props) {
  let reName = props.modalContent.name;
  const changeName = e => {
    reName = e.target.value;
  };

  return (
    <Modal
      title={
        <div>
          <i className="demo-icon icon-folder">&#xf14a;</i>
          新建文件夹
        </div>
      }
      visible={props.renameModalvisible}
      onCancel={props.renameCancel}
      footer={[
        <Button key="newfolderno" onClick={props.renameCancel}>
          取消
        </Button>,
        <Button
          key="reameok"
          className="btngreen"
          onClick={() => {
            if (reName === '') {
              return;
            }
            props.renameOk(reName);
            props.renameCancel();
          }}
        >
          确定
        </Button>
      ]}
    >
      <Input onChange={changeName} defaultValue={props.modalContent.name} />
    </Modal>
  );
}

export default RenameModal;
