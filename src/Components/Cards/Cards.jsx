import React from 'react';
import styles from './Cards.module.scss';

const CardsComponent = ({ img, tilled = false }) => {
  return (
    <div className={styles.cards}>
      <div className={`${tilled ? styles.tilled : null} ${styles.normal}`}>
        <img src={img} alt='cards' />
      </div>
    </div>
  );
};

export default CardsComponent;
