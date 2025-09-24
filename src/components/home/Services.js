import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ServiceCard = ({ title, image, delay, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
      <motion.div
          ref={ref}
          className="relative group overflow-hidden rounded-lg shadow-lg w-full max-w-sm mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 * index }}
      >
        <div className="relative h-64 sm:h-72 md:h-80">
          <img
              src={`/images/Services_images/${image}`}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2">{title}</h3>
            <motion.div
                initial={{ width: 0 }}
                animate={inView ? { width: '60px' } : { width: 0 }}
                transition={{ duration: 0.6, delay: 0.2 * index + 0.3 }}
                className="h-1 bg-secondary rounded"
            ></motion.div>
          </div>
        </div>
      </motion.div>
  );
};

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    { title: 'Residential Buildings', image: 'residential.png' },
    { title: 'Individual Buildings', image: 'Individual.png' },
    { title: 'Collective Buildings', image: 'collective.png' },
    { title: 'Social Buildings', image: 'social.png' },
    { title: 'Public Buildings', image: 'public.png' },
  ];

  return (
      <section id="services" className="section">
        <div className="container">
          <motion.div
              ref={ref}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12 sm:mb-16"
          >
            <span className="text-lg sm:text-xl text-primary font-semibold mb-2 block">Build Your Dream</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4 sm:mb-6">Quality Services</h2>
            <div className="flex justify-center mb-8 sm:mb-10">
              <Link to="/services" className="text-primary hover:text-secondary-light transition-colors duration-300 flex items-center font-semibold">
                <span className="mr-2">View all</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 sm:gap-8">
            {services.map((service, index) => (
                <ServiceCard
                    key={service.title}
                    title={service.title}
                    image={service.image}
                    index={index}
                />
            ))}
          </div>
        </div>
      </section>
  );
};

export default Services;