import React from 'react';
import './ServicePages.css';
import { Link } from 'react-router-dom';

const Osteoarthritis = () => {
  return (
    <div className="therapy-container">
      <div className="therapy-main">
        <h1>Osteoarthritis</h1>
        <hr className="blue-line" />
        <h4 className="blue-heading">We provide Physical Therapy services</h4>
        <div className="therapy-grid">
          <div className="text-and-images">
            <img src="/public/logo512.jpg" alt="Therapy 1" className="img-left" />
            <p>
              Your personal physical therapy begins with a comprehensive evaluation of functional limitations and areas of pain. Our team of expert physical therapists will design a treatment plan based on your pain-related needs and goals. We take a team approach to make sure that throughout your treatment, we will work hard to help you return to all normal functional activities.
            </p>
            <p>
              When you are ready for discharge, you will receive a personalized home exercise program to allow you to stay healthy to further enhance your rehabilitation.
            </p>
            <p>
              Physical therapy is a healthcare specialty that focuses on the prevention, management, and treatment of movement disorders or impairments, such as pain, weakness, or loss of mobility. Physical therapists work with individuals of all ages and backgrounds to help them achieve their optimal physical functioning and improve their quality of life.
            </p>
            <p>
              Physical therapists use a variety of techniques and interventions, such as exercise, manual therapy, modalities, and education, to address these conditions and help their patients achieve their optimal physical functioning.
            </p>
            <img src="/public/logo512.jpg" alt="Therapy 2" className="img-left" />

            <h4 className="blue-heading">
              Our physical therapists can treat a wide range of conditions that affect the musculoskeletal, neurological, and cardiovascular systems. Some common conditions that physical therapists treat include:
            </h4>
            <ol>
              <li>Orthopedic conditions: arthritis, back pain, neck pain, joint pain, sprains or strains.</li>
              <li>Neurological conditions: stroke, Parkinson’s disease, multiple sclerosis, spinal cord injuries.</li>
              <li>Cardiovascular conditions: heart disease, hypertension, pulmonary disease.</li>
              <li>Sports injuries: strains, ligament sprains, fractures.</li>
              <li>Chronic pain: fibromyalgia, chronic fatigue syndrome, neuropathic pain.</li>
            </ol>

            <img src="/public/logo512.jpg" alt="Therapy 3" className="img-right" />
          </div>

          <div className="sidebar">
            <div className="sidebar-box">
              <h3>Our Services</h3>
              <ul>
                <li><Link to="/JointMuscleRecovery">Joint & Muscle Recovery</Link></li>
                <li><Link to="/FrozenShoulderNerveCompression">Frozen Shoulder and Nerve Compression</Link></li>
                <li><Link to="/PosturalAlignment">Postural Alignment</Link></li>
                <li><Link to="/PostSurgeryStroke">Post-Surgery & Stroke Rehabilitation</Link></li>
                <li><Link to="/KneeAnklePain">Knee and Ankle Pain Treatment</Link></li>
                <li><Link to="/CardiacRehabilition">Cardiac Rehabilitation</Link></li>
                <li><Link to="/CerebalPalsy">Cerebral Palsy</Link></li>
                <li><Link to="/Tendititis">Tendititis</Link></li>
                <li><Link to="/SportsInjuries">Sports Injuries</Link></li>
                <li><Link to="/Chiropractic">Chiropractic</Link></li>
                <li><Link to="/FacialPalsyBellsPalsy">Facial Palsy & Bells Palsy</Link></li>
                <li><Link to="/ChestTherapy">Chest Therapy</Link></li>
                <li><Link to="/PainManagement">Pain Management</Link></li>
                <li><Link to="/RheumatoidArthritis">Rheumatoid Arthritis</Link></li>
              </ul>
            </div>
            <div className="sidebar-box hours">
              <h3>Opening Hours</h3>
              <p>Monday: 9:00 AM to 5:00 PM</p>
              <p>Tuesday: 9:00 AM to 6:00 PM</p>
              <p>Wednesday: 9:00 AM to 6:00 PM</p>
              <p>Thursday: 9:00 AM to 6:00 PM</p>
              <p>Friday: 9:00 AM to 5:00 PM</p>
              <p>Saturday: By Appointment</p>
              <p>Sunday: Closed</p>
              <a href="tel:+923343655597" className="appointment-btn">Book an Appointment</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Osteoarthritis;
