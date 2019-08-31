import React from 'react';
import { Modal, Tree, Icon, Button } from 'antd';
import './MoveFileModal.less';
const { TreeNode } = Tree;

function MoveFileModal(props) {
  const folder = (
    <span>
      <i className="demo-icon icon-folder">&#xf14a;</i>
    </span>
  );
  let moveparentId = 'none';
  const dataArray = [{ name: '根目录', id: 'root', childrens: [] }];
  dataArray[0].childrens = props.treeData.data;
  const renderTreeNodes: any = data => {
    return data.map(item => {
      if (item.childrens) {
        return (
          <TreeNode
            icon={folder}
            title={item.name}
            key={item.id}
            dataRef={item}
          >
            {renderTreeNodes(item.childrens)}
          </TreeNode>
        );
      }
      return <TreeNode icon={folder} key={item.id} title={item.name} />;
    });
  };
  const onSelect: any = key => {
    if (key[0] == 'root') {
      moveparentId = '';
    } else {
      moveparentId = key[0];
    }
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
      footer={[
        <Button className="newFbtn" icon="plus" type="link">
          新建文件夹
        </Button>,
        <Button key="newfolderok" onClick={props.handleCancel}>
          取消
        </Button>,
        <Button
          key="newfolderno"
          className="btngreen"
          onClick={() => {
            props.moveFileOk(moveparentId);
          }}
        >
          确定
        </Button>
      ]}
    >
      <div className="funcname">移动到</div>
      <div className="mytitle">我的文档</div>
      <Tree showIcon onSelect={onSelect} switcherIcon={<Icon type="down" />}>
        {renderTreeNodes(dataArray)}
      </Tree>
    </Modal>
  );
}

export default MoveFileModal;
