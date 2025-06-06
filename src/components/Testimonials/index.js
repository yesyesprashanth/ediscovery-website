'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuoteLeft, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { testimonialsData } from '@/data/testimonials';
import './styles.css';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const navigate = (newDirection) => {
    setDirection(newDirection);
    setCurrentTestimonial((prev) => 
      (prev + newDirection + testimonialsData.clients.length) % testimonialsData.clients.length
    );
  };

  // Auto-advance testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      navigate(1);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <motion.div
          className="testimonials-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="testimonials-title">What Our Clients Say</h2>
          <p className="testimonials-subtitle">
            Discover how our solutions are making a difference in laboratories across India
          </p>
        </motion.div>

        <div className="testimonial-slider">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentTestimonial}
              className="testimonial-card"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
            >
              <FaQuoteLeft className="quote-icon" />
              <p className="testimonial-text">
                {testimonialsData.clients[currentTestimonial].testimony}
              </p>
              <div className="testimonial-author">
                <h4 className="author-name">{testimonialsData.clients[currentTestimonial].name}</h4>
                <p className="author-title">
                  {testimonialsData.clients[currentTestimonial].designation} at {testimonialsData.clients[currentTestimonial].company}
                </p>
                <div className="company-logo">
                  <Image
                    src={testimonialsData.clients[currentTestimonial].logo}
                    alt={testimonialsData.clients[currentTestimonial].company}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="navigation-buttons">
            <motion.button
              className="nav-button"
              onClick={() => navigate(-1)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaArrowLeft />
            </motion.button>
            <motion.button
              className="nav-button"
              onClick={() => navigate(1)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaArrowRight />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
