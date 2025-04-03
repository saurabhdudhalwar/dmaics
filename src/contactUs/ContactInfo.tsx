import React from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import "./ContactInfo.css"; // Import the CSS file

const ContactInfo = () => {
  return (
    <div className="contact-info-plat">
      
      <div className="contact-item">
        <FaEnvelope size={80} />
        <div style={{marginTop: "8px"}}>
          <p>
            <a href="mailto:info@zymeth.com" style={{color:"#000000"}}>info@zymeth.com</a>
          </p>
        </div>
      </div>
      <div className="contact-item">
        <FaMapMarkerAlt size={80} />
        <div style={{marginTop: "8px"}}>
          <a href="mailto:info@zymeth.com" style={{color:"#000000"}}>
            902, Shapath V, Opp Karnavati Club, SG Highway, Ahmedabad-380015
            (INDIA)
          </a>
        </div>
      </div>
      <div className="contact-item">
        <FaPhoneAlt size={80} />
        <div style={{marginTop: "8px"}}>
          <p>
            <a href="tel:+91 99252 69293" style={{color:"#000000"}}>+91 99252 69293</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
