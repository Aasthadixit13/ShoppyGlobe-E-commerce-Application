

import React from 'react';
import '../styles/Footer.css';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
  
      <div className="footer-row" style={{ fontSize: '18px' }}>

      
        <div className="footer-left">
          
          <span style={{ color: 'black', fontSize: '20px' }}>Follow us:</span>

<FaFacebookF style={{ fontSize: '22px' }} />
<FaTwitter   style={{ fontSize: '22px'}} />
<FaInstagram style={{ fontSize: '22px'}} />
<FaLinkedinIn style={{ fontSize: '22px' }} />

        </div>

   
        <div className="footer-right">
          <a href="/">Home</a>
          <a href="/faqs">FAQs</a>
          <a href="/contact">Contact Us</a>
          <a href="/about">About Us</a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
