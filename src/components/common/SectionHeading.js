import React from 'react';
import Reveal from './Reveal';

const SectionHeading = ({
  label,
  title,
  description,
  align = 'center',
  dark = false,
  className = '',
}) => {
  const alignClass = align === 'left' ? 'text-left' : 'text-center mx-auto';
  const maxW = align === 'left' ? 'max-w-2xl' : 'max-w-3xl';

  return (
    <Reveal className={`mb-14 sm:mb-16 lg:mb-20 ${alignClass} ${maxW} ${className}`}>
      {label && (
        <p className={dark ? 'label-premium-light' : 'label-premium'}>
          {label}
        </p>
      )}
      <h2 className={`text-display-sm font-heading mb-4 sm:mb-5 text-balance ${dark ? 'text-white' : 'text-secondary'}`}>
        {title}
      </h2>
      {description && (
        <p className={`text-base sm:text-lg leading-relaxed ${dark ? 'text-white/60' : 'text-muted'}`}>
          {description}
        </p>
      )}
    </Reveal>
  );
};

export default SectionHeading;
