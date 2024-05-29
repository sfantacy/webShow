import React from 'react';
import classnames from 'classnames';
import { MyComponent1 } from '../components/MyComponent1';
import { MyComponent2 } from '../components/MyComponent2';
import { MyComponent3 } from '../components/MyComponent3';
import { MyComponent4 } from '../components/MyComponent4';
import { MyComponent5 } from '../components/MyComponent5';
import { MyComponent6 } from '../components/MyComponent6';
import styles from './index.module.less';

export default (props: any) => {
  return (
    <div
      className={classnames(styles.wrapper, props.className)}
      style={props.style}
    >
      <MyComponent3 />
      <MyComponent2 />
      <MyComponent4 />
      <MyComponent5 />
      <MyComponent6 />
      <MyComponent1 />
    </div>
  );
};
