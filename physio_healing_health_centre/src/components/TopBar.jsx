import React from 'react';
import './TopBar.css';
import { FaCheckCircle, FaPhone, FaClock, FaMapMarkerAlt } from 'react-icons/fa';

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
          <div className="title">Give us a Call</div>
          <div className="subtitle">+1 (954) 362-4302</div>
        </div>
      </div>

      <div className="topbar-item">
        <FaClock className="icon" />
        <div>
          <div className="title">Opening Hours</div>
          <div className="subtitle">Mon-Fri: 9AM to 5PM</div>
        </div>
      </div>

      <div className="topbar-item">
        <FaMapMarkerAlt className="icon" />
        <div>
          <div className="title">6845 Pembroke Rd.</div>
          <div className="subtitle">Pembroke Pines, FL</div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
