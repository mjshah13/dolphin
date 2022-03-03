// import React from 'react';
// import styles from './Cards.module.scss';

// const CardsComponent = ({ img, tilled, mobileImg }) => {
//   return (
//     <div className={styles.cards}>
//       <div className={`${tilled === "left" ? styles.right : styles.left}`}>
//         <img src={img} alt='cards' className={styles.desktopImg}/>
//         <img src={mobileImg} alt="mobilecards" className={styles.mobileImg} />
//       </div>
//     </div>
//   );
// };

// export default CardsComponent;

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
            <div className={`${styles.buttons} buttons`}>
              <div>
                <p>
                  <img src='Assets/leftbutton.png' alt='' />
                  {leftText}
                </p>
              </div>
              <div>
                <p>
                  <img src='Assets/rightbutton.png' alt='' /> {rightText}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
