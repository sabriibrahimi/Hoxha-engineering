import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';
import { useLanguageUpdate } from '../../hooks/useLanguageUpdate';

const StatsCounter = ({ value, label, delay }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      className="text-center p-6"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.8, delay }}
    >
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-primary mb-2"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8, delay: delay + 0.2 }}
      >
        {value}
      </motion.h2>
      <p className="text-lg text-gray-600">{label}</p>
    </motion.div>
  );
};

const Stats = () => {
  const { t } = useTranslation();
  const updateKey = useLanguageUpdate(); // Force re-render on language change
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="section bg-accent">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">{t('stats.title')}</h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            {t('stats.description')}
          </p>
          <div className="mt-8">
            <a href="#services" className="btn btn-primary">{t('stats.workWithUs')}</a>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <StatsCounter value="512+" label={t('stats.projectsFinished')} delay={0.2} />
          <StatsCounter value="33+" label={t('stats.yearsExperience')} delay={0.4} />
          <StatsCounter value="1120+" label={t('stats.revenue')} delay={0.6} />
          <StatsCounter value="1520+" label={t('stats.colleagues')} delay={0.8} />
        </div>
      </div>
    </section>
  );
};

export default Stats;
