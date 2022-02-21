import React from 'react';
import styles from './Footer.module.scss';
import { Row, Col } from 'reactstrap';

const Footer = () => {
  return (
    // <div className={styles.main_footer}>
    //   <Row>
    //     <Col sm={6} md={6}>
    //         <div className={styles.footerlogo}>
    //             <img src="Assets/logo.png" alt="footer logo" />
    //         </div>
    //     </Col>
    //     <Col sm={6} md={6}>
    //         <div className={styles.footericons}>
    //             <img src="Assets/discordfooter.png" alt="" />
    //             <img src="Assets/instagramfooter.png" alt="" />
    //             <img src="Assets/twitterfooter.png" alt="" />
    //         </div>
    //     </Col>
    //   </Row>
    // </div>
    <div className={styles.main_footer}>
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
