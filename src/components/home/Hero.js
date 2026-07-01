import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { asset } from '../../utils/assets';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';

const Hero = () => {
  const { t, i18n } = useTranslation();
  const reduced = usePrefersReducedMotion();
  const { scrollY } = useScroll();
  const imageY = useTransform(scrollY, [0, 800], [0, reduced ? 0 : 70]);
  const localized = (path) => i18n.language === 'sq' ? path : `/${i18n.language}${path}`;

  return (
    <section className="relative min-h-[100svh] bg-secondary-dark text-white overflow-hidden flex flex-col">
      <motion.div className="absolute inset-0 lg:left-[38%]" style={{ y: imageY }}>
        <img src={asset('/images/Homeimage.png')} alt="" className="w-full h-[calc(100%+70px)] object-cover image-grade" />
      </motion.div>
      <div className="absolute inset-0 bg-secondary/55 lg:bg-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-secondary-dark via-secondary-dark/95 lg:via-secondary-dark/84 to-secondary-dark/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-secondary-dark via-transparent to-secondary-dark/60" />
      <div className="absolute inset-0 bg-noise opacity-70 pointer-events-none" />
      <div className="absolute inset-0 architectural-grid-dark opacity-35 pointer-events-none" />

      <div className="relative z-10 flex-1 container-premium w-full pt-32 sm:pt-36 lg:pt-40 pb-12 flex items-center">
        <div className="grid lg:grid-cols-12 w-full gap-10">
          <motion.div className="lg:col-span-8 xl:col-span-7" initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8, ease: [0.22, 1, 0.36, 1] }}>
            <div className="flex items-center gap-4 mb-7">
              <span className="w-10 h-px bg-bronze" />
              <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.28em] text-bronze font-semibold">{t('trust.established')} 1992 - Kumanovo</span>
            </div>
            <h1 className="text-display font-heading max-w-5xl text-balance">
              {t('hero.title')}
            </h1>
            <div className="grid sm:grid-cols-2 gap-7 sm:gap-10 mt-8 sm:mt-10 max-w-4xl items-end">
              <div>
                <p className="text-base sm:text-lg text-white/80 leading-relaxed max-w-[38rem]">{t('hero.subtitle')}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {[t('services.architecturalDesign'), t('servicesPage.engineeringServices'), t('servicesPage.constructionServices')].map((item) => (
                    <span key={item} className="kinetic-chip border-white/20 bg-white/[0.06] text-white/75">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link to={localized('/contact')} className="btn btn-primary">{t('hero.contactBtn')} <span className="btn-arrow" aria-hidden="true">&rarr;</span></Link>
                <Link to={localized('/projects')} className="btn btn-outline-light">{t('projectsPage.allProjects')}</Link>
              </div>
            </div>
          </motion.div>

          <motion.aside
            className="hidden xl:flex xl:col-span-4 xl:col-start-9 self-end justify-end"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .85, delay: .16, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="w-full max-w-sm border border-white/15 bg-secondary-dark/45 p-5 backdrop-blur-md">
              <div className="editorial-kicker editorial-kicker-dark mb-9">
                <span className="h-1.5 w-1.5 rounded-full bg-bronze" />
                {t('about.bestPractices')}
              </div>
              <p className="text-2xl font-heading font-semibold leading-tight text-white text-balance">
                {t('about.qualityMaterialsItem')} / {t('about.expertWorkforceItem')} / {t('about.onTimeItem')}
              </p>
              <div className="mt-8 grid grid-cols-3 border-t border-white/15 pt-5">
                {[t('trust.established'), t('trust.experience'), t('trust.region')].map((item) => (
                  <span key={item} className="text-[9px] uppercase tracking-[0.18em] text-white/55">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.aside>
        </div>
      </div>

      <div className="relative z-10 border-t border-white/15 bg-secondary-dark/90 backdrop-blur-sm">
        <div className="container-premium grid grid-cols-2 lg:grid-cols-4">
          {[
            ['33+', t('stats.yearsExperience')],
            ['512+', t('stats.projectsFinished')],
            ['1992', t('trust.established')],
            [t('trust.regionValue'), t('trust.region')],
          ].map(([value, label], i) => (
            <div key={label} className={`py-5 sm:py-7 px-3 sm:px-6 lg:px-8 ${i > 0 ? 'border-l border-white/15' : ''}`}>
              <div className="text-lg sm:text-2xl font-heading font-semibold text-white">{value}</div>
              <div className="text-[9px] sm:text-[10px] uppercase tracking-[0.18em] text-white/60 mt-1">{label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="hidden lg:block absolute right-12 top-1/2 -translate-y-1/2 z-10">
        <div className="h-32 w-px bg-white/25 mx-auto" />
        <div className="mt-5 text-[9px] tracking-[0.28em] text-white/60 uppercase [writing-mode:vertical-rl]">Engineering with purpose</div>
      </div>
    </section>
  );
};

export default Hero;
