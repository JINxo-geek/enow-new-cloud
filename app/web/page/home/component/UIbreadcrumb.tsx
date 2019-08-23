import { Breadcrumb, Input, Modal } from "antd";
import React from "react";

const UIbreadcrumb = props => {
  //   const { modalVisible, form, handleAdd, handleModalVisible } = props;
  const { breadcrumbItems } = props;
  const okHandle = () => {
    // form.validateFields((err, fieldsValue) => {
    //   if (err) return;
    //   form.resetFields();
    //   handleAdd(fieldsValue);
    // });
  };
  /* 展示面包屑 */
  return <Breadcrumb>{breadcrumbItems}</Breadcrumb>;
};

export default UIbreadcrumb;
