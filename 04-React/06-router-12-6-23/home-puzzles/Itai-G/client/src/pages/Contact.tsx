import React from 'react';
import { Link } from 'react-router-dom';
import './contact.scss';

const Contact: React.FC = () => {
  return (
    <div className="contact-container">
      <h2>My Contact Info</h2>
      <p>Email: gelberg4322@gmail.com</p>
      <p>Phone Number: +972544803423</p>
      <Link to="/">Go to main page</Link>
    </div>
  );
};

export default Contact;