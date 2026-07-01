import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcherFixed = ({ scrolled = false, isMobile = false }) => {
  const { i18n } = useTranslation();
  const [currentLang, setCurrentLang] = useState(i18n.language || 'sq');

  useEffect(() => {
    const handleLanguageChange = (lng) => setCurrentLang(lng);
    i18n.on('languageChanged', handleLanguageChange);
    return () => i18n.off('languageChanged', handleLanguageChange);
  }, [i18n]);

  const handleLanguageClick = async (langCode) => {
    localStorage.setItem('i18nextLng', langCode);
    await i18n.changeLanguage(langCode);
    setCurrentLang(langCode);
  };

  const getButtonClass = (langCode) => {
    const isActive = currentLang === langCode;
    const base = isMobile
      ? 'flex-1 py-3 text-sm font-bold tracking-widest border transition-colors'
      : 'w-8 h-8 text-[11px] font-bold tracking-wide transition-colors';

    if (isActive) return `${base} bg-bronze border-bronze text-secondary-dark`;
    if (scrolled) return `${base} border-line text-muted hover:text-secondary hover:border-secondary/35`;
    return `${base} border-white/40 text-white/80 hover:text-white hover:border-white/70`;
  };

  return (
    <div className={isMobile ? 'flex gap-3' : 'flex items-center gap-1'}>
      {['sq', 'mk', 'en'].map((lang) => (
        <button
          key={lang}
          type="button"
          onClick={() => handleLanguageClick(lang)}
          className={getButtonClass(lang)}
          aria-pressed={currentLang === lang}
        >
          {lang === 'sq' ? 'AL' : lang.toUpperCase()}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcherFixed;
