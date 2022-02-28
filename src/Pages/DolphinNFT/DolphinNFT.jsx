import React from 'react';
import Header from '../../Components/Header/Header';
import RoadMap from '../../Components/RoadMap/RoadMap';
import Footer from '../../Components/Footer/Footer';
import styles from './DolphinNFT.module.scss';
import Community from '../../Components/Community/Community';

const DolphinNFT = () => {
  return (
    <div className={styles.home_container}>
      <Header />
      <RoadMap />
      <Community />
      <Footer />
    </div>
  );
};

export default DolphinNFT;
