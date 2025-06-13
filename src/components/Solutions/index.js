'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { productsData } from '@/data/products';
import './styles.css';

const Solutions = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  return (
    <div className="solutions-mega-menu">
      {/* First level: Principal Categories */}
      <div className="menu-list principal-list">
        {Object.keys(productsData).map((principal) => (
          <button
            key={principal}
            className={`menu-item ${activeMenu === principal ? 'active' : ''}`}
            onMouseEnter={() => setActiveMenu(principal)}
          >
            {principal}
          </button>
        ))}
      </div>

      {/* Second level: Products with preview */}
      <AnimatePresence>
        {activeMenu && (
          <motion.div
            className="submenu-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="products-grid">
              {Object.entries(productsData[activeMenu].products).map(([productName, product]) => {
                // Get first application's image as preview
                const firstApplication = Object.values(product.applications)[0];
                return (
                  <div key={productName} className="product-preview">
                    <div className="product-image">
                      <Image
                        src={firstApplication.image}
                        alt={productName}
                        width={200}
                        height={150}
                        className="rounded-lg object-cover"
                      />
                    </div>
                    <h3 className="product-name">{productName}</h3>
                    <p className="product-description">{product.description}</p>
                    <button className="product-link">Learn More</button>
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Solutions;
