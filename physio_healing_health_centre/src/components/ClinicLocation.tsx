import React from 'react';
import './ClinicLocation.css';

const ClinicLocation = () => {
  return (
    <div className="location-wrapper">
      <h2 className="location-title">Visit <span>Us Today!</span> We have two locations:</h2>
      <h3 className="location-subtitle">
        Pembroke Pines location - Phone: <span>954-362-4302</span>
      </h3>
      <div className="map-container">
        <iframe
          title="Pembroke Pines Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3584.8508729023635!2d-80.22172192465165!3d25.996288577218994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9abf3f99fda4d%3A0x9c67d4abde3ea48a!2s6845%20Pembroke%20Rd%2C%20Pembroke%20Pines%2C%20FL%2033023%2C%20USA!5e0!3m2!1sen!2s!4v1718185327346!5m2!1sen!2s"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default ClinicLocation;
