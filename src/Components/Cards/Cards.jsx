
import React from 'react';
import styles from './Cards.module.scss';
import './OverRide.scss';

const Cards = ({ img, tilled, mobileImg, name, rightText, leftText }) => {
  return (
    <div className={`${tilled === 'left' ? styles.right : styles.left}`}>
      <div className={`${styles.cards} cards`}>
        <div className={styles.cardsImg}>
          <img className={styles.desktopImg} src={img} alt='' />
          <img className={styles.mobileImg} src={mobileImg} alt='' />
          <div className={styles.cardsArea}>
            <div className={styles.cardsInfo}>
              <h3>{name}</h3>
            </div>
            <div className={`${styles.buttons} buttons ${!leftText || !rightText ? "positionEnd" : ""}`}>
              {
                leftText && <div>
                  <a href={rightText?.link} target='_blank'>
                    <img src='Assets/leftbutton.png' alt='' />
                    {leftText?.text}
                  </a>
                </div>
              }

              {
                rightText && <div>
                  <a href={rightText?.link} target='_blank'>
                    <img src='Assets/rightbutton.png' alt='' /> {rightText?.text}
                  </a>
                </div>
              }

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
