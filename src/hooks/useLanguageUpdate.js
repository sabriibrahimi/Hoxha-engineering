import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

// Custom hook to force re-render when language changes
export const useLanguageUpdate = () => {
  const { i18n } = useTranslation();
  const [updateKey, setUpdateKey] = useState(0);

  useEffect(() => {
    const handleLanguageChange = () => {
      console.log('useLanguageUpdate: Language changed, forcing re-render');
      setUpdateKey(prev => prev + 1);
    };

    // Listen to both i18n events and custom events
    i18n.on('languageChanged', handleLanguageChange);
    window.addEventListener('languageChanged', handleLanguageChange);

    return () => {
      i18n.off('languageChanged', handleLanguageChange);
      window.removeEventListener('languageChanged', handleLanguageChange);
    };
  }, [i18n]);

  return updateKey;
};
