import React from 'react';

import commonStyles from 'Components.module.less';

import styles from './StaticStats.module.less';

export default function({ isClose, balance, participants  }) {
  return (
    <div style={{marginTop: "-7.5rem"}}>
    <br/>
    <dl className={styles.root}>
      <div>
        <dt>Total Supply</dt>
        <dd>10M OWL</dd>
      </div>
      <br/>
      <div>
        <dt>Crowdsale Goal</dt>
        <dd>2690 ETH</dd>
      </div>
      <br/>
      <div>
        <dt>Public Sale</dt>
        <dd>2.6M OWL</dd>
      </div>
    </dl>
    {/*--------------second section -------------- */}
    <br/>
    <br/>
    <dl className={styles.root}>
      <div>
        <dt>Price Per Token</dt>
        <dd>0.001026 ETH</dd>
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
    <br/>
    <hr style= {{width: "65%"}}/>

  {/* CONTRACT DETAILS: PARTICIPANTS, ETH, OWL}*/}
    <div style={{ marginBottom: "-5rem", alignItems:"center", justifyContent: "center", textAlign: "center",  display: "flex"}}>
            <div style={{margin: "25px", color: "white", fontSize: "30px"}}>
              <h2 style={{fontWeight: '100', color: "white"}}>Total Participants</h2>
              <p style= {{color: "white", fontSize:"36px"}}>{participants}</p>
            </div>

            <div style={{ margin: "10px",color: "black", fontSize: "30px"}}>
            <h2 style={{fontWeight: '100', color: "white"}}> Total ETH Received</h2>
            <p style= {{color: "white", fontSize:"36px"}}>{balance}</p>
            </div>
            
            <div style={{margin: "10px", color: "black",  fontSize: "30px"}}>
            <h2 style={{fontWeight: '100', color: "white"}}>Total OWL Distributed</h2>
              <p style= {{color: "white", fontSize:"36px"}}>1.3M</p>
            </div>  
    </div>
  </div>
  );
}
