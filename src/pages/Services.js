import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import PageBackground from '../components/layout/PageBackground';
import SectionHeading from '../components/common/SectionHeading';
import ServiceCard from '../components/common/ServiceCard';
import CTABand from '../components/common/CTABand';
import BackToTop from '../components/common/BackToTop';
import Reveal from '../components/common/Reveal';
import { getServicesData } from '../data/siteData';
import { asset } from '../utils/assets';

const Services = () => {
  const { t } = useTranslation();
  const [selectedMember, setSelectedMember] = useState(null);
  const services = getServicesData(t);

  const teamMembers = [
    { name: 'Selman Ajdini', role: t('founders.founder'), photo: asset('/images/Founders/founder.png'), projects: ['Residential Complex "Sunrise"', 'Downtown Office Tower', 'Eco-Village Masterplan'], bio: t('servicesPage.teamBios.selman') },
    { name: 'Sevdail Ajdini', role: t('founders.ceo'), photo: asset('/images/Founders/ceo.png'), projects: ['Mountain Resort Structural Design', 'High-Rise "Skyline"'], bio: t('servicesPage.teamBios.sevdail') },
    { name: t('servicesPage.leadEngineer'), role: t('servicesPage.siteSupervisor'), photo: asset('/images/Founders/ceo.png'), projects: ['Regional Hospital Expansion', 'Logistics Hub'], bio: t('servicesPage.teamBios.engineer') },
  ];

  const processSteps = [
    { num: '01', title: t('servicesPage.consultation'), desc: t('servicesPage.consultationDescription') },
    { num: '02', title: t('servicesPage.engineeringServices'), desc: t('servicesPage.engineeringDescription') },
    { num: '03', title: t('servicesPage.constructionServices'), desc: t('servicesPage.constructionDescription') },
    { num: '04', title: t('servicesPage.projectManagement'), desc: t('servicesPage.projectManagementDescription') },
  ];

  return (
    <div className="overflow-x-hidden bg-surface">
      <Header />
      <PageBackground title={t('servicesPage.title')} subtitle={t('servicesPage.subtitle')} />

      <section className="section-premium-sm bg-surface-card">
        <div className="container-premium">
          <SectionHeading label={t('aboutPage.team')} title={t('aboutPage.team')} description={t('aboutPage.teamDescription')} />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member, i) => (
              <Reveal key={member.name} delay={i * 0.08}>
                <button type="button" onClick={() => setSelectedMember(member)} className="w-full text-left card-premium overflow-hidden group">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={member.photo} alt={member.name} className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500" loading="lazy" />
                  </div>
                  <div className="p-6 border-t border-line">
                    <h3 className="font-heading font-bold text-secondary">{member.name}</h3>
                    <p className="text-xs uppercase tracking-widest text-primary mt-1">{member.role}</p>
                  </div>
                </button>
              </Reveal>
            ))}
          </div>
          <AnimatePresence>
            {selectedMember && (
              <motion.div className="mt-10 card-premium p-8 relative" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
                <button type="button" onClick={() => setSelectedMember(null)} className="absolute top-4 right-4 text-muted hover:text-secondary text-2xl">×</button>
                <div className="md:flex gap-8">
                  <img src={selectedMember.photo} alt="" className="w-32 h-32 object-cover flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-heading font-bold text-secondary">{selectedMember.name}</h3>
                    <p className="text-primary text-sm font-semibold uppercase tracking-widest mt-1 mb-4">{selectedMember.role}</p>
                    <p className="text-muted text-sm mb-4">{selectedMember.bio}</p>
                    <ul className="text-sm text-muted space-y-1">{selectedMember.projects.map((p) => <li key={p}>— {p}</li>)}</ul>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      <section className="section-premium-sm bg-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-20" />
        <div className="container-premium relative">
          <SectionHeading label={t('services.buildYourDream')} title={t('servicesPage.title')} description={t('servicesPage.subtitle')} dark />
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-px bg-white/[0.06]">
            {services.map((s, i) => <ServiceCard key={s.key} {...s} index={i} />)}
          </div>
        </div>
      </section>

      <section className="section-premium-sm bg-surface-warm">
        <div className="container-premium">
          <SectionHeading label="Process" title={t('servicesPage.projectManagement')} />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-line border border-line">
            {processSteps.map((step, i) => (
              <Reveal key={step.num} delay={i * 0.08}>
                <div className="bg-surface-card p-8 h-full hover:bg-white transition-colors group">
                  <span className="text-4xl font-heading font-bold text-line group-hover:text-primary/20 transition-colors">{step.num}</span>
                  <h3 className="text-base font-heading font-bold text-secondary mt-4 mb-2">{step.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{step.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABand title={t('cta.discussTitle')} description={t('cta.discussDescription')} buttonText={t('about.getInTouch')} />
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Services;
