import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { asset } from '../../utils/assets';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const isHome = location.pathname === '/' || /^\/(sq|mk|en)\/?$/.test(location.pathname);
  const transparent = isHome && !scrolled;

  const getLocalizedPath = (path) => {
    const lang = i18n.language || 'sq';
    return lang === 'sq' ? path : `/${lang}${path}`;
  };

  const switchLanguage = async (lang) => {
    localStorage.setItem('i18nextLng', lang);
    await i18n.changeLanguage(lang);
    const stripped = (location.pathname || '/').replace(/^\/(sq|mk|en)(?=\/|$)/, '') || '/';
    const normalized = stripped === '' ? '/' : stripped;
    navigate((lang === 'sq' ? normalized : `/${lang}${normalized}`) + location.search, { replace: false });
  };

  const navItems = [
    { to: '/', labelKey: 'navigation.home' },
    { to: '/services', labelKey: 'navigation.services' },
    { to: '/projects', labelKey: 'navigation.projects' },
    { to: '/about', labelKey: 'navigation.about' },
    { to: '/contact', labelKey: 'navigation.contact' },
  ];

  const isActive = (path) => {
    const cur = location.pathname.replace(/^\/(sq|mk|en)/, '') || '/';
    return path === '/' ? cur === '/' : cur === path || cur.startsWith(`${path}/`);
  };

  useEffect(() => { setMenuOpen(false); }, [location.pathname]);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    fn();
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const navLink = (active) => {
    if (transparent) return active ? 'text-white' : 'text-white/60 hover:text-white';
    return active ? 'text-primary' : 'text-muted hover:text-secondary';
  };

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-[1000] transition-all duration-500 ${
          transparent
            ? 'bg-transparent'
            : 'bg-white/95 backdrop-blur-xl border-b border-line shadow-[0_1px_0_rgba(0,0,0,0.04)]'
        }`}
      >
        <div className="container-premium h-[76px] flex items-center justify-between gap-6">
          <Link to={getLocalizedPath('/')} className="flex items-center gap-3 flex-shrink-0 group">
            <div className={`p-1.5 border transition-colors ${transparent ? 'border-white/20 group-hover:border-white/40' : 'border-line group-hover:border-primary/30'}`}>
              <img src={asset('/images/removed.png')} alt="" className="w-8 h-8" />
            </div>
            <div className="hidden sm:block leading-none">
              <span className={`block text-sm lg:text-base font-heading font-bold tracking-tight ${transparent ? 'text-white' : 'text-secondary'}`}>HOXHA</span>
              <span className={`block text-[9px] lg:text-[10px] tracking-[0.25em] font-medium mt-1 ${transparent ? 'text-white/50' : 'text-muted'}`}>ENGINEERING</span>
            </div>
          </Link>

          <nav className="hidden xl:flex items-center gap-9">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={getLocalizedPath(item.to)}
                className={`relative text-[11px] font-semibold uppercase tracking-[0.16em] transition-colors py-1 ${navLink(isActive(item.to))}`}
              >
                {t(item.labelKey)}
                {isActive(item.to) && (
                  <motion.span layoutId="nav-indicator" className={`absolute -bottom-1 left-0 right-0 h-px ${transparent ? 'bg-bronze' : 'bg-primary'}`} />
                )}
              </Link>
            ))}
          </nav>

          <div className="hidden xl:flex items-center gap-6">
            <div className="flex items-center gap-1">
              {['sq', 'mk', 'en'].map((lang) => (
                <button
                  key={lang}
                  type="button"
                  onClick={() => switchLanguage(lang)}
                  className={`w-8 h-8 text-[11px] font-bold tracking-wide transition-colors ${
                    i18n.language === lang
                      ? transparent ? 'text-white bg-white/10' : 'text-primary bg-primary/5'
                      : transparent ? 'text-white/40 hover:text-white/70' : 'text-muted hover:text-secondary'
                  }`}
                >
                  {lang === 'sq' ? 'AL' : lang.toUpperCase()}
                </button>
              ))}
            </div>
            <Link
              to={getLocalizedPath('/contact')}
              className={`btn text-[13px] uppercase tracking-[0.1em] px-6 py-3 ${
                transparent ? 'bg-white text-secondary hover:bg-white/90' : 'btn-primary'
              }`}
            >
              {t('hero.contactBtn')}
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            className={`xl:hidden p-2 transition-colors ${transparent ? 'text-white' : 'text-secondary'}`}
            aria-label="Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeWidth={1.5} d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </button>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-[1100] bg-secondary xl:hidden flex flex-col"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="container-premium h-[72px] flex items-center justify-between border-b border-white/10">
              <Link to={getLocalizedPath('/')} onClick={() => setMenuOpen(false)} className="flex items-center gap-3">
                <img src={asset('/images/removed.png')} alt="" className="w-8 h-8" />
                <span className="text-sm font-heading font-bold text-white tracking-tight">HOXHA ENGINEERING</span>
              </Link>
              <button type="button" onClick={() => setMenuOpen(false)} className="text-white/60 hover:text-white p-2" aria-label="Close">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <nav className="flex-1 container-premium py-8 overflow-y-auto">
              {navItems.map((item, i) => (
                <motion.div key={item.to} initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.06 }}>
                  <Link
                    to={getLocalizedPath(item.to)}
                    onClick={() => setMenuOpen(false)}
                    className={`block py-5 border-b border-white/10 text-2xl font-heading font-bold tracking-tight transition-colors ${
                      isActive(item.to) ? 'text-bronze' : 'text-white/80 hover:text-white'
                    }`}
                  >
                    {t(item.labelKey)}
                  </Link>
                </motion.div>
              ))}

              <div className="mt-10 flex gap-3">
                {['sq', 'mk', 'en'].map((lang) => (
                  <button
                    key={lang}
                    type="button"
                    onClick={() => switchLanguage(lang)}
                    className={`flex-1 py-3 text-sm font-bold tracking-widest border transition-colors ${
                      i18n.language === lang ? 'bg-primary border-primary text-white' : 'border-white/20 text-white/60'
                    }`}
                  >
                    {lang === 'sq' ? 'AL' : lang.toUpperCase()}
                  </button>
                ))}
              </div>
            </nav>

            <div className="container-premium py-6 border-t border-white/10 safe-bottom">
              <Link to={getLocalizedPath('/contact')} onClick={() => setMenuOpen(false)} className="btn btn-primary w-full py-4">
                {t('hero.contactBtn')}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
