import React from 'react';
import classnames from 'classnames';
import styles from './index.module.less';

export const MyComponent4: React.FC<any> = (props: any) => {
  const h1Text = '全部';
  const spanText = '公益传播';
  const spanText2 = '线下公益';
  const spanText3 = '互联网';

  return (
    <div
      className={classnames(styles.wrapper, props.className)}
      style={props.style}
    >
      <div className={styles.divDep3L1}>
        <h1 className={styles.h1Dep4L1}>{h1Text}</h1>
        <span className={styles.spanDep4L1}>{spanText}</span>
        <span className={styles.spanDep4L2}>{spanText2}</span>
        <span className={styles.spanDep4L3}>{spanText3}</span>
      </div>
    </div>
  );
};
