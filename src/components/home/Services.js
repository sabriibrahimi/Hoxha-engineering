import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';

const ServiceCard = ({ title, description, icon, image, index }) => {
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
          className="bg-white rounded-lg shadow-xl overflow-hidden transition-transform hover:scale-105 duration-300"
      >
        <div className="relative h-52">
          <img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
          />
          <div className="absolute top-4 right-4 bg-primary text-white p-3 rounded-full">
            {icon}
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-2xl font-bold text-secondary mb-4">{title}</h3>
          <p className="text-gray-600 mb-4">{description}</p>
          <div className="h-1 w-16 bg-primary rounded"></div>
        </div>
      </motion.div>
  );
};

const Services = () => {
  const { t } = useTranslation();

  // Using the images we have available
  const services = [
    {
      title: t('services.residentialBuildings'),
      description: 'We design and construct high-quality residential buildings that blend functionality with aesthetic appeal, creating perfect living spaces for families.',
      image: '/Hoxha-engineering/images/Services_images/residential.png?v=1',
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    },
    {
      title: 'Individual Buildings',
      description: 'Our individual building projects are tailored to meet specific client needs, with customized designs that reflect personal style and requirements.',
      image: '/Hoxha-engineering/images/Services_images/Individual.png?v=1',
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    },
    {
      title: 'Collective Buildings',
      description: 'We specialize in creating collective residential complexes that foster community while providing modern, comfortable living spaces for multiple families.',
      image: '/Hoxha-engineering/images/Services_images/collective.png?v=1',
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    },
    {
      title: 'Social Buildings',
      description: 'Our social building projects are designed to serve community needs, creating spaces that are accessible, functional, and conducive to social interaction.',
      image: '/Hoxha-engineering/images/Services_images/social.png?v=1',
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 009.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    },
    {
      title: 'Public Buildings',
      description: 'We deliver public infrastructure projects that enhance urban environments, with a focus on durability, accessibility, and public service.',
      image: '/Hoxha-engineering/images/Services_images/public.png?v=1',
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
      </svg>
    },
    {
      title: 'Architectural Design',
      description: 'Our architectural design services combine creativity with technical expertise to produce innovative and functional building designs that exceed client expectations.',
      image: '/Hoxha-engineering/images/Construction_Engineer.png?v=1',
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-4.016z" />
      </svg>
    },
  ];

  return (
    <section className="py-24">
      <div className="container">
        <div className="text-center mb-12">
          <span className="text-xl text-primary font-semibold mb-2 block">{t('services.buildYourDream')}</span>
          <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">{t('services.qualityServices')}</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">{t('servicesPage.subtitle')}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              image={service.image}
              icon={service.icon}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;