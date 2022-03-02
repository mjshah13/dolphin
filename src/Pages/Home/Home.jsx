import React from 'react';
import styles from './Home.module.scss';
import Heading from '../../Components/Heading/Heading';
import Card from '../../Components/Card/Card';
import Intro from '../../Components/Intro/Intro';
import Contact from '../../Components/Contact/Contact';
import Community from '../../Components/Community/Community';
import Footer from '../../Components/Footer/Footer';

const HomePage = () => {
  return (
    <>
      <Heading />
      <Card />
      <Intro />
      <Contact />
      <Community path={'home'} />
      <Footer path={'home'} />
    </>
  );
};

export default HomePage;
