'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import './styles.css';

const MegaMenu = ({ isOpen, menuType = 'products', menuData = {}, onClose }) => {
  const [activeCategory, setActiveCategory] = useState('');
  const [activeSubcategory, setActiveSubcategory] = useState('');

  useEffect(() => {
    if (!isOpen) {
      setActiveCategory('');
      setActiveSubcategory('');
    }
  }, [isOpen]);

  // Get categories based on menu type
  const categories = menuType === 'products' ? menuData.productsMenu : menuData.applicationsMenu;
  
  // Get product details for preview
  const getPreviewContent = () => {
    if (!activeCategory || !activeSubcategory) return null;
    
    // Check if it's product menu or applications menu
    const categoryData = categories[activeCategory];
    if (!categoryData) return null;

    return menuData.productDetails?.[activeSubcategory] || null;
  };

  const previewContent = getPreviewContent();

  return (
    <div className={`mega-menu ${isOpen ? 'active' : ''}`}>
      <div className="mega-menu-container">
        {/* Main Categories - 20% */}
        <div className="main-categories">
          <div className="category-list">
            {Object.keys(categories || {}).map((category) => (
              <div
                key={category}
                className={`category-item ${activeCategory === category ? 'active' : ''}`}
                onClick={() => {
                  setActiveCategory(category);
                  setActiveSubcategory('');
                }}
              >
                {category}
              </div>
            ))}
          </div>
        </div>

        {/* Subcategories - 20% */}
        <div className="subcategories">
          <div className="subcategory-list">
            {activeCategory &&
              Object.keys(categories[activeCategory]?.products || {}).map((subcategory) => (
                <div
                  key={subcategory}
                  className={`subcategory-item ${activeSubcategory === subcategory ? 'active' : ''}`}
                  onClick={() => setActiveSubcategory(subcategory)}
                >
                  {subcategory}
                </div>
              ))}
          </div>
        </div>

        {/* Preview Content - 60% */}
        <div className="preview-content">
          {previewContent ? (
            <>
              <div className="preview-header">
                <h3 className="preview-title">{activeSubcategory}</h3>
                <p className="preview-description">{previewContent.description}</p>
              </div>
              <div className="preview-details">
                {/* Preview Image */}
                <div>
                  <div className="preview-image">
                    <Image
                      src={previewContent.previewImage}
                      alt={activeSubcategory}
                      fill
                      className="preview-image-inner"
                    />
                  </div>
                </div>
                {/* Key Features/Specifications */}
                <div className="preview-specs">
                  <h4 className="preview-specs-title">Key Features</h4>
                  <div className="preview-specs-list">
                    {previewContent.keyFeatures?.map((feature, index) => (
                      <div key={index} className="preview-spec-item">
                        <span className="preview-spec-dot"></span>
                        <span className="preview-spec-text">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div className="preview-header">
              <h3 className="preview-title">
                {activeCategory ? 'Select a product' : 'Select a category'}
              </h3>
              <p className="preview-description">
                {activeCategory
                  ? `Browse our ${activeCategory.toLowerCase()} solutions`
                  : 'Choose from our range of innovative laboratory automation solutions'}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MegaMenu;
