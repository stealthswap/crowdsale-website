import React from 'react';

import {
  GOAL_WEI
} from 'data/constants';

import styles from './DynamicStats.module.less';
import './DynamicStats.less';

export default function({ balance, isClosed }) {
  let progress = 0;

  if (isClosed) {
    progress = 100;
  } else {
    if (balance) {
      progress = Math.min(parseInt(balance) / GOAL_WEI * 100, 100);
    }
  }

  const progressStyle = { width: progress.toFixed(2) + '%' };

  return (
    <div className={styles.root}>
      <div className={styles.progressBar}>
        <div
          className={`${styles.progress} ${isClosed && 'no-animate'}`}
          style={progressStyle}></div>
      </div>
      <div >
        <span style={{float: "left", alignText: "left", fontSize: "24px"}}>0%</span>
        <span style={{float: "right",alignText: "right", fontSize: "24px"}}>100%</span>
      </div>
    </div>
  );
}
