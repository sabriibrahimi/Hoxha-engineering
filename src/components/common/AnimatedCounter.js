import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';

const parseValue = (value) => {
  const match = String(value).match(/^(\d+)(.*)$/);
  if (!match) return { num: 0, suffix: value };
  return { num: parseInt(match[1], 10), suffix: match[2] || '' };
};

const AnimatedCounter = ({ value, label, delay = 0 }) => {
  const reduced = usePrefersReducedMotion();
  const { num, suffix } = parseValue(value);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [count, setCount] = useState(reduced ? num : 0);

  useEffect(() => {
    if (!inView) return;
    if (reduced) { setCount(num); return; }
    let frame;
    const start = performance.now();
    const tick = (now) => {
      const p = Math.min((now - start) / 2000, 1);
      setCount(Math.round(num * (1 - Math.pow(1 - p, 3))));
      if (p < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, num, reduced]);

  return (
    <motion.div
      ref={ref}
      className="bg-surface-card p-6 sm:p-8 lg:p-10 text-center group hover:bg-white transition-colors duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay }}
    >
      <div className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-secondary mb-2 tabular-nums group-hover:text-primary transition-colors">
        {count}{suffix}
      </div>
      <p className="text-xs sm:text-sm text-muted uppercase tracking-widest font-medium leading-snug">{label}</p>
    </motion.div>
  );
};

export default AnimatedCounter;
