import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { asset } from '../../utils/assets';

const ServiceCard = ({ title, description, image, icon, index = 0 }) => {
  const [hovered, setHovered] = useState(false);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.08 });

  return (
    <motion.article
      ref={ref}
      className="group relative overflow-hidden bg-secondary border border-white/[0.06] cursor-default"
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <div className="relative h-52 sm:h-56 overflow-hidden">
        <motion.img
          src={asset(image)}
          alt={title}
          className="w-full h-full object-cover"
          loading="lazy"
          animate={{ scale: hovered ? 1.06 : 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/20 to-transparent" />
        {/* Hover fill line — Alukaze-inspired */}
        <motion.div
          className="absolute bottom-0 left-0 h-0.5 bg-primary origin-left"
          animate={{ scaleX: hovered ? 1 : 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          style={{ width: '100%' }}
        />
      </div>

      {/* Content */}
      <div className="p-6 sm:p-7 relative">
        <motion.div
          className="absolute inset-0 bg-primary origin-bottom"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: hovered ? 1 : 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        />
        <div className="relative z-10">
          <div className={`mb-4 transition-colors duration-300 ${hovered ? 'text-white/80' : 'text-bronze'}`}>
            {icon}
          </div>
          <h3 className={`text-lg sm:text-xl font-heading font-bold mb-3 transition-colors duration-300 ${hovered ? 'text-white' : 'text-white'}`}>
            {title}
          </h3>
          <p className={`text-sm leading-relaxed transition-colors duration-300 ${hovered ? 'text-white/75' : 'text-white/50'}`}>
            {description}
          </p>
        </div>
      </div>
    </motion.article>
  );
};

export default ServiceCard;
