import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const LanguageDebugger = () => {
  const { t, i18n } = useTranslation();
  const [debugInfo, setDebugInfo] = useState({});

  useEffect(() => {
    console.log('i18n object:', i18n);
    console.log('Current language:', i18n.language);
    console.log('Available languages:', i18n.languages);
    console.log('Resources:', i18n.getResourceBundle(i18n.language, 'translation'));
    
    setDebugInfo({
      currentLang: i18n.language,
      availableLangs: i18n.languages,
      isInitialized: i18n.isInitialized,
      hasResourceBundle: !!i18n.getResourceBundle(i18n.language, 'translation')
    });
  }, [i18n]);

  const handleLanguageChange = (lang) => {
    console.log('Changing language to:', lang);
    i18n.changeLanguage(lang).then(() => {
      console.log('Language changed successfully to:', i18n.language);
      setDebugInfo(prev => ({ ...prev, currentLang: i18n.language }));
    }).catch(err => {
      console.error('Error changing language:', err);
    });
  };

  return (
    <div style={{ 
      position: 'fixed', 
      top: '10px', 
      right: '10px', 
      background: 'rgba(0,0,0,0.9)', 
      color: 'white', 
      padding: '15px', 
      borderRadius: '8px',
      zIndex: 9999,
      fontSize: '11px',
      maxWidth: '300px',
      fontFamily: 'monospace'
    }}>
      <div><strong>i18n Debug Info:</strong></div>
      <div>Current Language: {debugInfo.currentLang}</div>
      <div>Initialized: {debugInfo.isInitialized ? 'Yes' : 'No'}</div>
      <div>Has Resources: {debugInfo.hasResourceBundle ? 'Yes' : 'No'}</div>
      <div>Available: {debugInfo.availableLangs?.join(', ')}</div>
      <div style={{ marginTop: '10px' }}>
        <div><strong>Test Translations:</strong></div>
        <div>Home: {t('navigation.home')}</div>
        <div>Hero Title: {t('hero.title')}</div>
      </div>
      <div style={{ marginTop: '10px' }}>
        <button onClick={() => handleLanguageChange('sq')} style={{ margin: '2px', padding: '5px', background: '#007bff', color: 'white', border: 'none', borderRadius: '3px' }}>AL</button>
        <button onClick={() => handleLanguageChange('mk')} style={{ margin: '2px', padding: '5px', background: '#28a745', color: 'white', border: 'none', borderRadius: '3px' }}>MK</button>
        <button onClick={() => handleLanguageChange('en')} style={{ margin: '2px', padding: '5px', background: '#dc3545', color: 'white', border: 'none', borderRadius: '3px' }}>EN</button>
      </div>
    </div>
  );
};

export default LanguageDebugger;
