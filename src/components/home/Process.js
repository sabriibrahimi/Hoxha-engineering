import React from 'react';
import { useTranslation } from 'react-i18next';
import Reveal from '../common/Reveal';

const Process = () => {
  const { t } = useTranslation();
  const steps = [
    [t('servicesPage.consultation'), t('servicesPage.consultationDescription')],
    [t('servicesPage.engineeringServices'), t('servicesPage.engineeringDescription')],
    [t('servicesPage.constructionServices'), t('servicesPage.constructionDescription')],
    [t('servicesPage.projectManagement'), t('servicesPage.projectManagementDescription')],
  ];

  return (
    <section className="section-premium bg-surface-warm border-y border-line">
      <div className="container-premium">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          <Reveal className="lg:col-span-4">
            <p className="label-premium">{t('servicesPage.projectManagement')}</p>
            <h2 className="text-display-sm font-heading text-secondary text-balance mb-6">{t('about.bestPractices')}</h2>
            <p className="text-muted leading-relaxed">{t('about.practicesDescription')}</p>
          </Reveal>
          <div className="lg:col-span-8 border-t border-secondary/20">
            {steps.map(([title, desc], i) => (
              <Reveal key={title} delay={i * .06}>
                <div className="grid sm:grid-cols-12 gap-4 sm:gap-7 py-7 sm:py-8 border-b border-secondary/20 group">
                  <span className="sm:col-span-1 text-[10px] text-primary tracking-widest mt-1">0{i + 1}</span>
                  <h3 className="sm:col-span-4 text-lg font-heading font-semibold text-secondary group-hover:text-primary transition-colors">{title}</h3>
                  <p className="sm:col-span-7 text-sm text-muted leading-relaxed">{desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
