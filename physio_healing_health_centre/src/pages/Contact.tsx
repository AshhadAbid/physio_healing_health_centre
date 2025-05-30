import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <h2 className="contact-title">Contact Us</h2>
      <div className="contact-underline" />

      <div className="contact-top">
        <div className="contact-box">
          <h3>Physiotherapy Health Centre</h3>
          <p>151-M Block-2 Khalid Bin Waleed Road P.E.C.H.S Karachi</p>

          <p><strong>Phone Numbers</strong><br />
            Main: +92 (334) 3655597<br />
            Line2: +92 (334) 3655597<br />
            
          </p>

          <p><strong>Email Address</strong><br />
            info@physiotherapyhealthcentre.com
          </p>

          <p className="cta">GET THERAPY. HEAL. THRIVE.</p>
        </div>

        <div className="map-box">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14462.663289255945!2d67.12986705!3d25.011468800000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f005f36a883%3A0xcf587fb65cd4540f!2sPhysio%20Healing%20Health%20Centre!5e0!3m2!1sen!2s!4v1746047941172!5m2!1sen!2s"
            allowFullScreen
            loading="lazy"
            title="Google Map"
          />

        </div>
      </div>

      <h3 className="question-title">Got A Question? We're Here To Help</h3>

      <div className="contact-bottom">
        <div className="hours-box">
          <h4>Opening <strong>Hours</strong></h4>
          <ul>
            <li>Mon: 8:00 AM TO 12:00 PM And 6:00 PM TO 10:00 PM</li>
            <li>Tue: 8:00 AM TO 12:00 PM And 6:00 PM TO 10:00 PM</li>
            <li>Wed: 8:00 AM TO 12:00 PM And 6:00 PM TO 10:00 PM</li>
            <li>Thu: 8:00 AM TO 12:00 PM And 6:00 PM TO 10:00 PM</li>
            <li>Fri: 8:00 AM TO 12:00 PM And 6:00 PM TO 10:00 PM</li>
            <li>Sat: 8:00 AM TO 12:00 PM And 6:00 PM TO 10:00 PM</li>
            <li>Sunday: CLOSED</li>
          </ul>
        </div>

        <form className="form-box">
          <div className="form-row">
            <input type="text" placeholder="Full Name *" required />
            <input type="text" placeholder="The Subject" />
          </div>
          <div className="form-row">
            <input type="email" placeholder="Email Address *" required />
            <textarea placeholder="Type your question..." rows={4} />
          </div>
          <div className="form-row">
            <input type="tel" placeholder="Phone Number *" required />
            <input type="text" placeholder="Receive Answer By:" />
          </div>
          <div className="form-row">
            <button type="submit">Send Question</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
