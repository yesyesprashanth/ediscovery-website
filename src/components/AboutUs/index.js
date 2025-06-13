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
            <h3 className="about-company">eDiscovery Automation Private Limited</h3>
            <p className="about-description">
              eDiscovery Automation Private Limited is a professionally managed distribution company for Laboratory Automation, 
              Automated Liquid & Powder Handling, Automated Environmental Analysis & Scientific Instrumentation. 
              eDiscovery Autoamtion is a Sangma Group Venture.
            </p>
            <p className="about-description">
              We provide world class systems & solutions from reputed overseas manufacturers for Research & Development, 
              Quality Control and Educational purpose in the field of Drug Discovery, Synthesis, Environmental & Agriculture, 
              Tobacco, Fertilizer, Food & Beverages, and Petrochemical & Lubricant.
            </p>
            <p className="about-description">
              'eDiscovery Automation' is committed to provide the Latest Technology, Prompt Support and Comprehensive 
              Application support. We represent world's best and leading manufacturers. We & our principals will be happy 
              to associate with our customers by means of providing complete solution & systems coupled with dedicated support.
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
                src="/assets/product.gif"
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