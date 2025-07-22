'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';
import './styles.css';

const EnquireForm = ({ 
  isOpen, 
  onClose, 
  title = "Get In Touch", 
  subtitle = "We'll get back to you as soon as possible.", 
  resourceName = "",
  resourcePath = "",
  resourceType = "",
  isDownloadRequest = false 
}) => {
  const [formData, setFormData] = useState({
    name: '',
    designation: '',
    companyName: '',
    mobile: '',
    email: '',
    address: '',
    productOfInterest: resourceName || '',
    additionalInfo: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Load saved form data for download requests
  useEffect(() => {
    if (isDownloadRequest && isOpen) {
      const savedData = sessionStorage.getItem('downloadFormData');
      if (savedData) {
        try {
          const parsedData = JSON.parse(savedData);
          setFormData(prev => ({
            ...prev,
            name: parsedData.name || '',
            designation: parsedData.designation || '',
            companyName: parsedData.companyName || '',
            mobile: parsedData.mobile || '',
            email: parsedData.email || '',
            address: parsedData.address || '',
            productOfInterest: resourceName || parsedData.productOfInterest || '',
            additionalInfo: parsedData.additionalInfo || ''
          }));
        } catch (error) {
          console.error('Error loading saved form data:', error);
        }
      }
    }
  }, [isDownloadRequest, isOpen, resourceName]);

  const validateForm = () => {
    const newErrors = {};
    
    // Required field validations
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.designation.trim()) newErrors.designation = 'Designation is required';
    if (!formData.companyName.trim()) newErrors.companyName = 'Company name is required';
    
    // Mobile validation
    if (!formData.mobile.trim()) {
      newErrors.mobile = 'Mobile number is required';
    } else if (!/^[0-9]{10}$/.test(formData.mobile.trim())) {
      newErrors.mobile = 'Please enter a valid 10-digit mobile number';
    }
    
    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.address.trim()) newErrors.address = 'Address is required';
    if (!formData.productOfInterest.trim()) newErrors.productOfInterest = 'Product of Interest is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      
      try {
        if (isDownloadRequest && resourcePath) {
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
        } else {
          // Regular enquiry - will implement email sending functionality later
          console.log('Enquiry submitted:', formData);
        }
        
        onClose();
        setIsSubmitting(false);
      } catch (error) {
        console.error('Submit error:', error);
        setIsSubmitting(false);
      }
    }
  };

  const handleChange = (e) => {
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

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <div className="enquire-overlay" onClick={onClose} />
          <motion.div 
            className="enquire-modal"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            transition={{ type: "spring", duration: 0.5 }}
          >
            <button className="close-button" onClick={onClose}>
              <FaTimes />
            </button>
            
            <h2 className="form-title">{title}</h2>
            <p className="form-subtitle">{subtitle}</p>
            
            <form onSubmit={handleSubmit} className="enquire-form">
              <div className="form-group">
                <label htmlFor="name">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className={errors.name ? 'error' : ''}
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
                  onChange={handleChange}
                  required
                  placeholder="Your designation"
                  className={errors.designation ? 'error' : ''}
                />
                {errors.designation && <span className="error-message">{errors.designation}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="companyName">Company Name *</label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  required
                  placeholder="Your company name"
                  className={errors.companyName ? 'error' : ''}
                />
                {errors.companyName && <span className="error-message">{errors.companyName}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="mobile">Mobile *</label>
                <input
                  type="tel"
                  id="mobile"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  required
                  placeholder="Your mobile number"
                  className={errors.mobile ? 'error' : ''}
                />
                {errors.mobile && <span className="error-message">{errors.mobile}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Your email address"
                  className={errors.email ? 'error' : ''}
                />
                {errors.email && <span className="error-message">{errors.email}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="address">Address *</label>
                <textarea
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  placeholder="Your address"
                  rows="3"
                  className={errors.address ? 'error' : ''}
                />
                {errors.address && <span className="error-message">{errors.address}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="productOfInterest">Product of Interest *</label>
                <input
                  type="text"
                  id="productOfInterest"
                  name="productOfInterest"
                  value={formData.productOfInterest}
                  onChange={handleChange}
                  required
                  placeholder="What product are you interested in?"
                  className={errors.productOfInterest ? 'error' : ''}
                />
                {errors.productOfInterest && <span className="error-message">{errors.productOfInterest}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="additionalInfo">Additional Information</label>
                <textarea
                  id="additionalInfo"
                  name="additionalInfo"
                  value={formData.additionalInfo}
                  onChange={handleChange}
                  placeholder="Any additional information you'd like to share"
                  rows="4"
                />
              </div>

              <button 
                type="submit" 
                className="submit-button"
                disabled={isSubmitting}
              >
                {isSubmitting 
                  ? (isDownloadRequest ? 'Processing Download...' : 'Submitting...') 
                  : (isDownloadRequest ? 'Download Resource' : 'Submit')
                }
              </button>
            </form>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default EnquireForm;
