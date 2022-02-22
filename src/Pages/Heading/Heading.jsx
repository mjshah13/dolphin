import React from 'react';
import styles from './Heading.module.scss';
import { Row, Col } from 'reactstrap';
import { useState } from 'react';

const Heading = () => {
  let [sideNavbarState, setSideNavbarState] = useState(false);
  function sideNavMobile() {
    setSideNavbarState(true);
  }
  function sideNavMobileCloser() {
    setSideNavbarState(false);
  }
  return (
    <div className={styles.home_container}>
      <Row>
        <Col sm={12} md={12}>
          <div className={styles.navbar}>
            <div className={styles.navbar_heading}>
              <img src='Assets/heading.png' alt='heading image' />
            </div>
            <div className={styles.navbar_links}>
              <p>Home</p>
              <p>About</p>
              <p>DolphinArc NFTS</p>
              <p>Blog</p>
              <p>FAQ</p>
            </div>
            <div className={styles.navbar_icons}>
              <img src='Assets/discordicon.png' alt='' />
              <img src='Assets/instagramicon.png' alt='' />
              <img src='Assets/twittericon.png' alt='' />
            </div>
            <div
              className={styles.navbar_icons_mobile}
              onClick={sideNavbarState ? sideNavMobileCloser : sideNavMobile}
            >
              <img src='Assets/Vector.png' alt='' />
            </div>
          </div>
          {sideNavbarState ? (
            <div className={styles.sideNavbarClass}>
              <div className={styles.navbar_links}>
                <p>Home</p>
                <p>About</p>
                <p>DolphinArc NFTS</p>
                <p>Blog</p>
                <p>FAQ</p>
              </div>
              <div className={styles.navbar_icons}>
                <img src='Assets/discordicon.png' alt='' />
                <img src='Assets/instagramicon.png' alt='' />
                <img src='Assets/twittericon.png' alt='' />
              </div>
            </div>
          ) : null}
        </Col>
        <Col sm={12} md={12}>
          <div className={styles.main_text}>
            <div>
              {/* <h1>Discover, Collect and Sell your </h1>
              <h1>Metaverse House NFTs</h1> */}
              <h1>Discover, Collect and Sell your Metaverse House NFTs</h1>
            </div>
            <div>
              <p>
                Dolphin is the world’s First and Largest virtual house NFT
                marketplace
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Heading;
