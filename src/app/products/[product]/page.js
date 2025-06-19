'use client';

import React from 'react';
import { productDetails, productUrlMapping } from '@/data/menudata';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import styles from './styles.module.css';

export default function ProductPage({ params }) {
  // Get the product name from URL mapping
  const productName = productUrlMapping[params.product];
  
  // Find product in the nested structure
  let product = null;
  let category = null;

  // Search through categories to find the product
  Object.entries(productDetails).forEach(([cat, products]) => {
    if (products[productName]) {
      product = products[productName];
      category = cat;
    }
  });

  // Debug info
  console.log('Debug:', {
    url: params.product,
    productName,
    category,
    found: !!product
  });

  if (!product) {
    return (
      <div className={styles.pageContainer}>
        <Navbar />
        <div className={styles.errorContainer}>
          <h1>Product Not Found</h1>
          <p>Sorry, we couldn't find the product you're looking for.</p>
        </div>
        <Footer />
      </div>
    );
  }

  // Check if it's an Auto Analyser type product
  const isAnalyser = product.fullContent?.type === 'analyser';

  if (isAnalyser) {
    return (
      <div className={styles.pageContainer}>
        <Navbar />
        <main className={styles.main}>
          <div className={styles.productDetailsContainer}>
            <h1 className={styles.heading}>{product.fullContent.mainHeading}</h1>
            {product.fullContent.sections.map((section, index) => (
              <div key={index} className={styles.contentSection}>
                <div className={styles.textContent}>
                  <h2 className={styles.subHeading}>{section.heading}</h2>
                  {section.paragraph && (
                    <p className={styles.paragraph}>{section.paragraph}</p>
                  )}
                  {section.points && (
                    <ul className={styles.specList}>
                      {section.points.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  )}
                </div>
                {index === 0 && product.fullContent.image && (
                  <div className={styles.imageContainer}>
                    <Image
                      src={product.fullContent.image}
                      alt={section.heading}
                      fill={true}
                      priority={true}
                      sizes="(max-width: 768px) 100vw, 50vw"
                      style={{ objectFit: 'contain' }}
                      className={styles.image}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className={styles.pageContainer}>
      <Navbar />
      <main className={styles.main}>
        <div className={styles.productDetailsContainer}>
          {/* Main heading for multi-section products */}
          {product.fullContent.sets ? (
            <>
              <h1 className={styles.heading}>{product.fullContent.mainHeading}</h1>
              {/* Map through each set in the array */}
              {product.fullContent.sets.map((set, index) => (
                <div key={index} className={styles.contentSection}>
                  <div className={styles.textContent}>
                    <h2 className={styles.subHeading}>{set.heading}</h2>
                    <p className={styles.paragraph}>{set.paragraph}</p>
                    {set.subHeading && (
                      <>
                        <h3 className={styles.listHeading}>{set.subHeading}</h3>
                        <ul className={styles.specList}>
                          {set.list.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      </>
                    )}
                  </div>
                  <div className={styles.imageContainer}>
                    <Image
                      src={set.image}
                      alt={set.heading}
                      fill={true}
                      priority={true}
                      sizes="(max-width: 768px) 100vw, 50vw"
                      style={{ objectFit: 'contain' }}
                      className={styles.image}
                    />
                  </div>
                </div>
              ))}
            </>
          ) : (
            // For simple content structure
            <>
              <h1 className={styles.heading}>{product.fullContent.heading}</h1>
              <div className={styles.contentSection}>
                <div className={styles.textContent}>
                  <div className={styles.mainContent}>
                    <p className={styles.paragraph}>
                      {product.fullContent.paragraph}
                    </p>
                    {product.fullContent.subHeading && (
                      <>
                        <h3 className={styles.listHeading}>{product.fullContent.subHeading}</h3>
                        <ul className={styles.specList}>
                          {product.fullContent.list.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      </>
                    )}
                  </div>
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
            </>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
