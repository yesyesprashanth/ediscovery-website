'use client';

import React from 'react';
import { applicationsMenu, solutionContentMapping, solutionUrlMapping } from '@/data/menudata';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import styles from './styles.module.css';

export default function SolutionPage({ params }) {
  // First try to find the solution using the URL mapping
  let foundCategory, foundSolution;

  try {
    // Search through all categories in solutionUrlMapping
    Object.entries(solutionUrlMapping).forEach(([category, solutions]) => {
      Object.entries(solutions).forEach(([urlSlug, solutionName]) => {
        if (urlSlug === params.solution) {
          foundCategory = category;
          foundSolution = solutionName;
        }
      });
    });

    // Get the content information
    const content = foundCategory && foundSolution 
      ? solutionContentMapping[foundCategory]?.[foundSolution]
      : null;

    // If content is not found, fallback to the original logic for backward compatibility
    if (!content) {
      // For now, we're handling Auto Analysers category
      const category = "Auto Analysers";

      // Map solution names to their image paths
      const imageMapping = {
        'Fertilier Analysis': 'Fertilizer-Analysis.png',
        'Tobacco Analysis': 'Tobacco-Analysis.png',
        'Plan and Soil Analysis': 'Soil-Analysis.png',
        'Water Analysis': 'Water-Analysis.png'
      };

      // Get the original solution name by reversing the URL slug
      const originalName = applicationsMenu[category].applications
        .find(name => {
          const urlSlug = name.toLowerCase().replace(/[:\s,]+/g, '-').replace(/--+/g, '-').replace(/^-|-$/g, '');
          return urlSlug === params.solution;
        });

      // Get the image path
      const imagePath = originalName ? `/assets/solutions/Seal/${imageMapping[originalName]}` : null;

      if (!imagePath) {
        return <div className={styles.errorContainer}>Solution not found</div>;
      }

      return (
        <div className={styles.pageContainer}>
          <Navbar />
          <div className={styles.imageContainer}>
            <Image
              src={imagePath}
              alt={originalName}
              fill={true}
              priority={true}
              style={{ objectFit: 'contain' }}
            />
          </div>
        </div>
      );
    }

    // For content from solutionContentMapping
    if (content.type === 'image') {
      return (
        <div className={styles.pageContainer}>
          <Navbar />
          <div className={styles.imageContainer}>
            <Image
              src={content.path}
              alt={foundSolution}
              fill={true}
              priority={true}
              style={{ objectFit: 'contain' }}
            />
          </div>
        </div>
      );
    }

    // For PDF content
    return (
      <div className={styles.pageContainer}>
        <Navbar />
        <div className={styles.contentContainer}>
          <div className={styles.pdfContainer}>
            <iframe
              src={content.path}
              className={styles.pdfViewer}
              title={foundSolution}
              onError={(e) => {
                console.error('PDF loading error:', e);
                e.target.classList.add(styles.hidden);
                const fallback = document.getElementById('pdfFallback');
                if (fallback) fallback.style.display = 'block';
              }}
            />
            <div id="pdfFallback" className={styles.pdfFallback}>
              <p>Unable to display PDF directly. Please use the download link below:</p>
              <a 
                href={content.path}
                download
                className={styles.downloadButton}
              >
                Download {foundSolution}
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('Error rendering solution page:', error);
    return (
      <div className={styles.pageContainer}>
        <Navbar />
        <div className={styles.errorContainer}>
          Error loading content. Please try again later.
        </div>
      </div>
    );
  }
}
