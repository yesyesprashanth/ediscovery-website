'use client';

import Image from 'next/image';
import './styles.css';

const Hero = () => {
  return (
    <div className="hero-container">
      {/* Hero Background Image */}
      <div className="hero-image-container">
        <Image 
          src="/assets/hero.jpg"
          alt="eDiscovery Automation"
          fill
          priority
          className="hero-image"
        />
      </div>
      
      {/* Content Overlay */}
      <div className="hero-content">
        <h1 className="hero-title">
          eDiscovery Automation
        </h1>
        <p className="hero-description">
          Your trusted partner for lab automation products, marketing, sales, and technical support in India
        </p>
      </div>
    </div>
  );
};

export default Hero;