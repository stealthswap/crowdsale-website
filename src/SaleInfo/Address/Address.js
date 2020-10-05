import React, { Component } from 'react';
import QRCode from 'qrcode.react';
import moment from 'moment';

import { PHASE_1_END_DATE } from 'data/constants';

import styles from './Address.module.less';
import commonStyles from 'Components.module.less';

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = { isQRShown: false };
  }

  toggleQRCode() {
    this.setState({ isQRShown: !this.state.isQRShown });
  }

  render() {
    const { isQRShown } = this.state;
    const { address, maxContribution, now } = this.props;

    const isPhase1 = now.isBefore(PHASE_1_END_DATE);
    const timeTillPhase1End = moment.duration(PHASE_1_END_DATE.diff(now));

    return (
      <div>
        <section className={styles.root}>
          <div className={commonStyles.content}>
            <div style = {{display: "flex", flexDirection: "column"}}>
            <h1 style={{textAlign: "center", color: "#2b292a"}}>Instructions</h1>
              <ol>
                <li style={{textAlign: "left", fontSize: "20px"}} >Open your Ethereum wallet (i.e. MetaMask).</li>
                <li style={{textAlign: "left", fontSize: "20px"}}>Send your ETH to the address below.</li>
                <li style={{textAlign: "left", fontSize: "20px"}}>You will automatically receive your tokens when the crowdsale has concluded.</li>
                <li style={{textAlign: "left", fontSize: "20px"}}>If you send ETH after the crowdsale's goal is reached, then your TX will fail.</li>
              </ol>
              <br/>
              <label style={{fontSize: "2.5rem", textAlign: "center"}}>Crowdsale Address</label>
              <input style ={{width: "100%", textAlign: "center", fontSize: "2.4rem", height: "6rem", letterSpacing: "1px"}}
                type="text"
                readOnly
                value={address}
              />
              {isQRShown ?
                <div className={styles.QRFrame}>
                  <QRCode value={address} size={250} level='H' />
                </div> :
                null
              }
              <div className={styles.formBottom}>
                <a
                  className={styles.toggeQR}
                  onClick={() => this.toggleQRCode()}>
                  {isQRShown ? 'Hide' : 'Show'} QR Code
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
};
