import React from "react";
import { Modal, Tree, Icon, Button } from "antd";
const { TreeNode } = Tree;
function MoveFileModal(props) {
  let folder = <i className="demo-icon icon-folder">&#xf14a;</i>;
  return (
    <Modal
      title={
        <div>
          <i className="demo-icon icon-folder">&#xf14a;</i>
          {props.modalContent.name}
        </div>
      }
      visible={props.onVisibleChange}
      onCancel={props.handleCancel}
      footer={[
        <Button type="link">新建文件夹</Button>,
        <Button key="newfolderok" onClick={props.handleCancel}>
          取消
        </Button>,
        <Button
          key="newfolderno"
          className="btngreen"
          onClick={props.cancelNewFolderModalVisible}
        >
          确定
        </Button>
      ]}
    >
      <p>移动到</p>

      <Tree
        showIcon
        defaultSelectedKeys={["0-0"]}
        switcherIcon={<Icon type="down" />}
      >
        <TreeNode icon={folder} title="文件夹" key="0-0">
          <TreeNode icon={folder} title="leaf" key="0-0-0" />
          <TreeNode
            icon={({ selected }) => (
              <Icon type={selected ? "frown" : "frown-o"} />
            )}
            title="leaf"
            key="0-0-1"
          />
        </TreeNode>
        <TreeNode icon={folder} title="文件夹" key="0-1" />
      </Tree>
    </Modal>
  );
}

export default MoveFileModal;
