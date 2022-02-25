import React from 'react';
import styles from './Header.module.scss';
import Logo from '../../Assets/logo.svg';
import Icon1 from '../../Assets/discord.svg';
import Icon2 from '../../Assets/twitter.svg';
import { Row, Col } from 'reactstrap';

const Header = () => {
  return (
    <div className={styles.home_container}>
      <div className={styles.nav_container}>
        <div className={styles.logo_container}>
          <img src={Logo} alt='dolphin-logo' />
        </div>
        <div className={styles.icons_container}>
          <img src={Icon1} alt='icon-1' />
          <img id={styles.img2} src={Icon2} alt='icon-2' />
        </div>
      </div>
      <Row className={`${styles.text_div} gx-0`}>
        <Col md={6} xs={12}>
          <div className={styles.center_container}>
            <div className={styles.text_container}>
              <p>
                Subscribe for a <br />
                chance to join
              </p>
              <h3>our whitelist:</h3>
              <div className={styles.form}>
                <div>
                  <span>Email</span>
                  <input type='email' name='' id='' />
                </div>

                <div>
                  <button>Submit</button>
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
