import React from 'react';

import commonStyles from 'Components.module.less';

import styles from './StaticStats.module.less';

export default function({ isClosed }) {
  return (
    <dl className={styles.root}>
      <div>
        <dt>Total Supply</dt>
        <dd>10,000,000 OWL</dd>
      </div>
      <br/>
      <div>
        <dt>Private Presale</dt>
        <dd>360,000 OWL</dd>
      </div>
      <br/>
      <div>
        <dt>
          Public Sale&nbsp;
          <i className={commonStyles.textDanger}>{isClosed ? 'Closed' : 'Live'}</i>
        </dt>
        <dd>2,600,000 OWL</dd>
      </div>
    </dl>
  );
}
