import HeroSection from '../components/Hero';
import React from 'react';
import './Services.css';

const services = [
  {
    title: 'Physical Therapy',
    description: 'We provide Physical Therapy services. Your personal physical therapy begins with a comprehensive evaluation of...',
    image: '/images/physical-therapy.jpg',
    link: '/Physicaltherapy',
  },
  {
    title: 'Orthopedic Therapy',
    description: 'We provide Orthopedic services. Orthopedic therapy is a branch of physical therapy that focuses on...',
    image: '/images/orthopedic-therapy.jpg',
    link: '/Physicaltherapy',
  },
  {
    title: 'Extracorporeal Shock',
    description: 'We provide Extracorporeal Shock Wave Therapy services. Extracorporeal Shock Wave Therapy...',
    image: '/images/extracorporeal-shock.jpg',
    link: '/Physicaltherapy',
  },
  {
    title: 'Ultrasound Therapy',
    description: 'We provide Ultrasound Therapy services.',
    image: '/images/ultrasound-therapy.jpg',
    link: '/Physicaltherapy',
  },
  {
    title: 'Massage Therapy',
    description: 'We provide Massage Therapy services.',
    image: '/images/massage-therapy.jpg',
    link: '/Physicaltherapy',
  },
  {
    title: 'Electrical Stimulation',
    description: 'We provide Electrical Stimulation Therapy.',
    image: '/images/electrical-stimulation.jpg',
    link: '/Physicaltherapy',
  },
];

const Services = () => {
  return (
    <div className="services-section">
      <h2 className="services-title">Our Services</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="image-wrapper">
              <img src={service.image} alt={service.title} />
              <a href={service.link} className="image-overlay-button">Find out More</a>
            </div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <a className="find-more" href={service.link}>Find out More &rarr;</a>
            
          </div>
        ))}
      </div>
      <div>
        <HeroSection/>
      </div>
    </div>
  );
};

export default Services;

