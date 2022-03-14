import React from 'react';
import styles from './Intro.module.scss';
import { Row, Col } from 'reactstrap';

const Intro = () => {
  return (
    <>
      <div className={styles.bgimage}></div>
      <div className={styles.main_intro}>
        <Row>
          <Col sm={12} md={12}>
            <div className={styles.topPic}>
              <img src='Assets/wwrpic.png' className={styles.desktop} alt='' />
              <img
                src='Assets/wwrmobile.png'
                className={styles.mobile}
                alt=''
              />
            </div>
          </Col>
          <Col sm={12} md={12}>
            <div className={styles.intro}>
              <p id='aboutus'>
                who <span>we are?</span>
              </p>
            </div>
            <div className={styles.line}></div>
          </Col>
          <Col sm={12} md={12}>
            <div className={styles.linediv}>
              <img src='Assets/Line1.png' alt='' />
            </div>
          </Col>
          <Col sm={12} md={12}>
            <div className={styles.content}>
              <p>
                We are a <span>creator</span> led DAO. <span>DolphinArc</span>{' '}
                team has <span>professional industry experience</span> avg 5
                years, members graduated from world-renown academies like{' '}
                <span>Harvard, MIT, UCB,</span> etc. We are your
                <span>best Metaverse Experts and Builders</span> to fulfill the
                fantastic dreaming <span>future virtual architecture</span>{' '}
                needs. We support your life on a different dimension.
              </p>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Intro;
