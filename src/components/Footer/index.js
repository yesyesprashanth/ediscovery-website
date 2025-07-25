'use client';

import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaLinkedin
} from 'react-icons/fa';
import CareerForm from '../CareerForm';
import { useState } from 'react';
import './styles.css';

const Footer = () => {
  const [isCareerFormOpen, setIsCareerFormOpen] = useState(false);

  return (
    <footer id="contact" className="footer">
      <div className="footer-container">
        <div className="footer-content">
          {/* Left Section - Company Info */}
          <div className="company-info">
            <h2 className="company-name">eDiscovery Automation Pvt Ltd</h2>
            <p className="company-description">
              eDiscovery Automation Pvt Ltd is a leading provider of innovative laboratory automation solutions. 
              We specialize in delivering high-quality automated systems and exceptional service to 
              research institutions and industrial laboratories across India.
            </p>
            <a 
              href="#" 
              className="career-link" 
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({
                  top: window.innerHeight * 0.10,
                  behavior: 'smooth'
                });
                setTimeout(() => setIsCareerFormOpen(true), 300);
              }}
              style={{
                display: 'inline-block',
                marginTop: '1rem',
                color: 'var(--primary-color)',
                fontSize: '1.1rem',
                fontWeight: '500',
                textDecoration: 'none',
                transition: 'opacity 0.3s ease'
              }}
              onMouseEnter={(e) => e.target.style.opacity = '0.8'}
              onMouseLeave={(e) => e.target.style.opacity = '1'}
            >
              Career@ediscovery
            </a>
          </div>

          {/* Right Section - Contact Info */}
          <div className="contact-info">
            <h2 className="contact-title">Get in Touch</h2>
            
            {/* Phone Numbers */}
            <div className="contact-item">
              <FaPhone className="contact-icon" />
              <div className="contact-text">
                <p className="mb-2">+91 96323 11966</p>
                <p>+91 80 2677 0343</p>
              </div>
            </div>

            {/* Email */}
            <div className="contact-item">
              <FaEnvelope className="contact-icon" />
              <a 
                href="mailto:info@ediscoveryindia.com" 
                className="contact-text social-link"
              >
                info@ediscoveryindia.com
              </a>
            </div>

            {/* Address */}
            <div className="contact-item" style={{ position: 'relative' }}>
              <p className="contact-text">
                No. 3009/2, 2nd Floor,<br />
                2nd Main, 19th Cross,<br />
                K.R.Road, Banashankari II Stage<br />
                Bangalore – 560 070, India
              </p>
              {/* Map link and icon removed */}
            </div>

            {/* Business Hours */}
            <div className="contact-item">
              <FaClock className="contact-icon" />
              <p className="contact-text">
                MON-FRI 10:00 - 18:00<br />
                SAT 10:00 - 13:00<br />
                SUN HOLIDAY
              </p>
            </div>

            {/* Social Media Links */}
            <div className="social-links">
              {[
                { Icon: FaLinkedin, url: 'https://www.linkedin.com/company/ediscovery-automation/?viewAsMember=true' }
              ].map(({ Icon, url }, index) => (
                <a
                  key={index}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <Icon size={28} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="copyright">
          Copyright Reserved @ eDiscovery Automation Pvt ltd
        </div>
      </div>
      <CareerForm isOpen={isCareerFormOpen} onClose={() => setIsCareerFormOpen(false)} />
    </footer>
  );
};

export default Footer;