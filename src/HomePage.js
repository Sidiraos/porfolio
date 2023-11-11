import React from 'react';
import Contact from './components/Contact/Contact';
import LandingPage from './components/LandingPage/LandingPage';
import Projects from './components/Projects/Projects';
import ScrollToHashElement from './ScrollToHashElement';
import ScrollToTop from './ScrollTop';
import MyTech from './components/Projects/MyTech';
import Footer from './components/Footer/Footer';

const HomePage = () => {
  return (
    <>
    <ScrollToTop />
    <ScrollToHashElement />
    <LandingPage />
    <MyTech />
    <Projects />
    <Contact />
    <Footer />
    </>

  )
}

export default HomePage