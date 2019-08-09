import React from "react";
import { Icon, Popover } from "antd";
import content from "./content";
export default (text, record) => {
  if (record.showSate && record.type == "file") {
    return (
      <div>
        <Icon type="share-alt" onClick={() => {}} />
        &emsp;&thinsp;
        <Popover placement="bottom" content={content} trigger="click">
          <Icon type="align-center" />
        </Popover>
      </div>
    );
  } else {
    return <div />;
  }
};
