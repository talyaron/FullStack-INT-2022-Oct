import React, { useState } from 'react';
import Navbar from '../components/navbar/Navbar';
import "./feedback.scss"

const FeedbackForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Submitting feedback:', { name, email, message });

    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <form className="feedback-form" onSubmit={handleSubmit}>
          <h2>Feedback Form</h2>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              className="input-field"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              className="input-field"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              className="input-field"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="submit-btn">Submit</button>
        </form>
      </div>
    </>
  );
};

export default FeedbackForm;