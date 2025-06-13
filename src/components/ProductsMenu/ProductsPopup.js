'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { productsMenu, productDetails } from '@/data/menudata';
import styles from './styles.module.css';

const ProductsPopup = ({ isOpen, onClose }) => {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState(Object.keys(productsMenu)[0]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const updatePreview = (product) => {
    const previewContent = productDetails[product]?.previewContent;
    if (previewContent) {
      const previewEl = document.querySelector(`.${styles.preview}`);
      if (previewEl) {
        const imageEl = previewEl.querySelector('img');
        const titleEl = previewEl.querySelector(`.${styles.previewTitle}`);
        const descEl = previewEl.querySelector(`.${styles.previewDesc}`);
        const featuresEl = previewEl.querySelector(`.${styles.keyFeatures}`);

        if (imageEl) imageEl.src = previewContent.image;
        if (titleEl) titleEl.textContent = product;
        if (descEl) descEl.textContent = previewContent.shortDescription;
        if (featuresEl) {
          featuresEl.innerHTML = previewContent.keyFeatures
            .map(feature => `<li class="${styles.keyFeaturesList}">${feature}</li>`)
            .join('');
        }
      }
    }
    setSelectedProduct(product); // Still update state but won't trigger re-render
  };

  const handleKnowMore = () => {
    if (selectedProduct) {
      router.push(`/products/${selectedProduct.toLowerCase().replace(/\s+/g, '-')}`);
      onClose();
    }
  };

  const preview = selectedProduct && productDetails[selectedProduct]?.previewContent;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className={styles.overlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
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
                    onClick={() => {
                      setSelectedCategory(category);
                      setSelectedProduct(null);
                    }}
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
