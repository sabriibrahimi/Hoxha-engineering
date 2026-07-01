import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Reveal from '../common/Reveal';
import { asset } from '../../utils/assets';
import { getProjectsData } from '../../data/siteData';

const FeaturedProjects = () => {
  const { t, i18n } = useTranslation();
  const projects = getProjectsData(t).slice(0, 3);
  const path = i18n.language === 'sq' ? '/projects' : `/${i18n.language}/projects`;

  return (
    <section className="section-premium bg-surface-card overflow-hidden section-divider">
      <div className="container-premium">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-end mb-12 lg:mb-16">
          <Reveal className="lg:col-span-8">
            <p className="label-premium">{t('projectsPage.featuredProjects')}</p>
            <h2 className="text-display-sm font-heading text-secondary max-w-4xl text-balance">{t('projectsPage.subtitle')}</h2>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-4 lg:text-right">
            <Link to={path} className="btn btn-outline-dark">{t('projectsPage.allProjects')} <span aria-hidden="true">&rarr;</span></Link>
          </Reveal>
        </div>

        <div className="grid lg:grid-cols-12 gap-5 lg:gap-6">
          <Reveal direction="left" className="lg:col-span-7">
            <ProjectFeature project={projects[0]} large index="01" />
          </Reveal>
          <div className="lg:col-span-5 grid gap-5 lg:gap-6">
            <Reveal direction="right" delay={0.08}><ProjectFeature project={projects[1]} index="02" /></Reveal>
            <Reveal direction="right" delay={0.16}><ProjectFeature project={projects[2]} index="03" /></Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

const ProjectFeature = ({ project, large, index }) => (
  <article className={`group relative overflow-hidden bg-secondary ${large ? 'min-h-[440px] lg:min-h-[650px]' : 'min-h-[300px] lg:min-h-[312px]'}`}>
    <img src={asset(project.image)} alt={project.title} className="absolute inset-0 w-full h-full object-cover image-grade transition-transform duration-700 group-hover:scale-[1.035]" loading="lazy" />
    <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/20 to-transparent" />
    <div className="absolute top-0 left-0 w-20 h-20 border-r border-b border-white/20 flex items-center justify-center text-[11px] tracking-[0.2em] text-white/70">{index}</div>
    <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 lg:p-10">
      <p className="text-[10px] uppercase tracking-[0.22em] text-bronze mb-3">{project.location}</p>
      <h3 className={`${large ? 'text-2xl sm:text-4xl' : 'text-xl sm:text-2xl'} font-heading font-semibold text-white max-w-xl`}>{project.title}</h3>
      <div className="h-px bg-white/20 mt-6 overflow-hidden"><div className="h-full w-16 bg-primary transition-all duration-500 group-hover:w-full" /></div>
    </div>
  </article>
);

export default FeaturedProjects;
