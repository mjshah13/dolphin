import React from 'react';
import styles from './Home.module.scss';
import { Row, Col } from 'reactstrap';
import Heading from '../Heading/Heading';
import Cards from '../Cards/Cards';
import Intro from '../Intro/Intro';
import Contact from '../Contact/Contact';
import Community from '../Community/Community';
import Footer from '../Footer/Footer';

const HomePage = () => {
  return (
    <>
      <Heading />
      <Cards />
      <Intro />
      <Contact />
      <Community />
      <Footer />
    </>
  );
};

export default HomePage;
