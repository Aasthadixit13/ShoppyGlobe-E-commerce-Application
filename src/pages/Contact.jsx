import React from 'react';
import '../styles/Contact.css';

const Contact = () => {
  return (
    <div className="contact-page d-flex justify-content-center align-items-center">
      <form className="form">
        <p className="title">Get in Touch</p>
        <p className="message">We'd love to hear from you! Fill the form below.</p>

        <label>
          <input required type="text" className="input" />
          <span>Full Name</span>
        </label>

        <label>
          <input required type="email" className="input" />
          <span>Email</span>
        </label>

        <div className="flex">
          <label>
            <input required type="text" className="input" />
            <span>City</span>
          </label>
          <label>
            <input required type="tel" className="input" />
            <span>Phone Number</span>
          </label>
        </div>

        <label>
          <textarea required rows="4" className="input"></textarea>
          <span>Your Message</span>
        </label>

        <button type="submit" className="submit">
          Send Message
        </button>

        <p className="signin">
          We'll get back to you within 24 hours
        </p>
      </form>
    </div>
  );
};

export default Contact;