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
            Oct 5th 22:00 UTC - Oct 8th 22:00 UTC or until the crowdsale goal is filled            </p>
          </li>
          <li>
            <h4>When will I receive my tokens?</h4>
            <p>As soon as the crowdsale is finished either by reaching the maximum goal of 3,000 ETH or on Oct 8th at 22:00 UTC.</p>
          </li>
          <li>
            <h4>Can I send money from an exchange wallet?</h4>
            <p>No. Please do not send any ETH from an exchange wallet because you will not receive your tokens. Use your own wallet, we recommend MetaMask as it is the easiet.</p>
          </li>
          <li>
            <h4>How can I verify this is the correct StealthSwap crowdsale site?</h4>
            <p>
            Join our Telegram and all the links needed will be provided there if you are unsure.
            </p>
          </li>
          <li>
            <h4>What are the tokenomics of OWL?</h4>
            <p>
              Tokenomics can be found <a href ={"https://medium.com/stealthswap/the-tokenomics-of-owl-crowdsale-details-and-the-next-project-for-stealthswap-4080eed987ff"} >here</a>
            </p>
          </li>
          <li>
            <h4>Will the StealthSwap DEX be out soon?</h4>
            <p>
            The latest the StealthSwap DEX will be released is by the end of Q1 2021            </p>
          </li>
          <li>
            <h4>What about StealthPay?</h4>
            <p>
            On October 15th 2020, StealthPay will be launched on the Ethereum mainnet for both ETH and ERC20 tokens.</p>          </li>
        </ol>
        <hr/>
        <br/>
      </div>
    </section>
  );
}
