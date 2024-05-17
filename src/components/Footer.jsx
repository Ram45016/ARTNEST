import React from 'react';
import '../assets/css/Footer.css';
import { Link } from 'react-router-dom';
import { FaInstagram, FaPhone, FaLinkedin } from 'react-icons/fa';

const Footer = ({ 
  aboutLink = { name: "About ArtNest", path: "/about-us" }, 
  legalLinks = [
    { name: 'Privacy Policy', path: '/privacy-policy' },
    { name: 'Terms and Conditions', path: '/terms-and-conditions' },
    { name: 'FAQ', path: '/faq' }
  ],
  socialLinks = [
    { icon: 'instagram', path: '#' },
    { icon: 'phone', path: 'tel:1234567890' },
    { icon: 'linkedin', path: '#' }
  ],
  feedbackLink = { name: 'Feedback', path: '/feedback' }  
}) => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h2>About Us</h2>
          <Link to={aboutLink.path} className="footer-link">
            {aboutLink.name}
          </Link>
        </div>
        <div className="footer-section">
          <h2>Legal</h2>
          {legalLinks.map(link => (
            <Link key={link.path} to={link.path} className="footer-link">
              {link.name}
            </Link>
          ))}
        </div>
        <div className="footer-section">
          <h2>Follow Us</h2>
          <div className="footer-icons">
            {socialLinks.map(link => (
              <a key={link.icon} href={link.path} className="footer-icon-link">
                {link.icon === "instagram" && <FaInstagram className="footer-icon" />}
                {link.icon === "phone" && <FaPhone className="footer-icon" />}
                {link.icon === "linkedin" && <FaLinkedin className="footer-icon" />}
              </a>
            ))}
          </div>
        </div>
        <div className="footer-section">
          <h2>Contact Us</h2>
          <Link to={feedbackLink.path} className="footer-link">
            {feedbackLink.name}
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
