export interface Acknowledgment {
  id: string;
  name: string;
  profileImage?: string;
  link: string;
  contribution: {
    en: string;
    fr: string;
  };
}

export const acknowledgments: Acknowledgment[] = [
  {
    id: '1',
    name: 'steef',
    profileImage: 'https://assets.codepen.io/3635276/internal/avatars/users/default.png?fit=crop&format=auto&height=512&version=1638007219&width=512',
    link: 'https://codepen.io/steefmaster',
    contribution: {
      en: 'Inspired by Apple\'s hello intro animation, this was originally created using only HTML and CSS. I adapted their SVG design and reimplemented it using TypeScript and CSS for my portfolio.',
      fr: 'Inspiré de l\'animation d\'accueil d\'Apple, j\'ai repris leur concept SVG original en HTML/CSS et l\'ai adapté en TypeScript/CSS pour mon portfolio.'
    }
  },
  {
    id: '2',
    name: 'Etornam',
    profileImage: 'https://media.licdn.com/dms/image/v2/D4D03AQHtHBzFRboDCg/profile-displayphoto-shrink_200_200/B4DZYBDroDHIAY-/0/1743774465362?e=1758153600&v=beta&t=OkSKjGCO7Cqa7vm9HaQTzn52bJbXCdcmE-pRXPujBeg',
    link: 'https://etornam.dev',
    contribution: {
      en: 'Etornam was the inspiration behind creating this portfolio. He\'s a talented AI researcher, Google Developer Expert, and most importantly, an expert Flutter developer. When he forked my MRZ scanner Flutter package on GitHub, I stumbled into his portfolio - it was simple, nothing extravagant, but beautifully designed.',
      fr: 'Etornam a été l\'inspiration derrière la création de ce portfolio. C\'est un chercheur en IA talentueux, Google Developer Expert, et surtout, un développeur Flutter expert. Quand il a forké mon package Flutter de scanner MRZ sur GitHub, je suis tombé sur son portfolio - il était simple, rien d\'extravagant, mais magnifiquement conçu.'
    }
  },
  
];

// Default placeholder image for contributors without profile pictures
export const DEFAULT_PROFILE_IMAGE = 'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop';