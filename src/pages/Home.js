import React from 'react';
import Header from '../components/layout/Header';
import Hero from '../components/home/Hero';
import Stats from '../components/home/Stats';
import StandardsPanel from '../components/home/StandardsPanel';
import Services from '../components/home/Services';
import About from '../components/home/About';
import Process from '../components/home/Process';
import FeaturedProjects from '../components/home/FeaturedProjects';
import Founders from '../components/home/Founders';
import Contact from '../components/home/Contact';
import Footer from '../components/layout/Footer';
import BackToTop from '../components/common/BackToTop';

const Home = () => {
  return (
    <div className="overflow-x-hidden bg-surface">
      <Header />
      <Hero />
      <Stats />
      <StandardsPanel />
      <Services />
      <About />
      <Process />
      <FeaturedProjects />
      <Founders />
      <Contact />
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Home;
