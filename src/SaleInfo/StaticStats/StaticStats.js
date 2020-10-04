import React from 'react';

import commonStyles from 'Components.module.less';

import styles from './StaticStats.module.less';

export default function({ isClosed }) {
  return (
    <div>
    <dl className={styles.root}>
      <div>
        <dt>Total Supply</dt>
        <dd>10,000,000 OWL</dd>
      </div>
      <br/>
      <div>
        <dt>Crowdsale Goal
        </dt>
        <dd>2960 ETH</dd>
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
    {/*--------------second section -------------- */}
    <br/>
    <br/>
    <dl className={styles.root}>
      <div>
        <dt>Price Per Token</dt>
        <dd>0.001026717557 ETH</dd>
      </div>
      <br/>
      <div>
        <dt>Maximum Contribution
        </dt>
        <dd>75 ETH</dd>
      </div>
      <br/>
      <div>
        <dt>Minimum Contribution</dt>
        <dd>0.5 ETH</dd>
      </div>
    </dl>
    </div>
  );
}
