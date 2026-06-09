import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import PageBackground from '../components/layout/PageBackground';
import SectionHeading from '../components/common/SectionHeading';
import Reveal from '../components/common/Reveal';
import CTABand from '../components/common/CTABand';
import BackToTop from '../components/common/BackToTop';
import { getStaffData } from '../data/staffData';
import { asset } from '../utils/assets';

const StaffDetail = () => {
  const { t, i18n } = useTranslation();
  const { staffSlug } = useParams();
  const language = ['sq', 'mk', 'en'].includes(i18n.language) ? i18n.language : 'sq';
  const staff = getStaffData(language);
  const member = staff.find((item) => item.slug === staffSlug);
  const aboutPath = language === 'sq' ? '/about' : `/${language}/about`;

  if (!member) {
    return (
      <div className="min-h-screen bg-surface">
        <Header />
        <PageBackground title={t('staff.notFound')} subtitle={t('staff.notFoundDescription')} />
        <section className="section-premium text-center">
          <Link to={aboutPath} className="btn btn-primary">{t('staff.backToTeam')}</Link>
        </section>
        <Footer />
      </div>
    );
  }

  return (
    <div className="overflow-x-hidden bg-surface">
      <Header />
      <PageBackground title={member.name} subtitle={member.role} />

      <section className="section-premium bg-surface-card">
        <div className="container-premium">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <Reveal direction="left" className="lg:col-span-5">
              <div className="relative">
                <img src={asset(member.image)} alt={member.name} className="w-full aspect-[4/5] object-cover bg-secondary" />
                <div className="absolute inset-0 ring-1 ring-inset ring-black/10" />
                <div className="absolute -bottom-5 right-0 bg-secondary text-white px-6 py-5 sm:px-8 sm:py-6 border-l-2 border-primary max-w-[85%]">
                  <p className="text-[9px] uppercase tracking-[0.22em] text-bronze mb-2">{t('staff.professionalProfile')}</p>
                  <p className="font-heading font-semibold">{member.role}</p>
                </div>
              </div>
            </Reveal>

            <Reveal direction="right" delay={0.1} className="lg:col-span-7 lg:pt-8">
              <Link to={aboutPath} className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.18em] text-muted hover:text-primary transition-colors mb-8">
                <span aria-hidden="true">&larr;</span> {t('staff.backToTeam')}
              </Link>
              <p className="label-premium">{t('staff.professionalProfile')}</p>
              <h2 className="text-display-sm font-heading text-secondary mb-6 text-balance">{member.name}</h2>
              <p className="text-lg text-primary font-medium mb-6">{member.role}</p>
              <p className="text-muted leading-relaxed text-base sm:text-lg max-w-3xl">{member.bio}</p>

              <div className="grid sm:grid-cols-3 gap-px bg-line border border-line mt-10">
                <ProfileStat value={`${member.projects.length}+`} label={t('staff.featuredProjects')} />
                <ProfileStat value="Hoxha" label={t('staff.firmProjects')} />
                <ProfileStat value="1992" label={t('trust.established')} />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-premium bg-surface-warm border-y border-line">
        <div className="container-premium">
          <SectionHeading label={t('staff.projectPortfolio')} title={t('staff.completedProjects')} description={t('staff.projectsIntro')} align="left" className="mx-0" />
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5 lg:gap-6">
            {member.projects.map((project, index) => (
              <Reveal key={project.title} delay={index * 0.07}>
                <article className="group bg-surface-card border border-line h-full overflow-hidden hover:border-secondary/30 hover:shadow-premium-lg transition-all duration-500">
                  <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
                    <img src={asset(project.image)} alt={project.title} className="w-full h-full object-cover image-grade transition-transform duration-700 group-hover:scale-[1.035]" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary/70 via-transparent to-transparent" />
                    <span className="absolute bottom-4 right-4 bg-secondary/90 text-white text-[10px] tracking-[0.18em] px-3 py-2">{project.year}</span>
                  </div>
                  <div className="p-6 sm:p-7">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-primary font-semibold mb-3">{project.category}</p>
                    <h3 className="text-xl font-heading font-semibold text-secondary mb-3">{project.title}</h3>
                    <p className="text-sm text-muted leading-relaxed">{project.description}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABand title={t('cta.discussTitle')} description={t('cta.discussDescription')} buttonText={t('common.contactUs')} />
      <Footer />
      <BackToTop />
    </div>
  );
};

const ProfileStat = ({ value, label }) => (
  <div className="bg-surface-card p-5 sm:p-6">
    <div className="text-xl font-heading font-semibold text-secondary">{value}</div>
    <div className="text-[9px] uppercase tracking-[0.16em] text-muted mt-1">{label}</div>
  </div>
);

export default StaffDetail;
