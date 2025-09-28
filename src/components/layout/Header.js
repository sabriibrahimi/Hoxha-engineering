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

          {/* Compact Glass Morphism Menu */}
          <div className="md:hidden fixed top-14 left-3 right-3 bg-white/10 backdrop-blur-2xl shadow-2xl rounded-2xl border border-white/20 z-50 animate-slideDown">
            <div className="p-4">
              {/* Compact Header */}
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary-dark rounded-xl flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-lg">H</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">Hoxha Engineering</h3>
                    <p className="text-xs text-gray-600 font-medium">Building Excellence</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 hover:bg-white/20 rounded-xl transition-all duration-300 hover:scale-110 backdrop-blur-sm"
                >
                  <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                            </div>

              {/* Compact Navigation */}
              <nav className="space-y-2">
                                {[
                                    { to: '/', label: 'Home', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
                                    { to: '/projects', label: 'Projects', icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4' },
                                    { to: '/services', label: 'Services', icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.756-.426-3.31-2.37-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z' },
                                    { to: '/about', label: 'About', icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' },
                                    { to: '/contact', label: 'Contact', icon: 'M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
                                ].map((item, index) => (
                                    <Link
                                        key={item.to}
                                        to={item.to}
                                        onClick={() => setIsMobileMenuOpen(false)}
                    className={`group flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-500 hover:scale-105 ${
                      location.pathname === item.to
                        ? 'bg-gradient-to-r from-primary to-primary-dark text-white shadow-xl transform scale-105'
                        : 'bg-white/20 backdrop-blur-sm text-gray-700 hover:bg-white/30 hover:shadow-lg border border-white/30'
                    }`}
                                        style={{
                                            animationDelay: `${index * 100}ms`,
                                            animation: 'slideInLeft 0.6s ease-out forwards'
                                        }}
                                    >
                    <div className={`p-1.5 rounded-lg transition-all duration-300 ${
                      location.pathname === item.to ? 'bg-white/20' : 'bg-white/40 group-hover:bg-white/60'
                    }`}>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                      </svg>
                    </div>
                    <span className="font-semibold text-base">{item.label}</span>
                                        {location.pathname === item.to && (
                                            <div className="ml-auto">
                                                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                                            </div>
                                        )}
                                    </Link>
                                ))}
                            </nav>

              {/* Compact Language Switcher */}
              <div className="mt-6 pt-4 border-t border-white/20">
                <div className="flex justify-center space-x-2">
                  <button className="px-4 py-2 bg-gradient-to-r from-primary to-primary-dark text-white rounded-xl font-bold text-xs hover:scale-110 transition-all duration-300 shadow-lg">
                    AL
                  </button>
                  <button className="px-4 py-2 bg-white/20 backdrop-blur-sm text-gray-700 rounded-xl font-bold text-xs hover:bg-white/30 hover:scale-110 transition-all duration-300 border border-white/30">
                    MK
                  </button>
                  <button className="px-4 py-2 bg-white/20 backdrop-blur-sm text-gray-700 rounded-xl font-bold text-xs hover:bg-white/30 hover:scale-110 transition-all duration-300 border border-white/30">
                    EN
                  </button>
                </div>
              </div>

              {/* Compact Footer */}
              <div className="mt-4 pt-3 border-t border-white/20">
                <div className="text-center">
                  <p className="text-xs text-gray-600 font-medium">© 2024 Hoxha Engineering</p>
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
