import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';
import { useLanguageUpdate } from '../../hooks/useLanguageUpdate';

const About = () => {
  const { t } = useTranslation();
  const updateKey = useLanguageUpdate(); // Force re-render on language change
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [checklistRef, checklistInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const checklistItems = [
    t('about.sustainabilityItem'),
    t('about.onTimeItem'),
    t('about.latestDesignsItem'),
    t('about.qualityMaterialsItem'),
    t('about.expertWorkforceItem')
  ];

  return (
    <section className="section bg-secondary text-white py-16 sm:py-20 md:py-24">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <span className="text-lg sm:text-xl text-primary font-semibold mb-2 block">{t('about.sustainability')}</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 leading-tight">{t('about.title')}</h2>
            <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 leading-relaxed">
              {t('about.description')}
            </p>
            <div className="mt-6 sm:mt-8">
              <a href="#contact" className="btn bg-white text-secondary hover:bg-gray-100 w-full sm:w-auto">{t('about.getInTouch')}</a>
            </div>
          </motion.div>

          <motion.div
            ref={checklistRef}
            initial={{ opacity: 0, x: 50 }}
            animate={checklistInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8 }}
            className="bg-white text-dark p-6 sm:p-8 md:p-12 rounded-lg shadow-xl order-1 lg:order-2"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-primary mb-6 sm:mb-8">{t('about.bestPractices')}</h3>
            <p className="text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed">
              {t('about.practicesDescription')}
            </p>
            
            <ul className="space-y-3 sm:space-y-4">
              {checklistItems.map((item, index) => (
                <motion.li 
                  key={item}
                  className="flex items-center"
                  initial={{ opacity: 0, x: 20 }}
                  animate={checklistInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  <span className="bg-primary text-white p-1 rounded-full mr-3 sm:mr-4 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="text-base sm:text-lg">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
