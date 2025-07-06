import React from 'react';
import { Github } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';
import { getTechColor } from '../utils/techColors';

const Projects: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="projects" className="py-8 sm:py-12 lg:py-16 xl:py-20 bg-gradient-to-br from-gray-50 to-indigo-50/50 dark:from-gray-800 dark:to-gray-900/50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 sm:top-40 left-20 sm:left-40 w-36 sm:w-72 h-36 sm:h-72 bg-gradient-to-br from-indigo-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 sm:bottom-40 right-20 sm:right-40 w-36 sm:w-72 h-36 sm:h-72 bg-gradient-to-tr from-purple-400/10 to-pink-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-4">
            {t.projects.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {t.projects.projects.map((project) => (
            <div
              key={project.id}
              className="bg-white/30 dark:bg-gray-900/30 backdrop-blur-xl rounded-xl sm:rounded-2xl shadow-xl border border-white/20 dark:border-gray-700/20 overflow-hidden hover:shadow-2xl transition-all duration-300 group hover:scale-105"
            >
              <div className="p-3 sm:p-4 lg:p-6">
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.name}
                  </h3>
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1 sm:p-1.5 lg:p-2 bg-white/20 dark:bg-gray-800/20 backdrop-blur-sm rounded-lg text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-all duration-200 hover:scale-110 border border-white/20 dark:border-gray-700/20 flex-shrink-0"
                    >
                      <Github className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5" />
                    </a>
                  )}
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`px-2 py-0.5 sm:px-2.5 sm:py-1 lg:px-3 lg:py-1 rounded-full text-xs font-medium backdrop-blur-sm border transition-all duration-200 hover:scale-105 ${getTechColor(tech)}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;