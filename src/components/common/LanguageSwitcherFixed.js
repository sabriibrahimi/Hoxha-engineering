import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcherFixed = ({ scrolled = false, isMobile = false }) => {
  const { i18n } = useTranslation();
  const [currentLang, setCurrentLang] = useState(i18n.language || 'sq');
  const [forceUpdate, setForceUpdate] = useState(0);

  // Debug: Log when component renders
  console.log('🚀 LanguageSwitcherFixed component rendered!', { scrolled, isMobile, currentLang });

  // Force re-render when language changes
  useEffect(() => {
    const handleLanguageChange = (lng) => {
      console.log('Language changed to:', lng);
      setCurrentLang(lng);
      setForceUpdate(prev => prev + 1);
      
      // Force all components to re-render by updating a global state
      window.dispatchEvent(new CustomEvent('languageChanged', { 
        detail: { language: lng } 
      }));
    };

    i18n.on('languageChanged', handleLanguageChange);
    return () => i18n.off('languageChanged', handleLanguageChange);
  }, [i18n]);

  const handleLanguageClick = async (langCode) => {
    console.log('Switching to language:', langCode);
    try {
      // Store in localStorage first
      localStorage.setItem('i18nextLng', langCode);
      
      // Change language
      await i18n.changeLanguage(langCode);
      console.log('Language switched successfully to:', langCode);
      
      // Force immediate re-render of all components
      setCurrentLang(langCode);
      setForceUpdate(prev => prev + 1);
      
    } catch (error) {
      console.error('Error switching language:', error);
    }
  };

  const getButtonClass = (langCode) => {
    const isActive = currentLang === langCode;
    
    if (isMobile) {
      return `px-4 py-2 rounded-xl font-bold text-xs hover:scale-110 transition-all duration-300 ${
        isActive
          ? 'bg-gradient-to-r from-primary to-primary-dark text-white shadow-lg'
          : 'bg-white/20 backdrop-blur-sm text-gray-700 hover:bg-white/30 border border-white/30'
      }`;
    } else {
      return `px-3 py-1.5 rounded-lg font-semibold text-sm transition-all duration-300 hover:scale-105 ${
        isActive
          ? (scrolled 
              ? 'bg-primary text-white shadow-md hover:bg-primary-dark' 
              : 'bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 border border-white/30')
          : (scrolled 
              ? 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200' 
              : 'bg-white/10 backdrop-blur-sm text-white/80 hover:bg-white/20 border border-white/20')
      }`;
    }
  };

  return (
    <div style={{ 
      position: 'relative', 
      zIndex: 9999, 
      display: 'flex', 
      gap: '10px',
      backgroundColor: 'rgba(255,0,0,0.3)',
      padding: '10px',
      borderRadius: '10px'
    }}>
      <div>🔥 LANGUAGE BUTTONS 🔥</div>
      <button 
        onClick={() => {
          console.log('🔥 AL button clicked!');
          handleLanguageClick('sq');
        }}
        className={getButtonClass('sq')}
        style={{ 
          border: '3px solid red', 
          backgroundColor: 'yellow',
          color: 'black',
          fontSize: '16px',
          padding: '10px',
          margin: '5px',
          cursor: 'pointer',
          zIndex: 9999
        }}
      >
        AL
      </button>
      <button 
        onClick={() => {
          console.log('🔥 MK button clicked!');
          handleLanguageClick('mk');
        }}
        className={getButtonClass('mk')}
        style={{ 
          border: '3px solid red', 
          backgroundColor: 'yellow',
          color: 'black',
          fontSize: '16px',
          padding: '10px',
          margin: '5px',
          cursor: 'pointer',
          zIndex: 9999
        }}
      >
        MK
      </button>
      <button 
        onClick={() => {
          console.log('🔥 EN button clicked!');
          handleLanguageClick('en');
        }}
        className={getButtonClass('en')}
        style={{ 
          border: '3px solid red', 
          backgroundColor: 'yellow',
          color: 'black',
          fontSize: '16px',
          padding: '10px',
          margin: '5px',
          cursor: 'pointer',
          zIndex: 9999
        }}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageSwitcherFixed;
