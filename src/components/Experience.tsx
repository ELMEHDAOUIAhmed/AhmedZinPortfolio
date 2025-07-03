import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';

const Experience: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const getTechColor = (tech: string) => {
    const colors = {
      TypeScript:
        'bg-blue-100/80 text-blue-800 dark:bg-blue-900/50 dark:text-blue-200 border-blue-200/50 dark:border-blue-700/50',
      JavaScript:
        'bg-yellow-100/80 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-200 border-yellow-200/50 dark:border-yellow-700/50',
      Python:
        'bg-green-100/80 text-green-800 dark:bg-green-900/50 dark:text-green-200 border-green-200/50 dark:border-green-700/50',
      Flutter:
        'bg-cyan-100/80 text-cyan-800 dark:bg-cyan-900/50 dark:text-cyan-200 border-cyan-200/50 dark:border-cyan-700/50',
      React:
        'bg-blue-100/80 text-blue-800 dark:bg-blue-900/50 dark:text-blue-200 border-blue-200/50 dark:border-blue-700/50',
      'Node.js':
        'bg-green-100/80 text-green-800 dark:bg-green-900/50 dark:text-green-200 border-green-200/50 dark:border-green-700/50',
      PostgreSQL:
        'bg-indigo-100/80 text-indigo-800 dark:bg-indigo-900/50 dark:text-indigo-200 border-indigo-200/50 dark:border-indigo-700/50',
      MongoDB:
        'bg-green-100/80 text-green-800 dark:bg-green-900/50 dark:text-green-200 border-green-200/50 dark:border-green-700/50',
      AWS: 'bg-orange-100/80 text-orange-800 dark:bg-orange-900/50 dark:text-orange-200 border-orange-200/50 dark:border-orange-700/50',
      Docker:
        'bg-blue-100/80 text-blue-800 dark:bg-blue-900/50 dark:text-blue-200 border-blue-200/50 dark:border-blue-700/50',
      Firebase:
        'bg-red-100/80 text-red-800 dark:bg-red-900/50 dark:text-red-200 border-red-200/50 dark:border-red-700/50',
      iOS: 'bg-gray-100/80 text-gray-800 dark:bg-gray-700/50 dark:text-gray-200 border-gray-200/50 dark:border-gray-600/50',
      Android:
        'bg-green-100/80 text-green-800 dark:bg-green-900/50 dark:text-green-200 border-green-200/50 dark:border-green-700/50',
      Swift:
        'bg-orange-100/80 text-orange-800 dark:bg-orange-900/50 dark:text-orange-200 border-orange-200/50 dark:border-orange-700/50',
      Kotlin:
        'bg-purple-100/80 text-purple-800 dark:bg-purple-900/50 dark:text-purple-200 border-purple-200/50 dark:border-purple-700/50',
      OpenCV:
        'bg-green-100/80 text-green-800 dark:bg-green-900/50 dark:text-green-200 border-green-200/50 dark:border-green-700/50',
      MQTT: 'bg-purple-100/80 text-purple-800 dark:bg-purple-900/50 dark:text-purple-200 border-purple-200/50 dark:border-purple-700/50',
      'Raspberry Pi':
        'bg-red-100/80 text-red-800 dark:bg-red-900/50 dark:text-red-200 border-red-200/50 dark:border-red-700/50',
      // New colors for missing technologies
      GoLang:
        'bg-cyan-100/80 text-cyan-800 dark:bg-cyan-900/50 dark:text-cyan-200 border-cyan-200/50 dark:border-cyan-700/50',
      WinDev:
        'bg-blue-100/80 text-blue-800 dark:bg-blue-900/50 dark:text-blue-200 border-blue-200/50 dark:border-blue-700/50',
      RAD: 'bg-purple-100/80 text-purple-800 dark:bg-purple-900/50 dark:text-purple-200 border-purple-200/50 dark:border-purple-700/50',
      PKI: 'bg-red-100/80 text-red-800 dark:bg-red-900/50 dark:text-red-200 border-red-200/50 dark:border-red-700/50',
      'ISO 18013-5':
        'bg-indigo-100/80 text-indigo-800 dark:bg-indigo-900/50 dark:text-indigo-200 border-indigo-200/50 dark:border-indigo-700/50',
      Microservices:
        'bg-teal-100/80 text-teal-800 dark:bg-teal-900/50 dark:text-teal-200 border-teal-200/50 dark:border-teal-700/50',
      Arduino:
        'bg-emerald-100/80 text-emerald-800 dark:bg-emerald-900/50 dark:text-emerald-200 border-emerald-200/50 dark:border-emerald-700/50',
      Bluetooth:
        'bg-blue-100/80 text-blue-800 dark:bg-blue-900/50 dark:text-blue-200 border-blue-200/50 dark:border-blue-700/50',
      'Payment Integration':
        'bg-green-100/80 text-green-800 dark:bg-green-900/50 dark:text-green-200 border-green-200/50 dark:border-green-700/50',
      IoT: 'bg-orange-100/80 text-orange-800 dark:bg-orange-900/50 dark:text-orange-200 border-orange-200/50 dark:border-orange-700/50',
      Agile:
        'bg-pink-100/80 text-pink-800 dark:bg-pink-900/50 dark:text-pink-200 border-pink-200/50 dark:border-pink-700/50',
      'Database Management':
        'bg-violet-100/80 text-violet-800 dark:bg-violet-900/50 dark:text-violet-200 border-violet-200/50 dark:border-violet-700/50',
      HTML: 'bg-orange-100/80 text-orange-800 dark:bg-orange-900/50 dark:text-orange-200 border-orange-200/50 dark:border-orange-700/50',
      CSS: 'bg-blue-100/80 text-blue-800 dark:bg-blue-900/50 dark:text-blue-200 border-blue-200/50 dark:border-blue-700/50',
      PHP: 'bg-purple-100/80 text-purple-800 dark:bg-purple-900/50 dark:text-purple-200 border-purple-200/50 dark:border-purple-700/50',
      MySQL:
        'bg-blue-100/80 text-blue-800 dark:bg-blue-900/50 dark:text-blue-200 border-blue-200/50 dark:border-blue-700/50',
      Java: 'bg-red-100/80 text-red-800 dark:bg-red-900/50 dark:text-red-200 border-red-200/50 dark:border-red-700/50',
      JavaFX:
        'bg-red-100/80 text-red-800 dark:bg-red-900/50 dark:text-red-200 border-red-200/50 dark:border-red-700/50',
      SQL: 'bg-indigo-100/80 text-indigo-800 dark:bg-indigo-900/50 dark:text-indigo-200 border-indigo-200/50 dark:border-indigo-700/50',
      Laravel:
        'bg-red-100/80 text-red-800 dark:bg-red-900/50 dark:text-red-200 border-red-200/50 dark:border-red-700/50',
      Dart: 'bg-cyan-100/80 text-cyan-800 dark:bg-cyan-900/50 dark:text-cyan-200 border-cyan-200/50 dark:border-cyan-700/50',
      C: 'bg-gray-100/80 text-gray-800 dark:bg-gray-700/50 dark:text-gray-200 border-gray-200/50 dark:border-gray-600/50',
      Redis:
        'bg-red-100/80 text-red-800 dark:bg-red-900/50 dark:text-red-200 border-red-200/50 dark:border-red-700/50',
      Oracle:
        'bg-red-100/80 text-red-800 dark:bg-red-900/50 dark:text-red-200 border-red-200/50 dark:border-red-700/50',
      'UML 2.0':
        'bg-purple-100/80 text-purple-800 dark:bg-purple-900/50 dark:text-purple-200 border-purple-200/50 dark:border-purple-700/50',
      'BPMN 2.0':
        'bg-indigo-100/80 text-indigo-800 dark:bg-indigo-900/50 dark:text-indigo-200 border-indigo-200/50 dark:border-indigo-700/50',
    };
    return (
      colors[tech as keyof typeof colors] ||
      'bg-gray-100/80 text-gray-800 dark:bg-gray-700/50 dark:text-gray-200 border-gray-200/50 dark:border-gray-600/50'
    );
  };

  return (
    <section
      id="experience"
      className="py-8 sm:py-12 lg:py-16 xl:py-20 bg-gradient-to-br from-white to-blue-50/50 dark:from-black dark:to-gray-900/50 relative overflow-hidden"
    >
      {/* Static background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 sm:top-20 right-10 sm:right-20 w-32 sm:w-64 h-32 sm:h-64 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 sm:bottom-20 left-10 sm:left-20 w-32 sm:w-64 h-32 sm:h-64 bg-gradient-to-tr from-purple-400/10 to-pink-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-4">
            {t.experience.title}
          </h2>
        </div>

        <div className="relative">
          {/* Static timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-indigo-500 backdrop-blur-sm"></div>

          <div className="space-y-6 sm:space-y-8 lg:space-y-12">
            {t.experience.experiences.map((exp, index) => (
              <div
                key={exp.id}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col md:flex-row group/timeline`}
              >
                {/* Interactive timeline dot with hover effects */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 z-20">
                  <div className="relative">
                    {/* Main dot */}
                    <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-white dark:border-black shadow-lg backdrop-blur-sm transition-all duration-300 group-hover/timeline:scale-175 group-hover/timeline:shadow-xl group-hover/timeline:shadow-purple-500/30"></div>
                    
                    {/* Pulsing ring on hover */}
                    <div className="absolute inset-0 w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-0 group-hover/timeline:opacity-30 group-hover/timeline:scale-225 transition-all duration-500 animate-ping"></div>
                    
                    {/* Outer glow ring */}
                    <div className="absolute inset-0 w-6 h-6 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-0 group-hover/timeline:opacity-20 group-hover/timeline:scale-350 transition-all duration-700 blur-sm"></div>
                  </div>
                </div>

                <div
                  className={`w-full md:w-1/2 ${
                    index % 2 === 0 ? 'md:pr-6 lg:pr-8' : 'md:pl-6 lg:pl-8'
                  } ml-12 md:ml-0`}
                >
                  <div className="relative bg-white/30 dark:bg-black/30 backdrop-blur-xl p-3 sm:p-4 lg:p-6 rounded-xl sm:rounded-2xl shadow-xl border border-white/20 dark:border-gray-800/30 hover:shadow-2xl transition-all duration-300 overflow-hidden group">
                    {/* Enhanced liquid glass background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-400/5 via-purple-400/5 to-pink-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-liquid-glass"></div>
                    
                    <div className="relative z-10">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2 sm:mb-3 lg:mb-4 gap-2">
                        <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-gray-900 dark:text-white flex-1">
                          {exp.title}
                        </h3>
                        <span className="text-xs sm:text-sm text-blue-600 dark:text-blue-400 font-medium bg-blue-100/50 dark:bg-blue-900/30 px-2 sm:px-3 py-1 rounded-full backdrop-blur-sm self-start whitespace-nowrap border border-blue-200/50 dark:border-blue-700/50">
                          {exp.timeline}
                        </span>
                      </div>
                      <p className="text-blue-600 dark:text-blue-400 font-medium mb-2 sm:mb-3 text-sm sm:text-base">
                        {exp.company}
                      </p>
                      <p className="text-gray-600 dark:text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base leading-relaxed">
                        {exp.description}
                      </p>
                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className={`px-2 py-0.5 sm:px-2.5 sm:py-1 lg:px-3 lg:py-1 rounded-full text-xs font-medium backdrop-blur-sm border transition-all duration-200 hover:scale-105 ${getTechColor(
                              tech
                            )}`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;