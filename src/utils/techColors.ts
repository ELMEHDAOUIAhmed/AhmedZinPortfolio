export const getTechColor = (tech: string) => {
  const colors = {
    // Programming Languages
    'JavaScript': 'bg-yellow-100/80 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-200 border-yellow-200/50 dark:border-yellow-700/50',
    'TypeScript': 'bg-blue-100/80 text-blue-800 dark:bg-blue-900/50 dark:text-blue-200 border-blue-200/50 dark:border-blue-700/50',
    'Python': 'bg-green-100/80 text-green-800 dark:bg-green-900/50 dark:text-green-200 border-green-200/50 dark:border-green-700/50',
    'Java': 'bg-red-100/80 text-red-800 dark:bg-red-900/50 dark:text-red-200 border-red-200/50 dark:border-red-700/50',
    'C': 'bg-gray-100/80 text-gray-800 dark:bg-gray-700/50 dark:text-gray-200 border-gray-200/50 dark:border-gray-600/50',
    'PHP': 'bg-purple-100/80 text-purple-800 dark:bg-purple-900/50 dark:text-purple-200 border-purple-200/50 dark:border-purple-700/50',
    'Dart': 'bg-cyan-100/80 text-cyan-800 dark:bg-cyan-900/50 dark:text-cyan-200 border-cyan-200/50 dark:border-cyan-700/50',
    'GoLang': 'bg-cyan-100/80 text-cyan-800 dark:bg-cyan-900/50 dark:text-cyan-200 border-cyan-200/50 dark:border-cyan-700/50',
    'Go': 'bg-cyan-100/80 text-cyan-800 dark:bg-cyan-900/50 dark:text-cyan-200 border-cyan-200/50 dark:border-cyan-700/50',
    'Swift': 'bg-orange-100/80 text-orange-800 dark:bg-orange-900/50 dark:text-orange-200 border-orange-200/50 dark:border-orange-700/50',
    'Kotlin': 'bg-purple-100/80 text-purple-800 dark:bg-purple-900/50 dark:text-purple-200 border-purple-200/50 dark:border-purple-700/50',

    // Frontend Technologies
    'React': 'bg-cyan-100/80 text-cyan-800 dark:bg-cyan-900/50 dark:text-cyan-200 border-cyan-200/50 dark:border-cyan-700/50',
    'HTML': 'bg-orange-100/80 text-orange-800 dark:bg-orange-900/50 dark:text-orange-200 border-orange-200/50 dark:border-orange-700/50',
    'CSS': 'bg-blue-100/80 text-blue-800 dark:bg-blue-900/50 dark:text-blue-200 border-blue-200/50 dark:border-blue-700/50',
    'HTML/CSS': 'bg-orange-100/80 text-orange-800 dark:bg-orange-900/50 dark:text-orange-200 border-orange-200/50 dark:border-orange-700/50',
    'JavaFX': 'bg-red-100/80 text-red-800 dark:bg-red-900/50 dark:text-red-200 border-red-200/50 dark:border-red-700/50',

    // Mobile Development
    'Flutter': 'bg-blue-100/80 text-blue-800 dark:bg-blue-900/50 dark:text-blue-200 border-blue-200/50 dark:border-blue-700/50',
    'iOS': 'bg-gray-100/80 text-gray-800 dark:bg-gray-700/50 dark:text-gray-200 border-gray-200/50 dark:border-gray-600/50',
    'Android': 'bg-green-100/80 text-green-800 dark:bg-green-900/50 dark:text-green-200 border-green-200/50 dark:border-green-700/50',
    'React Native': 'bg-cyan-100/80 text-cyan-800 dark:bg-cyan-900/50 dark:text-cyan-200 border-cyan-200/50 dark:border-cyan-700/50',
    'SwiftUI': 'bg-blue-100/80 text-blue-800 dark:bg-blue-900/50 dark:text-blue-200 border-blue-200/50 dark:border-blue-700/50',
    'Mobile Design': 'bg-pink-100/80 text-pink-800 dark:bg-pink-900/50 dark:text-pink-200 border-pink-200/50 dark:border-pink-700/50',
    'mDL': 'bg-indigo-100/80 text-indigo-800 dark:bg-indigo-900/50 dark:text-indigo-200 border-indigo-200/50 dark:border-indigo-700/50',

    // Backend & Databases
    'Node.js': 'bg-green-100/80 text-green-800 dark:bg-green-900/50 dark:text-green-200 border-green-200/50 dark:border-green-700/50',
    'Laravel': 'bg-red-100/80 text-red-800 dark:bg-red-900/50 dark:text-red-200 border-red-200/50 dark:border-red-700/50',
    'PostgreSQL': 'bg-indigo-100/80 text-indigo-800 dark:bg-indigo-900/50 dark:text-indigo-200 border-indigo-200/50 dark:border-indigo-700/50',
    'MongoDB': 'bg-green-100/80 text-green-800 dark:bg-green-900/50 dark:text-green-200 border-green-200/50 dark:border-green-700/50',
    'MySQL': 'bg-blue-100/80 text-blue-800 dark:bg-blue-900/50 dark:text-blue-200 border-blue-200/50 dark:border-blue-700/50',
    'Redis': 'bg-red-100/80 text-red-800 dark:bg-red-900/50 dark:text-red-200 border-red-200/50 dark:border-red-700/50',
    'Oracle': 'bg-red-100/80 text-red-800 dark:bg-red-900/50 dark:text-red-200 border-red-200/50 dark:border-red-700/50',
    'SQL': 'bg-indigo-100/80 text-indigo-800 dark:bg-indigo-900/50 dark:text-indigo-200 border-indigo-200/50 dark:border-indigo-700/50',

    // Cloud & DevOps
    'AWS': 'bg-orange-100/80 text-orange-800 dark:bg-orange-900/50 dark:text-orange-200 border-orange-200/50 dark:border-orange-700/50',
    'Firebase': 'bg-yellow-100/80 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-200 border-yellow-200/50 dark:border-yellow-700/50',
    'Docker': 'bg-blue-100/80 text-blue-800 dark:bg-blue-900/50 dark:text-blue-200 border-blue-200/50 dark:border-blue-700/50',
    'GCP': 'bg-blue-100/80 text-blue-800 dark:bg-blue-900/50 dark:text-blue-200 border-blue-200/50 dark:border-blue-700/50',
    'Kubernetes': 'bg-blue-100/80 text-blue-800 dark:bg-blue-900/50 dark:text-blue-200 border-blue-200/50 dark:border-blue-700/50',
    'Linode': 'bg-green-100/80 text-green-800 dark:bg-green-900/50 dark:text-green-200 border-green-200/50 dark:border-green-700/50',
    'Supabase': 'bg-green-100/80 text-green-800 dark:bg-green-900/50 dark:text-green-200 border-green-200/50 dark:border-green-700/50',

    // Specialized Technologies
    'PKI': 'bg-red-100/80 text-red-800 dark:bg-red-900/50 dark:text-red-200 border-red-200/50 dark:border-red-700/50',
    'ISO 18013-5': 'bg-indigo-100/80 text-indigo-800 dark:bg-indigo-900/50 dark:text-indigo-200 border-indigo-200/50 dark:border-indigo-700/50',
    'Microservices': 'bg-teal-100/80 text-teal-800 dark:bg-teal-900/50 dark:text-teal-200 border-teal-200/50 dark:border-teal-700/50',
    'Arduino': 'bg-emerald-100/80 text-emerald-800 dark:bg-emerald-900/50 dark:text-emerald-200 border-emerald-200/50 dark:border-emerald-700/50',
    'Bluetooth': 'bg-blue-100/80 text-blue-800 dark:bg-blue-900/50 dark:text-blue-200 border-blue-200/50 dark:border-blue-700/50',
    'IoT': 'bg-orange-100/80 text-orange-800 dark:bg-orange-900/50 dark:text-orange-200 border-orange-200/50 dark:border-orange-700/50',
    'OpenCV': 'bg-green-100/80 text-green-800 dark:bg-green-900/50 dark:text-green-200 border-green-200/50 dark:border-green-700/50',

    // Methodologies & Tools
    'Agile': 'bg-pink-100/80 text-pink-800 dark:bg-pink-900/50 dark:text-pink-200 border-pink-200/50 dark:border-pink-700/50',
    'UML 2.0': 'bg-purple-100/80 text-purple-800 dark:bg-purple-900/50 dark:text-purple-200 border-purple-200/50 dark:border-purple-700/50',
    'BPMN 2.0': 'bg-indigo-100/80 text-indigo-800 dark:bg-indigo-900/50 dark:text-indigo-200 border-indigo-200/50 dark:border-indigo-700/50',
    'RAD': 'bg-purple-100/80 text-purple-800 dark:bg-purple-900/50 dark:text-purple-200 border-purple-200/50 dark:border-purple-700/50',
    'WinDev': 'bg-blue-100/80 text-blue-800 dark:bg-blue-900/50 dark:text-blue-200 border-blue-200/50 dark:border-blue-700/50',
    'Data Warehousing': 'bg-violet-100/80 text-violet-800 dark:bg-violet-900/50 dark:text-violet-200 border-violet-200/50 dark:border-violet-700/50',
    'Database Management': 'bg-violet-100/80 text-violet-800 dark:bg-violet-900/50 dark:text-violet-200 border-violet-200/50 dark:border-violet-700/50',
    'Database Design': 'bg-violet-100/80 text-violet-800 dark:bg-violet-900/50 dark:text-violet-200 border-violet-200/50 dark:border-violet-700/50',

    // Payment & Integration
    'Payment Integration': 'bg-green-100/80 text-green-800 dark:bg-green-900/50 dark:text-green-200 border-green-200/50 dark:border-green-700/50',
    'Payment System': 'bg-green-100/80 text-green-800 dark:bg-green-900/50 dark:text-green-200 border-green-200/50 dark:border-green-700/50',
    'Stripe': 'bg-purple-100/80 text-purple-800 dark:bg-purple-900/50 dark:text-purple-200 border-purple-200/50 dark:border-purple-700/50',

    // Design & Frameworks
    'Retro Design': 'bg-pink-100/80 text-pink-800 dark:bg-pink-900/50 dark:text-pink-200 border-pink-200/50 dark:border-pink-700/50',
    'Tailwind CSS': 'bg-teal-100/80 text-teal-800 dark:bg-teal-900/50 dark:text-teal-200 border-teal-200/50 dark:border-teal-700/50',
    'Framer Motion': 'bg-purple-100/80 text-purple-800 dark:bg-purple-900/50 dark:text-purple-200 border-purple-200/50 dark:border-purple-700/50',
    'CSS3': 'bg-blue-100/80 text-blue-800 dark:bg-blue-900/50 dark:text-blue-200 border-blue-200/50 dark:border-blue-700/50',

    // Computer Vision & AI
    'Computer Vision': 'bg-purple-100/80 text-purple-800 dark:bg-purple-900/50 dark:text-purple-200 border-purple-200/50 dark:border-purple-700/50',
    'OCR': 'bg-green-100/80 text-green-800 dark:bg-green-900/50 dark:text-green-200 border-green-200/50 dark:border-green-700/50',

    // Other
    'Git': 'bg-orange-100/80 text-orange-800 dark:bg-orange-900/50 dark:text-orange-200 border-orange-200/50 dark:border-orange-700/50',
    'Vite': 'bg-purple-100/80 text-purple-800 dark:bg-purple-900/50 dark:text-purple-200 border-purple-200/50 dark:border-purple-700/50',
    'Next.js': 'bg-gray-100/80 text-gray-800 dark:bg-gray-700/50 dark:text-gray-200 border-gray-200/50 dark:border-gray-600/50',
    'Express': 'bg-gray-100/80 text-gray-800 dark:bg-gray-700/50 dark:text-gray-200 border-gray-200/50 dark:border-gray-600/50',
    'Nest.js': 'bg-red-100/80 text-red-800 dark:bg-red-900/50 dark:text-red-200 border-red-200/50 dark:border-red-700/50',
  };

  return colors[tech as keyof typeof colors] || 'bg-gray-100/80 text-gray-800 dark:bg-gray-700/50 dark:text-gray-200 border-gray-200/50 dark:border-gray-600/50';
};
