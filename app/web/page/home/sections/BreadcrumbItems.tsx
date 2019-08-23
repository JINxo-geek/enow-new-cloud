import { Breadcrumb, Input, Modal } from "antd";
import React from "react";
import UIbreadcrumb from "../component/UIbreadcrumb";
const BreadcrumbItems = props => {
  //   const { modalVisible, form, handleAdd, handleModalVisible } = props;
  const okHandle = () => {
    // form.validateFields((err, fieldsValue) => {
    //   if (err) return;
    //   form.resetFields();
    //   handleAdd(fieldsValue);
    // });
  };
  /* 展示面包屑 */
  return <UIbreadcrumb breadcrumbItems={breadcrumbItems} />;
};

export default BreadcrumbItems;
