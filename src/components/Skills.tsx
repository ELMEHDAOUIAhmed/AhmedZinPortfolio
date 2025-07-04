import React from 'react';
import { User } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';
import { parseMarkdownText } from '../utils/parseMarkdown';

const Skills: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const getSkillColor = (skill: string) => {
    const colors = {
      'JavaScript': 'bg-yellow-100/80 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-200 border-yellow-200/50 dark:border-yellow-700/50',
      'TypeScript': 'bg-blue-100/80 text-blue-800 dark:bg-blue-900/50 dark:text-blue-200 border-blue-200/50 dark:border-blue-700/50',
      'Python': 'bg-green-100/80 text-green-800 dark:bg-green-900/50 dark:text-green-200 border-green-200/50 dark:border-green-700/50',
      'Java': 'bg-red-100/80 text-red-800 dark:bg-red-900/50 dark:text-red-200 border-red-200/50 dark:border-red-700/50',
      'Kotlin': 'bg-purple-100/80 text-purple-800 dark:bg-purple-900/50 dark:text-purple-200 border-purple-200/50 dark:border-purple-700/50',
      'Go': 'bg-cyan-100/80 text-cyan-800 dark:bg-cyan-900/50 dark:text-cyan-200 border-cyan-200/50 dark:border-cyan-700/50',
      'PostgreSQL': 'bg-indigo-100/80 text-indigo-800 dark:bg-indigo-900/50 dark:text-indigo-200 border-indigo-200/50 dark:border-indigo-700/50',
      'MongoDB': 'bg-green-100/80 text-green-800 dark:bg-green-900/50 dark:text-green-200 border-green-200/50 dark:border-green-700/50',
      'Flutter': 'bg-blue-100/80 text-blue-800 dark:bg-blue-900/50 dark:text-blue-200 border-blue-200/50 dark:border-blue-700/50',
      'iOS': 'bg-gray-100/80 text-gray-800 dark:bg-gray-700/50 dark:text-gray-200 border-gray-200/50 dark:border-gray-600/50',
      'Android': 'bg-green-100/80 text-green-800 dark:bg-green-900/50 dark:text-green-200 border-green-200/50 dark:border-green-700/50',
      'React Native': 'bg-cyan-100/80 text-cyan-800 dark:bg-cyan-900/50 dark:text-cyan-200 border-cyan-200/50 dark:border-cyan-700/50',
      'Swift': 'bg-orange-100/80 text-orange-800 dark:bg-orange-900/50 dark:text-orange-200 border-orange-200/50 dark:border-orange-700/50',
      'Node.js': 'bg-green-100/80 text-green-800 dark:bg-green-900/50 dark:text-green-200 border-green-200/50 dark:border-green-700/50',
      'SwiftUI': 'bg-blue-100/80 text-blue-800 dark:bg-blue-900/50 dark:text-blue-200 border-blue-200/50 dark:border-blue-700/50',
      'Spring Boot': 'bg-green-100/80 text-green-800 dark:bg-green-900/50 dark:text-green-200 border-green-200/50 dark:border-green-700/50',
      'Ktor': 'bg-purple-100/80 text-purple-800 dark:bg-purple-900/50 dark:text-purple-200 border-purple-200/50 dark:border-purple-700/50',
      'Gin': 'bg-cyan-100/80 text-cyan-800 dark:bg-cyan-900/50 dark:text-cyan-200 border-cyan-200/50 dark:border-cyan-700/50',
      'Fiber': 'bg-blue-100/80 text-blue-800 dark:bg-blue-900/50 dark:text-blue-200 border-blue-200/50 dark:border-blue-700/50',
      'Genkit': 'bg-red-100/80 text-red-800 dark:bg-red-900/50 dark:text-red-200 border-red-200/50 dark:border-red-700/50',
      'Git': 'bg-orange-100/80 text-orange-800 dark:bg-orange-900/50 dark:text-orange-200 border-orange-200/50 dark:border-orange-700/50',
      'Docker': 'bg-blue-100/80 text-blue-800 dark:bg-blue-900/50 dark:text-blue-200 border-blue-200/50 dark:border-blue-700/50',
      'AWS': 'bg-orange-100/80 text-orange-800 dark:bg-orange-900/50 dark:text-orange-200 border-orange-200/50 dark:border-orange-700/50',
      'Firebase': 'bg-yellow-100/80 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-200 border-yellow-200/50 dark:border-yellow-700/50',
      'GCP': 'bg-blue-100/80 text-blue-800 dark:bg-blue-900/50 dark:text-blue-200 border-blue-200/50 dark:border-blue-700/50',
      'Linode': 'bg-green-100/80 text-green-800 dark:bg-green-900/50 dark:text-green-200 border-green-200/50 dark:border-green-700/50',
      'Supabase': 'bg-green-100/80 text-green-800 dark:bg-green-900/50 dark:text-green-200 border-green-200/50 dark:border-green-700/50',
      'Kubernetes': 'bg-blue-100/80 text-blue-800 dark:bg-blue-900/50 dark:text-blue-200 border-blue-200/50 dark:border-blue-700/50',
      'Dart': 'bg-cyan-100/80 text-cyan-800 dark:bg-cyan-900/50 dark:text-cyan-200 border-cyan-200/50 dark:border-cyan-700/50',
      'GoLang': 'bg-cyan-100/80 text-cyan-800 dark:bg-cyan-900/50 dark:text-cyan-200 border-cyan-200/50 dark:border-cyan-700/50',
      'PHP': 'bg-purple-100/80 text-purple-800 dark:bg-purple-900/50 dark:text-purple-200 border-purple-200/50 dark:border-purple-700/50',
      'C': 'bg-gray-100/80 text-gray-800 dark:bg-gray-700/50 dark:text-gray-200 border-gray-200/50 dark:border-gray-600/50',
      'HTML/CSS': 'bg-orange-100/80 text-orange-800 dark:bg-orange-900/50 dark:text-orange-200 border-orange-200/50 dark:border-orange-700/50',
      'JavaFX': 'bg-red-100/80 text-red-800 dark:bg-red-900/50 dark:text-red-200 border-red-200/50 dark:border-red-700/50',
      'Laravel': 'bg-red-100/80 text-red-800 dark:bg-red-900/50 dark:text-red-200 border-red-200/50 dark:border-red-700/50',
      'Redis': 'bg-red-100/80 text-red-800 dark:bg-red-900/50 dark:text-red-200 border-red-200/50 dark:border-red-700/50',
      'MySQL': 'bg-blue-100/80 text-blue-800 dark:bg-blue-900/50 dark:text-blue-200 border-blue-200/50 dark:border-blue-700/50',
      'Oracle': 'bg-red-100/80 text-red-800 dark:bg-red-900/50 dark:text-red-200 border-red-200/50 dark:border-red-700/50',
      'UML 2.0': 'bg-purple-100/80 text-purple-800 dark:bg-purple-900/50 dark:text-purple-200 border-purple-200/50 dark:border-purple-700/50',
      'BPMN 2.0': 'bg-indigo-100/80 text-indigo-800 dark:bg-indigo-900/50 dark:text-indigo-200 border-indigo-200/50 dark:border-indigo-700/50',
      'Arduino': 'bg-emerald-100/80 text-emerald-800 dark:bg-emerald-900/50 dark:text-emerald-200 border-emerald-200/50 dark:border-emerald-700/50',
      'Agile': 'bg-pink-100/80 text-pink-800 dark:bg-pink-900/50 dark:text-pink-200 border-pink-200/50 dark:border-pink-700/50',
      'SQL': 'bg-indigo-100/80 text-indigo-800 dark:bg-indigo-900/50 dark:text-indigo-200 border-indigo-200/50 dark:border-indigo-700/50',
      'Data Warehousing': 'bg-violet-100/80 text-violet-800 dark:bg-violet-900/50 dark:text-violet-200 border-violet-200/50 dark:border-violet-700/50',
      'RAD': 'bg-purple-100/80 text-purple-800 dark:bg-purple-900/50 dark:text-purple-200 border-purple-200/50 dark:border-purple-700/50',
      'React': 'bg-cyan-100/80 text-cyan-800 dark:bg-cyan-900/50 dark:text-cyan-200 border-cyan-200/50 dark:border-cyan-700/50',
    };
    return colors[skill as keyof typeof colors] || 'bg-gray-100/80 text-gray-800 dark:bg-gray-700/50 dark:text-gray-200 border-gray-200/50 dark:border-gray-600/50';
  };

  return (
    <section id="skills" className="py-8 sm:py-12 lg:py-16 xl:py-20 bg-gradient-to-br from-white to-purple-50/50 dark:from-gray-900 dark:to-gray-800/50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-16 sm:top-32 right-16 sm:right-32 w-48 sm:w-80 h-48 sm:h-80 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-16 sm:bottom-32 left-16 sm:left-32 w-48 sm:w-80 h-48 sm:h-80 bg-gradient-to-tr from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Main content layout - About Me on left, Skills on right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16">
          
          {/* Left side - About Me section */}
          <div className="lg:order-1 flex">
            <div className="bg-white/30 dark:bg-gray-800/30 backdrop-blur-xl rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-white/20 dark:border-gray-700/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 h-full flex flex-col justify-center">
              
              {/* Header with icon */}
              <div className="flex items-center mb-6">
                <User className="w-6 h-6 text-gray-600 dark:text-gray-400 mr-3" />
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                  {t.skills.aboutMe.title}
                </h3>
              </div>
              
              {/* About text */}
              <div className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
                {parseMarkdownText(t.skills.aboutMe.text)}
              </div>
            </div>
          </div>

          {/* Right side - Skills section */}
          <div className="lg:order-2">
            {/* Skills title */}
            <div className="text-center mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white">
                {t.skills.title}
              </h2>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {Object.entries(t.skills.categories).map(([key, category]) => (
                <div key={key} className="bg-white/30 dark:bg-gray-800/30 backdrop-blur-xl rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 border border-white/20 dark:border-gray-700/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                  <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3 lg:mb-4">
                    {category.title}
                  </h3>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className={`px-2 py-0.5 sm:px-2.5 sm:py-1 lg:px-3 lg:py-1 rounded-full text-xs font-medium backdrop-blur-sm border hover:scale-105 transition-all duration-200 ${getSkillColor(skill)}`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;