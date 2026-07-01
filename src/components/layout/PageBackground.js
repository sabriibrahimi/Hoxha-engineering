import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';
import { asset } from '../../utils/assets';
import Reveal from '../common/Reveal';

const PageBackground = ({ title, subtitle }) => {
  const reduced = usePrefersReducedMotion();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 400], [0, reduced ? 0 : 40]);

  return (
    <section className="relative pt-[72px] overflow-hidden bg-secondary min-h-[340px] sm:min-h-[400px] flex items-end">
      <motion.div className="absolute inset-0" style={{ y }}>
        <img src={asset('/images/pages.png')} alt="" className="w-full h-full object-cover opacity-40" />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/90 to-secondary/70" />
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-30" />

      <div className="container-premium relative pb-14 sm:pb-16 lg:pb-20 pt-12">
        <Reveal direction="up">
          <p className="label-premium-light mb-0 before:bg-bronze/70">Hoxha Engineering</p>
          <h1 className="text-display-sm font-heading text-white mt-5 mb-4 text-balance">{title}</h1>
          {subtitle && <p className="text-base text-white/70 max-w-xl leading-relaxed">{subtitle}</p>}
        </Reveal>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
};

export default PageBackground;
