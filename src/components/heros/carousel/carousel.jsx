import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Hero1 from '../hero1/Hero1';
import Hero2 from '../hero2/Hero2';
import Hero3 from '../hero3/Hero3';
const CustomCarousel = () => {
  return (
    <Carousel
      className="custom-carousel"
      indicators={false}
      // prevIcon={
      //   <span style={{ color: '#4caf50', fontSize: '50px' }}>&lt;</span>
      // }
      // nextIcon={
      //   <span style={{ color: '#4caf50', fontSize: '50px' }}>&gt;</span>
      // }
    >
      <Carousel.Item>
        <Hero1 />
      </Carousel.Item>
      <Carousel.Item>
        <Hero2 />
      </Carousel.Item>
      <Carousel.Item>
        <Hero3 />
      </Carousel.Item>
    </Carousel>
  );
};

export default CustomCarousel;
