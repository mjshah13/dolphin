import React from 'react';
import styles from './Cards.module.scss';
import { Row, Col } from 'reactstrap';
import CardsComponent from '../Cards/Cards';

const Card = () => {
  return (
    <div className={styles.main_cards}>
      <Row>
        <Col sm={12} md={6}>
          <CardsComponent img='Assets/Card1.png' />
        </Col>
        <Col sm={12} md={6}>
          <CardsComponent img='Assets/Card2.png' tilled={true} />
        </Col>
        <Col sm={12} md={6}>
          <CardsComponent img='Assets/Card3.png' />
        </Col>
        <Col sm={12} md={6}>
          <CardsComponent img='Assets/Card4.png' tilled={true} />
        </Col>
      </Row>
    </div>
  );
};

export default Card;
