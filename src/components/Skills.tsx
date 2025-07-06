import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';
import { parseMarkdownText } from '../utils/parseMarkdown';
import { getTechColor } from '../utils/techColors';

const Skills: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

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
                        className={`px-2 py-0.5 sm:px-2.5 sm:py-1 lg:px-3 lg:py-1 rounded-full text-xs font-medium backdrop-blur-sm border hover:scale-105 transition-all duration-200 ${getTechColor(skill)}`}
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