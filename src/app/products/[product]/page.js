'use client';

import React from 'react';
import { productDetails } from '@/data/menudata';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import styles from './styles.module.css';

export default function ProductPage({ params }) {
  const productName = params.product.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');
  
  const product = productDetails[productName];

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className={styles.pageContainer}>
      <main className={styles.main}>
        <div className={styles.productDetailsContainer}>
          <h1 className={styles.heading}>{product.fullContent.heading}</h1>
          
          <div className={styles.contentSection}>
            <div className={styles.textContent}>
              <p className={styles.paragraph}>
                {product.fullContent.paragraph}
              </p>
            </div>
            
            <div className={styles.imageContainer}>
              <Image
                src={product.fullContent.image}
                alt={product.fullContent.heading}
                fill={true}
                priority={true}
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: 'contain' }}
                className={styles.image}
              />
            </div>
          </div>
          
          {/* Specifications Section */}
          {product.fullContent.subHeading && (
            <div className={styles.specificationsSection}>
              <h2 className={styles.subHeading}>{product.fullContent.subHeading}</h2>
              <ul className={styles.specsList}>
                {product.fullContent.list.map((item, index) => (
                  <li key={index} className={styles.specItem}>
                    <span className={styles.specBullet}>•</span>
                    <span className={styles.specText}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </main>
      
      <div className={styles.footerSpacer}></div>
      <Footer />
    </div>
  );
}
