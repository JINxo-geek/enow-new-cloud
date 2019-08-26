import { Tooltip } from "antd";
import React from "react";
import "./UItableName.less";
const UItableName = props => {
  const { title, lineClampNum, clickHandle } = props;
  return (
    <Tooltip placement="topLeft" title={title}>
      <span
        className="filename"
        style={{ WebkitLineClamp: lineClampNum }}
        onClick={clickHandle}
      >
        {title}
      </span>
    </Tooltip>
  );
};

export default UItableName;
