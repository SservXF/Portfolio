// ============================================
// PERSONAL INFORMATION
// ============================================

export const personalInfo = {
  name: 'YAZICI Servan',
  role: {
    en: 'Software Developer',
    fr: 'Développeur Informatique',
  },
  email: 'yazici.servan94@gmail.com',
  github: 'https://github.com/SservXF',
  linkedin: 'https://linkedin.com/in/servan-yazici/',
  cvUrl: '/cv_YAZICI_Servan.pdf',
}

// ============================================
// PROJECTS
// ============================================
export const projects = [
  {
    id: 1,
    title: '2 in 1 : Slither.io & Snake',
    description: {
      en: 'A brief description',
      fr: 'Une brève description',
    },
    longDescription: {
      en: 'A more detailed description',
      fr: "Une description plus détaillée",
    },
    media: [
      { url: '/projects/slitherio/slitherio1.webm', duration: 8000 }, // webm - 8 seconds
      { url: '/projects/slitherio/snakeSelection.png', duration: 3000 }, // Image - 3 seconds
      { url: '/projects/slitherio/snake1.webm', duration: 8000 },
    ],
    technologies: ['Java', 'JavaFX', 'Gradle'],
    githubUrl: 'https://github.com/SservXF/POO-Slither.io.git',
    // liveUrl: 'https://project1.example.com', // Optional
    featured: true,
  },
  {
    id: 2,
    title: 'Bomberman',
    description: {
      en: 'Another amazing project',
      fr: 'Un autre projet incroyable',
    },
    longDescription: {
      en: 'Detailed explanation of project',
      fr: 'Explication détaillée du projet',
    },
    media: [
      { url: '/projects/bomberman/bomberman1.webm', duration: 8000 },
      { url: '/projects/bomberman/bomberman2.webm', duration: 8000 }
    ],
    technologies: ['C Language', 'NCurses'],
    githubUrl: 'https://github.com/SservXF/Bomberman-C.git',
    featured: true,
  },
  {
    id: 3,
    title: 'Hackathon - WeatherMap',
    description: {
      en: 'A third project ',
      fr: 'Un troisième projet',
    },
    longDescription: {
      en: '...',
      fr: '...',
    },
    media: [
      { url: '/projects/weathermap/map.png'}
    ],
    technologies: ['Java', 'Spring Boot', 'React', 'Leaflet', 'OpenWeatherMap API'],
    githubUrl: 'https://github.com/SservXF/WeatherMap.git',
    featured: false,
  },
    {
    id: 4,
    title: 'Poképong',
    description: {
      en: '...',
      fr: '...',
    },
    longDescription: {
      en: '...',
      fr: '...',
    },
    media: [
      { url: '/projects/pokepong/menus.webm', duration: 15000 },
      { url: '/projects/pokepong/jaune.webm', duration: 8000 },
      { url: '/projects/pokepong/rouge.webm', duration: 8000 },
      { url: '/projects/pokepong/vert.webm', duration: 8000 },
      { url: '/projects/pokepong/bleu.webm', duration: 8000 },
      { url: '/projects/pokepong/settings.png', duration: 3000 }
    ],
    technologies: ['Java', 'JavaFX', 'Gradle'],
    githubUrl: 'https://github.com/SservXF/Pokepong.git',
    featured: false,
  },
  {
    id: 5,
    title: 'Site de fidélité',
    description: {
      en: '...',
      fr: '...',
    },
    longDescription: {
      en: '...',
      fr: '...',
    },
    media: [
      { url: '/projects/fidelite/shop.png', duration: 5000 },
      { url: '/projects/fidelite/panier.png', duration: 5000 }
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'Node.js', 'Express', 'Bootstrap'],
    githubUrl: 'https://github.com/SservXF/Website-Cartes-Fidelite.git',
    featured: false,
  },
  {
    id: 6,
    title: 'HydrogeneGPS',
    description: {
      en: '...',
      fr: '...',
    },
    longDescription: {
      en: '...',
      fr: '...',
    },
    media: [
      { url: '/projects/hydrogeneGPS/trajet.webm', duration: 12000 },
      { url: '/projects/hydrogeneGPS/eviter.png', duration: 3000 },
      { url: '/projects/hydrogeneGPS/lignes.webm', duration: 8000 }
    ],
    technologies: ['React', 'Java', 'Springboot', 'Maven', 'Docker', 'Leaflet', 'API IDF Mobilités', 'OpenStreetMap'],
    githubUrl: 'https://github.com/SservXF/Website-Cartes-Fidelite.git',
    featured: false,
  },
  {
    id: 7,
    title: 'Tetris',
    description: {
      en: '...',
      fr: '...',
    },
    longDescription: {
      en: '...',
      fr: '...',
    },
    media: [
      { url: '/projects/tetris/tetris.webm', duration: 15000 }
    ],
    technologies: ['Java', 'Java Swing'],
    githubUrl: 'https://github.com/SservXF/Tetris.git',
    featured: false,
  },
  {
    id: 8,
    title: 'PieceOut',
    description: {
      en: '...',
      fr: '...',
    },
    longDescription: {
      en: '...',
      fr: '...',
    },
    media: [
      { url: '/projects/pieceout/pieceout1.webm', duration: 8000 },
      { url: '/projects/pieceout/pieceout2.webm', duration: 8000 },
      { url: '/projects/pieceout/pieceout3.webm', duration: 8000 }
    ],
    technologies: ['C++', 'SFML'],
    githubUrl: 'https://github.com/SservXF/PieceOut.git',
    featured: false,
  },
]

// ============================================
// WORK EXPERIENCE
// ============================================
export const experiences = [
  {
    id: 1,
    company: 'JCDecaux',
    role: {
      en: 'QA Engineer',
      fr: 'Ingénieur QA',
    },
    location: 'Neuilly-sur-Seine, France',
    startDate: '2024-09',
    endDate: null, // null veut dire "Présent"
    description: {
      en: [
        'Lead Java Selenium automation project for test case automation with Jenkins CI/CD and Cucumber reporting',
        'Design and implement JMeter performance test plans for API testing across multiple applications',
        'Build performance monitoring infrastructure with PostgreSQL and Grafana dashboards for version tracking',
        'Develop Java Spring applications using Kafka for message streaming integration',
      ],
      fr: [
        'Direction du projet d\'automatisation Java Selenium avec intégration Jenkins CI/CD et rapports Cucumber',
        'Conception et mise en œuvre de plans de tests JMeter pour les tests de performance API sur plusieurs applications',
        'Construction d\'infrastructure de monitoring avec PostgreSQL et tableaux de bord Grafana pour le suivi des versions',
        'Développement d\'applications Java Spring utilisant Kafka pour l\'intégration de flux de messages',
      ],
    },
    technologies: ['Java', 'Selenium', 'JMeter', 'Jenkins', 'Cucumber', 'Spring', 'Kafka', 'PostgreSQL', 'Grafana', 'Docker'],
  },
]

// ============================================
// EDUCATION
// ============================================
export const education = [
  {
    id: 1,
    degree: {
      en: "Master's Degree in Computer Science - Computer Engineering Apprenticeship",
      fr: 'Master en Informatique - Génie Informatique en Alternance',
    },
    institution: 'Université de Paris Cité',
    location: 'Paris, France',
    year: '2026',
    description: {
      en: 'The GENIAL (Computer Engineering Apprenticeship) program trains computer engineers who master both fundamental computer science concepts and modern technologies used in industry. Strong emphasis on programming in various paradigms and contexts (object-oriented, mobile, etc.), enabling quick integration into professional work while adapting to future developments in computer science.',
      fr: "Le but de la formation GENIAL (GÉNie Informatique en ALternance) est de former des ingénieurs informaticiens aptes à maîtriser aussi bien les concepts fondamentaux de l'informatique que les technologies modernes utilisées en entreprise. L'accent est mis sur la programmation dans divers paradigmes et contextes (orienté objet, mobile, etc.), permettant de s'investir rapidement dans le travail en entreprise tout en s'adaptant aux futurs développements de l'informatique.",
    },
    achievements: {
      en: ["Winner of the Université de Paris Cité Hackathon 2025"],
      fr: ["Gagnant du Hackathon de l'Université de Paris Cité 2025"],
    },
  },
  {
    id: 2,
    degree: {
      en: "Bachelor's Degree in Computer Science",
      fr: 'Licence en Informatique',
    },
    institution: 'Université de Paris Cité',
    location: 'Paris, France',
    year: '2024',
    description: {
      en: 'Foundation in programming, algorithms, and computer systems.',
      fr: "Fondamentaux en programmation, algorithmes et systèmes informatiques.",
    },
    achievements: {
      en: ['Graduated with high honors', 'Top 10% of the class'],
      fr: ['Mention Très Bien', 'Top 10% de la promotion'],
    },
  },
  {
    id: 3,
    degree: {
      en: 'High School Diploma - NSI/Mathematics Track',
      fr: 'Baccalauréat NSI/Mathématiques',
    },
    institution: 'Lycée Edouard Branly',
    location: 'Créteil, France',
    year: '2021',
    description: {
      en: 'General track with specializations in Digital and Computer Sciences, Engineering Science, and Mathematics.',
      fr: 'Filière générale avec spécialités en Numérique Sciences Informatiques, Science de l\'ingénieur et Mathématiques.',
    },
    achievements: {
      en: ['Graduated with distinction'],
      fr: ['Mention Bien'],
    },
  },
]