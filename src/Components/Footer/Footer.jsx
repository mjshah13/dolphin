import React, { useEffect } from 'react';
import styles from './Footer.module.scss';
import { Row, Col } from 'reactstrap';

const Footer = ({ path }) => {
  const styleHandler = () => {
    if (path === 'dolphin') return styles.bg_dark;
    return styles.main_footer;
  };

  return (
    <div className={styleHandler()}>
      <Row>
        <Col sm={12} md={12}>
          <div className={styles.footer}>
            <div className={styles.footerlogo}>
              <img src='Assets/logo.png' alt='footer logo' />
            </div>
            <div className={styles.footericons}>
              <img src='Assets/discordfooter.png' alt='' />
              <img src='Assets/instagramfooter.png' alt='' />
              <img src='Assets/twitterfooter.png' alt='' />
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Footer;
