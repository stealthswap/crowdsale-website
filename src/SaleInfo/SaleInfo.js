import React from 'react';
import styles from './SaleInfo.module.less';

import StaticStats from './StaticStats/StaticStats';
import DynamicStats from './DynamicStats/DynamicStats';
import Address from './Address/Address';
import Questions from './Questions/Questions';

import telegram from './telegram.png';
import github from './github.png';
import owlLogo from './owlLogo.png';

export default function(props) {
  const { balance, maxContribution, now, isClosed, address, participants } = props;

  return (
    <div>
      <br/>
      <section className={styles.statsSection}>
        { !isClosed }
        <StaticStats isClosed={isClosed} balance={balance} participants={participants} />
        <DynamicStats balance={balance} isClosed={isClosed} />
      </section>
      { !isClosed &&
        <Address
          address={address}
          maxContribution={maxContribution}
          now={now} />
      }
      { !isClosed && <Questions /> }

      <footer>
        <section className={styles.helpSection}>
          <p><strong>Need help?</strong><br /> Reach out in our Telegram channel<br/><br/>
          <a href="https://t.me/StealthSwapETH"><img alt={"Telegram Logo"} style = {{ height: "4rem", width: "4rem"}}target="_blank" src={telegram}/></a>
          &nbsp;&nbsp;          &nbsp;&nbsp;  
          <a href="https://github.com/stealthswap"><img alt={"Github Logo"} style = {{ height: "4rem", width: "4rem"}}target="_blank" src={github}/></a>
          &nbsp;&nbsp;          &nbsp;&nbsp; 

          <a href="https://stealthswap.org"><img alt={"Website Logo"} style = {{ height: "4rem", width: "4rem"}}target="_blank" src={owlLogo}/></a>
          </p>
          <br/>
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
