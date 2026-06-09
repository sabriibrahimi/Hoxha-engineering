import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useInView } from 'react-intersection-observer';

const TrustBar = ({ className = '' }) => {
  const { t } = useTranslation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

  const items = [
    { label: t('trust.established'), value: '1992' },
    { label: t('trust.projects'), value: '512+' },
    { label: t('trust.region'), value: t('trust.regionValue') },
    { label: t('trust.experience'), value: '33+' },
  ];

  return (
    <div ref={ref} className={className}>
      <div className="border-y border-gray-200 bg-white">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-gray-200">
            {items.map((item, i) => (
              <motion.div
                key={item.label}
                className="py-5 sm:py-6 px-3 sm:px-6 text-center"
                initial={{ opacity: 0, y: 12 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: i * 0.07 }}
              >
                <div className="text-xl sm:text-2xl lg:text-3xl font-heading font-bold text-primary leading-none mb-1.5">
                  {item.value}
                </div>
                <div className="text-[10px] sm:text-xs text-gray-500 uppercase tracking-widest font-medium leading-snug">
                  {item.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustBar;
