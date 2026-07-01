import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { asset } from '../../utils/assets';

const Footer = () => {
  const { t, i18n } = useTranslation();

  const getLocalizedPath = (path) => {
    const lang = i18n.language || 'sq';
    return lang === 'sq' ? path : `/${lang}${path}`;
  };

  const navLinks = [
    { to: '/', labelKey: 'navigation.home' },
    { to: '/services', labelKey: 'navigation.services' },
    { to: '/projects', labelKey: 'navigation.projects' },
    { to: '/about', labelKey: 'navigation.about' },
    { to: '/contact', labelKey: 'navigation.contact' },
  ];

  return (
    <footer className="bg-secondary-dark text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-20 pointer-events-none" />

      <div className="container-premium relative pt-16 sm:pt-20 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-14 border-b border-white/15">
          <div className="lg:col-span-4">
            <Link to={getLocalizedPath('/')} className="inline-flex items-center gap-3 mb-6">
              <img src={asset('/images/removed.png')} alt="" className="w-10 h-10" />
              <div>
                <div className="text-base font-heading font-bold tracking-tight">HOXHA</div>
                <div className="text-[10px] tracking-[0.25em] text-white/60 font-medium">ENGINEERING</div>
              </div>
            </Link>
            <p className="text-sm text-white/70 leading-relaxed max-w-xs">{t('footer.buildingExcellence')}</p>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-[11px] uppercase tracking-[0.2em] text-bronze font-semibold mb-5">{t('footer.quickLinks')}</h4>
            <ul className="space-y-3">
              {navLinks.map((item) => (
                <li key={item.to}>
                  <Link to={getLocalizedPath(item.to)} className="text-sm text-white/75 hover:text-white transition-colors">
                    {t(item.labelKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-[11px] uppercase tracking-[0.2em] text-bronze font-semibold mb-5">{t('footer.contact')}</h4>
            <ul className="space-y-3 text-sm text-white/75">
              <li>4PR6+8VM, Kumanovo</li>
              <li><a href="tel:+38931424503" className="hover:text-white transition-colors">031424503</a></li>
              <li><a href="mailto:Hoxha-ing@live.com" className="hover:text-white transition-colors">Hoxha-ing@live.com</a></li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-[11px] uppercase tracking-[0.2em] text-bronze font-semibold mb-5">{t('footer.connectWithUs')}</h4>
            <div className="flex gap-3">
              {[
                { href: 'https://www.facebook.com/profile.php?id=100057076855558', label: 'Facebook' },
                { href: 'https://www.instagram.com/hoxha.ing/', label: 'Instagram' },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-10 h-10 border border-white/25 flex items-center justify-center text-white/75 hover:text-white hover:border-bronze transition-colors text-xs font-bold"
                >
                  {s.label[0]}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="py-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-white/60 border-b border-white/15">
          <p>{t('footer.copyright')}</p>
          <p>
            Developed by{' '}
            <a href="https://sabriibrahimi.github.io/LandingPage/" target="_blank" rel="noopener noreferrer" className="text-white/75 hover:text-bronze transition-colors">
              Sabri Ibrahimi
            </a>
          </p>
        </div>
        <div className="pt-8 sm:pt-10">
          <div className="flex items-center gap-4 mb-5">
            <span className="h-px flex-1 bg-white/10" />
            <span className="text-[9px] uppercase tracking-[0.28em] text-bronze">Since 1992</span>
          </div>
          <div className="font-heading font-semibold text-[clamp(2.8rem,10vw,8.5rem)] leading-none tracking-[-0.07em] text-white/[0.07] whitespace-nowrap text-center">
            HOXHA ENGINEERING
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
