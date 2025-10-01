import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Navbar = ({ mobile = false, closeMobileMenu, scrolled }) => {
  const { t } = useTranslation();
  const location = useLocation();

  const navItems = [
    { name: t('navigation.home'), path: '/' },
    { name: t('navigation.projects'), path: '/projects' },
    { name: t('navigation.services'), path: '/services' },
    { name: t('navigation.about'), path: '/about' },
    { name: t('navigation.contact'), path: '/contact' },
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
                key={item.path}
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