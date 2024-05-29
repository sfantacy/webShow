import React from 'react';
import classnames from 'classnames';
import {
  NodeIndexOutlined,
  PauseOutlined,
  PinterestFilled,
  SlidersOutlined,
} from '@ant-design/icons';
import styles from './index.module.less';

export const MyComponent3: React.FC<any> = (props: any) => {
  const spanText = '11:07ND';
  const spanText2 = '41.6';
  const spanText3 = 'K/s';
  const spanText4 = '72';

  return (
    <div
      className={classnames(styles.wrapper, props.className)}
      style={props.style}
    >
      <div className={styles.divDep3L1}>
        <span className={styles.spanDep4L1}>
          {spanText}
          <NodeIndexOutlined className={styles.nodeIndexIconDep5L1} />
          <PinterestFilled className={styles.pinterestIconDep5L1} />
        </span>
        <SlidersOutlined className={styles.slidersIconDep4L1} />
        <div className={styles.divDep4L1}>
          <span className={styles.spanDep5L1}>{spanText2}</span>
          <span className={styles.spanDep5L2}>{spanText3}</span>
        </div>
        <div className={styles.divDep4L2}>
          <PauseOutlined className={styles.pauseIconDep5L1} />
          <span className={styles.spanDep5L3}>{spanText4}</span>
        </div>
      </div>
    </div>
  );
};
