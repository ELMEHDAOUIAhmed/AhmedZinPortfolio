export const translations = {
  en: {
    nav: {
      about: 'About',
      experience: 'Experience',
      projects: 'Projects',
      showcase: 'Showcase',
      contributions: 'Contributions',
      contact: 'Contact',
    },
    hero: {
      greeting: 'Hi, My name is',
      name: 'ELMEHDAOUI Ahmed',
      chips: [
        'Software Engineer',
        'Mobile & Full-Stack Developer',
        'IoT Projects',
        'Process Automation',
        'Master software engineering graduate',
      ],
      aboutTitle: 'About Me',
      aboutText:
        "Software engineering student pursuing a Master's in **Software Engineering** at **USTHB**. Specialized in backend development with GoLang and mobile development with Flutter. Currently working on a project developing a mobile driving license **(mDL)** solution with **HB Technologies SPA**, alongside smart IoT system development.",
      buttons: {
        previewCV: 'Preview CV',
        downloadCV: 'Download CV',
      },
      modal: {
        title: 'CV Preview',
        downloadButton: 'Download CV',
      },
      aboutMe: {
        title: 'About Me',
      },
    },
    experience: {
      title: 'Projects & Experience',
      experiences: [
        {
          id: '1',
          title: 'Mobile Driving License (mDL)',
          company: '[HB Technologies SPA](https://www.hb-technologies.com.dz/en/)',
          timeline: '11/2024 - 07/2025',
          description:
            'Designed and developed a digital driving license solution compliant with the ISO 18013-5 standard. The system comprised two mobile applications—one for license holders and one for verifiers—alongside an issuing authority platform, all built using a microservices architecture. The backend was developed in GoLang, mobile interfaces in Flutter, and facial recognition in Python. The infrastructure leveraged Public Key Infrastructure (PKI) for secure key management and data integrity, with Redis used for fast and secure storage of cryptographic keys.',
          technologies: [
            'GoLang',
            'Flutter',
            'Python',
            'PKI',
            'ISO 18013-5',
            'Microservices',
          ],
        },
        {
          id: '2',
          title: 'IoT Bike Rental Mobile App',
          company: 'USTHB University Graduation Project',
          timeline: '02/2023 – 05/2023',
          description:
            'Designed a mobile application with Flutter including an integrated payment system. Authenticated users can rent bikes equipped with smart locks developed with Arduino and Bluetooth.',
          technologies: [
            'Flutter',
            'Arduino',
            'Bluetooth',
            'Payment Integration',
            'IoT',
          ],
        },
        {
          id: '3',
          title: 'Medical Records Management System',
          company: 'USTHB University Project',
          timeline: '04/2022 – 05/2022',
          description:
            'Developed software in 5 days using RAD tool (WinDev) for frontend and backend, applying Agile methodologies for rapid development.',
          technologies: ['RAD', 'WinDev', 'Agile', 'Database Management'],
        },
        {
          id: '4',
          title: 'Scientific Club Web Application',
          company: 'Micro Club - USTHB University',
          timeline: '05/2022',
          description:
            'Developed a university project with HTML, CSS, JavaScript and PHP to manage a student database, including a registration system with email verification and contact form.',
          technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'SQL'],
        },
        {
          id: '5',
          title: 'Dairy Production Management System',
          company: 'USTHB University Project',
          timeline: '04/2022 – 05/2022',
          description:
            'Developed software in JavaFX with SQL database to manage inventory, purchase orders and production operations for a dairy company.',
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
          description:
            'ISO 18013-5 compliant digital driving license solution with microservices architecture, GoLang backend, Flutter mobile app, and Python-based facial recognition.',
          technologies: ['GoLang', 'Flutter', 'Python', 'PKI', 'Microservices'],
          githubUrl: 'https://github.com/ELMEHDAOUIAhmed/',
        },
        {
          id: '2',
          name: 'IoT Bike Rental System',
          description:
            'Smart bike rental mobile application with Arduino-based smart locks, Bluetooth connectivity, and integrated payment system.',
          technologies: [
            'Flutter',
            'Arduino',
            'Bluetooth',
            'IoT',
            'Payment System',
          ],
          githubUrl: 'https://github.com/ELMEHDAOUIAhmed/Flutter_startup_bike_rental_app',
        },
        {
          id: '3',
          name: 'Medical Records Management',
          description:
            'Rapid application development project for managing medical records and prescriptions, built in 5 days using Agile methodologies.',
          technologies: ['RAD', 'WinDev', 'Agile', 'Database Management'],
          githubUrl: 'https://github.com/ELMEHDAOUIAhmed/',
        },
        {
          id: '4',
          name: 'Dairy Production Management',
          description:
            'Complete management system for dairy production company including inventory management, purchase orders, and production operations.',
          technologies: ['JavaFX', 'SQL', 'Database Design'],
          githubUrl: 'https://github.com/ELMEHDAOUIAhmed/',
        },
      ],
    },
    showcase: {
      title: 'Portfolio Showcase',
      subtitle: 'Explore my diverse range of creative works and projects',
      portfolios: [
        {
          id: '1',
          name: 'Windows 98 Themed Portfolio',
          description: 'A nostalgic journey through retro computing aesthetics with authentic Windows 98 UI elements, interactive desktop environment, and classic sound effects. Built with vanilla web technologies.',
          url: 'https://my-portfolio-win98-themed.vercel.app/',
          image: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4989c596-7ba0-4e17-8b98-7c338208ab64/daobodr-7dc4c4b1-7bd3-4b50-87bb-c987e2c4dfb7.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzQ5ODljNTk2LTdiYTAtNGUxNy04Yjk4LTdjMzM4MjA4YWI2NFwvZGFvYm9kci03ZGM0YzRiMS03YmQzLTRiNTAtODdiYi1jOTg3ZTJjNGRmYjcuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.WUgaB8yxHCiYkZyvCl5OVzOA5lVQbOzx_JdIiKMA2Zg',
          technologies: ['HTML', 'CSS', 'JavaScript', 'Retro Design'],
          category: 'Web Design'
        },
        {
          id: '2',
          name: 'mDL Mobile App Showcase',
          description: 'Interactive showcase demonstrating mobile driving license (mDL) application features, built with modern React and TypeScript for optimal performance and user experience.',
          url: 'https://elmehdaouiahmed.github.io/mDL-Showcase/',
          image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg',
          technologies: ['React', 'TypeScript', 'Mobile Design', 'mDL'],
          category: 'Mobile Showcase'
        }
      ]
    },
    contributions: {
      title: 'Open Source Contributions',
      subtitle: 'Community projects and collaborative development',
      projects: [
        {
          id: '1',
          name: 'Flutter MRZ Scanner Enhanced',
          description: 'Enhanced version of the flutter_mrz_scanner package designed to scan biometric identities and driving license cards with improved accuracy and performance.',
          pubVersion: '3.1.8',
          url: 'https://pub.dev/packages/flutter_mrz_scanner_enhanced',
          githubUrl: 'https://github.com/ELMEHDAOUIAhmed/flutter_mrz_scanner_enhanced',
          technologies: ['Flutter', 'Dart', 'Kotlin', 'Swift', 'OpenCV'],
          impact: 'Specialized in biometric identity and driving license scanning',
          enhancements: [
            'Enhanced text recognition accuracy through advanced image preprocessing',
            'Optimized camera overlay UI for better user experience',
            'Improved image processing pipelines with OpenCV integration',
            'Updated dependencies and added null-safety support',
            'Enhanced error handling and validation systems',
            'Better platform compatibility across iOS and Android',
            'Specialized algorithms for biometric identity card scanning',
            'Improved driving license card detection and processing'
          ],
          stats: {
            downloads: '1K+',
            stars: '1',
            forks: '1'
          }
        }
      ]
    },
    skills: {
      title: 'Technical Expertise',
      aboutMe: {
        title: 'About Me',
        text: 'As a **USTHB** software engineering graduate, my latest project—building a **mobile driving license solution**—revealed just how vital **automation** has become. By **dematerializing physical records** and automating every step—from **document capture** and **biometric enrollment** to **real-time synchronization** and **continuous security checks**—we transformed a paper-heavy system into a fast, **scalable**, and **fraud-resistant service**. This approach accelerates **workflows**, eliminates **human error**, and simultaneously reduces the risks of **documentary fraud** and exploitation of **obsolete data**. In our **digital era**, embracing **automation** is essential for **efficiency**, **security**, and **trust**.'
      },
      categories: {
        languages: {
          title: 'Languages',
          skills: [
            'Dart',
            'GoLang',
            'PHP',
            'JavaScript',
            'Python',
            'C',
            'Java',
          ],
        },
        mobile: {
          title: 'Mobile & Frontend',
          skills: ['Flutter', 'HTML','CSS', 'JavaScript', 'JavaFX', 'React'],
        },
        backend: {
          title: 'Backend & Database',
          skills: [
            'Laravel',
            'PostgreSQL',
            'MongoDB',
            'Redis',
            'MySQL',
            'Oracle',
          ],
        },
        tools: {
          title: 'Tools & Methodologies',
          skills: [
            'UML 2.0',
            'BPMN 2.0',
            'Arduino',
            'Agile',
            'SQL',
            'NoSQL',
            'Data Warehousing',
          ],
        },
      },
    },
    contact: {
      title: 'Get In Touch',
      subtitle: "Let's discuss your next project",
      form: {
        name: 'Name',
        email: 'Email',
        message: 'Message',
        submit: 'Send Message',
        placeholders: {
          name: 'Your name',
          email: 'your.email@example.com',
          message: 'Tell me about your project...',
        },
        sending: 'Sending...',
      },
      success: 'Message sent successfully!',
      error: 'Please fill in all fields correctly.',
    },
    footer: {
      copyright: '© 2025 ELMEHDAOUI Ahmed. All rights reserved.',
    },
  },
  fr: {
    nav: {
      about: 'À Propos',
      experience: 'Expérience',
      projects: 'Projets',
      showcase: 'Vitrine',
      contributions: 'Contributions',
      contact: 'Contact',
    },
    hero: {
      greeting: 'Salut, je m\'appelle',
      name: 'ELMEHDAOUI Ahmed',
      chips: [
        'Ingénieur Logiciel',
        'Développeur Mobile & Full-Stack',
        'Projets IoT',
        'Automatisation des processus',
        'Diplômé Master Ingénierie de Logiciels',
      ],
      aboutTitle: 'À Propos de Moi',
      aboutText:
        "Étudiant passionné en ingénierie logicielle poursuivant un Master en **Ingénierie de Logiciels** à l'**USTHB**. Spécialisé dans le développement mobile avec Flutter, le développement backend avec GoLang, et les solutions IoT. Actuellement en train de travailler sur des projets de pointe incluant des solutions de permis de conduire mobile **(mDL)** avec **HB Technologies SPA** et des systèmes IoT intelligents.",
      buttons: {
        previewCV: 'Aperçu CV',
        downloadCV: 'Télécharger CV',
      },
      modal: {
        title: 'Aperçu CV',
        downloadButton: 'Télécharger CV',
      },
      aboutMe: {
        title: 'À Propos de Moi',
      },
    },
    experience: {
      title: 'Projets & Expérience',
      experiences: [
        {
          id: '1',
          title: 'Permis de Conduire Mobile (mDL)',
          company: '[HB Technologies SPA](https://www.hb-technologies.com.dz/en/)',
          timeline: '11/2024 - 07/2025',
          description:
            "Conception et développement d'une solution de permis de conduire numérique conforme à la norme ISO 18013-5. Le système comprenait deux applications mobiles — l'une pour les titulaires de permis et l'autre pour les vérificateurs — ainsi qu'une plateforme pour l'autorité de délivrance, le tout basé sur une architecture en microservices. Le backend a été développé en GoLang, les interfaces mobiles en Flutter, et la reconnaissance faciale en Python. L'infrastructure s'appuyait sur une Infrastructure à Clé Publique (PKI) pour la gestion sécurisée des clés et l'intégrité des données, avec Redis utilisé pour un stockage rapide et sécurisé des clés cryptographiques.",
          technologies: [
            'GoLang',
            'Flutter',
            'Python',
            'PKI',
            'ISO 18013-5',
            'Microservices',
          ],
        },
        {
          id: '2',
          title: 'App Mobile Location de Vélos IoT',
          company: "Projet de Fin d'Études USTHB",
          timeline: '02/2023 – 05/2023',
          description:
            "Conception d'une application mobile avec Flutter comprenant un système de paiement intégré. Les utilisateurs authentifiés peuvent louer des vélos équipés de serrures intelligentes développées avec Arduino et Bluetooth.",
          technologies: [
            'Flutter',
            'Arduino',
            'Bluetooth',
            'Intégration Paiement',
            'IoT',
          ],
        },
        {
          id: '3',
          title: 'Système de Gestion des Dossiers Médicaux',
          company: 'Projet Universitaire USTHB',
          timeline: '04/2022 – 05/2022',
          description:
            "Développement d'un logiciel en 5 jours avec un outil RAD (WinDev) pour le frontend et le backend, en appliquant des méthodes Agile pour un développement rapide.",
          technologies: ['RAD', 'WinDev', 'Agile', 'Gestion Base de Données'],
        },
        {
          id: '4',
          title: 'Web App Club Scientifique',
          company: 'Micro Club - USTHB University',
          timeline: '05/2022',
          description:
            "Développement d'un projet universitaire avec HTML, CSS, JavaScript et PHP pour gérer une base de données d'étudiants, incluant un système d'inscriptions avec vérification email et formulaire de contact.",
          technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'SQL'],
        },
        {
          id: '5',
          title: 'Système de Gestion Société Laitière',
          company: 'Projet Universitaire USTHB',
          timeline: '04/2022 – 05/2022',
          description:
            "Développement d'un logiciel en JavaFX avec base de données SQL pour gérer l'inventaire, les bons de commande et les opérations de production pour une société laitière.",
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
          description:
            'Solution de permis de conduire numérique conforme ISO 18013-5 avec architecture microservices, backend GoLang, app mobile Flutter, et reconnaissance faciale Python.',
          technologies: ['GoLang', 'Flutter', 'Python', 'PKI', 'Microservices'],
          githubUrl: 'https://github.com/ELMEHDAOUIAhmed/',
        },
        {
          id: '2',
          name: 'Système Location Vélos IoT',
          description:
            'Application mobile intelligente de location de vélos avec serrures Arduino, connectivité Bluetooth, et système de paiement intégré.',
          technologies: [
            'Flutter',
            'Arduino',
            'Bluetooth',
            'IoT',
            'Système Paiement',
          ],
          githubUrl: 'https://github.com/ELMEHDAOUIAhmed/',
        },
        {
          id: '3',
          name: 'Gestion Dossiers Médicaux',
          description:
            'Projet de développement rapide pour la gestion des dossiers médicaux et ordonnances, construit en 5 jours avec méthodologies Agile.',
          technologies: ['RAD', 'WinDev', 'Base de Données', 'Agile'],
          githubUrl: 'https://github.com/ELMEHDAOUIAhmed/',
        },
        {
          id: '4',
          name: 'Gestion Production Laitière',
          description:
            'Système de gestion complet pour société de production laitière incluant gestion inventaire, bons de commande, et opérations de production.',
          technologies: ['JavaFX', 'SQL', 'Conception Base de Données'],
          githubUrl: 'https://github.com/ELMEHDAOUIAhmed/',
        },
      ],
    },
    showcase: {
      title: 'Vitrine Portfolio',
      subtitle: 'Explorez ma gamme diversifiée de travaux créatifs et projets',
      portfolios: [
        {
          id: '1',
          name: 'Portfolio Thème Windows 98',
          description: 'Un voyage nostalgique à travers l\'esthétique rétro de l\'informatique avec des éléments UI authentiques de Windows 98. Construit avec des technologies web vanilla.',
          url: 'https://my-portfolio-win98-themed.vercel.app/',
          image: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4989c596-7ba0-4e17-8b98-7c338208ab64/daobodr-7dc4c4b1-7bd3-4b50-87bb-c987e2c4dfb7.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzQ5ODljNTk2LTdiYTAtNGUxNy04Yjk4LTdjMzM4MjA4YWI2NFwvZGFvYm9kci03ZGM0YzRiMS03YmQzLTRiNTAtODdiYi1jOTg3ZTJjNGRmYjcuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.WUgaB8yxHCiYkZyvCl5OVzOA5lVQbOzx_JdIiKMA2Zg',
          technologies: ['HTML', 'CSS', 'JavaScript', 'Design Rétro'],
          category: 'Design Web'
        },
        {
          id: '2',
          name: 'Vitrine App Mobile mDL',
          description: 'Vitrine interactive démontrant les fonctionnalités de l\'application de permis de conduire mobile (mDL), construite avec React et TypeScript modernes.',
          url: 'https://elmehdaouiahmed.github.io/mDL-Showcase/',
          image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg',
          technologies: ['React', 'TypeScript', 'Design Mobile', 'mDL'],
          category: 'Vitrine Mobile'
        }
      ]
    },
    contributions: {
      title: 'Contributions Open Source',
      subtitle: 'Projets communautaires et développement collaboratif',
      projects: [
        {
          id: '1',
          name: 'Flutter MRZ Scanner Enhanced',
          description: 'Version améliorée du package flutter_mrz_scanner conçue pour scanner les identités biométriques et les cartes de permis de conduire avec une précision et performance améliorées.',
          pubVersion: '3.1.8',
          url: 'https://pub.dev/packages/flutter_mrz_scanner_enhanced',
          githubUrl: 'https://github.com/ELMEHDAOUIAhmed/flutter_mrz_scanner_enhanced',
          technologies: ['Flutter', 'Dart', 'Kotlin', 'Swift', 'OpenCV'],
          impact: 'Spécialisé dans le scan d\'identité biométrique et permis de conduire',
          enhancements: [
            'Précision de reconnaissance de texte améliorée grâce au prétraitement d\'image avancé',
            'Interface utilisateur de superposition caméra optimisée',
            'Pipelines de traitement d\'image améliorés avec intégration OpenCV',
            'Dépendances mises à jour et support null-safety ajouté',
            'Systèmes de gestion d\'erreurs et validation améliorés',
            'Meilleure compatibilité des plateformes iOS et Android',
            'Algorithmes spécialisés pour le scan de cartes d\'identité biométriques',
            'Détection et traitement améliorés des cartes de permis de conduire'
          ],
          stats: {
            downloads: '1K+',
            stars: '1',
            forks: '1'
          }
        }
      ]
    },
    skills: {
      title: 'Expertise Technique',
      aboutMe: {
        title: 'À Propos de Moi',
        text: 'En tant que diplômé en ingénierie logicielle de l\'**USTHB**, mon dernier projet—la construction d\'une **solution de permis de conduire mobile**—a révélé à quel point l\'**automatisation** est devenue vitale. En **dématérialisant les dossiers physiques** et en automatisant chaque étape—de la **capture de documents** et l\'**inscription biométrique** à la **synchronisation en temps réel** et aux **vérifications de sécurité continues**—nous avons transformé un système lourd en papier en un service rapide, **évolutif** et **résistant à la fraude**. Cette approche accélère les **flux de travail**, élimine les **erreurs humaines** et réduit simultanément les risques de **fraude documentaire** et d\'exploitation de **données obsolètes**. À notre **ère numérique**, adopter l\'**automatisation** est essentiel pour l\'**efficacité**, la **sécurité** et la **confiance**.'
      },
      categories: {
        languages: {
          title: 'Langages',
          skills: [
            'Dart',
            'GoLang',
            'PHP',
            'JavaScript',
            'Python',
            'C',
            'Java',
          ],
        },
        mobile: {
          title: 'Mobile & Frontend',
          skills: ['Flutter', 'HTML','CSS', 'JavaScript', 'JavaFX', 'React'],
        },
        backend: {
          title: 'Backend & Base de Données',
          skills: [
            'Laravel',
            'PostgreSQL',
            'MongoDB',
            'Redis',
            'MySQL',
            'Oracle',
          ],
        },
        tools: {
          title: 'Outils & Méthodologies',
          skills: [
            'UML 2.0',
            'BPMN 2.0',
            'Arduino',
            'Agile',
            'SQL',
            'Entrepôts de Données',
          ],
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
        placeholders: {
          name: 'Votre nom',
          email: 'votre.email@exemple.com',
          message: 'Parlez-moi de votre projet...',
        },
        sending: 'Envoi en cours...',
      },
      success: 'Message envoyé avec succès!',
      error: 'Veuillez remplir tous les champs correctement.',
    },
    footer: {
      copyright: '© 2025 ELMEHDAOUI Ahmed. Tous droits réservés.',
    },
  },
};