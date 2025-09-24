import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import PageBackground from '../components/layout/PageBackground';

const TeamMember = ({ name, role, image, index }) => {
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
      className="text-center"
    >
      <div className="relative w-52 h-52 rounded-full overflow-hidden mx-auto mb-6 border-4 border-primary">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="text-2xl font-bold text-secondary mb-1">{name}</h3>
      <p className="text-lg text-gray-600">{role}</p>
    </motion.div>
  );
};

const About = () => {
  const [headerRef, headerInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [storyRef, storyInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [valuesRef, valuesInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const team = [
    { name: 'Selman Ajdini', role: 'Founder', image: '/images/Founders/founder.png' },
    { name: 'Sevdail Ajdini', role: 'CEO', image: '/images/Founders/ceo.png' }
  ];

  const statItems = [
    { value: '33+', label: 'Years of Experience' },
    { value: '512+', label: 'Projects Completed' },
    { value: '100%', label: 'Client Satisfaction' },
    { value: '1520+', label: 'Team Members' },
  ];

  return (
    <div>
      <Header />
      
      {/* Hero Section */}
      <PageBackground 
        title="About Us" 
        subtitle="Learn about our journey, values, and the team behind Hoxha Engineering"
      />
      
      {/* Our Story Section */}
      <section className="py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              ref={storyRef}
              initial={{ opacity: 0, x: -50 }}
              animate={storyInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-xl text-primary font-semibold mb-2 block">Our Journey</span>
              <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                We are a leading local company in North Macedonia with over 33 years of experience in the construction industry. 
                Since 1992, Hoxha Engineering has been building excellence through innovation and dedication.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our mission is to deliver high-quality construction services while maintaining the highest standards of safety and sustainability.
              </p>
              <p className="text-lg text-gray-600">
                Throughout our journey, we have consistently embraced innovation, invested in our team's development, and prioritized client satisfaction. 
                Our commitment to excellence has established us as a trusted partner for construction projects of all scales across North Macedonia.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={storyInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img 
                src="/images/Construction_Engineer.png" 
                alt="About Hoxha Engineering" 
                className="rounded-lg shadow-xl w-full"
              />
              <div className="absolute -bottom-10 -left-10 bg-primary text-white py-6 px-8 rounded-lg shadow-xl">
                <div className="text-4xl font-bold">33+</div>
                <div>Years of Excellence</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Our Values Section */}
      <section className="py-24 bg-accent">
        <div className="container">
          <div className="text-center mb-16">
            <span className="text-xl text-primary font-semibold mb-2 block">What Guides Us</span>
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">Our Values</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Our core values define who we are and guide our approach to every project we undertake.</p>
          </div>
          
          <motion.div
            ref={valuesRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={valuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <div className="w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center text-2xl mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-secondary mb-4">Excellence in Quality</h3>
              <p className="text-gray-600">We are committed to delivering the highest quality in every aspect of our work, from materials to craftsmanship.</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={valuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <div className="w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center text-2xl mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-secondary mb-4">Commitment to Deadlines</h3>
              <p className="text-gray-600">We understand the importance of timely delivery and are dedicated to completing projects within the agreed timeframe.</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={valuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <div className="w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center text-2xl mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-secondary mb-4">Innovative Solutions</h3>
              <p className="text-gray-600">We continuously seek innovative approaches and solutions to enhance the quality and efficiency of our construction projects.</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={valuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <div className="w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center text-2xl mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-secondary mb-4">Environmental Responsibility</h3>
              <p className="text-gray-600">We prioritize sustainable construction practices and materials to minimize environmental impact and create greener buildings.</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={valuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <div className="w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center text-2xl mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-secondary mb-4">Customer Satisfaction</h3>
              <p className="text-gray-600">We place our clients at the center of everything we do, ensuring their needs are met and expectations are exceeded.</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={valuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <div className="w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center text-2xl mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-secondary mb-4">Team Development</h3>
              <p className="text-gray-600">We invest in the continuous growth and development of our team, fostering a culture of excellence and collaboration.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* Our Team Section */}
      <section className="py-24">
        <div className="container">
          <div className="text-center mb-16">
            <span className="text-xl text-primary font-semibold mb-2 block">Our Leadership</span>
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">Meet Our Founders</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Our company is led by experienced professionals dedicated to excellence in construction and engineering.</p>
          </div>
          
          <div className="flex flex-col md:flex-row justify-center space-y-12 md:space-y-0 md:space-x-24">
            {team.map((member, index) => (
              <TeamMember 
                key={member.name}
                name={member.name}
                role={member.role}
                image={member.image}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-24 bg-secondary text-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Achievements</h2>
            <p className="text-lg max-w-3xl mx-auto">Over three decades of success in the construction industry</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {statItems.map((stat, index) => (
              <div key={stat.label} className="text-center">
                <div className="text-5xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-xl">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="bg-primary py-16 text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Work With Us?</h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto">Contact our team today to discuss your construction project and experience the Hoxha Engineering difference.</p>
          <a href="/contact" className="btn bg-white text-primary hover:bg-gray-100 inline-block">Contact Us</a>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;