'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { productsMenu, productDetails } from '@/data/menudata';
import './styles.css';
import { useRouter } from 'next/navigation';

const ProductsMenu = ({ isOpen, onClose }) => {
  const router = useRouter();
  const [activeCategory, setActiveCategory] = useState(Object.keys(productsMenu)[0]);
  const [activeProduct, setActiveProduct] = useState(productsMenu[Object.keys(productsMenu)[0]]?.products[0]);

  const handleKnowMore = () => {
    onClose(); // Close the menu
    // Temporarily disabled product page navigation
    // router.push(`/products/${activeProduct.toLowerCase().replace(/\s+/g, '-')}`);
  };

  if (!isOpen) return null;

  return (
    <div className="products-menu-overlay">
      <div className="products-menu">
        <button className="close-button" onClick={onClose}>×</button>
        <div className="products-menu-content">
          {/* Left Column - Categories */}
          <div className="menu-left">
            <h3 className="menu-title">Categories</h3>
            <div className="categories-list">
              {Object.keys(productsMenu).map((category) => (
                <button
                  key={category}
                  className={`category-button ${activeCategory === category ? 'active' : ''}`}
                  onClick={() => {
                    setActiveCategory(category);
                    setActiveProduct(productsMenu[category].products[0]);
                  }}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Middle Column - Products */}
          <div className="menu-middle">
            <h3 className="menu-title">Products</h3>
            <div className="products-list">
              {productsMenu[activeCategory]?.products.map((product) => (
                <button
                  key={product}
                  className={`product-button ${activeProduct === product ? 'active' : ''}`}
                  onClick={() => setActiveProduct(product)}
                >
                  {product}
                </button>
              ))}
            </div>
          </div>

          {/* Right Column - Preview */}
          <div className="menu-right">
            {productDetails[activeProduct]?.previewContent && (
              <div className="preview-section">
                <div className="preview-image-container">
                  <Image
                    src={productDetails[activeProduct].previewContent.image}
                    alt={activeProduct}
                    fill
                    className="preview-image"
                  />
                </div>
                <h2 className="preview-title">{activeProduct}</h2>
                <p className="preview-description">
                  {productDetails[activeProduct].previewContent.shortDescription}
                </p>
                <div className="key-features">
                  <h4 className="features-title">Key Features</h4>
                  <ul className="features-list">
                    {productDetails[activeProduct].previewContent.keyFeatures.map((feature, index) => (
                      <li key={index} className="feature-item">
                        <span className="feature-dot"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="know-more-button" onClick={handleKnowMore}>
                    Know More
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsMenu;
