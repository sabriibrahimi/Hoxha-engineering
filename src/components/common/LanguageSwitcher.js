import React, { useState } from 'react';

const LanguageSwitcher = ({ scrolled = false, compact = false, className = '' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('en');

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'sq', name: 'Shqip' },
    { code: 'mk', name: 'Македонски' }
  ];

  const getCurrentLanguage = () => {
    return languages.find(lang => lang.code === currentLanguage);
  };

  const handleLanguageChange = (langCode) => {
    setCurrentLanguage(langCode);
    setIsOpen(false);
  };


  return (
    <div className={`relative ${className}`}>
      <button 
        className={`flex items-center space-x-2 ${compact ? 'px-3 py-1 text-sm rounded-md' : 'px-3 py-2 rounded-md'} focus:outline-none transition-colors duration-200 ${
          scrolled ? 'border border-gray-300 text-gray-800 hover:bg-gray-100' : 'border border-white text-white hover:bg-white/10'
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{getCurrentLanguage().name}</span>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className={`h-4 w-4 transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''}`} 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className={`absolute top-full ${compact ? 'left-0' : 'right-0'} mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg z-50`}>
          <ul className="py-1">
            {languages.map((language) => (
              <li key={language.code}>
                <button
                  className={`w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center space-x-2 ${
                    currentLanguage === language.code ? 'bg-gray-100 font-medium' : ''
                  }`}
                  onClick={() => handleLanguageChange(language.code)}
                >
                  <span>{language.name}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
