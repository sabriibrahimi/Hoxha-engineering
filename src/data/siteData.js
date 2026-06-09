export const getServiceIcons = () => ({
  residential: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
  ),
  individual: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  ),
  collective: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  ),
  social: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  ),
  public: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
    </svg>
  ),
  architectural: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-4.016z" />
    </svg>
  ),
});

export const getServicesData = (t) => {
  const icons = getServiceIcons();
  return [
    {
      key: 'residential',
      title: t('services.residentialBuildings'),
      description: t('services.descriptions.residential'),
      image: '/images/Services_images/residential.png',
      icon: icons.residential,
    },
    {
      key: 'individual',
      title: t('services.individualBuildings'),
      description: t('services.descriptions.individual'),
      image: '/images/Services_images/Individual.png',
      icon: icons.individual,
    },
    {
      key: 'collective',
      title: t('services.collectiveBuildings'),
      description: t('services.descriptions.collective'),
      image: '/images/Services_images/collective.png',
      icon: icons.collective,
    },
    {
      key: 'social',
      title: t('services.socialBuildings'),
      description: t('services.descriptions.social'),
      image: '/images/Services_images/social.png',
      icon: icons.social,
    },
    {
      key: 'public',
      title: t('services.publicBuildings'),
      description: t('services.descriptions.public'),
      image: '/images/Services_images/public.png',
      icon: icons.public,
    },
    {
      key: 'architectural',
      title: t('services.architecturalDesign'),
      description: t('services.descriptions.architectural'),
      image: '/images/Construction_Engineer.png',
      icon: icons.architectural,
    },
  ];
};

export const getProjectsData = (t) => [
  {
    title: t('projects.items.residentialComplex'),
    location: t('projects.locations.kumanovo'),
    image: '/images/Services_images/residential.png',
    category: 'residential',
  },
  {
    title: t('projects.items.individualHousing'),
    location: t('projects.locations.skopje'),
    image: '/images/Services_images/Individual.png',
    category: 'residential',
  },
  {
    title: t('projects.items.collectiveHousing'),
    location: t('projects.locations.tetovo'),
    image: '/images/Services_images/collective.png',
    category: 'residential',
  },
  {
    title: t('projects.items.publicAdmin'),
    location: t('projects.locations.kumanovo'),
    image: '/images/Services_images/public.png',
    category: 'commercial',
  },
  {
    title: t('projects.items.socialHousing'),
    location: t('projects.locations.gostivar'),
    image: '/images/Services_images/social.png',
    category: 'residential',
  },
  {
    title: t('projects.items.commercialBuilding'),
    location: t('projects.locations.skopje'),
    image: '/images/Construction_Engineer.png',
    category: 'commercial',
  },
];
