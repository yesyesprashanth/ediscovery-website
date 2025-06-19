"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";
import EnquireForm from "../EnquireForm";
import ProductsPopup from "../ProductsMenu/ProductsPopup";
import styles from "./styles.module.css";
import { useRouter, usePathname } from 'next/navigation';
import { productsMenu, applicationsMenu, productUrlMapping, solutionUrlMapping } from '@/data/menudata';
import { eventsData } from '@/data/events';

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [activeItem, setActiveItem] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hasUpcomingEvents, setHasUpcomingEvents] = useState(false);
  const [isEnquireFormOpen, setIsEnquireFormOpen] = useState(false);
  const [isProductsPopupOpen, setIsProductsPopupOpen] = useState(false);
  const [isHoveringProducts, setIsHoveringProducts] = useState(false);
  const productsButtonRef = useRef(null);
  
  const handleProductsMouseEnter = () => {
    setIsHoveringProducts(true);
  };

  const handleProductsMouseLeave = () => {
    setIsHoveringProducts(false);
  };

  const isDarkNavbarPage = pathname.startsWith('/products') || pathname.startsWith('/solutions');

  useEffect(() => {
    // Check for upcoming events on client-side only
    const checkUpcomingEvents = () => {
      const parseDateStr = (dateStr) => {
        try {
          // Remove ordinal indicators and clean up the string
          dateStr = dateStr.replace(/(\d+)(st|nd|rd|th)/g, '$1');
          
          // Handle date ranges by taking the first date
          if (dateStr.includes('–') || dateStr.includes('-')) {
            dateStr = dateStr.split(/[–-]/)[0].trim();
          }
          
          // Extract month, day, and year
          const dateParts = dateStr.match(/([A-Za-z]+)\s+(\d+)(?:\s*,\s*|\s+)(\d{4})/);
          if (!dateParts) {
            throw new Error('Invalid date format');
          }
          
          const [_, month, day, year] = dateParts;
          return new Date(`${month} ${day}, ${year}`);
        } catch (error) {
          console.warn('Error parsing date:', dateStr, error);
          // Return a past date for invalid/unparseable dates
          return new Date(0);
        }
      };

      const today = new Date();
      const hasUpcoming = eventsData.some(event => {
        const eventDate = parseDateStr(event.date);
        return eventDate > today;
      });
      setHasUpcomingEvents(hasUpcoming);
    };
    checkUpcomingEvents();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      // Update active section based on scroll position
      const sections = ["home", "about", "principals", "products", "solutions", "news", "testimonials", "contact"];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) {
        setActiveItem(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Effect to handle scrolling after navigation
  useEffect(() => {
    if (pathname === '/') {
      // Check if we have a stored section to scroll to
      const storedSection = sessionStorage.getItem('scrollToSection');
      if (storedSection) {
        // Clear the stored section
        sessionStorage.removeItem('scrollToSection');
        // Small delay to ensure the page has loaded
        setTimeout(() => {
          const element = document.getElementById(storedSection);
          if (element) {
            const topOffset = storedSection === "home" ? 0 : 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - topOffset;
            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth"
            });
          }
        }, 100);
      }
    }
  }, [pathname]);

  const scrollToSection = (sectionId, e) => {
    e.preventDefault();
    
    if (pathname !== '/') {
      // If not on homepage, first navigate to homepage with the section as a hash
      router.push(`/#${sectionId}`);
      // Store the section ID to scroll after navigation
      sessionStorage.setItem('scrollToSection', sectionId);
    } else {
      // If already on homepage, scroll to section
      const element = document.getElementById(sectionId);
      if (element) {
        const topOffset = sectionId === "home" ? 0 : 80; // Account for navbar height
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - topOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }
    setActiveItem(sectionId);
    setIsMobileMenuOpen(false);
  };

  const handleLogoClick = (e) => {
    e.preventDefault();
    if (pathname !== '/') {
      // If not on homepage, navigate to homepage
      router.push('/');
    } else {
      // If already on homepage, scroll to top
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
    setActiveItem("home");
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''} ${isDarkNavbarPage ? styles.productPage : ''}`}>
      <div className={styles.navbarContainer}>
        <div className={styles.logoSection}>
          <a href="/" onClick={handleLogoClick} className={styles.navbarLogo}>
            <Image
              src="/assets/logo.png"
              alt="eDiscovery Automation"
              width={202}
              height={50}
              style={{ height: '50px', width: 'auto' }}
            />
          </a>
        </div>

        <nav className={`${styles.navbarLinks} ${isMobileMenuOpen ? styles.active : ''}`}>
          <a 
            href="#home" 
            className={`${styles.navLink} ${activeItem === 'home' ? styles.active : ''}`}
            onClick={(e) => scrollToSection("home", e)}
          >
            Home
          </a>
          <a 
            href="#about" 
            className={`${styles.navLink} ${activeItem === 'about' ? styles.active : ''}`}
            onClick={(e) => scrollToSection("about", e)}
          >
            About Us
          </a>
          <a 
            href="#principals" 
            className={`${styles.navLink} ${activeItem === 'principals' ? styles.active : ''}`}
            onClick={(e) => scrollToSection("principals", e)}
          >
            Principals
          </a>

          <div className={styles.menuContainer}>
            <button
              ref={productsButtonRef}
              className={`${styles.navLink} ${styles.productsButton} ${activeItem === 'products' ? styles.active : ''}`}
              aria-haspopup="true"
              onClick={(e) => {
                // Only open popup if clicking directly on the Products button, not its children
                if (e.target === e.currentTarget) {
                  setIsProductsPopupOpen(true);
                }
              }}
              onMouseEnter={handleProductsMouseEnter}
              onMouseLeave={handleProductsMouseLeave}
            >
              Products
              {isHoveringProducts && (
                <div className={styles.menuDropdown}>
                  {Object.entries(productsMenu).map(([category, { products }]) => (
                    <div key={category} className={styles.menuItem} onClick={(e) => e.stopPropagation()}>
                      <div className={styles.menuItemContent} onClick={(e) => e.stopPropagation()}>
                        {category}
                        <span>→</span>
                      </div>
                      <div className={styles.submenuDropdown} onClick={(e) => e.stopPropagation()}>
                        {products.map(product => (
                          <a 
                            key={product} 
                            href={`/products/${Object.entries(productUrlMapping).find(([_, name]) => name === product)?.[0] || ''}`}
                            onClick={(e) => e.stopPropagation()}
                          >
                            {product}
                          </a>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </button>
          </div>

          <div className={styles.menuContainer}>
            <button
              className={`${styles.navLink} ${activeItem === 'solutions' ? styles.active : ''}`}
              aria-haspopup="true"
            >
              Solutions
              <div className={styles.menuDropdown}>
                {Object.entries(applicationsMenu).map(([category, { applications }]) => (
                  <div key={category} className={styles.menuItem}>
                    <div className={styles.menuItemContent}>
                      {category}
                      <span>→</span>
                    </div>
                    <div className={styles.submenuDropdown}>
                      {applications.map(app => {
                        // Convert solution name to URL slug
                        const urlSlug = app.toLowerCase().replace(/[:\s,]+/g, '-').replace(/--+/g, '-').replace(/^-|-$/g, '');
                        return (
                          <a key={app} href={`/solutions/${urlSlug}`}>
                            {app}
                          </a>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </button>
          </div>

          <a 
            href="#news" 
            className={`${styles.navLink} ${activeItem === 'news' ? styles.active : ''}`}
            onClick={(e) => scrollToSection("news", e)}
          >
            {hasUpcomingEvents && <span className={styles.newBadge}>New</span>}
            News & Events
          </a>

          <a 
            href="#testimonials" 
            className={`${styles.navLink} ${activeItem === 'testimonials' ? styles.active : ''}`}
            onClick={(e) => scrollToSection("testimonials", e)}
          >
            Our Customer
          </a>
          <a 
            href="#contact" 
            className={`${styles.navLink} ${activeItem === 'contact' ? styles.active : ''}`}
            onClick={(e) => scrollToSection("contact", e)}
          >
            Contact Us
          </a>
        </nav>

        <div className={styles.navButtons}>
          <button
            className={styles.enquireButton}
            onClick={() => setIsEnquireFormOpen(true)}
          >
            Enquire Now
          </button>
        </div>

        <button
          className={styles.mobileMenuButton}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>
      <EnquireForm isOpen={isEnquireFormOpen} onClose={() => setIsEnquireFormOpen(false)} />
      <ProductsPopup 
        isOpen={isProductsPopupOpen} 
        onClose={() => setIsProductsPopupOpen(false)}
        parentRef={productsButtonRef}
      />
    </header>
  );
};

export default Navbar;