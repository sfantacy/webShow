import React, { useState } from 'react';
import classnames from 'classnames';
import { Image } from 'antd';
import styles from './index.module.less';

export const MyComponent1: React.FC<any> = (props: any) => {
  const [imageSrc, setImageSrc] = useState(
    'https://lark-app.oss-cn-beijing.aliyuncs.com/fecodex/fallback-images/04.jpeg',
  );
  const [imageSrc2, setImageSrc2] = useState(
    'https://lark-app.oss-cn-beijing.aliyuncs.com/fecodex/fallback-images/04.jpeg',
  );
  const [imageSrc3, setImageSrc3] = useState(
    'https://lark-app.oss-cn-beijing.aliyuncs.com/fecodex/fallback-images/04.jpeg',
  );
  const [imageSrc4, setImageSrc4] = useState(
    'https://lark-app.oss-cn-beijing.aliyuncs.com/fecodex/fallback-images/04.jpeg',
  );

  return (
    <div
      className={classnames(styles.wrapper, props.className)}
      style={props.style}
    >
      <div className={styles.divDep3L1}>
        <Image
          src={imageSrc}
          wrapperStyle={{ flexShrink: 0, alignSelf: 'flex-end' }}
          className={styles.imageDep4L1}
        />
        <Image
          src={imageSrc2}
          wrapperStyle={{ flexShrink: 0, alignSelf: 'flex-end' }}
          className={styles.imageDep4L2}
        />
        <div className={styles.divDep4L1}>
          <Image
            src={imageSrc3}
            wrapperStyle={{ flexShrink: 0 }}
            className={styles.imageDep5L1}
          />
          <Image
            src={imageSrc4}
            wrapperStyle={{ flexShrink: 0 }}
            className={styles.imageDep5L2}
          />
        </div>
      </div>
    </div>
  );
};
