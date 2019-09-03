import { Breadcrumb, Button, Row, Col, Icon } from 'antd';
import React from 'react';
import './BreadcrumbItems.less';
const BreadcrumbItems = props => {
  const { getBread, breadArray, refresh } = props;
  const clickB = e => {
    const { id, name } = e.target;
    getBread({ id, name });
  };

  const activerefresh = e => {
    refresh();
    document
      .getElementsByClassName('refresh')[0]
      .classList.add('refresh-active');
    setTimeout(() => {
      document
        .getElementsByClassName('refresh')[0]
        .classList.remove('refresh-active');
    }, 2000);
  };

  const renderBreadcrumbItem = breadArray => {
    return [
      breadArray.map((item, idx) => {
        return (
          <Breadcrumb.Item>
            <Button
              size="small"
              disabled={breadArray.length == 2 && item.name == '返回上一级'}
              type="link"
              name={item.name}
              id={item.id}
              onClick={clickB}
            >
              {item.name}
            </Button>
          </Breadcrumb.Item>
        );
      })
    ];
  };
  /* 展示面包屑 */
  return (
    <Row>
      <Col span={21} offset={1}>
        <div className="icon-bre">
          <span className="refresh">
            <Icon type="sync" onClick={activerefresh} />
          </span>
          <Breadcrumb>{renderBreadcrumbItem(breadArray)}</Breadcrumb>
        </div>
      </Col>
    </Row>
  );
};

export default BreadcrumbItems;
