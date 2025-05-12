import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
      <div className="footer-top">
        <div className="footer-icons">
          <a href="#"><i className="fab fa-facebook-f" /></a>
          <a href="#"><i className="fab fa-linkedin-in" /></a>
          <a href="#"><i className="fab fa-instagram" /></a>
        </div>
        <div className="footer-contact">
          <div>
            <i className="fas fa-map-marker-alt" /> 
            Visit Us Today! <br />
            6845 Pembroke Rd., <br />Pembroke Pines, FL
          </div>
          <div>
            <i className="fas fa-phone-alt" /> 
            Give us a Call <br />
            +1 (954) 362-4302 <br />
            +1 (954) 508-6363
          </div>
          <div>
            <i className="fas fa-envelope" />
            Contact Us Today! <br />
            Get Therapy. Heal. Thrive.
          </div>
        </div>
      </div>

      <div className="footer-main">
        <div className="footer-section">
          <h4>About Us</h4>
          <p>
            At Physio Healing Therapy we care about you and your health and will do everything
            in our power to ensure your healing treatment and recovery is successful.
          </p>
          <strong>YOUR HEALING PATH STARTS HERE</strong>
        </div>
        <div className="footer-section">
          <h4>Our Therapy Center</h4>
          <ul>
            <li>About Us</li>
            <li>FAQ Page</li>
            <li>Patient Forms</li>
            <li>Wellness Tips</li>
            <li>All Our Services</li>
            <li>Book Appointment</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Our Services</h4>
          <ul>
            <li>Physical Therapy</li>
            <li>Orthopedic Therapy</li>
            <li>Massage Therapy</li>
            <li>Electrical Stimulation</li>
            <li>Ultrasound Therapy</li>
            <li>Extracorporeal Shock Wave</li>
            <li>Laser Therapy</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Opening Hours</h4>
          <ul>
            <li>Monday: 9:00 AM TO 5:00 PM</li>
            <li>Tuesday: 9:00 AM TO 6:00 PM</li>
            <li>Wednesday: 9:00 AM TO 6:00 PM</li>
            <li><strong>Thursday: 9:00 AM TO 6:00 PM</strong></li>
            <li>Friday: 9:00 AM TO 5:00 PM</li>
            <li>Saturday: By Appointment</li>
            <li>Sunday: Closed</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <span>2025 Copyright © Physio Healing Therapy. All Rights Reserved.</span>
        <span>Schedule your next <strong>Appointment</strong></span>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
