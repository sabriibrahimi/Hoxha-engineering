import React from 'react';
import { useTranslation } from 'react-i18next';
import Reveal from '../common/Reveal';
import { asset } from '../../utils/assets';

const StandardsPanel = () => {
  const { t } = useTranslation();
  const standards = [
    [t('aboutPage.values.excellence'), t('aboutPage.values.excellenceDesc')],
    [t('aboutPage.values.deadlines'), t('aboutPage.values.deadlinesDesc')],
    [t('aboutPage.values.innovation'), t('aboutPage.values.innovationDesc')],
  ];
  const ticker = [
    t('services.architecturalDesign'),
    t('servicesPage.engineeringServices'),
    t('servicesPage.projectManagement'),
    t('about.qualityMaterialsItem'),
    t('about.expertWorkforceItem'),
  ];

  return (
    <section className="relative overflow-hidden bg-secondary-dark text-white section-divider-dark">
      <div className="absolute inset-0 architectural-grid-dark opacity-30" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-bronze/60 to-transparent" />

      <div className="container-premium relative py-16 sm:py-20 lg:py-24">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          <Reveal className="lg:col-span-5">
            <div className="h-full border border-white/12 bg-white/[0.035] p-6 sm:p-8 lg:p-9">
              <p className="label-premium-light">{t('aboutPage.whatGuidesUs')}</p>
              <h2 className="text-display-sm font-heading text-balance mb-7">
                {t('about.bestPractices')}
              </h2>
              <p className="text-white/68 leading-relaxed max-w-xl">
                {t('about.practicesDescription')}
              </p>

              <div className="mt-10 overflow-hidden border-y border-white/12 py-4">
                <div className="premium-ticker flex w-max gap-8">
                  {[...ticker, ...ticker].map((item, index) => (
                    <span key={`${item}-${index}`} className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/50">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08} className="lg:col-span-3">
            <div className="relative h-full min-h-[360px] overflow-hidden border border-white/12 bg-secondary">
              <img
                src={asset('/images/pages.png')}
                alt=""
                className="absolute inset-0 h-full w-full object-cover image-grade opacity-75 transition-transform duration-700 hover:scale-[1.035]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary-dark via-secondary-dark/35 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="editorial-kicker editorial-kicker-dark">
                  <span className="h-1.5 w-1.5 rounded-full bg-bronze" />
                  {t('about.bestPractices')}
                </span>
              </div>
            </div>
          </Reveal>

          <div className="lg:col-span-4 grid">
            {standards.map(([title, description], index) => (
              <Reveal key={title} delay={0.1 + index * 0.06}>
                <article className="group border-b border-white/12 px-0 py-6 first:border-t lg:px-6 transition-colors duration-500 hover:bg-white/[0.035]">
                  <div className="flex items-start gap-5">
                    <span className="mt-1 text-[10px] font-semibold tracking-[0.25em] text-bronze transition-transform duration-500 group-hover:translate-x-1">
                      0{index + 1}
                    </span>
                    <div>
                      <h3 className="font-heading text-xl font-semibold text-white group-hover:text-bronze transition-colors">
                        {title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-white/62">
                        {description}
                      </p>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StandardsPanel;
