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

        {/* Mobile menu button - Simple and Working */}
         <button
          onClick={() => {
            console.log('Mobile menu button clicked, current state:', isMobileMenuOpen);
            setIsMobileMenuOpen((v) => !v);
          }}
           className={`md:hidden ml-3 p-2 rounded-lg transition-colors ${
            isMobileMenuOpen 
              ? 'bg-primary text-white' 
              : isScrolled 
                ? 'text-gray-700 bg-white border border-gray-200 hover:bg-gray-100' 
                : 'text-white bg-white/20 border border-white/30 hover:bg-white/30'
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

      {/* Mobile Menu - Beautiful Professional Design */}
      {isMobileMenuOpen && (
        <>
          {/* Backdrop with smooth fade */}
          <div 
            className="md:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40 animate-fadeIn" 
            onClick={() => setIsMobileMenuOpen(false)}
          />
          
          {/* Menu Panel - High Visibility & Professional */}
          <div className="md:hidden fixed top-14 left-0 right-0 bg-white shadow-2xl border-t-2 border-primary z-50 animate-slideDown">
            <div className="p-4">
              {/* High Visibility Header */}
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-lg">H</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Hoxha Engineering</h3>
                    <p className="text-sm text-gray-600 font-medium">Building Excellence</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-all duration-200 hover:scale-105"
                >
                  <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              {/* Compact Navigation Links */}
              <nav className="space-y-1">
                {[
                  { to: '/', label: 'Home' },
                  { to: '/projects', label: 'Projects' },
                  { to: '/services', label: 'Services' },
                  { to: '/about', label: 'About' },
                  { to: '/contact', label: 'Contact' },
                ].map((item, index) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`group flex items-center justify-between px-4 py-3 rounded-lg transition-all duration-300 hover:scale-[1.02] ${
                      location.pathname === item.to
                        ? 'bg-primary text-white shadow-lg transform scale-[1.02]'
                        : 'text-gray-800 hover:bg-gray-100 hover:text-primary hover:shadow-md border border-gray-200'
                    }`}
                    style={{
                      animationDelay: `${index * 30}ms`,
                      animation: 'slideInLeft 0.4s ease-out forwards'
                    }}
                  >
                    <span className="font-semibold text-base">{item.label}</span>
                    {location.pathname === item.to ? (
                      <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
                    ) : (
                      <svg className="w-4 h-4 text-gray-600 group-hover:text-primary transition-all duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    )}
                  </Link>
                ))}
              </nav>
              
              {/* High Visibility Language Switcher */}
              <div className="mt-6 pt-4 border-t-2 border-gray-200">
                <div className="flex justify-center space-x-2">
                  <button className="px-4 py-2 bg-primary text-white rounded-lg font-semibold text-sm hover:bg-primary-dark transition-all duration-200 hover:scale-105 shadow-lg">
                    AL
                  </button>
                  <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg font-semibold text-sm hover:bg-gray-300 transition-all duration-200 hover:scale-105 border border-gray-300">
                    MK
                  </button>
                  <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg font-semibold text-sm hover:bg-gray-300 transition-all duration-200 hover:scale-105 border border-gray-300">
                    EN
                  </button>
                </div>
              </div>
              
              {/* High Visibility Footer */}
              <div className="mt-4 pt-3 border-t-2 border-gray-200">
                <div className="text-center">
                  <p className="text-sm text-gray-700 font-medium">© 2024 Hoxha Engineering</p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
};

export default Header;
