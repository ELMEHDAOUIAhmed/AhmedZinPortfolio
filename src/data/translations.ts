export const translations = {
  en: {
    nav: {
      about: 'About',
      experience: 'Experience',
      projects: 'Projects',
      contact: 'Contact',
    },
    hero: {
      greeting: 'Hi, My name is ELMEHDAOUI Ahmed 👋',
      chips: ['Software Engineer', 'Mobile & Full-Stack Developer', 'IoT Projects', 'Master software engineering graduate'],
      aboutTitle: 'About Me',
      aboutText: 'Passionate software engineering student pursuing a Master\'s in Software Engineering at USTHB. Specialized in mobile development with Flutter, backend development with GoLang, and IoT solutions. Currently working on cutting-edge projects including mobile driving license (mDL) solutions and smart IoT systems.',
    },
    experience: {
      title: 'Projects & Experience',
      experiences: [
        {
          id: '1',
          title: 'Mobile Driving License (mDL) Developer',
          company: 'Hb Technologies SPA',
          timeline: '11/2024 - 07/2025',
          description: 'Designing and developing a digital driving license solution compliant with ISO 18013-5 standard, using microservices architecture. Backend developed in GoLang, mobile interface built with Flutter, and facial recognition based on Python. Infrastructure relies on PKI for security key management and data integrity.',
          technologies: ['GoLang', 'Flutter', 'Python', 'PKI', 'ISO 18013-5', 'Microservices'],
        },
        {
          id: '2',
          title: 'IoT Bike Rental Mobile App',
          company: 'USTHB University Graduation Project',
          timeline: '02/2023 – 05/2023',
          description: 'Designed a mobile application with Flutter including an integrated payment system. Authenticated users can rent bikes equipped with smart locks developed with Arduino and Bluetooth.',
          technologies: ['Flutter', 'Arduino', 'Bluetooth', 'Payment Integration', 'IoT'],
        },
        {
          id: '3',
          title: 'Medical Records Management System',
          company: 'USTHB University Project',
          timeline: '04/2022 – 05/2022',
          description: 'Developed software in 5 days using RAD tool (WinDev) for frontend and backend, applying Agile methodologies for rapid development.',
          technologies: ['RAD','WinDev', 'Agile', 'Database Management'],
        },
        {
          id: '4',
          title: 'Scientific Club Web Application',
          company: 'Micro Club - USTHB',
          timeline: '05/2022',
          description: 'Developed a university project with HTML, CSS, JavaScript and PHP to manage a student database, including a registration system with email verification and contact form.',
          technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
        },
        {
          id: '5',
          title: 'Dairy Production Management System',
          company: 'USTHB University Project',
          timeline: '04/2022 – 05/2022',
          description: 'Developed software in JavaFX with SQL database to manage inventory, purchase orders and production operations for a dairy company.',
          technologies: ['JavaFX', 'SQL', 'Database Design'],
        },
      ],
    },
    projects: {
      title: 'Featured Projects',
      projects: [
        {
          id: '1',
          name: 'Mobile Driving License (mDL)',
          description: 'ISO 18013-5 compliant digital driving license solution with microservices architecture, GoLang backend, Flutter mobile app, and Python-based facial recognition.',
          technologies: ['GoLang', 'Flutter', 'Python', 'PKI', 'Microservices'],
          githubUrl: 'https://github.com/ELMEHDAOUIAhmed/',
        },
        {
          id: '2',
          name: 'IoT Bike Rental System',
          description: 'Smart bike rental mobile application with Arduino-based smart locks, Bluetooth connectivity, and integrated payment system.',
          technologies: ['Flutter', 'Arduino', 'Bluetooth', 'IoT', 'Payment System'],
          githubUrl: 'https://github.com/ELMEHDAOUIAhmed/',
        },
        {
          id: '3',
          name: 'Medical Records Management',
          description: 'Rapid application development project for managing medical records and prescriptions, built in 5 days using Agile methodologies.',
          technologies: ['RAD Window', 'Database', 'Agile'],
          githubUrl: 'https://github.com/ELMEHDAOUIAhmed/',
        },
        {
          id: '4',
          name: 'Dairy Production Management',
          description: 'Complete management system for dairy production company including inventory management, purchase orders, and production operations.',
          technologies: ['JavaFX', 'SQL', 'Database Design'],
          githubUrl: 'https://github.com/ELMEHDAOUIAhmed/',
        },
      ],
    },
    skills: {
      title: 'Skills & Technologies',
      categories: {
        languages: {
          title: 'Languages',
          skills: ['Dart', 'GoLang', 'PHP', 'JavaScript', 'Python', 'C', 'Java'],
        },
        mobile: {
          title: 'Mobile & Frontend',
          skills: ['Flutter', 'HTML/CSS', 'JavaScript', 'JavaFX'],
        },
        backend: {
          title: 'Backend & Database',
          skills: ['Laravel', 'PostgreSQL', 'MongoDB', 'Redis', 'MySQL', 'Oracle'],
        },
        tools: {
          title: 'Tools & Methodologies',
          skills: ['UML 2.0', 'BPMN 2.0', 'Arduino', 'Agile', 'SQL', 'Data Warehousing'],
        },
      },
    },
    contact: {
      title: 'Get In Touch',
      subtitle: 'Let\'s discuss your next project',
      form: {
        name: 'Name',
        email: 'Email',
        message: 'Message',
        submit: 'Send Message',
      },
      success: 'Message sent successfully!',
      error: 'Please fill in all fields correctly.',
    },
  },
  fr: {
    nav: {
      about: 'À Propos',
      experience: 'Expérience',
      projects: 'Projets',
      contact: 'Contact',
    },
    hero: {
      greeting: 'Salut, je m\'appelle ELMEHDAOUI Ahmed 👋',
      chips: ['Ingénieur Logiciel', 'Développeur Mobile & Full-Stack', 'Projets IoT', 'Diplômé Master en ingénierie logicielle'],
      aboutTitle: 'À Propos de Moi',
      aboutText: 'Étudiant passionné en ingénierie logicielle poursuivant un Master en Ingénierie de Logiciels à l\'USTHB. Spécialisé dans le développement mobile avec Flutter, le développement backend avec GoLang, et les solutions IoT. Actuellement en train de travailler sur des projets de pointe incluant des solutions de permis de conduire mobile (mDL) et des systèmes IoT intelligents.',
    },
    experience: {
      title: 'Projets & Expérience',
      experiences: [
        {
          id: '1',
          title: 'Développeur Permis de Conduire Mobile (mDL)',
          company: 'Hb Technologies SPA',
          timeline: '11/2024 - 07/2025',
          description: 'Conception et développement d\'une solution de permis de conduire numérique conforme à la norme ISO 18013-5, utilisant une architecture microservices. Backend développé en GoLang, interface mobile construite avec Flutter, et reconnaissance faciale basée sur Python. L\'infrastructure repose sur PKI pour la gestion des clés de sécurité et l\'intégrité des données.',
          technologies: ['GoLang', 'Flutter', 'Python', 'PKI', 'ISO 18013-5', 'Microservices'],
        },
        {
          id: '2',
          title: 'App Mobile Location de Vélos IoT',
          company: 'Projet de Fin d\'Études USTHB',
          timeline: '02/2023 – 05/2023',
          description: 'Conception d\'une application mobile avec Flutter comprenant un système de paiement intégré. Les utilisateurs authentifiés peuvent louer des vélos équipés de serrures intelligentes développées avec Arduino et Bluetooth.',
          technologies: ['Flutter', 'Arduino', 'Bluetooth', 'Intégration Paiement', 'IoT'],
        },
        {
          id: '3',
          title: 'Système de Gestion des Dossiers Médicaux',
          company: 'Projet Universitaire USTHB',
          timeline: '04/2022 – 05/2022',
          description: 'Développement d\'un logiciel en 5 jours avec un outil RAD (WinDev) pour le frontend et le backend, en appliquant des méthodes Agile pour un développement rapide.',
          technologies: ['RAD','WinDev', 'Agile', 'Gestion Base de Données'],
        },
        {
          id: '4',
          title: 'Web App Club Scientifique',
          company: 'Micro Club - USTHB',
          timeline: '05/2022',
          description: 'Développement d\'un projet universitaire avec HTML, CSS, JavaScript et PHP pour gérer une base de données d\'étudiants, incluant un système d\'inscriptions avec vérification email et formulaire de contact.',
          technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
        },
        {
          id: '5',
          title: 'Système de Gestion Société Laitière',
          company: 'Projet Universitaire USTHB',
          timeline: '04/2022 – 05/2022',
          description: 'Développement d\'un logiciel en JavaFX avec base de données SQL pour gérer l\'inventaire, les bons de commande et les opérations de production pour une société laitière.',
          technologies: ['JavaFX', 'SQL', 'Conception Base de Données'],
        },
      ],
    },
    projects: {
      title: 'Projets Principaux',
      projects: [
        {
          id: '1',
          name: 'Permis de Conduire Mobile (mDL)',
          description: 'Solution de permis de conduire numérique conforme ISO 18013-5 avec architecture microservices, backend GoLang, app mobile Flutter, et reconnaissance faciale Python.',
          technologies: ['GoLang', 'Flutter', 'Python', 'PKI', 'Microservices'],
          githubUrl: 'https://github.com/ELMEHDAOUIAhmed/',
        },
        {
          id: '2',
          name: 'Système Location Vélos IoT',
          description: 'Application mobile intelligente de location de vélos avec serrures Arduino, connectivité Bluetooth, et système de paiement intégré.',
          technologies: ['Flutter', 'Arduino', 'Bluetooth', 'IoT', 'Système Paiement'],
          githubUrl: 'https://github.com/ELMEHDAOUIAhmed/',
        },
        {
          id: '3',
          name: 'Gestion Dossiers Médicaux',
          description: 'Projet de développement rapide pour la gestion des dossiers médicaux et ordonnances, construit en 5 jours avec méthodologies Agile.',
          technologies: ['RAD Window', 'Base de Données', 'Agile'],
          githubUrl: 'https://github.com/ELMEHDAOUIAhmed/',
        },
        {
          id: '4',
          name: 'Gestion Production Laitière',
          description: 'Système de gestion complet pour société de production laitière incluant gestion inventaire, bons de commande, et opérations de production.',
          technologies: ['JavaFX', 'SQL', 'Conception Base de Données'],
          githubUrl: 'https://github.com/ELMEHDAOUIAhmed/',
        },
      ],
    },
    skills: {
      title: 'Compétences & Technologies',
      categories: {
        languages: {
          title: 'Langages',
          skills: ['Dart', 'GoLang', 'PHP', 'JavaScript', 'Python', 'C', 'Java'],
        },
        mobile: {
          title: 'Mobile & Frontend',
          skills: ['Flutter', 'HTML/CSS', 'JavaScript', 'JavaFX'],
        },
        backend: {
          title: 'Backend & Base de Données',
          skills: ['Laravel', 'PostgreSQL', 'MongoDB', 'Redis', 'MySQL', 'Oracle'],
        },
        tools: {
          title: 'Outils & Méthodologies',
          skills: ['UML 2.0', 'BPMN 2.0', 'Arduino', 'Agile', 'SQL', 'Entrepôts de Données'],
        },
      },
    },
    contact: {
      title: 'Contactez-Moi',
      subtitle: 'Discutons de votre prochain projet',
      form: {
        name: 'Nom',
        email: 'Email',
        message: 'Message',
        submit: 'Envoyer le Message',
      },
      success: 'Message envoyé avec succès!',
      error: 'Veuillez remplir tous les champs correctement.',
    },
  },
};