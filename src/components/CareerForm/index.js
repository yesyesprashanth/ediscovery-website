'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';
import './styles.css';

const CareerForm = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    qualification: '',
    mobile: '',
    email: '',
    location: '',
    jobCategory: '',
    experienceSummary: '',
    resume: null
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Will implement form submission functionality later
    console.log('Form submitted:', formData);
    onClose();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData(prev => ({
      ...prev,
      resume: file
    }));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <div className="career-overlay" onClick={onClose} />
          <motion.div 
            className="career-modal"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            transition={{ type: "spring", duration: 0.5 }}
          >
            <button className="close-button" onClick={onClose}>
              <FaTimes />
            </button>
            
            <div className="career-content">
              {/* Left Section - Job Descriptions */}
              <div className="job-descriptions">
                <h2 className="career-title">Career with eDiscovery Automation</h2>
                <p className="intro-text">
                  We are recruiting Sales, Service and Administrative executives for our Bangalore office.
                </p>

                <div className="job-section">
                  <h3>Sr. Sales & Product Support Executive:</h3>
                  <p>The position calls for continuous interaction with our customers, educating & convincing them on our technologies and products, understanding customer's applications and requirements. The position is for all India basis and involved with extensive traveling.</p>
                  <p>Candidates with B.Sc / M.Sc with Chemistry or Environmental Science as major subject with 2-3 years experience in sales, product support, application support in analytical / environmental science / life science field or chemist in chemical / pharmaceutical / environmental laboratories can apply.</p>
                </div>

                <div className="job-section">
                  <h3>Sr. Service Engineer:</h3>
                  <p>The position calls for installation of our systems & providing training to our customers, servicing of the systems, upgrades and selling spares, consumables & AMC. The position is for all India basis and requires extensive travelling.</p>
                  <p>Candidates with Diploma / B.E / M.Sc in electronics or Instrumentation with 2-3 years of experience in analytical / scientific / environmental instrumentation can apply.</p>
                </div>

                <div className="job-section">
                  <h3>Administrative and Commercial Executive:</h3>
                  <p>This position will carry out office administration, sales support, and commercial jobs.</p>
                  <p>Candidates with B.Com/B.A/ B.Sc having 1-2 years experience can apply.</p>
                </div>

                <div className="additional-info">
                  <p>For all the above posts, apart from in-house training, our overseas principals conduct product, application, sales and service trainings at their establishment time to time. We provide excellent opportunities for learning, growth, industry standard remuneration and performance based incentives.</p>
                </div>
              </div>

              {/* Right Section - Application Form */}
              <div className="application-form-container">
                <h3 className="form-title">Apply Now</h3>
                <form onSubmit={handleSubmit} className="application-form">
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your full name"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="qualification">Qualification</label>
                    <input
                      type="text"
                      id="qualification"
                      name="qualification"
                      value={formData.qualification}
                      onChange={handleChange}
                      required
                      placeholder="Your highest qualification"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="mobile">Mobile</label>
                    <input
                      type="tel"
                      id="mobile"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleChange}
                      required
                      placeholder="Your mobile number"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="Your email address"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="location">Location</label>
                    <input
                      type="text"
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      required
                      placeholder="Your current location"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="jobCategory">Job Category</label>
                    <select
                      id="jobCategory"
                      name="jobCategory"
                      value={formData.jobCategory}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select a position</option>
                      <option value="sales">Sr. Sales & Product Support Executive</option>
                      <option value="service">Sr. Service Engineer</option>
                      <option value="admin">Administrative and Commercial Executive</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="experienceSummary">Experience Summary</label>
                    <textarea
                      id="experienceSummary"
                      name="experienceSummary"
                      value={formData.experienceSummary}
                      onChange={handleChange}
                      required
                      placeholder="Brief summary of your experience"
                      rows="4"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="resume">Upload Resume</label>
                    <input
                      type="file"
                      id="resume"
                      name="resume"
                      onChange={handleFileChange}
                      required
                      accept=".pdf,.doc,.docx"
                      className="file-input"
                    />
                  </div>

                  <button type="submit" className="submit-button">
                    Submit Application
                  </button>
                </form>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CareerForm;
