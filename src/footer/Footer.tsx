import React from "react";
import "./Footer.css";
import {
  FaTelegram,
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigation = useNavigate();


  const naigateto = (name: any) => {
    navigation(name);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'  // Smooth scrolling
    })
  }
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h1 className="footer-company-name">Dmaics</h1>
          <p>"Quality Drugs, Healthy Life"</p>
          <p className="footer-description">
            Zymeth Pharmaceutical is a fully-integrated pharmaceutical company
            that develops, manufactures, and markets pharmaceutical products all
            over the world.
          </p>
        </div>

        <div className="footer-section links">
          <h2 style={{ color: "#31B651" }}>Quick Links</h2>
          <ul>
            <li onClick={() => naigateto("/about-us")}>About us</li>
            <li onClick={() => naigateto("/contact-us")}>Contact us</li>
            <li onClick={() => naigateto("/regulatory")}>Our mission and strategy</li>
            <li onClick={() => naigateto("/regulatory")}>Our heritage</li>
            <li onClick={() => naigateto("/product-list")}>Products</li>
            <li onClick={() => naigateto("/about-us")}>What we do</li>
            <li>Policies codes and standards</li>
            <li>Community partnership</li>
          </ul>
        </div>

        <div className="footer-section contact">
          <h2 style={{ color: "#31B651" }}>Contact Us</h2>
          <div className="footer-social-icons">
            <FaTelegram />
            <FaInstagram />
            <FaFacebookF />
            <FaTwitter />
            <FaLinkedinIn />
          </div>
          <p>
            <FaMapMarkerAlt /> 902, Shapath V, Opp Karnavati Club, SG Highway,
            Ahmedabad-380015 (INDIA).
          </p>
          <p>
            <FaPhoneAlt /> Call: +91 9925269293
          </p>
          <p>
            <FaEnvelope /> info@zymeth.com
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Copyright © 2024 All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
