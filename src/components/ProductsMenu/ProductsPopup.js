'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { productsMenu, productDetails, productUrlMapping } from '@/data/menudata';
import styles from './styles.module.css';

const ProductsPopup = ({ isOpen, onClose, parentRef }) => {
  const router = useRouter();
  const categoryKeys = Object.keys(productsMenu);
  const [selectedCategory, setSelectedCategory] = useState(categoryKeys[0]);
  const [selectedProduct, setSelectedProduct] = useState(
    productsMenu[categoryKeys[0]]?.products[0] || null
  );

  // When popup opens, select first category and its first product
  useEffect(() => {
    if (isOpen) {
      setSelectedCategory(categoryKeys[0]);
      setSelectedProduct(productsMenu[categoryKeys[0]]?.products[0] || null);
    }
  }, [isOpen]);

  // When category changes, select its first product
  useEffect(() => {
    if (isOpen && selectedCategory) {
      setSelectedProduct(productsMenu[selectedCategory]?.products[0] || null);
    }
  }, [selectedCategory, isOpen]);

  const updatePreview = (product) => {
    setSelectedProduct(product);
  };

  const handleKnowMore = () => {
    if (selectedProduct) {
      const urlKey = Object.entries(productUrlMapping).find(([_, name]) => name === selectedProduct)?.[0];
      if (urlKey) {
        router.push(`/products/${urlKey}`);
      }
      onClose();
    }
  };

  const preview = selectedProduct && productDetails[selectedCategory]?.[selectedProduct]?.previewContent;

  // Add hover handlers for the popup
  const handlePopupMouseEnter = () => {
    if (parentRef?.current) {
      const mouseEnterEvent = new MouseEvent('mouseenter', {
        bubbles: true,
        cancelable: true,
      });
      parentRef.current.dispatchEvent(mouseEnterEvent);
    }
  };

  const handlePopupMouseLeave = () => {
    if (parentRef?.current) {
      const mouseLeaveEvent = new MouseEvent('mouseleave', {
        bubbles: true,
        cancelable: true,
      });
      parentRef.current.dispatchEvent(mouseLeaveEvent);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className={styles.productsMenuOverlay}
            onMouseEnter={handlePopupMouseEnter}
            onMouseLeave={handlePopupMouseLeave}
          />
          <motion.div
            className={styles.popup}
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
          >
            <button className={styles.closeButton} onClick={onClose}>×</button>
            <div className={styles.megaMenuContent}>
              {/* Categories Column */}
              <div className={styles.categoriesColumn}>
                {Object.entries(productsMenu).map(([category]) => (
                  <button
                    key={category}
                    className={`${styles.categoryButton} ${selectedCategory === category ? styles.active : ''}`}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* Products Column */}
              <div className={styles.productsColumn}>
                {productsMenu[selectedCategory]?.products.map((product) => (
                  <button
                    key={product}
                    className={`${styles.productButton} ${selectedProduct === product ? styles.active : ''}`}
                    onClick={() => updatePreview(product)}
                  >
                    {product}
                  </button>
                ))}
              </div>

              {/* Preview Column */}
              <div className={styles.previewColumn}>
                {preview ? (
                  <motion.div
                    key={selectedProduct}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className={styles.preview}
                  >
                    <div className={styles.previewImage}>
                      <Image
                        src={preview.image}
                        alt={selectedProduct}
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <h3 className={styles.previewTitle}>{selectedProduct}</h3>
                    <p className={styles.previewDesc}>{preview.shortDescription}</p>
                    <ul className={styles.keyFeatures}>
                      {preview.keyFeatures.map((feature, index) => (
                        <li key={index} className={styles.keyFeaturesList}>{feature}</li>
                      ))}
                    </ul>
                    <button 
                      onClick={handleKnowMore}
                      className={styles.knowMoreButton}
                    >
                      Know More →
                    </button>
                  </motion.div>
                ) : (
                  <div className={styles.emptyPreview}>
                    <p>Select a product to see details</p>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ProductsPopup;
