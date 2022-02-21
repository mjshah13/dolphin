import React from 'react';
import styles from './Community.module.scss';
import { Row, Col } from 'reactstrap';

const Community = () => {
  return (
    <div className={styles.main_community}>
      <Row>
        <Col sm={12} md={6}>
          <div className={styles.content}>
            <div>
              <h3>Join Our Community</h3>
              <p>Subscribe Discord server channel to</p>
              <p>stay informed of our news</p>
              <button>Join our server</button>
            </div>
            <div className={styles.camabaImgMobile}>
              <img src="Assets/Camadamobile.png" alt="" />
            </div>
          </div>
        </Col>
        <Col sm={12} md={6}>
          <div className={styles.img}>
            <img src='Assets/Camada.png' alt='' />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Community;
