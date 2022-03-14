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
            rightText={{
              text: 'Lease for Ad',
              link: 'https://forms.gle/7zXiA2ahbnud8RVa9',
            }}
            leftText={{
              text: 'Land owner',
              link: 'https://forms.gle/QdP8i2xe8R3nU2vVA',
            }}
          />
        </Col>
        <Col sm={12} md={12}>
          <CardsComponent
            img='Assets/Card2.png'
            mobileImg='Assets/cardmobile2.png'
            tilled='right'
            name='Virtual Brick & Motor'
            singleLink={{
              text: 'Business Owner',
              link: 'https://forms.gle/fCd1513WoNmn28Z57',
            }}
          />
        </Col>
        <Col sm={12} md={12}>
          <CardsComponent
            img='Assets/Card3.png'
            mobileImg='Assets/cardmobile3.png'
            tilled='left'
            name='Event Hosting'
            singleLink={{
              text: 'Event host',
              link: 'https://forms.gle/73qesj6eWnrgMpGq5',
            }}
          />
        </Col>
        <Col sm={12} md={12}>
          <CardsComponent
            img='Assets/Card4.png'
            mobileImg='Assets/cardmobile4.png'
            tilled='right'
            name='General Architectures'
            rightText={{
              text: 'Sell yours',
              link: 'https://forms.gle/eGhdy7g4WEi4RGJL6',
            }}
            leftText={{
              text: 'Buy one',
              link: 'https://forms.gle/RU6fup4K1k7EASKUA',
            }}
          />
        </Col>
      </Row>
    </div>
  );
};

export default Card;
