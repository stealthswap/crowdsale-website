import React from 'react';

import {
  GOAL_ETH
} from 'data/constants';

import styles from './DynamicStats.module.less';
import './DynamicStats.less';

export default function({ stats, isClosed }) {
  let progress = 0;

  if (isClosed) {
    progress = 100;
  } else {
    if (stats) {
      const { amount } = stats;
      progress = Math.min(amount / GOAL_ETH * 100, 100);
    }
  }

  const progressStyle = { width: progress.toFixed(2) + '%' };

  return (
    <div className={styles.root}>
      <p><strong>{ isClosed ? 'TOKEN' : 'PUBLIC' } SALE RAISED</strong></p>
      <div className={styles.progressBar}>
        <div
          className={`${styles.progress} ${isClosed && 'no-animate'}`}
          style={progressStyle}></div>
      </div>
      <div className={styles.progressPoints}>
        <span style={{fontSize: "24px"}}>0%</span>
        <span style={{fontSize: "24px"}}>100%</span>
      </div>
    </div>
  );
}
