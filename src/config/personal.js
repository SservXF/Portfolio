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
  cvUrls: {
    en: '/CV_Servan_YAZICI_EN.pdf',
    fr: '/CV_Servan_YAZICI_FR.pdf',
  },
}

// ============================================
// PROJECTS
// ============================================
export const projects = [
    {
    id: 1,
    title: 'HydrogeneGPS',
    description: {
      en: 'Offline-capable Île-de-France route planner with Neo4j.',
      fr: 'Calculateur d\'itinéraires Île-de-France fonctionnant hors ligne.',
    },
    longDescription: {
      en: 'A route planning app built on the IDF Mobilités API, featuring an interactive map with Leaflet and OpenStreetMap. Designed to run standalone without an internet connection after initial data download, it uses a Java Spring Boot backend, a React frontend, and an embedded Neo4j instance for graph-based route computation. Docker handles development and deployment, with a GitLab CI/CD pipeline and unit tests to ensure reliability.',
      fr: 'Application d\'itinéraire basée sur l\'API IDF Mobilités, avec une interface interactive Leaflet / OpenStreetMap. Conçue pour fonctionner en mode standalone sans connexion internet après téléchargement des données, elle repose sur un backend Java Spring Boot, un frontend React et une instance Neo4j embarquée pour le calcul d\'itinéraires en graphe. Docker est utilisé pour le développement et le déploiement, avec un pipeline GitLab CI/CD et des tests unitaires pour assurer la fiabilité de l\'application.',
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
    id: 2,
    title: 'Hackathon - WeatherMap',
    description: {
      en: 'Route planner avoiding rain zones in real time. 🏆 Hackathon 2025.',
      fr: 'Itinéraires évitant la pluie en temps réel. 🏆 Hackathon 2025.',
    },
    longDescription: {
      en: 'A route planning application developed during the Université de Paris Cité Hackathon 2025, where it won first place 🏆. It avoids rain zones in real time by integrating the OpenWeatherMap API with a custom weather-aware routing algorithm. The React frontend uses Leaflet for interactive mapping, while the Java Spring Boot backend handles route computation and weather data processing.',
      fr: 'Application d\'itinéraire développée lors du Hackathon de l\'Université de Paris Cité 2025, qui remporte la première place 🏆. Elle permet d\'éviter les zones de pluie en temps réel grâce à l\'intégration de l\'API OpenWeatherMap et d\'un algorithme de routage météo-conscient. Le frontend React s\'appuie sur Leaflet pour la cartographie interactive, tandis que le backend Java Spring Boot gère les calculs d\'itinéraires et les données météorologiques.',
    },
    media: [
      { url: '/projects/weathermap/map.png'},
      { url: '/projects/weathermap/video.webm', duration: 11000 }
    ],
    technologies: ['Java', 'Spring Boot', 'React', 'Leaflet', 'OpenWeatherMap API'],
    githubUrl: 'https://github.com/SservXF/WeatherMap.git',
    featured: false,
  },
  {
    id: 3,
    title: 'PawKeeper',
    description: {
      en: 'Android app for managing pet care and vet schedules.',
      fr: 'Application Android de suivi des soins et rendez-vous vétérinaires.',
    },
    longDescription: {
      en: 'An Android mobile app for managing pet care. Users can create profiles for each animal, schedule events (vaccinations, vet visits, etc.) in a built-in calendar, and receive reminders for upcoming appointments. Built with Kotlin and Jetpack Compose for a modern, fluid UI, and Room Database for local data persistence.',
      fr: 'Application mobile Android dédiée à la gestion des animaux de compagnie. Les utilisateurs peuvent créer des profils pour chaque animal, planifier des évènements (vaccinations, visites vétérinaires, etc.) dans un calendrier intégré, et recevoir des rappels. Développée en Kotlin avec Jetpack Compose pour une interface moderne et fluide, et Room Database pour la persistance locale des données.',
    },
    media: [
      { url: '/projects/pawkeeper/4screens_1.jpg', duration: 5000 },
      { url: '/projects/pawkeeper/4screens_2.jpg', duration: 5000 }
    ],
    technologies: ['Kotlin', 'Android Studio', 'Jetpack Compose', 'Room Database'],
    githubUrl: 'https://github.com/SservXF/PawKeeper.git',
    featured: false,
  },
  {
    id: 4,
    title: '2 in 1 : Slither.io & Snake',
    description: {
      en: 'Slither.io & Snake in one Java codebase, with LAN multiplayer.',
      fr: 'Slither.io & Snake sur une base Java commune, multijoueur LAN.',
    },
    longDescription: {
      en: 'Two games in one, built in Java with JavaFX on a shared codebase: a Slither.io replica and a classic Snake. An object-oriented architecture, abstract classes, inheritance, and polymorphism lets both modes share core game logic while delivering distinct experiences. The project also features a LAN multiplayer mode with state synchronization and collision handling, developed as part of an object-oriented programming course.',
      fr: 'Deux jeux en un, développés en Java avec JavaFX sur une base de code commune : une réplique de Slither.io et un Snake classique. L\'architecture orientée objet, classes abstraites, héritage et polymorphisme permettant aux deux modes de partager la logique de jeu tout en proposant des expériences distinctes. Le projet intègre un mode multijoueur en LAN avec synchronisation des états et gestion des collisions, développé dans le cadre d\'un cours de programmation orientée objet.',
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
    id: 5,
    title: 'Bomberman',
    description: {
      en: 'Bomberman clone in C with LAN multiplayer and NCurses.',
      fr: 'Clone de Bomberman en C, multijoueur LAN et interface NCurses.',
    },
    longDescription: {
      en: 'A Bomberman clone written in C, fully playable over a local network and rendered in text mode using the NCurses library. The server manages arenas, game configurations, and client synchronization, relying on careful memory management and precise network frame composition to deliver a smooth, responsive multiplayer experience.',
      fr: 'Réplique du jeu Bomberman en C, entièrement jouable en réseau local et affichée en mode texte via la bibliothèque NCurses. Le serveur gère les arènes, les configurations de partie et la synchronisation entre les clients, en s\'appuyant sur une gestion rigoureuse de la mémoire et une composition soignée des trames réseau pour garantir une expérience fluide et réactive.',
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
    id: 6,
    title: 'Poképong',
    description: {
      en: 'Pokémon-themed Pong with arena-specific special powers.',
      fr: 'Pong Pokémon avec des pouvoirs spéciaux par arène.',
    },
    longDescription: {
      en: 'A Pong remake with a Pokémon theme, built in Java with JavaFX. Each battle arena introduces unique special powers that build on top of classic Pong mechanics. Visuals draw inspiration from the Pokémon universe, and Gradle handles project and dependency management.',
      fr: 'Réplique du jeu Pong revisitée dans l\'univers Pokémon, développée en Java avec JavaFX. Chaque arène de combat introduit des pouvoirs spéciaux uniques qui enrichissent les mécaniques classiques de Pong. Les visuels s\'inspirent de l\'univers Pokémon, et Gradle assure la gestion du projet et des dépendances.',
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
    id: 7,
    title: 'Site de fidélité',
    description: {
      en: 'Loyalty card web app with a video-game-inspired UI.',
      fr: 'Gestion de cartes de fidélité, interface inspirée des jeux vidéo.',
    },
    longDescription: {
      en: 'A web application for managing loyalty cards for local businesses, with a visual theme inspired by video games. Users can create an account, register their cards, and track their points and rewards. Built with Node.js and Express for the backend, Bootstrap for the frontend, and PostgreSQL for data persistence.',
      fr: 'Application web dédiée à la gestion de cartes de fidélité pour les commerces locaux, avec une thématique visuelle inspirée des jeux vidéo. Les utilisateurs peuvent créer un compte, enregistrer leurs cartes et suivre leurs points et récompenses. Développée avec Node.js et Express pour le backend, Bootstrap pour le frontend, et PostgreSQL pour la persistance des données.',
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
    id: 8,
    title: 'Tetris',
    description: {
      en: 'Classic Tetris clone in Java, built for fun.',
      fr: 'Clone de Tetris en Java, développé pour le plaisir.',
    },
    longDescription: {
      en: 'A faithful Tetris clone built in Java with Java Swing, developed over a few evenings as a personal project outside any academic context. The game replicates the classic mechanics of the original : piece rotations, line clearing, progressive speed increase with a clean and functional interface.',
      fr: 'Réplique fidèle de Tetris développée en Java avec Java Swing, conçue en quelques soirées en dehors de tout cadre académique. Le jeu reproduit les mécaniques classiques de l\'original : rotations des pièces, lignes complètes, accélération progressive avec une interface simple et fonctionnelle.',
    },
    media: [
      { url: '/projects/tetris/tetris.webm', duration: 15000 }
    ],
    technologies: ['Java', 'Java Swing'],
    githubUrl: 'https://github.com/SservXF/Tetris.git',
    featured: false,
  },
  {
    id: 9,
    title: 'PieceOut',
    description: {
      en: 'C++ sliding puzzle game inspired by Piece Out.',
      fr: 'Jeu de puzzle en C++ inspiré de Piece Out.',
    },
    longDescription: {
      en: 'A puzzle game in C++ inspired by the mobile game Piece Out. Players must slide variously shaped pieces to a target zone on a constrained board, with increasing difficulty across levels. Built with the SFML library for rendering and input handling, and an object-oriented architecture to manage game entities.',
      fr: 'Jeu de puzzle en C++ inspiré du jeu mobile Piece Out. Le joueur doit déplacer des pièces de formes variées vers une zone cible sur un plateau contraignant les mouvements, avec une difficulté croissante au fil des niveaux. Développé avec la bibliothèque SFML pour le rendu et les entrées, et une architecture orientée objet pour la gestion des entités du jeu.',
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
      en: 'Automation Developer',
      fr: 'Développeur Automaticien',
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