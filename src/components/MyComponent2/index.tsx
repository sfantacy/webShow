import React from 'react';
import classnames from 'classnames';
import { LeftOutlined, MinusCircleFilled } from '@ant-design/icons';
import { Button } from 'antd';
import styles from './index.module.less';

export const MyComponent2: React.FC<any> = (props: any) => {
  const h1Text = '3小时公益';

  // 按钮处理函数
  const onButtonClick = e => {};

  return (
    <div
      className={classnames(styles.wrapper, props.className)}
      style={props.style}
    >
      <div className={styles.divDep3L1}>
        <LeftOutlined className={styles.leftIconDep4L1} />
        <h1 className={styles.h1Dep4L1}>{h1Text}</h1>
        <Button
          type="primary"
          shape="circle"
          size="large"
          onClick={onButtonClick}
          className={styles.buttonDep4L1}
        >
          <MinusCircleFilled className={styles.minusCircleIconDep5L1} />
          <div className={styles.divDep5L1} />
        </Button>
      </div>
    </div>
  );
};
