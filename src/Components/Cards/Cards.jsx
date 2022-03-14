import React from 'react';
import styles from './Cards.module.scss';
import './OverRide.scss';
import { ReactSVG } from 'react-svg';

const Cards = ({
  img,
  tilled,
  mobileImg,
  name,
  rightText,
  leftText,
  singleLink,
}) => {
  return (
    <div className={`${tilled === 'left' ? styles.right : styles.left}`}>
      <div className={`${styles.cards} cards`}>
        <div className={styles.cardsImg}>
          <img className={styles.desktopImg} src={img} alt='' />
          <img className={styles.mobileImg} src={mobileImg} alt='' />
          <div
            className={`${styles.cardsArea} ${
              singleLink && styles.cards_area_single_link
            }`}
          >
            <div className={styles.cardsInfo}>
              <h3>{name}</h3>
            </div>
            <div
              className={`${styles.buttons} buttons ${
                !leftText || !rightText ? 'positionEnd' : ''
              }`}
            >
              {leftText && (
                <div>
                  <a href={rightText?.link} target='_blank'>
                    <button>
                      <ReactSVG src='Assets/arrow-left-long-solid.svg' />
                    </button>
                    {leftText?.text}
                  </a>
                </div>
              )}

              {rightText && (
                <div>
                  <a href={rightText?.link} target='_blank'>
                    {rightText?.text}
                    <button>
                      <ReactSVG
                        src='Assets/arrow-right-long-solid.svg'
                        alt=''
                      />
                    </button>
                  </a>
                </div>
              )}
              {singleLink && (
                <div className={styles.single_btn}>
                  <a href={singleLink?.link} target='_blank'>
                    <button>
                      <ReactSVG
                        src='Assets/arrow-right-long-solid.svg'
                        alt=''
                      />
                    </button>
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
