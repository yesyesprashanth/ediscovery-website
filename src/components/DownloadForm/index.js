'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';
import './styles.css';

const DownloadForm = ({ isOpen, onClose, resourceName, resourcePath, resourceType }) => {
  const [formData, setFormData] = useState({
    name: '',
    designation: '',
    company: '',
    phone: '',
    email: '',
    address: '',
    remarks: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Load saved user data from session storage on mount
  useEffect(() => {
    const savedData = sessionStorage.getItem('downloadFormData');
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      setFormData(parsedData);
    }
  }, []);

  // Validation functions
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone) => {
    // Indian phone number format: +91XXXXXXXXXX or XXXXXXXXXX (10 digits)
    const phoneRegex = /^(\+91|91)?[6-9]\d{9}$/;
    return phoneRegex.test(phone.replace(/\s+/g, ''));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.designation.trim()) newErrors.designation = 'Designation is required';
    if (!formData.company.trim()) newErrors.company = 'Company name is required';
    if (!formData.address.trim()) newErrors.address = 'Address is required';
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = 'Please enter a valid Indian phone number';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    return newErrors;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      // Save user data to session storage for future downloads
      sessionStorage.setItem('downloadFormData', JSON.stringify(formData));

      // Create download record
      const downloadRecord = {
        ...formData,
        resourceName,
        resourceType,
        downloadTime: new Date().toISOString(),
        id: Date.now() + Math.random()
      };

      // Store download record (for future API integration)
      const existingDownloads = JSON.parse(localStorage.getItem('downloadRecords') || '[]');
      existingDownloads.push(downloadRecord);
      localStorage.setItem('downloadRecords', JSON.stringify(existingDownloads));

      // Trigger download
      const link = document.createElement('a');
      link.href = resourcePath;
      link.download = resourceName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Close modal
      onClose();
      
      // Reset submitting state
      setIsSubmitting(false);
      
    } catch (error) {
      console.error('Download error:', error);
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    if (!isSubmitting) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="download-form-overlay" onClick={handleClose}>
        <motion.div
          className="download-form-modal"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3 }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="download-form-header">
            <h2>Download Request</h2>
            <p>Resource: <strong>{resourceName}</strong></p>
            <button
              className="download-form-close"
              onClick={handleClose}
              disabled={isSubmitting}
            >
              <FaTimes />
            </button>
          </div>

          <div className="download-form-content">
            <p className="download-form-description">
              Please provide your details to download this resource. Your information helps us serve you better.
            </p>

            <form onSubmit={handleSubmit} className="download-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={errors.name ? 'error' : ''}
                    disabled={isSubmitting}
                  />
                  {errors.name && <span className="error-message">{errors.name}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="designation">Designation *</label>
                  <input
                    type="text"
                    id="designation"
                    name="designation"
                    value={formData.designation}
                    onChange={handleInputChange}
                    className={errors.designation ? 'error' : ''}
                    disabled={isSubmitting}
                  />
                  {errors.designation && <span className="error-message">{errors.designation}</span>}
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="company">Company Name *</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className={errors.company ? 'error' : ''}
                    disabled={isSubmitting}
                  />
                  {errors.company && <span className="error-message">{errors.company}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="e.g., +91 9876543210"
                    className={errors.phone ? 'error' : ''}
                    disabled={isSubmitting}
                  />
                  {errors.phone && <span className="error-message">{errors.phone}</span>}
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={errors.email ? 'error' : ''}
                  disabled={isSubmitting}
                />
                {errors.email && <span className="error-message">{errors.email}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="address">Address *</label>
                <textarea
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  rows="3"
                  className={errors.address ? 'error' : ''}
                  disabled={isSubmitting}
                />
                {errors.address && <span className="error-message">{errors.address}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="remarks">Remarks</label>
                <textarea
                  id="remarks"
                  name="remarks"
                  value={formData.remarks}
                  onChange={handleInputChange}
                  rows="2"
                  placeholder="Any additional comments or requirements..."
                  disabled={isSubmitting}
                />
              </div>

              <div className="form-actions">
                <button
                  type="button"
                  className="btn-cancel"
                  onClick={handleClose}
                  disabled={isSubmitting}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn-download"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Processing...' : 'Download Resource'}
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default DownloadForm;
