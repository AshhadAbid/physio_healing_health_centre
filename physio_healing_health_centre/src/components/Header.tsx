import { Link } from "react-router-dom";
import './Header.css'; // External CSS file
import servicesNavLinks from "./servicesNavLinks";
const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-section">
          <img src={'./public/logo512'} alt="Logo Icon" className="logo-icon" />
          <div className="logo-text">
            <span className="physio">PHYSIO</span>
            <span className="healing">HEALING</span>
            <div className="therapy">CENTRE</div>
          </div>
        </div>

        <nav>
          <ul className="nav-list">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <div className="dropdown">
              <li><Link to="/services">Services</Link></li>
              <div className="dropdown-content">
                {servicesNavLinks.map((service, index) => (
                  <li key={index}>
                    <Link to={service.path}>{service.name}</Link>
                  </li>
                ))}
              </div>
            </div>

            <li><Link to="/wellnesstips">Wellness Tips</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>


          </ul>
        </nav>

        <a href="tel:+923343655597" className="appointment-btn">
          Book an Appointment
        </a>
      </div>

    </header>
  );
};

export default Header;
