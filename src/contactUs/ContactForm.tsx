import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './ContactForm.css';
import image from "../resource/medic1.jpg"

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Replace these with your EmailJS credentials
    const SERVICE_ID = 'your_service_id';
    const TEMPLATE_ID = 'your_template_id';
    const USER_ID = 'your_user_id';

    emailjs.send(SERVICE_ID, TEMPLATE_ID, formData, USER_ID)
      .then((response) => {
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', phone: '', message: '' }); // Reset form
      })
      .catch((error) => {
        console.error('Failed to send message:', error);
      });
  };

  return (
    <div className="contact-form-container">
      <div className="form-section">
        <h2>Drop your message for any info or question.</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
      <div className="image-section">
        <img src={image} alt="Company" />
      </div>
    </div>
  );
};

export default ContactForm;
