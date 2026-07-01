import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Reveal from '../common/Reveal';
import { asset } from '../../utils/assets';

const About = () => {
  const { t, i18n } = useTranslation();
  const path = i18n.language === 'sq' ? '/about' : `/${i18n.language}/about`;

  return (
    <section className="section-premium bg-surface-card overflow-hidden section-divider relative">
      <div className="absolute inset-0 architectural-grid opacity-35 pointer-events-none" />
      <div className="container-premium relative">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <Reveal direction="left" className="lg:col-span-7">
            <div className="relative">
              <img src={asset('/images/Construction_Engineer.png')} alt="" className="w-full aspect-[4/3] lg:aspect-[5/4] object-cover image-grade" loading="lazy" />
              <div className="absolute inset-0 ring-1 ring-inset ring-black/10" />
              <div className="absolute bottom-0 right-0 bg-surface-card p-5 sm:p-7 w-[72%] sm:w-[46%] border-t border-l border-line">
                <div className="flex items-end justify-between gap-4">
                  <span className="text-4xl sm:text-5xl font-heading font-semibold text-secondary">33</span>
                  <span className="text-primary text-xl">+</span>
                </div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-muted mt-3">{t('aboutPage.yearsExcellence')}</p>
              </div>
            </div>
          </Reveal>

          <Reveal direction="right" delay={0.1} className="lg:col-span-5 lg:pt-8">
            <p className="label-premium">{t('about.sustainability')}</p>
            <h2 className="text-display-sm font-heading text-secondary text-balance mb-7">{t('about.title')}</h2>
            <p className="text-muted leading-relaxed mb-8">{t('about.description')}</p>
            <div className="border-t border-line mb-8">
              {[t('about.qualityMaterialsItem'), t('about.expertWorkforceItem'), t('about.latestDesignsItem')].map((item, i) => (
                <div key={item} className="flex gap-5 items-center py-4 border-b border-line">
                  <span className="text-[10px] text-primary tracking-widest">0{i + 1}</span>
                  <span className="text-sm font-medium text-secondary">{item}</span>
                </div>
              ))}
            </div>
            <Link to={path} className="btn btn-outline-dark">{t('common.learnMore')} <span className="btn-arrow" aria-hidden="true">&rarr;</span></Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default About;
