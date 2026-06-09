import React from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import PageBackground from '../components/layout/PageBackground';
import SectionHeading from '../components/common/SectionHeading';
import CTABand from '../components/common/CTABand';
import BackToTop from '../components/common/BackToTop';
import Reveal from '../components/common/Reveal';
import { asset } from '../utils/assets';
import StaffSection from '../components/about/StaffSection';

const About = () => {
  const { t } = useTranslation();

  const team = [
    { name: 'Selman Ajdini', role: t('founders.founder'), image: asset('/images/Founders/founder.png') },
    { name: 'Sevdail Ajdini', role: t('founders.ceo'), image: asset('/images/Founders/ceo.png') },
  ];

  const values = [
    { key: 'excellence', icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' },
    { key: 'deadlines', icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' },
    { key: 'innovation', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
    { key: 'environment', icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
    { key: 'satisfaction', icon: 'M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
    { key: 'team', icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' },
  ];

  const stats = [
    { value: '33+', label: t('stats.yearsExperience') },
    { value: '512+', label: t('stats.projectsFinished') },
    { value: '100%', label: t('aboutPage.clientSatisfaction') },
    { value: '1520+', label: t('stats.colleagues') },
  ];

  return (
    <div className="overflow-x-hidden bg-surface">
      <Header />
      <PageBackground title={t('aboutPage.title')} subtitle={t('aboutPage.subtitle')} />

      <section className="section-premium bg-surface-card">
        <div className="container-premium">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <Reveal direction="left">
              <p className="label-premium">{t('aboutPage.journey')}</p>
              <h2 className="text-display-sm font-heading text-secondary mb-6">{t('aboutPage.ourStory')}</h2>
              <div className="space-y-4 text-muted leading-relaxed">
                <p>{t('aboutPage.storyP1')}</p>
                <p>{t('aboutPage.storyP2')}</p>
                <p>{t('aboutPage.storyP3')}</p>
              </div>
            </Reveal>
            <Reveal direction="right" delay={0.1}>
              <div className="relative">
                <img src={asset('/images/Construction_Engineer.png')} alt="" className="w-full aspect-[4/3] object-cover" loading="lazy" />
                <div className="absolute -bottom-5 -left-5 bg-secondary text-white p-6 border-l-2 border-primary">
                  <div className="text-3xl font-heading font-bold">33+</div>
                  <div className="text-xs uppercase tracking-widest text-white/50 mt-1">{t('aboutPage.yearsExcellence')}</div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-premium-sm bg-surface-warm">
        <div className="container-premium">
          <SectionHeading label={t('aboutPage.whatGuidesUs')} title={t('aboutPage.ourValues')} description={t('aboutPage.valuesIntro')} />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <Reveal key={v.key} delay={i * 0.06}>
                <div className="card-premium p-8 h-full">
                  <div className="w-10 h-10 border border-primary/20 flex items-center justify-center text-primary mb-5">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={v.icon} /></svg>
                  </div>
                  <h3 className="font-heading font-bold text-secondary mb-2">{t(`aboutPage.values.${v.key}`)}</h3>
                  <p className="text-sm text-muted leading-relaxed">{t(`aboutPage.values.${v.key}Desc`)}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-premium-sm bg-surface-card">
        <div className="container-premium">
          <SectionHeading label={t('aboutPage.leadership')} title={t('aboutPage.meetFounders')} description={t('aboutPage.foundersIntro')} />
          <div className="grid sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {team.map((m, i) => (
              <Reveal key={m.name} delay={i * 0.1}>
                <div className="text-center">
                  <div className="w-40 h-40 mx-auto mb-5 overflow-hidden border-2 border-line">
                    <img src={m.image} alt={m.name} className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-500" />
                  </div>
                  <h3 className="font-heading font-bold text-secondary text-lg">{m.name}</h3>
                  <p className="text-xs uppercase tracking-widest text-primary mt-1">{m.role}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <StaffSection />

      <section className="section-premium-sm bg-secondary">
        <div className="container-premium">
          <SectionHeading label={t('aboutPage.achievements')} title={t('aboutPage.achievements')} description={t('aboutPage.achievementsIntro')} dark />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.06]">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.08}>
                <div className="bg-secondary-light p-8 text-center">
                  <div className="text-3xl sm:text-4xl font-heading font-bold text-white mb-1">{s.value}</div>
                  <div className="text-xs uppercase tracking-widest text-white/40">{s.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABand title={t('cta.readyToWork')} description={t('cta.readyToWorkDescription')} buttonText={t('common.contactUs')} />
      <Footer />
      <BackToTop />
    </div>
  );
};

export default About;
