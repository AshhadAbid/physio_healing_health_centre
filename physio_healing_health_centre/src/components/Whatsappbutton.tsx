import React from "react";
import "./Whatsappbutton.css";

const WhatsappButton: React.FC = () => {
  const phoneNumber = "923343655597"; // Replace with actual number
  const message = "Hello! I'm interested in Physiotherapy at life care.";
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="whatsapp-button">
      <img src="/whatsapp.png" alt="WhatsApp Chat" />
    </a>
  );
};

export default WhatsappButton;
