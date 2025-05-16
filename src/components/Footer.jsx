import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div>
          <h3>Contact Us</h3>
          <p><MdEmail/> sibusisomatebese75@gmail.com</p>
          <p><FaPhone/> +27 63 1008729</p>
        </div>

        <div>
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebook/></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><FaTwitter/></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram/></a>
          </div>
        </div>
      </div>
      <p className="footer-bottom">© 2025 Meal Recipe App. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
