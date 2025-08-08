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
      location: 'Algeria, Algiers',
      chips: [
        'Software Engineer',
        'Mobile & Full-Stack Developer',
        'IoT Projects',
        'Process Automation',
        'Master\'s graduate in Software Engineering',
      ],
      aboutTitle: 'About Me',
      aboutText:
        "**Software Engineer** with a Master's degree in **Software Engineering** from **USTHB**. Specialized in **backend** development with **GoLang** and mobile development with **Flutter**.",
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
      title: 'Professional Experience',
      experiences: [
        {
          id: '1',
          title: 'Professional Services Engineer',
          company: '[CaptureDoc](http://capturedoc.com/)',
          timeline: '08/2025 - Today',
          description:
            'Business process iteration and automation using advanced technologies to streamline workflows and enhance operational efficiency.',
          technologies: [
            'Automation',
            'Facial Recognition',
            'OCR',
            'Total Agility',
            'Kofax',
            'DocuShare',
          ],
        },
        {
          id: '2',
          title: 'Software Engineering Intern',
          company: '[HB Technologies SPA](https://www.hb-technologies.com.dz/en/)',
          timeline: '11/2024 - 07/2025',
          description:
            'Designed and developed a **digital driving license solution** compliant with **ISO 18013-5**. It includes two mobile apps (holder & verifier) and an issuer platform, built on **microservices**. Backend in **GoLang**, mobile apps in **Flutter**, facial recognition in **Python**. Secured with **Public Key Infrastructure (PKI)** and **Redis** for cryptographic key storage.',
          technologies: [
            'GoLang',
            'Flutter',
            'Python',
            'PKI',
            'ISO 18013-5',
            'Microservices',
          ],
        },
      ],
    },
    projects: {
      title: 'Academic & Personal Projects',
      projects: [
        {
          id: '3',
          name: 'IoT Bike Rental Mobile App',
          description:
            'Designed a mobile application with Flutter including an integrated payment system. Authenticated users can rent bikes equipped with smart locks developed with Arduino and Bluetooth.',
          technologies: [
            'Flutter',
            'Arduino',
            'Bluetooth',
            'Payment Integration',
            'IoT',
          ],
          githubUrl: 'https://github.com/ELMEHDAOUIAhmed/Flutter_startup_bike_rental_app',
        },
        {
          id: '4',
          name: 'Medical Records Management System',
          description:
            'Developed software in 5 days using RAD tool (WinDev) for frontend and backend, applying Agile methodologies for rapid development.',
          technologies: ['RAD', 'WinDev', 'Agile', 'Database Management'],
        },
        {
          id: '5',
          name: 'Scientific Club Web Application',
          description:
            'Developed a university project with HTML, CSS, JavaScript and PHP to manage a student database, including a registration system with email verification and contact form.',
          technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'SQL'],
          githubUrl: 'https://github.com/ELMEHDAOUIAhmed/MC2022',
        },
        {
          id: '6',
          name: 'Dairy Production Management System',
          description:
            'Developed software in JavaFX with SQL database to manage inventory, purchase orders and production operations for a dairy company.',
          technologies: ['JavaFX', 'SQL', 'Database Design'],
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
            forks: '3'
          }
        }
      ]
    },
    skills: {
      title: 'Technical Expertise',
      aboutMe: {
        title: 'About Me',
        text: 'I led a project to develop a **mobile driving license (mDL) solution**— a **secure digital alternative** to physical licenses based on **ISO 18013-5**. It automates key processes like **document capture**, **biometric enrollment**, and **real-time verification**. This transition from paper to digital boosted speed, security, and fraud resistance, showing how **smart automation** is vital in modern identity systems.'
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
    acknowledgments: {
      title: 'Acknowledgments',
      academicIntegrityText: 'This portfolio was shaped by the inspiration and work of many talented individuals, each of whom contributed in some way, however small. As I\'ve learned in my academic journey, giving proper credit is essential. Plagiarism is not only unethical but also a violation of academic integrity. We must always acknowledge the ideas and words of others using recognized academic citation standards.',
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
      location: 'Algérie, Alger',
      chips: [
        'Ingénieur Logiciel',
        'Développeur Mobile & Full-Stack',
        'Projets IoT',
        'Automatisation des processus',
        'Diplômé d’un Master Ingénierie de Logiciels',
      ],
      aboutTitle: 'À Propos de Moi',
      aboutText:
        "**Ingénieur Logiciel** diplômé d'un Master en **Ingénierie de Logiciels** de l'**USTHB**. Spécialisé en développement **backend** avec **GoLang** et en développement mobile avec **Flutter**.",
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
      title: 'Expérience Professionnelle',
      experiences: [
        {
          id: '1',
          title: 'Ingénieur Services Professionnels',
          company: '[CaptureDoc](http://capturedoc.com/)',
          timeline: '08/2025 - Aujourd\'hui',
          description:
            'Itération et automatisation des processus métier en utilisant des technologies avancées pour optimiser les flux de travail et améliorer l\'efficacité opérationnelle.',
          technologies: [
            'Automatisation',
            'Reconnaissance Faciale',
            'OCR',
            'Total Agility',
            'Kofax',
            'DocuShare',
          ],
        },
        {
          id: '2',
          title: 'Stagiaire en Ingénierie Logicielle',
          company: '[HB Technologies SPA](https://www.hb-technologies.com.dz/en/)',
          timeline: '11/2024 - 07/2025',
          description:
            'Conception et développement d’une **solution de permis de conduire mobile** conforme à la norme **ISO 18013-5**. Comprend deux apps mobiles (titulaire & vérificateur) et une plateforme pour l’autorité, le tout en **microservices**. Backend en **GoLang**, apps en **Flutter**, reconnaissance faciale en **Python**. Sécurisé via **infrastructure à clé publique (PKI)** et **Redis** pour le stockage des clés.',
          technologies: [
            'GoLang',
            'Flutter',
            'Python',
            'PKI',
            'ISO 18013-5',
            'Microservices',
          ],
        },
      ],
    },
    projects: {
      title: 'Projets Académiques & Personnels',
      projects: [
        {
          id: '3',
          name: 'App Mobile Location de Vélos IoT',
          description:
            "Conception d'une application mobile avec Flutter comprenant un système de paiement intégré. Les utilisateurs authentifiés peuvent louer des vélos équipés de serrures intelligentes développées avec Arduino et Bluetooth.",
          technologies: [
            'Flutter',
            'Arduino',
            'Bluetooth',
            'Intégration Paiement',
            'IoT',
          ],
          githubUrl: 'https://github.com/ELMEHDAOUIAhmed/Flutter_startup_bike_rental_app',
        },
        {
          id: '4',
          name: 'Système de Gestion des Dossiers Médicaux',
          description:
            "Développement d'un logiciel en 5 jours avec un outil RAD (WinDev) pour le frontend et le backend, en appliquant des méthodes Agile pour un développement rapide.",
          technologies: ['RAD', 'WinDev', 'Agile', 'Gestion Base de Données'],
        },
        {
          id: '5',
          name: 'Web App Club Scientifique',
          description:
            "Développement d'un projet universitaire avec HTML, CSS, JavaScript et PHP pour gérer une base de données d'étudiants, incluant un système d'inscriptions avec vérification email et formulaire de contact.",
          technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'SQL'],
          githubUrl: 'https://github.com/ELMEHDAOUIAhmed/MC2022',
        },
        {
          id: '6',
          name: 'Système de Gestion Société Laitière',
          description:
            "Développement d'un logiciel en JavaFX avec base de données SQL pour gérer l'inventaire, les bons de commande et les opérations de production pour une société laitière.",
          technologies: ['JavaFX', 'SQL', 'Conception Base de Données'],
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
            forks: '3'
          }
        }
      ]
    },
    skills: {
      title: 'Expertise Technique',
      aboutMe: {
        title: 'À Propos de Moi',
        text: 'J’ai dirigé un projet de développement d’une **solution de permis de conduire mobile (mDL)** — une **alternative numérique sécurisée** aux permis physiques, basée sur la norme **ISO 18013-5**. Elle automatise des processus clés comme la **capture de documents**, l’**enrôlement biométrique** et la **vérification en temps réel**. Cette transition du papier au numérique a amélioré la rapidité, la sécurité et la résistance à la fraude, démontrant que **l’automatisation intelligente** est essentielle dans les systèmes d’identité modernes.',
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
    acknowledgments: {
      title: 'Remerciements',
      academicIntegrityText: 'Ce portfolio a été inspiré par le travail de nombreuses personnes talentueuses, chacune ayant apporté sa contribution, aussi minime soit-elle. Comme je l\'ai appris au cours de mon parcours académique, il est essentiel de citer ses sources. Le plagiat est un acte contraire à l\'intégrité intellectuelle et à l\'éthique académique. Il est impératif de suivre les conventions de citation reconnues pour respecter le travail des autres.',
    },
  },
};