import { Link } from "react-router-dom";
import './Header.css'; // External CSS file

const Header = () => {
  return (
    <header className="header">
      <div className="logo-section">
        <img src={'./public/logo512'} alt="Logo Icon" className="logo-icon" />
        <div className="logo-text">
          <span className="physio">PHYSIO</span>
          <span className="healing">HEALING</span>
          <div className="therapy">THERAPY</div>
        </div>
      </div>

      <nav>
        <ul className="nav-list">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/wellnesstips">Wellness Tips</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>
      </nav>

      <button className="appointment-btn">Book an Appointment</button>
    </header>
  );
};

export default Header;
