import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Reveal from '../common/Reveal';
import { asset } from '../../utils/assets';
import { getServicesData } from '../../data/siteData';

const Services = () => {
  const { t, i18n } = useTranslation();
  const services = getServicesData(t);
  const path = i18n.language === 'sq' ? '/services' : `/${i18n.language}/services`;

  return (
    <section id="services" className="section-premium bg-secondary text-white relative overflow-hidden section-divider-dark">
      <div className="absolute inset-0 architectural-grid-dark opacity-35" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-bronze/50 to-transparent" />
      <div className="container-premium relative">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 mb-12 lg:mb-16">
          <Reveal className="lg:col-span-7">
            <p className="label-premium-light">{t('services.buildYourDream')}</p>
            <h2 className="text-display-sm font-heading text-balance">{t('services.qualityServices')}</h2>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-5 lg:pt-10">
            <p className="text-white/75 leading-relaxed mb-7 max-w-prose">{t('servicesPage.subtitle')}. {t('about.practicesDescription')}</p>
            <Link to={path} className="btn btn-outline-light">{t('services.viewAll')} <span className="btn-arrow" aria-hidden="true">&rarr;</span></Link>
          </Reveal>
        </div>

        <div className="border-t border-white/10">
          {services.slice(0, 4).map((service, i) => (
            <Reveal key={service.key} delay={i * 0.05}>
              <article className="group relative grid md:grid-cols-12 gap-5 md:gap-8 py-7 md:py-9 border-b border-white/10 items-center transition-colors duration-500 hover:bg-white/[0.035]">
                <div className="absolute inset-y-0 left-0 w-px bg-bronze scale-y-0 origin-top transition-transform duration-500 group-hover:scale-y-100" />
                <div className="md:col-span-1 text-[10px] tracking-[0.25em] text-bronze transition-transform duration-500 group-hover:translate-x-2">0{i + 1}</div>
                <div className="md:col-span-4">
                  <h3 className="text-xl sm:text-2xl font-heading font-semibold group-hover:text-bronze transition-colors">{service.title}</h3>
                </div>
                <p className="md:col-span-5 text-sm text-white/70 leading-relaxed max-w-xl">{service.description}</p>
                <div className="hidden md:flex md:col-span-2 justify-self-end items-center gap-4">
                  <span className="flex h-9 w-9 items-center justify-center border border-white/15 text-white/55 transition-all duration-500 group-hover:border-bronze/70 group-hover:text-bronze group-hover:translate-x-1" aria-hidden="true">&rarr;</span>
                  <div className="w-28 h-16 overflow-hidden">
                    <img src={asset(service.image)} alt="" className="w-full h-full object-cover image-grade opacity-75 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" loading="lazy" />
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
