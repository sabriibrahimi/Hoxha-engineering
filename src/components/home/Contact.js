import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Reveal from '../common/Reveal';

const Contact = () => {
  const { t, i18n } = useTranslation();
  const path = i18n.language === 'sq' ? '/contact' : `/${i18n.language}/contact`;

  return (
    <section id="contact" className="bg-primary text-white overflow-hidden">
      <div className="container-premium">
        <div className="grid lg:grid-cols-12">
          <Reveal className="lg:col-span-7 py-16 sm:py-20 lg:py-28 lg:pr-16">
            <p className="text-[10px] uppercase tracking-[0.26em] text-white/55 font-semibold mb-6">{t('contactPage.getInTouch')}</p>
            <h2 className="text-display-sm font-heading max-w-3xl text-balance mb-7">{t('cta.discussTitle')}</h2>
            <p className="text-white/65 leading-relaxed max-w-2xl mb-9">{t('cta.discussDescription')}</p>
            <Link to={path} className="btn bg-white text-primary hover:bg-secondary hover:text-white px-8">{t('contactPage.sendMessage')} <span aria-hidden="true">&rarr;</span></Link>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-5 bg-secondary-dark lg:-mr-[50vw] lg:pr-[50vw]">
            <div className="h-full py-14 sm:py-16 lg:py-28 lg:pl-12 xl:pl-16">
              <p className="text-[10px] uppercase tracking-[0.24em] text-bronze font-semibold mb-8">{t('contact.howToReach')}</p>
              <div className="space-y-8">
                <Detail label={t('contact.officeAddress')} value="4PR6+8VM, Kumanovo" href="https://maps.app.goo.gl/xYwb98wk6wYaXPr4A" />
                <Detail label={t('contactPage.phoneNumber')} value="+389 31 424 503" href="tel:+38931424503" />
                <Detail label={t('contactPage.emailAddress')} value="Hoxha-ing@live.com" href="mailto:Hoxha-ing@live.com" />
              </div>
              <div className="industrial-rule h-px mt-12 opacity-50" />
              <p className="text-xs text-white/35 mt-6">{t('contact.monday')}<br />{t('contact.saturday')}</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

const Detail = ({ label, value, href }) => (
  <div className="border-l border-white/15 pl-5">
    <p className="text-[9px] uppercase tracking-[0.2em] text-white/35 mb-2">{label}</p>
    <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noopener noreferrer' : undefined} className="text-base sm:text-lg font-heading font-medium text-white hover:text-bronze transition-colors">{value}</a>
  </div>
);

export default Contact;
