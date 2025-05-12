import HeroSection from '../components/Hero';
import React, { useState } from 'react';
import './Services.css';

const services = [
  {
    title: 'Cardiac Rehabilition',
    description: 'We provide Physical Therapy services...',
    image: '/images/physical-therapy.jpg',
    link: '/CardiacRehabilition',
  },
  {
    title: 'Cerebal Palsy',
    description: 'We provide Orthopedic services...',
    image: '/images/orthopedic-therapy.jpg',
    link: '/CerebalPalsy',
  },
  {
    title: 'Chest Therapy',
    description: 'We provide Extracorporeal Shock Wave Therapy...',
    image: '/images/extracorporeal-shock.jpg',
    link: '/ChestTherapy',
  },
  {
    title: 'Chiropractic',
    description: 'We provide Ultrasound Therapy services.',
    image: '/images/ultrasound-therapy.jpg',
    link: '/Chiropractic',
  },
  {
    title: 'Facial Palsy & Bells Palsy',
    description: 'We provide Massage Therapy services.',
    image: '/images/massage-therapy.jpg',
    link: '/FacialPalsyBellsPalsy',
  },
  {
    title: 'Frozen Shoulder Nerve Compression',
    description: 'We provide Electrical Stimulation Therapy.',
    image: '/images/electrical-stimulation.jpg',
    link: '/FrozenShoulderNerveCompression',
  },
  {
    title: 'Joint Muscle Recovery',
    description: 'We provide Electrical Stimulation Therapy.',
    image: '/images/electrical-stimulation.jpg',
    link: '/JointMuscleRecovery',
  },
  {
    title: 'Knee & Ankle Pain',
    description: 'We provide Electrical Stimulation Therapy.',
    image: '/images/electrical-stimulation.jpg',
    link: '/KneeAnklePain',
  },
  {
    title: 'Osteoarthritis',
    description: 'We provide Electrical Stimulation Therapy.',
    image: '/images/electrical-stimulation.jpg',
    link: '/Osteoarthritis',
  },
  {
    title: 'Pain Management',
    description: 'We provide Electrical Stimulation Therapy.',
    image: '/images/electrical-stimulation.jpg',
    link: '/PainManagement',
  },
  {
    title: 'Post Surgery Stroke',
    description: 'We provide Electrical Stimulation Therapy.',
    image: '/images/electrical-stimulation.jpg',
    link: '/PostSurgeryStroke',
  },
  {
    title: 'Postural Alignment',
    description: 'We provide Electrical Stimulation Therapy.',
    image: '/images/electrical-stimulation.jpg',
    link: '/PosturalAlignment',
  },
  {
    title: 'Rheumatoid Arthritis',
    description: 'We provide Electrical Stimulation Therapy.',
    image: '/images/electrical-stimulation.jpg',
    link: '/RheumatoidArthritis',
  },
  {
    title: 'Sports Injuries',
    description: 'We provide Electrical Stimulation Therapy.',
    image: '/images/electrical-stimulation.jpg',
    link: '/SportsInjuries',
  },
  {
    title: 'Tendititis',
    description: 'We provide Electrical Stimulation Therapy.',
    image: '/images/electrical-stimulation.jpg',
    link: '/Tendititis',
  },
];

const Services = () => {
  const [showAll, setShowAll] = useState(false);

  const displayedServices = showAll ? services : services.slice(0, 6);

  return (
    <div className="services-section">
      <h2 className="services-title">Our Services</h2>
      <div className="services-grid">
        {displayedServices.map((service, index) => (
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

      {/* Show More / Show Less Button */}
      <div className="see-more-wrapper">
        <button onClick={() => setShowAll(!showAll)} className="see-more-btn">
          {showAll ? 'Show Less' : 'See More Services'}
        </button>
      </div>

      <HeroSection />
    </div>
  );
};

export default Services;
