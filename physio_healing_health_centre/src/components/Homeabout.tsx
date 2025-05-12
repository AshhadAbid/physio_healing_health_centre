import React from 'react';
import './Homeabout.css';

const Homeabout = () => {
  return (
    <div className="contact-container">
      <h3 className="question-title">Got A Question? We're Here To Help</h3>

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
  );
};

export default Homeabout;