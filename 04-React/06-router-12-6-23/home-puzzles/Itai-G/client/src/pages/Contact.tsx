import React from 'react';
import { Link } from 'react-router-dom';

const Contact: React.FC = () => {
  return (
    <div>
      <h2>My Contact Info</h2>
      <p>Email:gelberg4322@gmail.com</p>
      <p>Phone Number : +972544803423</p>
      <Link to='/'>GO to main page</Link>
    </div>
  );
};

export default Contact;