import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Reveal from './Reveal';

const CTABand = ({ title, description, buttonText, buttonTo = '/contact' }) => {
  const { t, i18n } = useTranslation();

  const getLocalizedPath = (path) => {
    const lang = i18n.language || 'sq';
    return lang === 'sq' ? path : `/${lang}${path}`;
  };

  return (
    <section className="relative overflow-hidden bg-secondary-dark section-divider-dark">
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-20 pointer-events-none" />
      <div className="absolute inset-0 bg-noise pointer-events-none" />
      <div className="container-premium relative py-20 sm:py-24 lg:py-28">
        <Reveal className="max-w-3xl mx-auto text-center">
          <h2 className="text-display-sm font-heading text-white mb-5 text-balance">{title}</h2>
          <p className="text-base sm:text-lg text-white/75 leading-relaxed mb-10">{description}</p>
          <Link to={getLocalizedPath(buttonTo)} className="btn btn-primary px-10 py-4">
            {buttonText || t('common.contactUs')}
          </Link>
        </Reveal>
      </div>
    </section>
  );
};

export default CTABand;
