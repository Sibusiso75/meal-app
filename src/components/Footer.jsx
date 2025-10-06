import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
const Footer = () => {
  return (
    <footer className="footer">
      <div>
        {/* <div>
          <h5>Contact Us</h5>
          <p><MdEmail/> sibusisomatebese75@gmail.com</p>
          <p><FaPhone/> +27 63 1008729</p>
        </div> */}

        <div>
          <h5>Follow Us</h5>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebook/></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><FaTwitter/></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram/></a>
          </div>
        </div>
      </div>
      <p className="footer-bottom">© Sibusiso Matebese. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
