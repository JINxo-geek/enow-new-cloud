import React from "react";
import "./UItableName.less";
const UItableName = props => {
  const { title, lineClampNum, clickHandle } = props;
  return (
    <span
      className="filename"
      style={{ WebkitLineClamp: lineClampNum }}
      onClick={clickHandle}
    >
      {title}
    </span>
  );
};

export default UItableName;
