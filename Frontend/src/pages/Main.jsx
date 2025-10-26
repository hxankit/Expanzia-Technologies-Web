import React from 'react';
import Footer from '../components/HomePage/Footer';
import QueryPopup from '../components/HomePage/QueryPopup';
import usePopupTiming from '../hooks/usePopupTiming';
import GlobalStyles from '../components/HomePage/GlobalStyles';
import Navbar from '../components/HomePage/Navbar';
import Hero from '../components/HomePage/Hero';
import About from '../components/HomePage/About';
import Services from '../components/HomePage/Services';
import Portfolio from '../components/HomePage/Portfolio';
import Strengths from '../components/HomePage/Strengths';
import Testimonials from '../components/HomePage/Testimonials';
import TechStack from '../components/HomePage/TechStack';
import Contact from '../components/HomePage/Contact';


const

  Main = () => {
    const { showPopup, closePopup } = usePopupTiming(30000); // Show popup after 30 seconds

    return (
      <div className="font-sans antialiased">
        <GlobalStyles />
        <Navbar />

        <QueryPopup isOpen={showPopup} onClose={closePopup} />

        <main className="pt-16">
          <Hero />
          <About />
          <Services />
          <Portfolio />
          <Strengths />
          <Testimonials />
          <TechStack />
          <Contact />
        </main>

        <Footer />
      </div>
    );
  };

export default Main;