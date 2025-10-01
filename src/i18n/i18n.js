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
        lng: localStorage.getItem('i18nextLng') || 'sq', // Default language - Albanian
        fallbackLng: 'sq',
        supportedLngs: ['sq', 'mk', 'en'],
        interpolation: {
            escapeValue: false // React already escapes values
        },
        react: {
            useSuspense: false
        },
        // Clean configuration for proper functionality
        load: 'languageOnly',
        cleanCode: true,
        nonExplicitSupportedLngs: true,
        debug: true // Set to true for debugging
    })
    .then(() => {
        console.log('✅ i18n initialized successfully');
        console.log('Current language:', i18n.language);
        console.log('Available languages:', i18n.languages);
        console.log('Resources loaded:', Object.keys(i18n.getResourceBundle(i18n.language, 'translation')));
        console.log('Hero title translation:', i18n.getResourceBundle(i18n.language, 'translation').hero?.title);
    })
    .catch((error) => {
        console.error('❌ i18n initialization failed:', error);
    });

export default i18n;