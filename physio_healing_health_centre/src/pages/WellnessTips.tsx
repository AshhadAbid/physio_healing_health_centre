import React from 'react';
import './WellnessTips.css';

import img1 from './public/logo192.png'; // replace with actual image names
import img2 from './public/logo192.png';
import img3 from './public/logo192.png';
import HeroSection from '../components/Hero';
import AboveSection from '../components/Above';

const WellnessTips = () => {
  const tips = [
    {
      image: './public/logo192.png',
      title: 'Treating Pain From Nerve Tension',
      description: 'Identifying and treating pain from nerve tension involves identifying the source of the tension and developing a treatment plan that addresses that underlying issue. This',
      link: '#',
    },
    {
      image: './public/logo192.png',
      title: 'How Physical Therapy Can Prevent Injuries',
      description: 'Physical therapy can prevent injuries by identifying and addressing risk factors that may contribute to the development of an injury. A physical therapist can evaluate',
      link: '#',
    },
    {
      image: './public/logo192.png',
      title: 'Therapy Effective for Carpal Tunnel',
      description: 'Therapy found effective for Carpel Tunnel Syndrome. Therapy is often recommended for carpal tunnel syndrome because it can help reduce pain, improve function, and prevent',
      link: '#',
    },
  ];

  return (
    <><div className="wellness-section">
          <h2 className="wellness-heading">Wellness Tips</h2>
          <div className="wellness-subtitle">Health and Wellness Information for a Better Life</div>

          <div className="wellness-cards">
              {tips.map((tip, index) => (
                  <div className="wellness-card" key={index}>
                      <img src={tip.image} alt="tip" className="wellness-image" />
                      <h3 className="wellness-title">{tip.title}</h3>
                      <p className="wellness-description">{tip.description}</p>
                      <a href={tip.link} className="read-more">Read More »</a>
                  </div>
              ))}
          </div>
      </div><AboveSection /></>
    
  );
};

export default WellnessTips;
