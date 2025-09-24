import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import PageBackground from '../components/layout/PageBackground';

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
  const [selectedMember, setSelectedMember] = useState(null);
  const [headerRef, headerInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Team data
  const teamMembers = [
    {
      name: 'Labinot Ibrahimi',
      role: 'Architect',
      photo: process.env.PUBLIC_URL + '/images/team/labinot.png',
      projects: [
        'Residential Complex “Sunrise” – Lead Architect',
        'Downtown Office Tower – Facade Design',
        'Eco-Village Masterplan – Concept & Planning'
      ],
      bio: 'Specialising in sustainable residential and mixed-use developments for more than 15 years.'
    },
    {
      name: 'Arben Hoxha',
      role: 'Civil Engineer',
      photo: process.env.PUBLIC_URL + '/images/team/arben.png',
      projects: [
        'Mountain Resort Structural Design',
        'High-Rise “Skyline” – Structural Calculations'
      ],
      bio: 'Expert in reinforced-concrete and steel structures with deep on-site experience.'
    },
    {
      name: 'Fitore Kelmendi',
      role: 'Site Supervisor',
      photo: process.env.PUBLIC_URL + '/images/team/fitore.png',
      projects: [
        'Regional Hospital Expansion – Site Management',
        'Logistics Hub – Quality & Safety Compliance'
      ],
      bio: 'Ensuring every detail on site meets the highest quality and safety standards.'
    }
  ];

  // Using the images we have available
  const services = [
    {
      title: 'Residential Buildings',
      description: 'We design and construct high-quality residential buildings that blend functionality with aesthetic appeal, creating perfect living spaces for families.',
      image: process.env.PUBLIC_URL + '/images/Services_images/residential.png',
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    },
    {
      title: 'Individual Buildings',
      description: 'Our individual building projects are tailored to meet specific client needs, with customized designs that reflect personal style and requirements.',
      image: process.env.PUBLIC_URL + '/images/Services_images/Individual.png',
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    },
    {
      title: 'Collective Buildings',
      description: 'We specialize in creating collective residential complexes that foster community while providing modern, comfortable living spaces for multiple families.',
      image: process.env.PUBLIC_URL + '/images/Services_images/collective.png',
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    },
    {
      title: 'Social Buildings',
      description: 'Our social building projects are designed to serve community needs, creating spaces that are accessible, functional, and conducive to social interaction.',
      image: process.env.PUBLIC_URL + '/images/Services_images/social.png',
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    },
    {
      title: 'Public Buildings',
      description: 'We deliver public infrastructure projects that enhance urban environments, with a focus on durability, accessibility, and public service.',
      image: process.env.PUBLIC_URL + '/images/Services_images/public.png',
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m calculateAreaOfCircle4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
      </svg>
    },
    {
      title: 'Architectural Design',
      description: 'Our architectural design services combine creativity with technical expertise to produce innovative and functional building designs that exceed client expectations.',
      image: process.env.PUBLIC_URL + '/images/Construction_Engineer.png',
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-4.016z" />
      </svg>
    },
  ];

  return (
      <div>
        <Header />

        {/* Hero Section */}
        <PageBackground
            title="Our Services"
            subtitle="Comprehensive construction solutions tailored to your needs"
        />

        {/* Team Section */}
        <section className="py-24 bg-gray-50">
          <div className="container">
            <div className="text-center mb-12">
              <span className="text-xl text-primary font-semibold mb-2 block">Our People</span>
              <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">Meet The Team</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">Architects, engineers, and on-site professionals working together to turn ideas into reality.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {teamMembers.map((member) => (
                  <div
                      key={member.name}
                      className="bg-white rounded-lg shadow-lg hover:shadow-xl transition cursor-pointer overflow-hidden"
                      onClick={() => setSelectedMember(member)}
                  >
                    <img src={member.photo} alt={member.name} className="w-full h-60 object-cover" />
                    <div className="p-6 text-center">
                      <h3 className="text-2xl font-bold text-secondary mb-2">{member.name}</h3>
                      <p className="text-primary font-medium">{member.role}</p>
                    </div>
                  </div>
              ))}
            </div>

            {selectedMember && (
                <div className="mt-16 bg-white rounded-lg shadow-xl p-8 relative">
                  <button
                      className="absolute top-4 right-4 text-gray-400 hover:text-primary text-2xl"
                      onClick={() => setSelectedMember(null)}
                  >
                    ×
                  </button>
                  <div className="md:flex md:items-center md:space-x-8">
                    <img src={selectedMember.photo} alt={selectedMember.name} className="w-40 h-40 object-cover rounded-full mx-auto md:mx-0" />
                    <div className="mt-6 md:mt-0">
                      <h3 className="text-3xl font-bold text-secondary mb-2">{selectedMember.name}</h3>
                      <p className="text-primary font-semibold mb-4">{selectedMember.role}</p>
                      <p className="text-gray-600 mb-4 max-w-xl">{selectedMember.bio}</p>
                      <h4 className="text-xl font-bold text-secondary mb-2">Key Projects</h4>
                      <ul className="list-disc list-inside text-gray-600 space-y-1">
                        {selectedMember.projects.map((proj) => (
                            <li key={proj}>{proj}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
            )}
          </div>
        </section>

        {/* Workforce stats */}
        <section className="py-16 bg-primary text-white">
          <div className="container text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Over 150 Expert Craftsmen & Professionals</h3>
            <p className="text-lg max-w-3xl mx-auto">From on-site workers to design offices, our multidisciplinary team ensures every project phase is executed with precision.</p>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-24">
          <div className="container">
            <div className="text-center mb-12">
              <span className="text-xl text-primary font-semibold mb-2 block">What We Do</span>
              <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">Our Services</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">Explore our comprehensive range of construction and design services tailored to meet your needs.</p>
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

        {/* Process Section */}
        <section className="bg-accent py-24">
          <div className="container">
            <div className="text-center mb-16">
              <span className="text-xl text-primary font-semibold mb-2 block">How We Work</span>
              <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">Our Process</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
                <h3 className="text-2xl font-bold text-secondary mb-2">Consultation</h3>
                <p className="text-gray-600">We begin with a thorough consultation to understand your vision, requirements, and budget constraints.</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
                <h3 className="text-2xl font-bold text-secondary mb-2">Design</h3>
                <p className="text-gray-600">Our expert architects and engineers create detailed designs and plans tailored to your specifications.</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
                <h3 className="text-2xl font-bold text-secondary mb-2">Construction</h3>
                <p className="text-gray-600">We execute the project with precision, adhering to the highest quality standards and safety protocols.</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">4</div>
                <h3 className="text-2xl font-bold text-secondary mb-2">Delivery</h3>
                <p className="text-gray-600">We deliver the completed project on time and provide ongoing support and maintenance services as needed.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-primary py-16 text-white">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Discuss Your Project</h2>
            <p className="text-lg mb-8 max-w-3xl mx-auto">Ready to start your construction project? Contact us today for a consultation and let our experts bring your vision to life.</p>
            <a href="#/contact" className="btn bg-white text-primary hover:bg-gray-100 inline-block">Get In Touch</a>
          </div>
        </section>

        <Footer />
      </div>
  );
};

export default Services;