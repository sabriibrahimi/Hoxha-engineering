const copy = {
  sq: {
    labinot: {
      role: 'Arkitekt',
      short: 'Fokusuar në arkitekturë bashkëkohore, planifikim funksional dhe zhvillim të qëndrueshëm.',
      bio: 'Labinot Ibrahimi udhëheq zhvillimin arkitekturor të projekteve nga koncepti i parë deri në dokumentacionin teknik. Qasja e tij bashkon identitetin e ndërtesës, funksionin e përditshëm dhe realizueshmërinë në terren.',
    },
    mursel: {
      role: 'Inxhinier',
      short: 'Përgjegjës për zgjidhje të sigurta strukturore, koordinim teknik dhe cilësi në kantier.',
      bio: 'Mursel Iljazi kontribuon në zhvillimin teknik dhe realizimin e projekteve të firmës. Ai koordinon ekipet e terrenit, kontrollon standardet e cilësisë dhe ndihmon që çdo fazë të realizohet me siguri dhe saktësi.',
    },
    arben: {
      role: 'Menaxher Projekti',
      short: 'Koordinon afatet, burimet dhe komunikimin për realizim të qartë nga fillimi deri në dorëzim.',
      bio: 'Arben Krasniqi menaxhon proceset ndërmjet projektimit, prokurimit dhe ndërtimit. Me një qasje të strukturuar, ai mban ekipet dhe klientët të informuar gjatë gjithë ciklit të projektit.',
    },
    elira: {
      role: 'Koordinatore e Projektimit',
      short: 'Lidh ekipet e projektimit dhe zbatimit për dokumentacion të saktë dhe vendimmarrje efikase.',
      bio: 'Elira Mehmeti koordinon informacionin teknik dhe arkitekturor ndërmjet disiplinave. Puna e saj siguron që detajet, materialet dhe dokumentacioni të mbeten të harmonizuara gjatë realizimit.',
    },
  },
  en: {
    labinot: {
      role: 'Architect',
      short: 'Focused on contemporary architecture, functional planning, and sustainable development.',
      bio: 'Labinot Ibrahimi leads the architectural development of projects from the first concept through technical documentation. His approach connects building identity, everyday function, and on-site feasibility.',
    },
    mursel: {
      role: 'Engineer',
      short: 'Responsible for safe structural solutions, technical coordination, and quality on site.',
      bio: 'Mursel Iljazi contributes to the technical development and delivery of the firm’s projects. He coordinates site teams, controls quality standards, and helps every phase move forward safely and accurately.',
    },
    arben: {
      role: 'Project Manager',
      short: 'Coordinates schedules, resources, and communication for clear delivery from start to handover.',
      bio: 'Arben Krasniqi manages the processes between design, procurement, and construction. With a structured approach, he keeps teams and clients informed throughout the full project lifecycle.',
    },
    elira: {
      role: 'Design Coordinator',
      short: 'Connects design and delivery teams to maintain accurate documentation and efficient decisions.',
      bio: 'Elira Mehmeti coordinates technical and architectural information across disciplines. Her work ensures details, materials, and documentation remain aligned throughout delivery.',
    },
  },
  mk: {
    labinot: {
      role: 'Архитект',
      short: 'Фокусиран на современа архитектура, функционално планирање и одржлив развој.',
      bio: 'Лабинот Ибрахими го води архитектонскиот развој на проектите од првиот концепт до техничката документација. Неговиот пристап ги поврзува идентитетот, функцијата и изводливоста на терен.',
    },
    mursel: {
      role: 'Инженер',
      short: 'Одговорен за безбедни конструктивни решенија, техничка координација и квалитет на терен.',
      bio: 'Мурсел Илјази придонесува во техничкиот развој и реализацијата на проектите. Тој ги координира теренските тимови, ги контролира стандардите и обезбедува сигурна и прецизна изведба.',
    },
    arben: {
      role: 'Проектен Менаџер',
      short: 'Ги координира роковите, ресурсите и комуникацијата од почеток до предавање.',
      bio: 'Арбен Красниќи управува со процесите меѓу проектирањето, набавката и изградбата. Со структуриран пристап ги информира тимовите и клиентите во текот на целиот проект.',
    },
    elira: {
      role: 'Координатор за Дизајн',
      short: 'Ги поврзува проектантските и изведбените тимови за точна документација и ефикасни одлуки.',
      bio: 'Елира Мехмети ги координира техничките и архитектонските информации меѓу дисциплините, обезбедувајќи усогласени детали, материјали и документација.',
    },
  },
};

const projectSets = {
  labinot: [
    ['/images/Services_images/residential.png', 'Residential Courtyard', 'Residential Architecture', '2025'],
    ['/images/Services_images/collective.png', 'Collective Housing Study', 'Urban Housing', '2024'],
    ['/images/Services_images/Individual.png', 'Private Residence', 'Individual Housing', '2023'],
  ],
  mursel: [
    ['/images/Construction_Engineer.png', 'Mixed-Use Structure', 'Structural Engineering', '2025'],
    ['/images/Homeimage.png', 'Construction Coordination', 'Site Engineering', '2024'],
    ['/images/Services_images/public.png', 'Public Facility Upgrade', 'Public Building', '2023'],
  ],
  arben: [
    ['/images/Services_images/collective.png', 'Collective Housing Delivery', 'Project Management', '2025'],
    ['/images/Services_images/social.png', 'Community Housing Program', 'Project Management', '2024'],
    ['/images/Services_images/residential.png', 'Residential Complex Delivery', 'Project Management', '2023'],
  ],
  elira: [
    ['/images/Services_images/Individual.png', 'Private Residence Documentation', 'Design Coordination', '2025'],
    ['/images/Services_images/public.png', 'Civic Building Documentation', 'Design Coordination', '2024'],
    ['/images/Services_images/residential.png', 'Residential Material Study', 'Design Coordination', '2023'],
  ],
};

const members = [
  ['labinot-ibrahimi', 'labinot', 'Labinot Ibrahimi', '/images/Staff/architect.svg'],
  ['mursel-iljazi', 'mursel', 'Mursel Iljazi', '/images/Staff/engineer.svg'],
  ['arben-krasniqi', 'arben', 'Arben Krasniqi', '/images/Staff/manager.svg'],
  ['elira-mehmeti', 'elira', 'Elira Mehmeti', '/images/Staff/coordinator.svg'],
];

export const getStaffData = (language = 'sq') => {
  const localized = copy[language] || copy.sq;
  return members.map(([slug, key, name, image]) => ({
    slug,
    name,
    image,
    ...localized[key],
    projects: projectSets[key].map(([projectImage, title, category, year]) => ({
      image: projectImage,
      title,
      category,
      year,
      description: localized[key].short,
    })),
  }));
};
