import React from 'react';
import styles from './Header.module.scss';
import { Row, Col } from 'reactstrap';

const Header = () => {
  return (
    <div className={styles.home_container}>
      <div className={styles.nav_container}>
        <div className={styles.logo_container}>
          <img src='Assets/logo.svg' alt='dolphin-logo' />
        </div>
        <div className={styles.icons_container}>
          <a href="https://discord.com/invite/YmjWNCsDCm" target="_blank">
            <img src='Assets/discord.svg' alt='discord' />
          </a>
          <a href="https://www.instagram.com/dolphin_adalia/" target="_blank">
            <img src='Assets/instagramicon.png' alt='instagram' />
          </a>
          <a href="https://twitter.com/Dolphinhnft" target="_blank">
            <img id={styles.img2} src='Assets/twitter.svg' alt='twitter' />
          </a>
        </div>
      </div>
      <Row className={`${styles.text_div} gx-0`}>
        <Col md={6} xs={12}>
          <div className={styles.center_container}>
            <div className={styles.text_container}>
              <div className={styles.text}>
                <p>
                  Subscribe for a <br />
                  chance to join
                </p>
                <h3>our Whitelist:</h3>
              </div>

              <div className={styles.form}>
                <div>
                  <span>Email</span>
                  <input type='email' name='' id='' />
                </div>

                <div>
                  <a href="mailto: contact@metadolphin.io">

                    <button>Submit</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Col>
        <Col></Col>
      </Row>
    </div>
  );
};

export default Header;
