import React from 'react';
import styles from './Heading.module.scss';
import { Row, Col } from 'reactstrap';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Heading = () => {
  let location = useLocation();
  let [sideNavbarState, setSideNavbarState] = useState(false);
  function sideNavMobile() {
    setSideNavbarState(true);
  }
  function sideNavMobileCloser() {
    setSideNavbarState(false);
  }
  useEffect(() => {
    console.log(location.pathname)
  }, [])
  return (
    <div className={styles.home_container}>
      <Row>
        <Col sm={12} md={12}>
          <div className={styles.navbar}>
            <div className={styles.navbar_heading}>
              <img src='Assets/heading.png' alt='heading image' />
            </div>
            <div className={styles.navbar_links}>
              <p className={location.pathname === "/" ? styles.active_links : ""}>
                <a >Home</a>
              </p>
              <p className={location.pathname === "/about" ? styles.active_links : ""}>
                <a href='#aboutus'>About</a>
              </p>
              <p className={location.pathname === "/dolphin-nft" ? styles.active_links : ""}>
                <a href='metadolphin.art'>DolphinArc NFTS</a>
              </p>
              <p className={location.pathname === "/blog" ? styles.active_links : ""}>
                <a href="https://medium.com/@metadolphin">
                  Blog
                </a>
              </p>
              <p className={location.pathname === "/faq" ? styles.active_links : ""}>
                <a href='https://www.metadolphin.io/faq'>FAQ</a>
              </p>
            </div>
            <div className={styles.navbar_icons}>
        <div className={styles.icons_container}>
              
              <a href="https://discord.gg/y5hgWKs54S">
              <img src='Assets/discordicon.png' alt='discord' />

              </a>
              <a href="https://www.instagram.com/dolphin_adalia/">
              <img src='Assets/instagramicon.png' alt='instagram' />

              </a>
              <a href="https://twitter.com/Dolphinhnft">
              <img id={styles.img2} src='Assets/twittericon.png' alt='twitter' />

              </a>
            </div>
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
                <img id={styles.img} src='Assets/twittericon.png' alt='' />
              </div>
            </div>
          ) : null}
        </Col>
        <Col sm={12} md={12}>
          <div className={styles.main_text}>
            <div>
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
