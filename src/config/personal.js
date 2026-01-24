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
  cvUrl: '/cv.pdf',
}

// ============================================
// PROJECTS
// ============================================
export const projects = [
  {
    id: 1,
    title: 'Project One',
    description: {
      en: 'A brief description',
      fr: 'Une brève description',
    },
    longDescription: {
      en: 'A more detailed description',
      fr: "Une description plus détaillée",
    },
    image: '/projects/project1.png', // Place images in public/projects/
    technologies: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    githubUrl: 'https://github.com/SservXF/project1',
    // liveUrl: 'https://project1.example.com', // Optionnel
    featured: true,
  },
  {
    id: 2,
    title: 'Project Two',
    description: {
      en: 'Another amazing project',
      fr: 'Un autre projet incroyable',
    },
    longDescription: {
      en: 'Detailed explanation of project',
      fr: 'Explication détaillée du projet',
    },
    image: '/projects/project2.gif',
    technologies: ['Vue.js', 'Express', 'PostgreSQL'],
    githubUrl: 'https://github.com/SservXF/project2',
    featured: true,
  },
  {
    id: 3,
    title: 'Project Three',
    description: {
      en: 'A third project ',
      fr: 'Un troisième projet',
    },
    longDescription: {
      en: '...',
      fr: '...',
    },
    image: null,
    technologies: ['Python', 'Django', 'Docker'],
    githubUrl: 'https://github.com/SservXF/project3',
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