import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = ({ mobile = false, closeMobileMenu, scrolled }) => {
  const location = useLocation();
  
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const handleClick = () => {
    if (mobile && closeMobileMenu) {
      closeMobileMenu();
    }
  };


  return (
    <nav className={`${mobile ? 'flex flex-col items-center space-y-4' : 'flex space-x-12'}`}>
      {navItems.map((item) => (
        <Link
          key={item.name}
          to={item.path}
          className={`font-medium text-lg transition-colors duration-300 ${
            location.pathname === item.path
              ? 'text-primary font-bold border-b-2 border-primary pb-1'
              : scrolled ? 'text-gray-800 font-semibold hover:text-primary' : 'text-white font-semibold hover:text-primary drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]'
          }`}
          onClick={() => { window.scrollTo({ top: 0, left: 0, behavior: 'instant' }); handleClick(); }}
        >
          {item.name}
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;
