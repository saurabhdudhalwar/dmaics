import React from "react";
import { FaCapsules, FaSyringe, FaTooth, FaSprayCan } from "react-icons/fa";
import { GiWaterDrop } from "react-icons/gi";
import { MdSoap, MdLocalPharmacy } from "react-icons/md";
import { FaTablets } from "react-icons/fa6";

import "./Services.css";

const services = [
  { icon: <FaTablets />, title: "Tablets" },
  { icon: <FaCapsules />, title: "Capsules" },
  {
    icon: <MdLocalPharmacy />,
    title: "Oral Syrups/Solutions/Dry Syrup/Suspensions",
  },
  { icon: <FaSyringe />, title: "Injections (Liquid/Dry Powder/Lyophilized)" },
  { icon: <FaTooth />, title: "Dental Cartridges" },
  { icon: <GiWaterDrop />, title: "Ointment/Creams/Emulsions" },
  { icon: <MdSoap />, title: "Soap/Shampoo/Lotion" },
  { icon: <FaSprayCan />, title: "Aerosols/Liquid Spray" },
];

const Services = () => {
  return (
    <div className="services-section">
      <h2 className="services-title">What we offer</h2>
      <div className="services-container">
        {services.map((service: any, index: any) => (
          <div className="service-card" key={index}>
            <div className="service-icon">{service.icon}</div>
            <p className="service-title">{service.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
