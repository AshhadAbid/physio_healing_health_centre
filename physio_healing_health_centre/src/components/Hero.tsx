import React from 'react';
import './Hero.css';


const HeroSection = () => {
  return (
    <div className="hero-section" style={{ backgroundImage: `(./public/logo512)` }}>
      <div className="hero-content">
        <p>Get an Initial Consultation</p>
        <p>with an Orthopedic Doctor upon request</p>
        <a href="#" className="hero-button">Contact Us Today!</a>
      </div>
    </div>
  );
};

export default HeroSection;
