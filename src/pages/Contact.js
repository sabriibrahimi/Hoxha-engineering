import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import PageBackground from '../components/layout/PageBackground';
import BackToTop from '../components/common/BackToTop';
import Reveal from '../components/common/Reveal';

const Contact = () => {
  const { t } = useTranslation();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => { e.preventDefault(); setSubmitted(true); };

  return (
    <div className="overflow-x-hidden bg-surface">
      <Header />
      <PageBackground title={t('contactPage.title')} subtitle={t('contactPage.subtitle')} />

      <section className="section-premium bg-surface-warm">
        <div className="container-premium">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <Reveal direction="left">
              <p className="label-premium">{t('contactPage.getInTouch')}</p>
              <h2 className="text-2xl font-heading font-bold text-secondary mb-4">{t('contact.sendMessageTitle')}</h2>
              <p className="text-muted text-sm mb-8 leading-relaxed">{t('contactPage.contactFormIntro')}</p>

              {submitted ? (
                <div className="card-premium p-10 text-center">
                  <p className="font-heading font-bold text-secondary">{t('common.success')}</p>
                </div>
              ) : (
                <form className="space-y-5" onSubmit={handleSubmit}>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[11px] uppercase tracking-widest text-muted font-semibold mb-2">{t('contactPage.name')}</label>
                      <input type="text" required className="form-input" placeholder={t('contactPage.namePlaceholder')} />
                    </div>
                    <div>
                      <label className="block text-[11px] uppercase tracking-widest text-muted font-semibold mb-2">{t('contactPage.email')}</label>
                      <input type="email" required className="form-input" placeholder={t('contactPage.emailPlaceholder')} />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[11px] uppercase tracking-widest text-muted font-semibold mb-2">{t('contactPage.phone')}</label>
                    <input type="tel" className="form-input" placeholder={t('contactPage.phonePlaceholder')} />
                  </div>
                  <div>
                    <label className="block text-[11px] uppercase tracking-widest text-muted font-semibold mb-2">{t('contactPage.subject')}</label>
                    <input type="text" required className="form-input" placeholder={t('contactPage.subjectPlaceholder')} />
                  </div>
                  <div>
                    <label className="block text-[11px] uppercase tracking-widest text-muted font-semibold mb-2">{t('contactPage.message')}</label>
                    <textarea rows="5" required className="form-input resize-none" placeholder={t('contactPage.messagePlaceholder')} />
                  </div>
                  <button type="submit" className="btn btn-primary w-full sm:w-auto px-10">{t('contactPage.sendMessage')}</button>
                </form>
              )}
            </Reveal>

            <Reveal direction="right" delay={0.1}>
              <p className="label-premium">{t('contactPage.contactInfo')}</p>
              <h2 className="text-2xl font-heading font-bold text-secondary mb-6">{t('contact.howToReach')}</h2>
              <div className="space-y-6 mb-10">
                {[
                  { label: t('contact.officeAddress'), value: 'NTP HOXHA, 4PR6+8VM, Kumanovo', href: 'https://maps.app.goo.gl/xYwb98wk6wYaXPr4A' },
                  { label: t('contactPage.phoneNumber'), value: '+389 31 424 503', href: 'tel:+38931424503' },
                  { label: t('contactPage.emailAddress'), value: 'Hoxha-ing@live.com', href: 'mailto:Hoxha-ing@live.com' },
                ].map((d) => (
                  <div key={d.label} className="border-l-2 border-primary pl-5">
                    <p className="text-[11px] uppercase tracking-widest text-muted font-semibold mb-1">{d.label}</p>
                    <a href={d.href} className="text-secondary hover:text-primary transition-colors text-sm">{d.value}</a>
                  </div>
                ))}
              </div>
              <div className="relative h-64 border border-line overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.7262702649973!2d21.71467757588767!3d42.13354094986128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x41540fa5fbab9c0f%3A0xf4e71f001c00b9b6!2s4PR6%2B8VM%2C%20Kumanovo%2C%20North%20Macedonia!5e0!3m2!1sen!2sus!4v1716463587000!5m2!1sen!2sus"
                  width="100%" height="100%" style={{ border: 0 }} loading="lazy" title="Map" className="grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <Footer />
      <BackToTop />
      <a href="tel:+38931424503" className="md:hidden fixed bottom-5 left-5 z-[900] btn btn-primary py-3 px-5 text-xs shadow-dark safe-bottom">
        {t('cta.getQuote')}
      </a>
    </div>
  );
};

export default Contact;
