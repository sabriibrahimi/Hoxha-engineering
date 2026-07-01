import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { asset } from '../../utils/assets';

const ProjectCard = ({ title, location, image, index = 0, category }) => {
  const [hovered, setHovered] = useState(false);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.08 });

  return (
    <motion.article
      ref={ref}
      className="group relative overflow-hidden bg-secondary border border-white/[0.06]"
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.07 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative h-72 sm:h-80 overflow-hidden">
        <motion.img
          src={asset(image)}
          alt={title}
          className="w-full h-full object-cover"
          loading="lazy"
          animate={{ scale: hovered ? 1.05 : 1 }}
          transition={{ duration: 0.6 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/30 to-transparent" />
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-1 bg-primary origin-left"
          animate={{ scaleX: hovered ? 1 : 0 }}
          transition={{ duration: 0.4 }}
        />
      </div>
      <div className="p-6 sm:p-7">
        {category && (
          <span className="text-[10px] uppercase tracking-[0.2em] text-bronze font-semibold mb-2 block">{category}</span>
        )}
        <h3 className="text-lg font-heading font-bold text-white mb-1">{title}</h3>
        <p className="text-sm text-white/70">{location}</p>
      </div>
    </motion.article>
  );
};

export default ProjectCard;
