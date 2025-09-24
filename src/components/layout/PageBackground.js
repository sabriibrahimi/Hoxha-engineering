import React from 'react';
import { motion } from 'framer-motion';

const PageBackground = ({ children, title, subtitle }) => {
  return (
    <section className="relative py-32 md:py-48 flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full overflow-hidden -z-10">
        <div className="relative w-full h-full">
          <img 
            src={process.env.PUBLIC_URL + '/images/pages.png'}
            alt="Page background" 
            className="w-full h-full object-cover scale-105 transform will-change-transform transform-gpu"
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
      </div>
      
      <div className="container relative z-10">
        <div className="text-center">
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-4 text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {title}
          </motion.h1>
          {subtitle && (
            <motion.p 
              className="text-xl max-w-3xl mx-auto text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {subtitle}
            </motion.p>
          )}
          {children}
        </div>
      </div>
    </section>
  );
};

export default PageBackground;
