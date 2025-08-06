import React from 'react';
import { Github, Code, Database, Globe, Smartphone } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';
import { parseMarkdownText } from '../utils/parseMarkdown';
import { getTechColor } from '../utils/techColors';

const Projects: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const getIconForProject = (index: number) => {
    const icons = [
      <Smartphone className="w-8 h-8" />, // IoT Mobile app
      <Database className="w-8 h-8" />, // Medical/Database system
      <Globe className="w-8 h-8" />, // Web application
      <Code className="w-8 h-8" />, // Software development
    ];
    return icons[index] || <Code className="w-8 h-8" />;
  };

  const getColorForProject = (index: number) => {
    const colors = [
      'rgb(76, 175, 80)', // Green for mobile/IoT
      'rgb(30, 64, 175)', // Navy blue for medical/database
      'rgb(255, 152, 0)', // Orange for web
      'rgb(244, 67, 54)', // Red for software development
    ];
    return colors[index] || 'rgb(96, 125, 139)';
  };

  return (
    <section
      id="projects"
      className="py-8 sm:py-12 lg:py-16 xl:py-20 bg-gradient-to-br from-gray-50 to-blue-50/50 dark:from-gray-800 dark:to-blue-900/20 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 sm:top-20 right-10 sm:right-20 w-32 sm:w-64 h-32 sm:h-64 bg-gradient-to-br from-blue-400/10 to-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 sm:bottom-20 left-10 sm:left-20 w-32 sm:w-64 h-32 sm:h-64 bg-gradient-to-tr from-blue-500/10 to-blue-700/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-4">
            {t.projects.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {t.projects.projects.map((project, index) => (
            <div
              key={project.id}
              className="bg-white/30 dark:bg-gray-900/30 backdrop-blur-xl rounded-xl sm:rounded-2xl shadow-xl border border-white/20 dark:border-gray-700/20 overflow-hidden hover:shadow-2xl transition-all duration-300 group hover:scale-105"
            >
              <div className="p-4 sm:p-5 lg:p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3 flex-1">
                    <div 
                      className="p-2 sm:p-3 rounded-xl flex-shrink-0 shadow-lg"
                      style={{ backgroundColor: getColorForProject(index) }}
                    >
                      {getIconForProject(index)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-1">
                        {project.name}
                      </h3>
                    </div>
                  </div>
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white/20 dark:bg-gray-800/20 backdrop-blur-sm rounded-lg text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-all duration-200 hover:scale-110 border border-white/20 dark:border-gray-700/20 flex-shrink-0"
                    >
                      <Github className="w-4 h-4 lg:w-5 lg:h-5" />
                    </a>
                  )}
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm sm:text-base leading-relaxed">
                  {parseMarkdownText(project.description)}
                </p>
                
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`px-2 py-1 sm:px-2.5 sm:py-1 lg:px-3 lg:py-1 rounded-full text-xs font-medium backdrop-blur-sm border transition-all duration-200 hover:scale-105 ${getTechColor(tech)}`}
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