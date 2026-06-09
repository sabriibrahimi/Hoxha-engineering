import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import PageBackground from '../components/layout/PageBackground';
import SectionHeading from '../components/common/SectionHeading';
import ProjectCard from '../components/common/ProjectCard';
import CTABand from '../components/common/CTABand';
import BackToTop from '../components/common/BackToTop';
import { getProjectsData } from '../data/siteData';

const Projects = () => {
  const { t } = useTranslation();
  const [filter, setFilter] = useState('all');
  const projects = getProjectsData(t);

  const filters = [
    { key: 'all', label: t('common.all') },
    { key: 'residential', label: t('projectsPage.residential') },
    { key: 'commercial', label: t('projectsPage.commercial') },
    { key: 'industrial', label: t('projectsPage.industrial') },
  ];

  const filtered = filter === 'all' ? projects : projects.filter((p) => p.category === filter);

  return (
    <div className="overflow-x-hidden bg-surface">
      <Header />
      <PageBackground title={t('projectsPage.title')} subtitle={t('projectsPage.subtitle')} />

      <section className="section-premium bg-surface-warm">
        <div className="container-premium">
          <SectionHeading label={t('projectsPage.featuredProjects')} title={t('projectsPage.allProjects')} />

          <div className="flex flex-wrap gap-2 mb-12">
            {filters.map((f) => (
              <button
                key={f.key}
                type="button"
                onClick={() => setFilter(f.key)}
                className={`px-5 py-2.5 text-xs font-semibold uppercase tracking-widest transition-colors ${
                  filter === f.key
                    ? 'bg-secondary text-white'
                    : 'bg-white text-muted border border-line hover:border-secondary/30 hover:text-secondary'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-px bg-white/[0.06]">
            {filtered.map((project, index) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                location={project.location}
                image={project.image}
                category={filters.find((f) => f.key === project.category)?.label}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      <CTABand title={t('hero.title')} description={t('hero.subtitle')} buttonText={t('hero.contactBtn')} />
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Projects;
