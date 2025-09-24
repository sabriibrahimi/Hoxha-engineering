import React from 'react';
import Header from '../components/layout/Header';
import Hero from '../components/home/Hero';
import Stats from '../components/home/Stats';
import Services from '../components/home/Services';
import About from '../components/home/About';
import Founders from '../components/home/Founders';
import Contact from '../components/home/Contact';
import Footer from '../components/layout/Footer';

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Stats />
      <Services />
      <About />
      <Founders />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
