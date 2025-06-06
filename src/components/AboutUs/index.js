'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import StatsCard from '../StatsCard';
import './styles.css';

const AboutUs = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-content">
          {/* Left side: Content - Slides from left */}
          <motion.div 
            className="about-text"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="about-title">About Us</h2>
            <p className="about-description">
              At eDiscovery Automation, our mission is to provide high-quality lab automation solutions that 
              empower laboratories across India to achieve excellence in their research and operations.
            </p>
            <p className="about-description">
              With years of expertise in marketing, sales, and technical support, we bridge the gap between 
              global technology and Indian laboratories, ensuring seamless adoption and operation of cutting-edge 
              lab automation products.
            </p>
            <p className="about-description">
              Our team of dedicated professionals is committed to delivering exceptional service and support,
              helping you optimize your laboratory workflows and achieve greater efficiency and accuracy.
            </p>
          </motion.div>
          
          {/* Center divider line in theme color */}
          <div className="about-divider">
            <div className="about-divider-line"></div>
          </div>
          
          {/* Right side: Image - Slides from right */}
          <motion.div 
            className="about-image-container"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="about-image-wrapper">
              <Image 
                src="/assets/Zinsser_hero"
                alt="eDiscovery Lab Automation"
                fill
                className="about-image"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </motion.div>
        </div>
      </div>
      <StatsCard />
    </section>
  );
};

export default AboutUs;