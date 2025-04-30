import React from 'react';
import './About.css';
import AboveSection from '../components/Above';

const About = () => {
  return (
    <div className="about-us-container">
      <h2 className="about-us-title">About Us</h2>
      <div className="underline" />

      <div className="about-us-content">
        <div className="column">
          <h3>Our <strong>Vision</strong></h3>
          <p>
            To be a company that attracts, rewards, and retains highly skilled physical therapy staff.
            Our proactive approach to the development of best business practices and promotion of effective
            treatment methods will help us accomplish this.
          </p>

          <h3>Our <strong>Philosophy</strong></h3>
          <p>
            Physio Healing Therapy is committed to providing high quality outpatient physical therapy services
            in beautiful state-of-the-art facilities.
          </p>
          <p>
            As a healthcare leader we partner with groups and events within the communities we serve. Our focus
            on our physical therapists continuing education is unmatched and guarantees our physical therapists
            understand and put into practice cutting-edge treatments and rehabilitation techniques available for
            all types of injuries and conditions.
          </p>
        </div>

        <div className="column">
          <h3>Our <strong>Mission</strong></h3>
          <p>
            We are committed to you and your overall health as healthcare professionals to help clients with their
            pain and suffering to regain their health, fitness, and well-being.
          </p>
          <p><strong>High Quality</strong><br />
            We take a personalized approach to healing. Whatever your goals might be we want to help you achieve them,
            so you can get back to the life you love.
          </p>
          <p><strong>Patient Care</strong><br />
            We’ll provide hands-on treatment in the office and education you can take home with you, enabling you to
            become an active participant in your recovery and future physical health.
          </p>
          <p><strong>Professional Service</strong><br />
            Our physical therapists have a combined 46 years of clinical experience and a shared passion for helping
            our community stay active and live the life everyone deserves.
          </p>
        </div>

        <div className="image-column">
          <img src={'/public/logo512.jpg'} alt="Clinic" />
          <div className="cta-text">
            <p>Your Healing Path<br />Starts Here<br />With Us</p>
          </div>
        </div>
      </div>
      <AboveSection />
    </div>
    
  );
};

export default About;
