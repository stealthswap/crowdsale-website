import React, { Component } from 'react';
import moment from 'moment';

import {
  GOAL_WEI,
  START_DATE
} from 'data/constants';

//import api from 'etherscan-api';
import logo from './transparent-logo.png';
import warning from './warning.svg';
import styles from './App.module.less';
import SaleInfo from './SaleInfo/SaleInfo';
import Countdown from 'Countdown/Countdown';
import StaticStyles from 'SaleInfo/StaticStats/StaticStats.module.less';
import Grid from './grid.js';
import ethLogo from './ethLogo.png';
import person from './person.png';

const LIFECYCLE_STATES = {
  UNSTARTED: 'unstarted',
  STARTED: 'started',
  CLOSED: 'closed',
};

function getLifecycleState() {
  const now = moment();

  if (now.isBefore(START_DATE)) {
    return LIFECYCLE_STATES.UNSTARTED;
  } else {
    return LIFECYCLE_STATES.STARTED;
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lifecycleState: getLifecycleState(),
      now: moment(),
      balance: 0
    };

  }

  async updateStats() {
    //const balance = await api.init('INSERT ETHERSCAN API KEY HERE').account.balance('INSERT CROWDSALE CONTRACT HERE');
    // ^^^^ Balance of Crowdsale contract IN ****WEI****
    const balance = "0";
    if (parseInt(balance.result) >= GOAL_WEI) {
        clearInterval(this.statsUpdateIntervalID);
        this.setState({
          lifecycleState: LIFECYCLE_STATES.CLOSED,
          balance
        });
      } else {
        this.setState({ balance });
      }
    }

  componentDidMount() {
    this.clockIntervalID = setInterval(
      () => this.updateClock(),
      1000
    );

    this.statsUpdateIntervalID = setInterval(
      () => this.updateStats(),
      100000
    );
  }

  updateClock() {
    const { lifecycleState } = this.state;

    if (lifecycleState === LIFECYCLE_STATES.CLOSED) {
      clearInterval(this.clockIntervalID);
      return;
    }

    this.setState({
      lifecycleState: getLifecycleState(),
      now: moment(),
    });
  }

  render() {
    const { lifecycleState, balance, now } = this.state;

    const appView = (() => {
      switch (lifecycleState) {
        case LIFECYCLE_STATES.UNSTARTED:
          const timeTillStart = moment.duration(START_DATE.diff(now));
          return (
            <div className={styles.countdown}>
              Time until token sale starts
              <Countdown value={timeTillStart} />
            </div>
          );
        case LIFECYCLE_STATES.CLOSED:
          return <SaleInfo isClosed={true} />;
        default:
          return <SaleInfo address={""} maxContribution={75} balance={balance} now={now} />;
      }
    })();

    return (
      <div className={styles.app}>
        <header className={styles.header}>
          <div>
            <div className={styles.warning}>
              <img src={warning} className={styles.warningLogo} alt="warning" />
              <div>
                The ONLY official URL for the OWL Token is <strong>stealthswap.org</strong>. Be careful of similar looking URLs.
                <br className="no-mobile" /> For those participating in the token
                sale, the ONLY URL is <strong>crowdsale.stealthswap.org</strong>
              </div>
            </div>
          </div>
          <div>
          <img alt={"StealthSwap Logo"}src={logo} className={styles.logo} alt="logo" />
          <h1 style = {{color: "white", fontSize: "64px", marginTop: "-2.5rem", marginBottom: "-.5rem", fontWeight: "100"}}><a style = {{color: "white"}}href ={"https://stealthswap.org"}>StealthSwap</a></h1>
          <hr style= {{width: "30%"}}/>
          { lifecycleState === LIFECYCLE_STATES.STARTED &&
            
            <h1 style={{ fontSize: "32px",color:"white", fontWeight:"100", marginTop: "-4.5rem", marginBottom: "-2rem"}}>
            <br/>Welcome to the OWL Crowdsale<br/>
            </h1>
          }
          <br/>
          <br/>
          </div>
          <br/>          
        </header>

        {appView}
      </div>
    );
  }
}

export default App;
