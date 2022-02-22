import React from 'react';
import styles from './Intro.module.scss';
import { Row, Col } from 'reactstrap';

const Intro = () => {
  return (
    <div className={styles.main_intro}>
      <Row>
        <Col sm={12} md={12}>
          <div className={styles.intro}>
            <h1>
              Who <span>we are?</span>
            </h1>
          </div>
        </Col>
        <Col sm={12} md={12}>
          <div className={styles.linediv}>
            <img src='Assets/Line.png' alt='' />
          </div>
        </Col>
        <Col sm={12} md={12}>
          <div className={styles.content}>
            <p>
              We are a <span>creator</span> led DAO. <span>DolphinArc</span> team has <span>professional
              industry experience</span> avg 5 years, members graduated from
              world-renown academies like <span>Harvard, MIT, UCB,</span> etc. We are your
              <span>best Metaverse Experts and Builders</span> to fulfill the fantastic
              dreaming <span>future virtual architecture</span> needs. We support your life
              on a different dimension.
            </p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Intro;
