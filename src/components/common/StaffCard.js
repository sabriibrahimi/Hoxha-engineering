import React from 'react';
import { Link } from 'react-router-dom';
import { asset } from '../../utils/assets';

const StaffCard = ({ member, to, action, index }) => (
  <Link to={to} className="group block h-full bg-surface-card border border-line hover:border-secondary/30 hover:shadow-premium-lg transition-all duration-500">
    <article className="h-full flex flex-col">
      <div className="relative aspect-[4/5] overflow-hidden bg-secondary">
        <img src={asset(member.image)} alt={member.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.025]" loading="lazy" />
        <div className="absolute inset-0 ring-1 ring-inset ring-black/10" />
        <span className="absolute top-0 left-0 w-14 h-14 flex items-center justify-center bg-secondary/90 text-[10px] tracking-[0.2em] text-white/60">
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>
      <div className="p-6 sm:p-7 flex flex-col flex-1">
        <p className="text-[10px] uppercase tracking-[0.2em] text-primary font-semibold mb-3">{member.role}</p>
        <h3 className="text-xl font-heading font-semibold text-secondary mb-3 group-hover:text-primary transition-colors">{member.name}</h3>
        <p className="text-sm text-muted leading-relaxed mb-7 flex-1">{member.short}</p>
        <div className="pt-5 border-t border-line flex items-center justify-between text-[11px] uppercase tracking-[0.15em] font-semibold text-secondary">
          <span>{action}</span>
          <span className="text-primary transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">&rarr;</span>
        </div>
      </div>
    </article>
  </Link>
);

export default StaffCard;
