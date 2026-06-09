import React from 'react';
import { useTranslation } from 'react-i18next';
import Reveal from '../common/Reveal';
import { asset } from '../../utils/assets';

const Founders = () => {
  const { t } = useTranslation();

  return (
    <section className="section-premium bg-secondary-dark text-white overflow-hidden">
      <div className="container-premium">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <Reveal direction="left" className="lg:col-span-5">
            <div className="grid grid-cols-2 gap-3 sm:gap-5">
              <Leader image="founder.png" name="Selman Ajdini" role={t('founders.founder')} />
              <Leader image="ceo.png" name="Sevdail Ajdini" role={t('founders.ceo')} offset />
            </div>
          </Reveal>
          <Reveal direction="right" delay={0.1} className="lg:col-span-7 lg:pl-8">
            <p className="label-premium-light">{t('aboutPage.leadership')}</p>
            <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-heading font-medium leading-tight text-white/90 max-w-3xl">
              &ldquo;{t('founders.description')}&rdquo;
            </blockquote>
            <div className="w-full h-px bg-white/10 my-8" />
            <div className="grid sm:grid-cols-3 gap-6">
              {[['33+', t('stats.yearsExperience')], ['512+', t('stats.projectsFinished')], ['100%', t('aboutPage.clientSatisfaction')]].map(([v, l]) => (
                <div key={l}><strong className="block text-2xl font-heading text-white">{v}</strong><span className="text-[10px] uppercase tracking-[0.18em] text-white/35">{l}</span></div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

const Leader = ({ image, name, role, offset }) => (
  <figure className={offset ? 'mt-10 sm:mt-16' : ''}>
    <div className="aspect-[3/4] overflow-hidden bg-secondary-light">
      <img src={asset(`/images/Founders/${image}`)} alt={name} className="w-full h-full object-cover object-top grayscale image-grade" loading="lazy" />
    </div>
    <figcaption className="pt-4 border-t border-white/15 mt-4">
      <div className="text-sm font-heading font-semibold">{name}</div>
      <div className="text-[9px] uppercase tracking-[0.2em] text-bronze mt-1">{role}</div>
    </figcaption>
  </figure>
);

export default Founders;
