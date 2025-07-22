'use client';

import React, { useState } from 'react';
import { applicationsMenu, solutionContentMapping, solutionUrlMapping, solutionDetails } from '@/data/menudata';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import EnquireForm from '@/components/EnquireForm';
import styles from './styles.module.css';

export default function SolutionPage({ params }) {
  const [isEnquireFormOpen, setIsEnquireFormOpen] = useState(false);
  
  // First try to find the solution using the URL mapping
  let foundCategory, foundSolution, content;

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
    content = foundCategory && foundSolution 
      ? solutionContentMapping[foundCategory]?.[foundSolution]
      : null;

    // Fallback logic for backward compatibility
    if (!content) {
      const category = "Auto Analysers";
      const imageMapping = {
        'Fertilizer Analysis': 'Fertilizer-Analysis.png',
        'Tobacco Analysis': 'Tobacco-Analysis.png',
        'Plant and Soil Analysis': 'Soil-Analysis.png',
        'Water Analysis': 'Water-Analysis.png'
      };

      const originalName = applicationsMenu[category]?.applications
        .find(name => {
          const urlSlug = name.toLowerCase().replace(/[:\s,]+/g, '-').replace(/--+/g, '-').replace(/^-|-$/g, '');
          return urlSlug === params.solution;
        });

      if (originalName && imageMapping[originalName]) {
        foundCategory = category;
        foundSolution = originalName;
        content = {
          type: 'image',
          path: `/assets/solutions/Seal/${imageMapping[originalName]}`
        };
      }
    }

    if (!content) {
      return (
        <div className={styles.pageContainer}>
          <Navbar />
          <div className={styles.errorContainer}>
            <h1>Solution not found</h1>
            <p>The requested solution could not be found.</p>
          </div>
        </div>
      );
    }

    // Get solution details for description
    const solutionDetail = solutionDetails[foundSolution];

    const handleDownloadRequest = () => {
      setIsEnquireFormOpen(true);
    };

    return (
      <div className={styles.pageContainer}>
        <Navbar />
        <div className={styles.contentContainer}>
          <div className={styles.solutionHeader}>
            <h1 className={styles.solutionTitle}>{foundSolution}</h1>
            {solutionDetail && (
              <div className={styles.solutionDetails}>
                <p className={styles.solutionDescription}>{solutionDetail.description}</p>
              </div>
            )}
          </div>

          <div className={styles.downloadSection}>
            <div className={styles.resourceInfo}>
              <div className={styles.resourceIcon}>
                {content.type === 'pdf' ? (
                  <svg className={styles.fileIcon} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
                  </svg>
                ) : (
                  <svg className={styles.fileIcon} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.5,13.5L11,16.5L14.5,12L19,18H5M21,19V5C21,3.89 20.1,3 19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19Z" />
                  </svg>
                )}
              </div>
              
              <div className={styles.resourceDetails}>
                <h3 className={styles.resourceTitle}>
                  {foundSolution} - {content.type === 'pdf' ? 'Documentation' : 'Analysis Chart'}
                </h3>
                <p className={styles.resourceType}>
                  Resource Type: {content.type.toUpperCase()}
                </p>
              </div>
            </div>

            <div className={styles.downloadPrompt}>
              <p className={styles.downloadText}>
                To download this resource, please click the button below and fill out the required information.
              </p>
              
              <button 
                className={styles.downloadButton}
                onClick={handleDownloadRequest}
              >
                <svg className={styles.downloadIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Request Download
              </button>
            </div>
          </div>
        </div>

        <EnquireForm 
          isOpen={isEnquireFormOpen}
          onClose={() => setIsEnquireFormOpen(false)}
          title="Request Resource Access"
          subtitle="Please fill out the form below to access the requested resource. We'll get back to you shortly."
          resourceName={foundSolution}
          resourcePath={content.path}
          resourceType={content.type}
          isDownloadRequest={true}
        />
      </div>
    );
  } catch (error) {
    console.error('Error rendering solution page:', error);
    return (
      <div className={styles.pageContainer}>
        <Navbar />
        <div className={styles.errorContainer}>
          <h1>Error</h1>
          <p>An error occurred while loading the solution. Please try again later.</p>
        </div>
      </div>
    );
  }
}
