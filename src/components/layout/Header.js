import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './Navbar';
import LanguageSwitcher from '../common/LanguageSwitcher';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuOpen && !event.target.closest('.mobile-menu-container')) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [mobileMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-2' : 'py-4'
      }`}
    >
      <div className="container flex justify-between items-center">
        <Link to="/" className="flex items-center group">
          <motion.img 
            src="/images/removed.png" 
            alt="Hoxha Engineering Logo" 
            className="h-10 sm:h-12 md:h-16 mr-2 md:mr-3 transition-transform duration-300 group-hover:scale-105" 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          />
          <div className="flex flex-col">
            <motion.span 
              className={`text-lg sm:text-xl md:text-2xl font-heading font-bold tracking-wider drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)] transition-colors duration-300 ${scrolled ? 'text-primary' : 'text-white'}`}
              whileHover={{ scale: 1.02 }}
            >
              HOXHA
            </motion.span>
            <motion.span 
              className={`text-sm sm:text-base md:text-lg font-heading font-bold leading-tight tracking-wide drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)] transition-colors duration-300 ${scrolled ? 'text-gray-900' : 'text-white'}`}
              whileHover={{ scale: 1.02 }}
            >
              ENGINEERING
            </motion.span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Navbar scrolled={scrolled} />
          <LanguageSwitcher scrolled={scrolled} />
        </div>

        {/* Mobile Menu Button */}
        <motion.button 
          className={`md:hidden p-3 rounded-xl transition-all duration-300 mobile-menu-container ${
            scrolled 
              ? 'text-primary bg-white shadow-lg hover:shadow-xl' 
              : 'text-white bg-black/20 backdrop-blur-sm hover:bg-black/30'
          }`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            className="w-6 h-6 flex flex-col justify-center items-center"
            animate={mobileMenuOpen ? "open" : "closed"}
            variants={{
              open: { rotate: 180 },
              closed: { rotate: 0 }
            }}
            transition={{ duration: 0.3 }}
          >
            <motion.span
              className="w-5 h-0.5 bg-current mb-1"
              variants={{
                open: { rotate: 45, y: 6 },
                closed: { rotate: 0, y: 0 }
              }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="w-5 h-0.5 bg-current mb-1"
              variants={{
                open: { opacity: 0 },
                closed: { opacity: 1 }
              }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="w-5 h-0.5 bg-current"
              variants={{
                open: { rotate: -45, y: -6 },
                closed: { rotate: 0, y: 0 }
              }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </motion.button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setMobileMenuOpen(false)}
            />
            
            {/* Mobile Menu */}
            <motion.div
              className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl md:hidden mobile-menu-container"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ 
                type: "spring", 
                damping: 25, 
                stiffness: 200,
                duration: 0.4 
              }}
            >
              {/* Menu Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <div className="flex items-center">
                  <img src="/images/removed.png" alt="Logo" className="h-8 w-8 mr-3" />
                  <span className="text-xl font-bold text-primary">HOXHA ENGINEERING</span>
                </div>
                <motion.button
                  className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </motion.button>
              </div>

              {/* Menu Content */}
              <div className="flex flex-col h-full">
                {/* Navigation */}
                <div className="flex-1 p-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.3 }}
                  >
                    <Navbar mobile={true} scrolled={true} closeMobileMenu={() => setMobileMenuOpen(false)} />
                  </motion.div>
                </div>

                {/* Language Switcher */}
                <div className="p-6 border-t border-gray-200">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.3 }}
                  >
                    <LanguageSwitcher scrolled={true} />
                  </motion.div>
                </div>

                {/* Contact Info */}
                <div className="p-6 bg-gray-50 border-t border-gray-200">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.3 }}
                    className="text-center"
                  >
                    <p className="text-sm text-gray-600 mb-2">Need immediate assistance?</p>
                    <a 
                      href="tel:031424503" 
                      className="text-primary font-semibold hover:underline"
                    >
                      Call: 031424503
                    </a>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
