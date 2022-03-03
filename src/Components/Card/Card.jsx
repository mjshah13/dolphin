import React from 'react';
import styles from './Cards.module.scss';
import { Row, Col } from 'reactstrap';
import CardsComponent from '../Cards/Cards';

const Card = () => {
  return (
    <div className={styles.main_cards}>
      <Row className={styles.innerDiv}>
        <Col sm={12} md={12}>
          <CardsComponent
            img='Assets/Card1.png'
            mobileImg='Assets/cardmobile1.png'
            tilled='left'
            name='Virtual Real Estate'
            rightText='Lease for Ad'
            leftText='Land owner'
          />
        </Col>
        <Col sm={12} md={12}>
          <CardsComponent
            img='Assets/Card2.png'
            mobileImg='Assets/cardmobile2.png'
            tilled='right'
            name='Virtual Brick & Motar'
            rightText='Lease for Ad'
            leftText='Land owner'
          />
        </Col>
        <Col sm={12} md={12}>
          <CardsComponent
            img='Assets/Card3.png'
            mobileImg='Assets/cardmobile3.png'
            tilled='left'
            name='Event Hosting'
            rightText='Lease for Ad'
            leftText='Land owner'
          />
        </Col>
        <Col sm={12} md={12}>
          <CardsComponent
            img='Assets/Card4.png'
            mobileImg='Assets/cardmobile4.png'
            tilled='right'
            name='Virtual Brick & Motar'
            rightText='Lease for Ad'
            leftText='Land owner'
          />
        </Col>
      </Row>
    </div>
  );
};

export default Card;
