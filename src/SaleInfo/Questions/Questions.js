import React from 'react';

import commonStyles from 'Components.module.less';

import styles from './Questions.module.less';

export default function() {
  return (
    <section className={styles.root}>
      <div className={commonStyles.content}>
        <h1>Questions</h1>
        <ol>
          <li>
            <h4>When does the crowdsale end?</h4>
            <p>
              The Crowdsale will be open for 3 Days.
            </p>
          </li>
          <li>
            <h4>How much can I contribute?</h4>
            <p>
              You can send a maximum of 75 ETH.
            </p>
          </li>
          <li>
            <h4>Is there a minimum contribution?</h4>
            <p>Yes, 0.5 ETH.</p>
          </li>
          <li>
            <h4>Can I send money from an exchange wallet like Coinbase?</h4>
            <p>
              No, do not send money from an exchange wallet. If for any reason
              we need to return funds back to your wallet, funds that were
              originally sent from an exchange wallet will be lost and you will
              not be able to receive the tokens you purchase.
            </p>
          </li>
          <li>
            <h4>When will i receive my tokens?</h4>
            <p>
              After the crowdsale is finalized, this is triggered by reaching
              the maximum hard cap or deadline.
            </p>
          </li>
          <li>
            <h4>How can I trust I am sending to the official OWL address?</h4>
            <p>
              Always triple check that you are on the official StealthSwap URL (The
              official crowdsale page is crowdsale.stealthswap.org).
            </p>
          </li>
        </ol>
      </div>
    </section>
  );
}
