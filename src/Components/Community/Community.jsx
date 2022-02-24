import React from 'react';
import styles from './Community.module.scss';
import { Row, Col } from 'reactstrap';

const Community = ({ path }) => {
  const styleHandler = () => {
    if (path === 'dolphin') return styles.bg_dark;
    return styles.main_community;
  };
  return (
    <div className={styleHandler()}>
      <Row className={`${styles.row} gx-0`}>
        <Col sm={12} md={6}>
          <div className={styles.content}>
            <div className={styles.text}>
              <h3>Join Our Community</h3>
              <p>
                Subscribe Discord server channel to stay informed of our news
              </p>
              <button>Join our server</button>
            </div>
            <div className={styles.camabaImgMobile}>
              <img src='Assets/Camadamobile.png' alt='' />
            </div>
          </div>
        </Col>
        <Col sm={12} md={6}>
          <div className={styles.img}>
            <img src='Assets/Camada.png' alt='' />
          </div>
        </Col>
      </Row>
      <hr />
    </div>
  );
};

export default Community;
