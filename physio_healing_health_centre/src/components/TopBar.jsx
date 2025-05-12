import React from 'react';
import './TopBar.css';
import { FaCheckCircle, FaPhone, FaClock, FaMapMarkerAlt, FaHome } from 'react-icons/fa';

const TopBar = () => {
  return (
    <div className="topbar">
      <div className="topbar-item">
        <FaCheckCircle className="icon" />
        <div>
          <div className="title">Visit Us Today!</div>
          <div className="subtitle">Your Healing Path Starts Here</div>
        </div>
      </div>

      <div className="topbar-item">
        <FaPhone className="icon" />
        <div>
          <div className="title">Call Us</div>
          <div className="subtitle">+92 334 3655597</div>
        </div>
      </div>

      <div className="topbar-item">
        <FaClock className="icon" />
        <div>
          <div className="title">Opening Hours</div>
          <div className="subtitle">Mon-Sat: 9AM to 5PM</div>
        </div>
      </div>

      <div className="topbar-item">
        <FaHome className="icon" />
        <div>
          <div className="title">Home Service</div>
          <div className="subtitle">You Can Contact</div>
        </div>
      </div>

      <div className="topbar-item">
        <FaMapMarkerAlt className="icon" />
        <div>
          <div className="title">151-M Block-2</div>
          <div className="subtitle">Khalid Bin Waleed Road P.E.C.H.S Karachi</div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
