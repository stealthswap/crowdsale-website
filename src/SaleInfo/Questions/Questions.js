import React from 'react';

import commonStyles from 'Components.module.less';

import styles from './Questions.module.less';

export default function() {
  return (
    <section className={styles.root} >
      <div className={commonStyles.content}>
        <h1 style={{textAlign: "center"}}>Questions</h1>
        <hr/>
        <ul>
          <li>
            <h3>How long does the crowdsale last?</h3>
            <p>
            Oct 5th 22:00 UTC - Oct 8th 22:00 UTC or until the crowdsale goal is filled.</p>
          </li>
          <li>
            <h3>When will I receive my tokens?</h3>
            <p>As soon as the crowdsale is finished either by reaching the maximum goal of 3,000 ETH or on Oct 8th at 22:00 UTC.</p>
          </li>
          <li>
            <h3>Can I send money from an exchange wallet?</h3>
            <p>No. Please do not send any ETH from an exchange wallet because you will not receive your tokens. Use your own wallet, we recommend MetaMask as it is the easiet.</p>
          </li>
          <li>
            <h3>How can I verify this is the correct StealthSwap crowdsale site?</h3>
            <p>
            If you're unsure about being on the correct crowdsale site, join our <a href ={"https://t.me/StealthSwapETH"}>Telegram</a> .
            </p>
          </li>
          <li>
            <h3>What are the tokenomics of OWL?</h3>
            <p>
              Tokenomics can be found <a href ={"https://medium.com/stealthswap/the-tokenomics-of-owl-crowdsale-details-and-the-next-project-for-stealthswap-4080eed987ff"} >here</a>.
            </p>
          </li>
          <li>
            <h3>When is the release of the StealthSwap DEX?</h3>
            <p>
            The StealthSwap DEX will be released before the end of Q1 2021.</p>
          </li>
          <li>
            <h3>When is StealthPay launcing onto the Ethereum mainnet?</h3>
            <p>
            On October 15th 2020, StealthPay will be launched on the Ethereum mainnet for both ETH and ERC20 tokens.</p></li>
            <li>
            <h3>When does OWL staking begin?</h3>
            <p>
            The staking contract for OWL will be released on October 15th 2020. We will also bring releasing our dashboard for users staking.            
            </p></li>
            <li>
            <h3>What happens to any unsold tokens?</h3>
            <p>
            All unsold tokens will be burned.            
            </p></li>           
        </ul>
        <hr/>
        <br/>
      </div>
    </section>
  );
}
