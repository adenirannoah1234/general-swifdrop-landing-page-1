import React from 'react';
import CustomNavbar from '../navbar/Navbar';
import CustomCarousel from '../heros/carousel/carousel';
import Hero1 from '../heros/hero1/Hero1';
import Hero2 from '../heros/hero2/Hero2';
import About from '../about/About';
import Services from '../services/Services';
import Download from '../download/Download';
import Partner from '../partner/Partner';
import Footer from '../footer/Footer';
// import Hero3 from '../heros/hero3/Hero3';
const Home = () => {
  return (
    <div>
      <CustomNavbar />
      <CustomCarousel />
      <About />
      <Services />
      <Download />
      <Partner />
      <Footer />
      {/* <Hero1 /> */}
      {/* <Hero2 /> */}
      {/* <Hero3 /> */}
    </div>
  );
};

export default Home;
