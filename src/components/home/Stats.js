import React from 'react';
import { useTranslation } from 'react-i18next';
import Reveal from '../common/Reveal';

const Stats = () => {
  const { t } = useTranslation();
  const assurances = [
    t('about.qualityMaterialsItem'),
    t('about.expertWorkforceItem'),
    t('about.onTimeItem'),
    t('about.sustainabilityItem'),
  ];

  return (
    <section className="bg-surface-warm border-b border-line">
      <div className="container-premium">
        <Reveal>
          <div className="grid lg:grid-cols-12">
            <div className="lg:col-span-4 py-9 lg:py-12 lg:pr-12 border-b lg:border-b-0 lg:border-r border-line">
              <p className="text-[10px] uppercase tracking-[0.24em] text-primary font-semibold mb-3">{t('trust.experience')}</p>
              <p className="text-sm text-muted leading-relaxed max-w-sm">{t('stats.description')}</p>
            </div>
            <div className="lg:col-span-8 grid sm:grid-cols-2 xl:grid-cols-4">
              {assurances.map((item, i) => (
                <div key={item} className="py-7 lg:py-12 px-0 sm:px-7 border-b sm:border-b-0 sm:border-l border-line group">
                  <span className="text-[10px] text-primary font-semibold tracking-widest">0{i + 1}</span>
                  <p className="font-heading font-semibold text-secondary mt-3 group-hover:text-primary transition-colors">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Stats;
