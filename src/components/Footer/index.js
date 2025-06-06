'use client';

import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaYoutube
} from 'react-icons/fa';
import './styles.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          {/* Left Section - Company Info */}
          <div className="company-info">
            <h2 className="company-name">eDiscovery Automation</h2>
            <p className="company-description">
              eDiscovery Automation is a leading provider of innovative laboratory automation solutions. 
              We specialize in delivering high-quality automated systems and exceptional service to 
              research institutions and industrial laboratories across India.
            </p>
            <a 
              href="#" 
              className="career-link" 
              onClick={(e) => {
                e.preventDefault();
                // Popup functionality will be implemented later
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
              <FaMapMarkerAlt className="contact-icon" />
              <p className="contact-text">
                No. 3009/2, 2nd Floor,<br />
                2nd Main, 19th Cross,<br />
                K.R.Road, Banashankari II Stage<br />
                Bangalore – 560 070, India
              </p>
              <a 
                href="https://maps.app.goo.gl/5C8WFtobtRbhxeE58"
                target="_blank"
                rel="noopener noreferrer"
                className="map-link"
                aria-label="View on Google Maps"
              >
                <div className="map-icon-wrapper">
                  <FaMapMarkerAlt className="map-icon" />
                  <div className="pulse-ring"></div>
                </div>
              </a>
            </div>

            {/* Business Hours */}
            <div className="contact-item">
              <FaClock className="contact-icon" />
              <p className="contact-text">
                MON-FRI 09:30 - 17:30<br />
                SAT 09:30 - 13:00<br />
                SUN HOLIDAY
              </p>
            </div>

            {/* Social Media Links */}
            <div className="social-links">
              {[
                { Icon: FaLinkedin, url: 'https://linkedin.com' },
                { Icon: FaTwitter, url: 'https://twitter.com' },
                { Icon: FaFacebook, url: 'https://facebook.com' },
                { Icon: FaYoutube, url: 'https://youtube.com' }
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
    </footer>
  );
};

export default Footer;