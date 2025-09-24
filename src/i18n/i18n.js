import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslation from './translations/en.json';
import sqTranslation from './translations/sq.json';
import mkTranslation from './translations/mk.json';

const resources = {
  en: {
    translation: enTranslation
  },
  sq: {
    translation: sqTranslation
  },
  mk: {
    translation: mkTranslation
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // Default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false // React already escapes values
    }
  });

export default i18n;
