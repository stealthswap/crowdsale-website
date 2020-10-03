import React from 'react';

import commonStyles from 'Components.module.less';

import styles from './Questions.module.less';

export default function() {
  return (
    <section className={styles.root} >
      <div className={commonStyles.content}>
        <h1>Questions</h1>
        <hr/>
        <ol>
          <li>
            <h4>How long does the crowdsale last</h4>
            <p>
              Oct 5th 22:00 UTC  - Oct 8th 22:00 UTC
            </p>
          </li>
          <li>
            <h4>What is the maximum amount I can contribute?</h4>
            <p>75 ETH per address</p>
          </li>
          <li>
            <h4>What is the minimum amount I can contribute?</h4>
            <p>0.5 ETH</p>
          </li>
          <li>
            <h4>Can I send money from an exchange wallet?</h4>
            <p>
            No. Please do not send any ETH from an exchange wallet because you will 
            not receive your tokens. Use your own wallet, we recommend MetaMask as 
            it is the easiet.
            </p>
          </li>
          <li>
            <h4>When will I receive my tokens?</h4>
            <p>
              As soon as the crowdsale is finished either by reaching the maximum 
              goal of 3,000 ETH or on Oct 8th at 22:00 UTC.
            </p>
          </li>
          <li>
            <h4>How can I verify this is the correct StealthSwap crowdsale site?</h4>
            <p>
              Join our telegram at <a href="https://t.me/StealthSwapETH">t.me/StealthSwapETH </a> 
               and all the links needed will be provided there if you are unsure.
            </p>
          </li>
        </ol>
        <hr/>
        <br/>
      </div>
    </section>
  );
}
