import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import LanguageSwitcher from '../common/LanguageSwitcher';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Add scrolled style
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 0);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      const original = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      document.documentElement.classList.add('no-scroll');
      document.body.classList.add('no-scroll');
      return () => {
        document.body.style.overflow = original;
        document.documentElement.classList.remove('no-scroll');
        document.body.classList.remove('no-scroll');
      };
    }
  }, [isMobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-300 border-b ${
        isScrolled
          ? 'bg-white/90 backdrop-blur shadow border-gray-200'
          : 'md:bg-transparent md:shadow-none bg-white shadow border-gray-200'
      }`}
     >
       {/* Overlay gradient on desktop only to avoid bleed, hidden on mobile */}
       {!isScrolled && (
         <div className="pointer-events-none absolute inset-0 hidden md:block bg-gradient-to-b from-black/40 to-transparent" />
       )}

       {/* Top bar */}
       <div className="relative container h-14 md:h-20 flex items-center justify-between px-4">
        {/* Logo */}
        <Link to="/" className="mr-auto flex items-center gap-2 ml-8">
           <span
             className={`transition-colors ${
               isScrolled ? 'text-primary' : 'md:text-white text-primary'
             }`}
            aria-hidden
          >
            <img src="/Hoxha-engineering/images/removed.png" alt="Logo" className="w-12 h-12 md:w-14 md:h-14" />
          </span>
          <span className="leading-tight ml-6">
            <span
               className={`block text-lg md:text-xl lg:text-2xl font-bold transition-colors tracking-tight ${
                 isScrolled ? 'text-primary' : 'md:text-white text-primary'
               }`}
               style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.3)', fontFamily: 'Arial, sans-serif' }}
            >
              HOXHA
            </span>
            <span
               className={`block text-sm md:text-base lg:text-lg tracking-wider font-semibold transition-colors ${
                 isScrolled ? 'text-secondary' : 'md:text-white/95 text-secondary'
               }`}
               style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.3)', fontFamily: 'Arial, sans-serif' }}
            >
              ENGINEERING
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
         <nav className="hidden md:flex items-center gap-8">
          {[
            { to: '/', label: 'Home' },
            { to: '/services', label: 'Services' },
            { to: '/projects', label: 'Projects' },
            { to: '/about', label: 'About' },
            { to: '/contact', label: 'Contact' },
          ].map((item) => (
            <Link
              key={item.to}
              to={item.to}
               className={`font-medium transition-colors hover:text-primary ${
                 isScrolled ? 'text-gray-700' : 'md:text-white text-gray-700'
               }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile menu button */}
         <button
          onClick={() => setIsMobileMenuOpen((v) => !v)}
           className={`md:hidden ml-3 p-2 rounded-md transition-colors ${
            isScrolled ? 'text-gray-700 bg-white border border-gray-200 hover:bg-gray-100' : 'text-gray-700 hover:bg-gray-100'
          }`}
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile drawer with backdrop */}
      {/* Backdrop */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-[180] bg-black/30" onClick={() => setIsMobileMenuOpen(false)}></div>
      )}
      {/* Panel */}
      <div
        id="mobile-menu"
        className={`md:hidden fixed left-0 right-0 z-[190] origin-top transition-transform ${
          isMobileMenuOpen ? 'scale-y-100' : 'scale-y-0'
        } bg-white shadow`}
        style={{ transformOrigin: 'top', top: '56px' }}
      >
        <div className="container py-3 h-[calc(100vh-56px)] overflow-y-auto overscroll-contain flex flex-col">
          <nav className="flex-1 flex flex-col items-center text-center space-y-3 py-1">
            {[
              { to: '/', label: 'Home' },
              { to: '/projects', label: 'Projects' },
              { to: '/services', label: 'Services' },
              { to: '/about', label: 'About' },
              { to: '/contact', label: 'Contact' },
            ].map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-sm font-medium text-gray-800 hover:text-primary transition-colors relative px-1 py-1 tracking-wide`}
              >
                <span>{item.label}</span>
                {location.pathname === item.to && (
                  <span className="absolute left-1/2 -translate-x-1/2 -bottom-1.5 w-6 h-0.5 bg-primary rounded" />
                )}
              </Link>
            ))}
          </nav>

          <div className="pt-2 pb-2 border-t border-gray-200 flex justify-start">
            <LanguageSwitcher scrolled={true} compact={true} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
