import React from 'react';
import { Github, ExternalLink, Star, Download, GitFork, TrendingUp } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { translations } from '../data/translations';

const Contributions: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const getTechColor = (tech: string) => {
    const colors = {
      Flutter:
        'bg-blue-100/80 text-blue-800 dark:bg-blue-900/50 dark:text-blue-200 border-blue-200/50 dark:border-blue-700/50',
      Dart:
        'bg-cyan-100/80 text-cyan-800 dark:bg-cyan-900/50 dark:text-cyan-200 border-cyan-200/50 dark:border-cyan-700/50',
      'Computer Vision':
        'bg-purple-100/80 text-purple-800 dark:bg-purple-900/50 dark:text-purple-200 border-purple-200/50 dark:border-purple-700/50',
      OCR:
        'bg-green-100/80 text-green-800 dark:bg-green-900/50 dark:text-green-200 border-green-200/50 dark:border-green-700/50',
      Swift:
        'bg-orange-100/80 text-orange-800 dark:bg-orange-900/50 dark:text-orange-200 border-orange-200/50 dark:border-orange-700/50',
      Kotlin:
        'bg-purple-100/80 text-purple-800 dark:bg-purple-900/50 dark:text-purple-200 border-purple-200/50 dark:border-purple-700/50',
      OpenCV:
        'bg-green-100/80 text-green-800 dark:bg-green-900/50 dark:text-green-200 border-green-200/50 dark:border-green-700/50',
    };
    return (
      colors[tech as keyof typeof colors] ||
      'bg-gray-100/80 text-gray-800 dark:bg-gray-700/50 dark:text-gray-200 border-gray-200/50 dark:border-gray-600/50'
    );
  };

  return (
    <section
      id="contributions"
      className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-purple-50/80 to-pink-50/80 dark:from-gray-900/90 dark:to-gray-800/90 relative overflow-hidden"
    >
      {/* Static background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-32 left-32 w-80 h-80 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 right-32 w-80 h-80 bg-gradient-to-tr from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t.contributions.title}
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t.contributions.subtitle}
          </p>
        </div>

        <div className="space-y-8">
          {t.contributions.projects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-white/15 dark:bg-gray-900/15 backdrop-blur-2xl rounded-2xl shadow-2xl border border-white/20 dark:border-gray-700/20 overflow-hidden hover:shadow-3xl transition-all duration-500 hover:scale-[1.02]"
            >
              {/* Liquid glass background animation */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400/5 via-pink-400/5 to-blue-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-liquid-glass"></div>
              
              <div className="relative p-6 sm:p-8 z-10">
                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6 gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                        {project.name}
                      </h3>
                      <span className="px-3 py-1 bg-purple-100/80 dark:bg-purple-900/50 text-purple-800 dark:text-purple-200 rounded-full text-xs font-medium border border-purple-200/50 dark:border-purple-700/50">
                        v{project.pubVersion}
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex items-center gap-2 text-sm text-green-600 dark:text-green-400 font-medium">
                      <TrendingUp className="w-4 h-4" />
                      <span>{project.impact}</span>
                    </div>
                  </div>

                  {/* Action buttons */}
                  <div className="flex gap-3">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-xl transition-all duration-300 flex items-center gap-2 text-sm font-medium shadow-lg hover:shadow-xl hover:scale-105 overflow-hidden group/btn"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-pink-400/20 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300 animate-liquid-glass"></div>
                      <ExternalLink className="w-4 h-4 relative z-10" />
                      <span className="relative z-10">Pub.dev</span>
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative p-2 bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm rounded-xl text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-all duration-200 hover:scale-110 border border-white/20 dark:border-gray-700/20 overflow-hidden group/github"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 to-purple-400/10 opacity-0 group-hover/github:opacity-100 transition-opacity duration-300 animate-liquid-glass"></div>
                      <Github className="w-5 h-5 relative z-10" />
                    </a>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="relative bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm rounded-xl p-3 text-center border border-white/20 dark:border-gray-700/20 overflow-hidden group/stat">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400/5 to-purple-400/5 opacity-0 group-hover/stat:opacity-100 transition-opacity duration-300 animate-liquid-glass"></div>
                    <div className="relative z-10">
                      <div className="flex items-center justify-center gap-1 text-blue-600 dark:text-blue-400 mb-1">
                        <Download className="w-4 h-4" />
                        <span className="text-lg font-bold">{project.stats.downloads}</span>
                      </div>
                      <p className="text-xs text-gray-600 dark:text-gray-400">Downloads</p>
                    </div>
                  </div>
                  <div className="relative bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm rounded-xl p-3 text-center border border-white/20 dark:border-gray-700/20 overflow-hidden group/stat">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-400/5 to-pink-400/5 opacity-0 group-hover/stat:opacity-100 transition-opacity duration-300 animate-liquid-glass"></div>
                    <div className="relative z-10">
                      <div className="flex items-center justify-center gap-1 text-yellow-600 dark:text-yellow-400 mb-1">
                        <Star className="w-4 h-4" />
                        <span className="text-lg font-bold">{project.stats.stars}</span>
                      </div>
                      <p className="text-xs text-gray-600 dark:text-gray-400">Stars</p>
                    </div>
                  </div>
                  <div className="relative bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm rounded-xl p-3 text-center border border-white/20 dark:border-gray-700/20 overflow-hidden group/stat">
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-400/5 to-blue-400/5 opacity-0 group-hover/stat:opacity-100 transition-opacity duration-300 animate-liquid-glass"></div>
                    <div className="relative z-10">
                      <div className="flex items-center justify-center gap-1 text-green-600 dark:text-green-400 mb-1">
                        <GitFork className="w-4 h-4" />
                        <span className="text-lg font-bold">{project.stats.forks}</span>
                      </div>
                      <p className="text-xs text-gray-600 dark:text-gray-400">Forks</p>
                    </div>
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className={`px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm border transition-all duration-200 hover:scale-105 ${getTechColor(
                          tech
                        )}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Enhancements */}
                <div className="relative bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 dark:border-gray-700/20 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-400/5 to-blue-400/5 animate-liquid-glass"></div>
                  <div className="relative z-10">
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                      <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                      ✨ Key Enhancements
                    </h4>
                    <ul className="space-y-2">
                      {project.enhancements.map((enhancement, index) => (
                        <li key={index} className="text-sm text-gray-600 dark:text-gray-300 flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0"></span>
                          <span>{enhancement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Impact note */}
                <div className="mt-4 p-3 bg-green-100/80 dark:bg-green-900/50 backdrop-blur-sm border border-green-200/50 dark:border-green-700/50 rounded-xl">
                  <p className="text-sm text-green-800 dark:text-green-200 font-medium">
                    💡 This project has been used by many, and I'm proud to have made an impact, especially after the original creator abandoned it and it became outdated.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contributions;