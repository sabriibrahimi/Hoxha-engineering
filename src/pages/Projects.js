import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import PageBackground from '../components/layout/PageBackground';

const ProjectCard = ({ title, location, image, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
      <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.1 * index }}
          className="group relative overflow-hidden rounded-lg shadow-lg"
      >
        <div className="relative h-80">
          <img
              src={image}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-70"></div>
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white text-center">
            <h3 className="text-2xl font-bold mb-1">{title}</h3>
            <p className="text-lg opacity-90">{location}</p>
            <motion.div
                initial={{ width: 0 }}
                animate={inView ? { width: '60px' } : { width: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index + 0.3 }}
                className="h-1 bg-primary rounded mt-3 mx-auto"
            ></motion.div>
          </div>
        </div>
      </motion.div>
  );
};

const Projects = () => {
  const { t } = useTranslation();
  const [headerRef, headerInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Using the images we have available
  const projects = [
    {
      title: 'Residential Complex',
      location: 'Kumanovo, North Macedonia',
      image: '/Hoxha-engineering/images/Services_images/residential.png?v=1'
    },
    {
      title: 'Individual Housing Project',
      location: 'Skopje, North Macedonia',
      image: '/Hoxha-engineering/images/Services_images/Individual.png?v=1'
    },
    {
      title: 'Collective Housing Development',
      location: 'Tetovo, North Macedonia',
      image: '/Hoxha-engineering/images/Services_images/collective.png?v=1'
    },
    {
      title: 'Public Administrative Building',
      location: 'Kumanovo, North Macedonia',
      image: '/Hoxha-engineering/images/Services_images/public.png?v=1'
    },
    {
      title: 'Social Housing Project',
      location: 'Gostivar, North Macedonia',
      image: '/Hoxha-engineering/images/Services_images/social.png?v=1'
    },
    {
      title: 'Commercial Building',
      location: 'Skopje, North Macedonia',
      image: '/Hoxha-engineering/images/Construction_Engineer.png?v=1'
    },
  ];

  return (
      <div>
        <Header />

        {/* Hero Section */}
        <PageBackground
            title={t('projectsPage.title')}
            subtitle={t('projectsPage.subtitle')}
        />

        {/* Projects Gallery */}
        <section className="py-24">
          <div className="container">
            <div className="text-center mb-16">
              <span className="text-xl text-primary font-semibold mb-2 block">{t('projectsPage.featuredProjects')}</span>
              <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">{t('projectsPage.allProjects')}</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                  <ProjectCard
                      key={project.title}
                      title={project.title}
                      location={project.location}
                      image={project.image}
                      index={index}
                  />
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-primary py-16 text-white">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('hero.title')}</h2>
            <p className="text-lg mb-8 max-w-3xl mx-auto">{t('hero.subtitle')}</p>
            <a href="#/contact" className="btn bg-white text-primary hover:bg-gray-100 inline-block">{t('hero.contactBtn')}</a>
          </div>
        </section>

        <Footer />
      </div>
  );
};

export default Projects;
