import React, { useState } from 'react';
import classnames from 'classnames';
import { DashboardFilled, QuestionCircleOutlined } from '@ant-design/icons';
import { Image } from 'antd';
import styles from './index.module.less';

export const MyComponent5: React.FC<any> = (props: any) => {
  const [imageSrc, setImageSrc] = useState(
    'https://lark-app.oss-cn-beijing.aliyuncs.com/fecodex/fallback-images/04.jpeg',
  );

  const h1Text = '总公益时';
  const h1Text2 = '公益行动(次)';

  return (
    <div
      className={classnames(styles.wrapper, props.className)}
      style={props.style}
    >
      <div className={styles.divDep3L1}>
        <div className={styles.divDep4L1}>
          <div className={styles.divDep5L1}>
            <div className={styles.divDep6L1}>
              <div className={styles.divDep7L1}>
                <div className={styles.divDep8L1}>
                  <h1 className={styles.h1Dep9L1}>{h1Text}</h1>
                  <QuestionCircleOutlined
                    className={styles.questionCircleIconDep9L1}
                  />
                </div>
                <Image
                  src={imageSrc}
                  wrapperStyle={{ flexShrink: 0, alignSelf: 'center' }}
                  className={styles.imageDep8L1}
                />
              </div>
            </div>
          </div>
          <div className={styles.divDep5L2}>
            <div className={styles.divDep6L2}>
              <div className={styles.divDep7L2}>
                <h1 className={styles.h1Dep8L1}>{h1Text2}</h1>
                <DashboardFilled className={styles.dashboardIconDep8L1} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
