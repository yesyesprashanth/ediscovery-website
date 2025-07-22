'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import './styles.css';

const customerLogos = [
  { name: 'AgroTech', src: '/assets/testimonials/logos/AgroTech.png' },
  { name: 'CTRI', src: '/assets/testimonials/logos/CTRI.png' },
  { name: 'Coramondal', src: '/assets/testimonials/logos/Coramondal.png' },
  { name: 'Dr Reddys', src: '/assets/testimonials/logos/DrReddys.png' },
  { name: 'Ecolabs', src: '/assets/testimonials/logos/Ecolabs.png' },
  { name: 'Gland', src: '/assets/testimonials/logos/Gland.png' },
  { name: 'Godfrey', src: '/assets/testimonials/logos/Godfrey.png' },
  { name: 'Himalaya', src: '/assets/testimonials/logos/Himalaya.png' },
  { name: 'IIT Kanpur', src: '/assets/testimonials/logos/IIT_Kanpur.png' },
  { name: 'ITC', src: '/assets/testimonials/logos/ITC.png' },
  { name: 'Johnson', src: '/assets/testimonials/logos/Johnson.png' },
  { name: 'MFL', src: '/assets/testimonials/logos/MFL.png' },
  { name: 'PRL', src: '/assets/testimonials/logos/PRL.png' },
  { name: 'Piramal', src: '/assets/testimonials/logos/Piramal.png' },
  { name: 'RRI', src: '/assets/testimonials/logos/RRI.png' },
  { name: 'Surya', src: '/assets/testimonials/logos/Surya.png' },
  { name: 'TAPI', src: '/assets/testimonials/logos/TAPI.png' },
  { name: 'Cipla', src: '/assets/testimonials/logos/cipla.png' },
  { name: 'NCPOR', src: '/assets/testimonials/logos/ncpor.png' },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials-section">
      <div className="testimonials-container">
        <motion.div
          className="testimonials-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2>Our Customer</h2>
          <p>Trusted by leading companies across industries</p>
        </motion.div>

        {/* Remove card, display only logos in a larger grid */}
        <motion.div 
          className="customer-logos-grid no-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {customerLogos.map((logo, index) => (
            <motion.div
              key={logo.name}
              className="logo-no-card"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Image
                src={logo.src}
                alt={`${logo.name} logo`}
                width={200}
                height={120}
                className="customer-logo"
                style={{ objectFit: 'contain' }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
