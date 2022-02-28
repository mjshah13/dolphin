import React from 'react';
import styles from './Cards.module.scss';

const CardsComponent = ({ img, tilled, mobileImg }) => {
  return (
    <div className={styles.cards}>
      <div className={`${tilled === "left" ? styles.right : styles.left}`}>
        <img src={img} alt='cards' className={styles.desktopImg}/>
        <img src={mobileImg} alt="mobilecards" className={styles.mobileImg} />
      </div>
    </div>
  );
};

export default CardsComponent;
