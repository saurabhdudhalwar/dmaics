import React from "react";
import FullWidthBanner from "../navbar/FullWidthBanner";
import image from "../resource/medic1.jpg";
import CompanyMap from "./CompanyMap";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

const ContactUs = () => {
  return (
    <div>
      <div>
        <FullWidthBanner image={image} title="Contact Us" />
      </div>
      <ContactInfo />
      <ContactForm />
      <div>
        <CompanyMap />
      </div>
    </div>
  );
};

export default ContactUs;
