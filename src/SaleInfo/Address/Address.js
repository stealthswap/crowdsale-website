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
            <p style={{color: "#2b292a", textAlign: "center"}}>To Participate in the OWL Crowdsale</p>
              <ol>
                <li style={{textAlign: "left", fontSize: "20px"}} >Open your Ethereum wallet (i.e. MetaMask).</li>
                <li style={{textAlign: "left", fontSize: "20px"}}>Send your ETH to the address below and set the gas limit to a minimum of 200,000.</li>
                <li style={{textAlign: "left", fontSize: "20px"}}>You will automatically receive your tokens when the crowdsale has concluded.</li>
                <li style={{textAlign: "left", fontSize: "20px"}}>After the crowdsale has concluded, the StealthSwap team will add liquidity to Uniswap and then approve token holders to freely move their OWL. This is so we can ensure we have sufficient liquidity on Uniswap without problem.</li>
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
              <br/>
              <p style={{textAlign: "center",color: "#2b292a"}}>To Withdraw Your OWL</p>
              <p style={{color: "#2b292a", textAlign: "left", fontWeight: "bold"}}>This is only to be done once the crowdsale has concluded. Do NOT try to withdraw before this or you will lose money on the gas fees.</p>
              <ol>
                <li style={{textAlign: "left", fontSize: "20px"}}>Go to <a href="https://etherscan.io/address/0x280da9a925187a62a809D59b05b1FC399Faa02cA#writeContract">Etherscan</a>.</li>
                <li style={{textAlign: "left", fontSize: "20px"}}>Press "Connect to Web3" to connect your Metamask account.</li>
                <li style={{textAlign: "left", fontSize: "20px"}}>Scroll down to "withdrawTokens" and input your address.</li>
                <li style={{textAlign: "left", fontSize: "20px"}}>Accept the transaction on Metamask. The gas limit must remain high in order to withdraw tokens.</li>
                <li style={{textAlign: "left", fontSize: "20px"}}>When the transaction is finalized, you will have access to your tokens.</li>
              </ol>
            </div>
          </div>
        </section>
      </div>
    );
  }
};
