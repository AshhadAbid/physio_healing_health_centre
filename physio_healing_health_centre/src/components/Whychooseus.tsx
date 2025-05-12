import React from 'react';
import './Whychooseus.css';
import {
  Stethoscope,
  Building2,
  ShieldCheck,
  HeartPulse,
  Users,
  Star,
} from 'lucide-react';

type Feature = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const features: Feature[] = [
  {
    icon: <Stethoscope size={28} strokeWidth={1.5} />,
    title: 'X-Ray Services In House',
    description: 'You don’t have to go anywhere else for a faster and better service',
  },
  {
    icon: <Building2 size={28} strokeWidth={1.5} />,
    title: 'State-of-the-Art Facility',
    description: 'We offer the most advanced technology and equipment',
  },
  {
    icon: <ShieldCheck size={28} strokeWidth={1.5} />,
    title: 'Licensed Therapists',
    description: 'Your treatment will be performed by the best licensed therapists',
  },
  {
    icon: <HeartPulse size={28} strokeWidth={1.5} />,
    title: 'Personalized Therapy',
    description: 'Treatment approach to meet your unique needs for faster results',
  },
  {
    icon: <Users size={28} strokeWidth={1.5} />,
    title: 'Experienced Staff',
    description: 'Our therapists are trained and certified in therapy technique',
  },
  {
    icon: <Star size={28} strokeWidth={1.5} />,
    title: 'VIP Service',
    description: 'With us you’ll become family and we’ll only provide VIP service',
  },
];

const Whychooseus = () => {
  return (
    <section className="choose-container">
      <h2 className="choose-title">Why <strong>Choose Us</strong></h2>
      <div className="choose-grid">
        {features.map((feature, idx) => (
          <div key={idx} className="choose-card">
            <div className="choose-icon">{feature.icon}</div>
            <div>
              <h4 className="choose-heading">{feature.title}</h4>
              <p className="choose-description">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Whychooseus;
