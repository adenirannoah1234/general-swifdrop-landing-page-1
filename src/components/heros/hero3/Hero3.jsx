import React from 'react';
import { Link } from 'react-router-dom';
import image1 from '../../../assets/image1.png';

const Hero3 = () => {
  return (
    <div className="hero3">
      <div>
        <h1>
          <span>Delicious</span> Deliveries, Delivered to your Doorstep!
        </h1>
        <p>
          Our mission is to bring the diverse flavors of your city to your table
          with the ease of a click. We partner with renowned local restaurants
          to ensure you experience the best the culinary has to offer.
        </p>
        <div>
          <input type="text" />
          <button>Submit</button>
        </div>
        <div>
          {/* <Link to="/">Want to be a swift rider?</Link>
          <Link to="/">Register your Restaurant</Link> */}
        </div>
      </div>
      <img src={image1} alt="" />
    </div>
  );
};

export default Hero3;
