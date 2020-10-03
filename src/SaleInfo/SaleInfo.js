import React from 'react';
import styles from './SaleInfo.module.less';

import StaticStats from './StaticStats/StaticStats';
import DynamicStats from './DynamicStats/DynamicStats';
import Address from './Address/Address';
import Questions from './Questions/Questions';

import art from './art.svg';
import telegram from './telegram.png';

export default function(props) {
  const { stats, maxContribution, now, isClosed, address } = props;

  return (
    <div>
      {/*
      <section className={styles.sectionTop}>
        <h1><i>
          { isClosed ?
            'The OWL Token Sale is Closed' :
            'Send ETH to Participate'
          }
        </i></h1>
      </section>
      */}
      <br/>
      { !isClosed &&
        <Address
          address={address}
          maxContribution={maxContribution}
          now={now} />
      }
      <section className={styles.statsSection}>
        { !isClosed && <h2>Token Sale Details</h2> }
        <StaticStats isClosed={isClosed} />
        <DynamicStats stats={stats} isClosed={isClosed} />
      </section>

      { !isClosed && <Questions /> }

      <footer>
        <section className={styles.helpSection}>
          <p><strong>Need help?</strong><br /> Reach out in our Telegram channel<br/><br/>
          <a href="https://t.me/StealthSwapETH"><img style = {{ height: "4rem", width: "4rem"}}target="_blank" src={telegram}/></a></p>
        </section>
         
        <div className={styles.art}>
          {/* commenting out the
          <div className={styles.artBackground}></div>
          <img src={art} alt="Art" />*/}
        </div>
      </footer>
    </div>
  );
}
