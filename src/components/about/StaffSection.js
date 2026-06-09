import React from 'react';
import { useTranslation } from 'react-i18next';
import SectionHeading from '../common/SectionHeading';
import Reveal from '../common/Reveal';
import StaffCard from '../common/StaffCard';
import { getStaffData } from '../../data/staffData';

const StaffSection = () => {
  const { t, i18n } = useTranslation();
  const language = ['sq', 'mk', 'en'].includes(i18n.language) ? i18n.language : 'sq';
  const staff = getStaffData(language);
  const pathFor = (slug) => language === 'sq' ? `/staff/${slug}` : `/${language}/staff/${slug}`;

  return (
    <section className="section-premium bg-surface-warm border-y border-line">
      <div className="container-premium">
        <SectionHeading
          label={t('staff.sectionLabel')}
          title={t('staff.title')}
          description={t('staff.intro')}
          align="left"
          className="mx-0"
        />
        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-5 lg:gap-6">
          {staff.map((member, index) => (
            <Reveal key={member.slug} delay={index * 0.06}>
              <StaffCard member={member} to={pathFor(member.slug)} action={t('staff.viewProjects')} index={index} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StaffSection;
