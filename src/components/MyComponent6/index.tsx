import React from 'react';
import classnames from 'classnames';
import styles from './index.module.less';

export const MyComponent6: React.FC<any> = (props: any) => {
  const spanText = '2023年';
  const spanText2 = '0.4公益时';
  const spanText3 = '益起写';
  const spanText4 = '0.2公益时';
  const spanText5 = '2023年12月09日';
  const spanText6 = '益起写';
  const spanText7 = '0.2公益时';
  const spanText8 = '2023年12月09日';

  return (
    <div
      className={classnames(styles.wrapper, props.className)}
      style={props.style}
    >
      <div className={styles.divDep3L1}>
        <div className={styles.divDep4L1}>
          <div className={styles.divDep5L1}>
            <span className={styles.spanDep6L1}>{spanText}</span>
            <span className={styles.spanDep6L2}>{spanText2}</span>
          </div>
          <div className={styles.divDep5L2}>
            <div className={styles.divDep6L1}>
              <span className={styles.spanDep7L1}>{spanText3}</span>
              <span className={styles.spanDep7L2}>{spanText4}</span>
            </div>
            <span className={styles.spanDep6L3}>{spanText5}</span>
          </div>
          <div className={styles.divDep5L3}>
            <div className={styles.divDep6L2}>
              <span className={styles.spanDep7L3}>{spanText6}</span>
              <span className={styles.spanDep7L4}>{spanText7}</span>
            </div>
            <span className={styles.spanDep6L4}>{spanText8}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
