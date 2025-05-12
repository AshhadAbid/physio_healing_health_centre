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
            151-M Block-2, <br />Khalid Bin Waleed Road P.E.C.H.S Karachi
          </div>
          <div>
            <i className="fas fa-phone-alt" /> 
            Give us a Call <br />
            +92 (334) 3655597 <br />
            +92 (334) 3655597

          </div>
          <div>
            <i className="fas fa-envelope" />
            Contact Us Today! <br />
            Get Your Treatment.
          </div>
        </div>
      </div>

      <div className="footer-main">
        <div className="footer-section">
          <h4>About Us</h4>
          <p>
            At Physiotherapy Healing Centre we care about you and your health and will do everything
            in our power to ensure your healing treatment and recovery is successful.
          </p>
          <strong>YOUR HEALING PATH STARTS HERE</strong>
        </div>
        <div className="footer-section">
          <h4>Our Therapy Center</h4>
          <ul>
            <li>About Us</li>
            <li>Wellness Tips</li>
            <li>All Our Services</li>
            <li>Book Appointment</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Our Services</h4>
          <ul>
            <li>Cardiac Rehabilition</li>
            <li>Cerebal Palsy</li>
            <li>Chest Therapy</li>
            <li>Chiropractic</li>
            <li>Facial Palsy & Bells Palsy</li>
            <li>Frozen Shoulder Nerve Compression</li>
            <li>Joint Muscle Recovery</li>
            <li>Knee & Ankle Pain</li>
            <li>Osteoarthritis</li>
            <li>Pain Management</li>
            <li>Post Surgery Stroke</li>
            <li>Postural Alignment</li>
            <li>Rheumatoid Arthritis</li>
            <li>Sports Injuries</li>
            <li>Tendititis</li>

          </ul>
        </div>
        <div className="footer-section">
          <h4>Opening Hours</h4>
          <ul>
            <li>Mon: 8:00 AM TO 12:00 PM And 6:00 PM TO 10:00 PM</li>
            <li>Tue: 8:00 AM TO 12:00 PM And 6:00 PM TO 10:00 PM</li>
            <li>Wed: 8:00 AM TO 12:00 PM And 6:00 PM TO 10:00 PM</li>
            <li>Thu: 8:00 AM TO 12:00 PM And 6:00 PM TO 10:00 PM</li>
            <li>Fri: 8:00 AM TO 12:00 PM And 6:00 PM TO 10:00 PM</li>
            <li>Sat: 8:00 AM TO 12:00 PM And 6:00 PM TO 10:00 PM</li>
            <li>Sunday: Closed</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <span>2025 Copyright © Physiotherapy Healing Centre. All Rights Reserved.</span>
        <span>Book your next <strong>Appointment</strong></span>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
