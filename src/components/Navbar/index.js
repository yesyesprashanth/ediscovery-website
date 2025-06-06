"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaBars, FaTimes, FaPhone } from "react-icons/fa";
import "./styles.css";

const Navbar = () => {
  const [activeItem, setActiveItem] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      // Update active section based on scroll position
      const sections = ["home", "about", "products", "testimonials"];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) {
        setActiveItem(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId, e) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      const topOffset = sectionId === "home" ? 0 : 80; // Account for navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setActiveItem(sectionId);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <a href="#home" onClick={(e) => scrollToSection("home", e)} className="navbar-logo">
          <Image
            src="/assets/logo.png"
            alt="eDiscovery Automation"
            width={168}
            height={42}
            style={{ height: '42px', width: 'auto' }}
          />
        </a>

        <button
          className="mobile-menu-button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        <nav className={`navbar-links ${isMobileMenuOpen ? 'active' : ''}`}>
          <a 
            href="#home" 
            className={`nav-link ${activeItem === 'home' ? 'active' : ''}`}
            onClick={(e) => scrollToSection("home", e)}
          >
            Home
          </a>
          <a 
            href="#about" 
            className={`nav-link ${activeItem === 'about' ? 'active' : ''}`}
            onClick={(e) => scrollToSection("about", e)}
          >
            About Us
          </a>
          <a 
            href="#products" 
            className={`nav-link ${activeItem === 'products' ? 'active' : ''}`}
            onClick={(e) => scrollToSection("products", e)}
          >
            Our Solutions
          </a>
          <a 
            href="#testimonials" 
            className={`nav-link ${activeItem === 'testimonials' ? 'active' : ''}`}
            onClick={(e) => scrollToSection("testimonials", e)}
          >
            Testimonials
          </a>
        </nav>

        <div className="nav-buttons">
          <button 
            onClick={() => window.location.href = '/partner'}
            className="cta-button"
            style={{
              backgroundColor: 'var(--primary-color)',
              padding: '8px 30px',
              borderRadius: '9999px'
            }}
          >
            Partner with Us
          </button>
          <button 
            onClick={() => window.location.href = '/contact'}
            className="cta-button"
            style={{
              backgroundColor: 'var(--primary-color)',
              padding: '10px 20px',
              borderRadius: '9999px'
            }}
          >
            Enquire Now
          </button>
          <div className="contact-number" style={{ display: 'flex', alignItems: 'center', color: '#66CDAA', whiteSpace: 'nowrap' }}>
            <FaPhone style={{ marginRight: '8px' }} />
            <span>+91 96323 11966</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;