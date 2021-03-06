import React from 'react';
import styles from './Footer.module.scss';
import { Row, Col } from 'reactstrap';

const Footer = () => {
  return (
    <div className={styles.bg_dark}>
      <Row>
        <Col sm={12} md={12}>
          <div className={styles.footer}>
            <div className={styles.footerlogo}>
              <img src='Assets/logo.png' alt='footer logo' />
            </div>
            <div className={styles.footericons}>
              <a href="https://discord.com/invite/YmjWNCsDCm" target="_blank">
                <img src='Assets/discordfooter.png' alt='' />
              </a>
              <a href="https://www.instagram.com/dolphin_adalia/" target="_blank">
                <img src='Assets/instagramfooter.png' alt='' />
              </a>
              <a href="https://twitter.com/Dolphinhnft" target="_blank">
                <img src='Assets/twitterfooter.png' alt='' />
              </a>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Footer;
