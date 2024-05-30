import React, { useState, useEffect } from "react";
import "./Navbar.css"; // Import CSS file for styling
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import img from "../resource/Profile.jpeg";
import { useDispatch, useSelector } from "react-redux";
import { setActiveNavMenu } from "../store/slice";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isNavSticky, setIsNavSticky] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [activeNavItem, setActiveNavItem] = useState("Home"); // Track active menu item
  const dispatch = useDispatch();
  const navigation = useNavigate();

  // Function to handle scroll event
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsNavSticky(true);
    } else {
      setIsNavSticky(false);
    }
  };

  // Add scroll event listener when component mounts
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Function to toggle navigation menu
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  // Function to handle menu item click
  const handleActiveLink = (link: string, path: any) => {
    dispatch(setActiveNavMenu(link));
    setActiveNavItem(link); // Update active menu item
    navigation(`/${path}`);
  };

  return (
    <nav className={`navbar ${isNavSticky ? "sticky" : ""}`}>
      <div className="navbar-top">
        <div className="contact-info">
          <span>
            <FontAwesomeIcon icon={faPhoneVolume} />
            &nbsp; Call: 7276969678
          </span>
          <span>
            <FontAwesomeIcon icon={faEnvelope} />
            &nbsp; Email: example@example.com
          </span>
        </div>
        <div className="select-wrapper">
          <select>
            <option value="en">
              <img src={img} alt="English" className="flag-icon" /> English
            </option>
            <option value="fr">
              <img src={img} alt="French" className="flag-icon" /> French
            </option>
          </select>
        </div>
      </div>
      <div className="navbar-bottom">
        <div className="nav-logo">Logo</div>
        <div className="nav-links">
          <div className={`nav-dropdown ${isNavOpen ? "open" : ""}`}>
            <button className="nav-dropdown-btn" onClick={toggleNav}>
              Menu
            </button>
            <div className="nav-dropdown-content">
              <a href="#home">Home</a>
              <a href="#about">About Us</a>
              <a href="#info">Regulatory</a>
              <a href="#contact">Product List</a>
              <a href="#contact">Contact Us</a>
            </div>
          </div>
          <div className="nav-links-desktop">
            <div
              onClick={() => handleActiveLink("Home", "")}
              style={{
                color: activeNavItem === "Home" ? "#31B651" : "#111418",
              }}
            >
              Home
            </div>
            <div
              onClick={() => handleActiveLink("About Us", "about-us")}
              style={{
                color: activeNavItem === "About Us" ? "#31B651" : "#111418",
              }}
            >
              About Us
            </div>
            <div
              onClick={() => handleActiveLink("Regulatory", "regulatory")}
              style={{
                color: activeNavItem === "Regulatory" ? "#31B651" : "#111418",
              }}
            >
              Regulatory
            </div>
            <div
              onClick={() => handleActiveLink("Product List", "product-list")}
              style={{
                color: activeNavItem === "Product List" ? "#31B651" : "#111418",
              }}
            >
              Product List
            </div>
            <div
              onClick={() => handleActiveLink("Contact Us", "contact-us")}
              style={{
                color: activeNavItem === "Contact Us" ? "#31B651" : "#111418",
              }}
            >
              Contact Us
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
