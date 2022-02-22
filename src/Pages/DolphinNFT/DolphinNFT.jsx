import React from 'react'
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import RoadMap from '../../Components/RoadMap/RoadMap';
import styles from "./DolphinNFT.module.scss";

const DolphinNFT = () => {
  return (
    <div className={styles.home_container}>
        <Header/>
        <RoadMap/> 
        <Footer/>
        </div>
  )
}

export default DolphinNFT