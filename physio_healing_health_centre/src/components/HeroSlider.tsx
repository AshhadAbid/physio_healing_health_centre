import React, { useState, useEffect } from 'react';
import './HeroSlider.css';

type Slide = {
  image: string;
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
};

const slides: Slide[] = [
  {
    image: '/images/slide1.jpg',
    title: 'Heal Faster With Better Results',
    subtitle: 'Go Back To What You Love',
    buttonText: 'Book An Appointment',
    buttonLink: '#appointment',
  },
  {
    image: '/images/slide2.jpg',
    title: 'Comprehensive Care, Every Step',
    subtitle: 'Your Wellness Journey Starts Here',
    buttonText: 'Start Today',
    buttonLink: '#services',
  },
  {
    image: '/images/slide3.jpg',
    title: 'Experience Better Recovery',
    subtitle: 'Tailored Treatments For You',
    buttonText: 'See Treatments',
    buttonLink: '#treatments',
  },
  {
    image: '/images/slide4.jpg',
    title: 'Restore Your Motion, Restore Your Life',
    subtitle: 'Expert Physiotherapy Services',
    buttonText: 'Get Help Now',
    buttonLink: '#contact',
  },
  {
    image: '/images/slide5.jpg',
    title: 'Live Pain Free',
    subtitle: 'Professional & Personal Care',
    buttonText: 'Learn More',
    buttonLink: '#about',
  },
  {
    image: '/images/slide6.jpg',
    title: 'Start Feeling Better Today',
    subtitle: 'Your Health Is Our Mission',
    buttonText: 'Book a Visit',
    buttonLink: '#book',
  },
  {
    image: '/images/slide7.jpg',
    title: 'Compassionate. Trusted. Local.',
    subtitle: 'Serving Families For Over 10 Years',
    buttonText: 'Meet Our Team',
    buttonLink: '#team',
  },
];

const HeroSlider: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  useEffect(() => {
    const timer = setTimeout(nextSlide, 7000); // 7 seconds per slide
    return () => clearTimeout(timer);
  }, [current]);

  return (
    <div className="hero-slider">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`hero-slide ${index === current ? 'active' : ''}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="hero-overlay">
            <div className="hero-content">
              <p className="hero-subtitle">{slide.subtitle}</p>
              <h1 className="hero-title">{slide.title}</h1>
              <a href={slide.buttonLink} className="hero-button">
                {slide.buttonText}
              </a>
            </div>
          </div>
        </div>
      ))}
      <button className="arrow left" onClick={prevSlide}>&#10094;</button>
      <button className="arrow right" onClick={nextSlide}>&#10095;</button>
    </div>
  );
};

export default HeroSlider;
