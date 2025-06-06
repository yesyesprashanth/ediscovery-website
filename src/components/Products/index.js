'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { productsData } from '@/data/products';
import './styles.css';

const Products = () => {
  const [selectedPrincipal, setSelectedPrincipal] = useState(Object.keys(productsData)[0]);
  const [selectedProduct, setSelectedProduct] = useState(
    Object.keys(productsData[Object.keys(productsData)[0]].products)[0]
  );
  const [selectedApplication, setSelectedApplication] = useState(null);
  
  // Get all applications for the current product
  const currentProduct = productsData[selectedPrincipal].products[selectedProduct];
  const applications = Object.keys(currentProduct.applications);
  
  // Set initial application if not set
  if (!selectedApplication && applications.length > 0) {
    setSelectedApplication(applications[0]);
  }

  // Handle application navigation
  const navigateApplication = (direction) => {
    const currentIndex = applications.indexOf(selectedApplication);
    if (direction === 'next') {
      setSelectedApplication(applications[(currentIndex + 1) % applications.length]);
    } else {
      setSelectedApplication(applications[(currentIndex - 1 + applications.length) % applications.length]);
    }
  };

  return (
    <section className="products-section">
      <div className="products-container">
        <motion.div 
          className="products-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="products-title">Our Solutions</h2>
          <p className="products-subtitle">Discover our comprehensive range of laboratory automation solutions</p>
        </motion.div>

        {/* Principals Row */}
        <div className="principals-row">
          {Object.keys(productsData).map((principal) => (
            <motion.div
              key={principal}
              className={`principal-card ${selectedPrincipal === principal ? 'active' : ''}`}
              onClick={() => {
                setSelectedPrincipal(principal);
                const firstProduct = Object.keys(productsData[principal].products)[0];
                setSelectedProduct(firstProduct);
                const firstApp = Object.keys(productsData[principal].products[firstProduct].applications)[0];
                setSelectedApplication(firstApp);
              }}
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="principal-content">
                <h3 className={`principal-title ${selectedPrincipal === principal ? 'active' : ''}`}>{principal}</h3>
                <p className={`principal-description ${selectedPrincipal === principal ? 'active' : ''}`}>
                  {productsData[principal].description}
                </p>
              </div>
              {selectedPrincipal === principal && (
                <motion.div 
                  className="h-1 mx-6 bg-gradient-to-r from-sky-500 to-sky-300 rounded-full"
                  layoutId="principalUnderline"
                />
              )}
            </motion.div>
          ))}
        </div>

        <div className="products-layout">
          {/* Products List Column */}
          <div className="products-list">
            <h4 className="products-list-title">Our Products</h4>
            <div className="products-list-container">
              {Object.entries(productsData[selectedPrincipal].products).map(([productName, product]) => (
                <motion.div
                  key={productName}
                  className={`product-card ${selectedProduct === productName ? 'active' : ''}`}
                  onClick={() => {
                    setSelectedProduct(productName);
                    setSelectedApplication(Object.keys(product.applications)[0]);
                  }}
                  whileHover={{ x: 8 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="product-content">
                    <h5 className={`product-title ${selectedProduct === productName ? 'active' : ''}`}>{productName}</h5>
                    <p className="product-description">{product.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <motion.div 
            className="product-details"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {selectedApplication && (
              <div className="product-showcase">
                <div className="product-showcase-container">
                  {/* Image Section - 75% width */}
                  <div className="image-section">
                    <div className="image-container">
                      <div className="image-wrapper">
                        <Image
                          src={currentProduct.applications[selectedApplication].image}
                          alt={selectedApplication}
                          fill
                          className="object-cover object-center"
                          priority
                          sizes="(max-width: 1200px) 75vw, 800px"
                        />
                      </div>
                      
                      {/* Navigation Arrows */}
                      <div className="navigation-buttons">
                        <motion.button
                          className="nav-button"
                          onClick={() => navigateApplication('prev')}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <FaArrowLeft />
                        </motion.button>
                        <motion.button
                          className="nav-button"
                          onClick={() => navigateApplication('next')}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <FaArrowRight />
                        </motion.button>
                      </div>
                    </div>

                    {/* Title and Description */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      className="application-content"
                    >
                      <h3 className="application-title">{selectedApplication}</h3>
                      <p className="application-description">
                        {currentProduct.applications[selectedApplication].description}
                      </p>
                    </motion.div>
                  </div>

                  {/* Specifications Section - 25% width */}
                  <motion.div
                    className="specs-section"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <div className="specifications">
                      <h4 className="specifications-title">Specifications</h4>
                      <ul className="specifications-grid">
                        {currentProduct.applications[selectedApplication].specifications.map((spec, index) => (
                          <motion.li 
                            key={index} 
                            className="specification-item"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                          >
                            <span className="specification-dot"></span>
                            <span className="specification-text">{spec}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Products;