import React, { useState } from 'react';
import { Github, ExternalLink, Star, Download, GitFork, TrendingUp } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';
import { getTechColor } from '../utils/techColors';

const Contributions: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const [expanded, setExpanded] = useState<{[id: string]: boolean}>({});

  const toggleExpand = (id: string) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section
      id="contributions"
      className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-blue-50/80 to-blue-100/60 dark:from-gray-900/90 dark:to-blue-900/20 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t.contributions.title}
          </h2>
        </div>
        <div className="space-y-8">
          {t.contributions.projects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-white/15 dark:bg-gray-900/15 backdrop-blur-2xl rounded-2xl shadow-2xl border border-white/20 dark:border-gray-700/20 overflow-hidden hover:shadow-3xl transition-all duration-500 hover:scale-[1.02]"
            >
              <div className="relative p-6 sm:p-8 z-10">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4 gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {project.name}
                      </h3>
                      <span className="px-3 py-1 bg-blue-100/80 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 rounded-full text-xs font-medium border border-blue-200/50 dark:border-blue-700/50">
                        v{project.pubVersion}
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base mb-2 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex items-center gap-2 text-sm text-green-600 dark:text-green-400 font-medium mb-2">
                      <TrendingUp className="w-4 h-4" />
                      <span>{project.impact}</span>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition-all duration-300 flex items-center gap-2 text-sm font-medium shadow-lg hover:shadow-xl hover:scale-105 overflow-hidden group/btn"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-blue-600/20 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                      <ExternalLink className="w-4 h-4 relative z-10" />
                      <span className="relative z-10">Pub.dev</span>
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative p-2 bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm rounded-xl text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-all duration-200 hover:scale-110 border border-white/20 dark:border-gray-700/20 overflow-hidden group/github"
                    >
                      <Github className="w-5 h-5 relative z-10" />
                    </a>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4 mb-2">
                  <div className="relative bg-white/30 dark:bg-gray-800/10 backdrop-blur-sm rounded-xl p-3 text-center border border-gray-200/40 dark:border-gray-700/20 overflow-hidden group/stat">
                    <div className="relative z-10">
                      <div className="flex items-center justify-center gap-1 text-blue-600 dark:text-blue-400 mb-1">
                        <Download className="w-4 h-4" />
                        <span className="text-lg font-bold">{project.stats.downloads}</span>
                      </div>
                      <p className="text-xs text-gray-600 dark:text-gray-400">Downloads</p>
                    </div>
                  </div>
                  <div className="relative bg-white/30 dark:bg-gray-800/10 backdrop-blur-sm rounded-xl p-3 text-center border border-gray-200/40 dark:border-gray-700/20 overflow-hidden group/stat">
                    <div className="relative z-10">
                      <div className="flex items-center justify-center gap-1 text-yellow-600 dark:text-yellow-400 mb-1">
                        <Star className="w-4 h-4" />
                        <span className="text-lg font-bold">{project.stats.stars}</span>
                      </div>
                      <p className="text-xs text-gray-600 dark:text-gray-400">Stars</p>
                    </div>
                  </div>
                  <div className="relative bg-white/30 dark:bg-gray-800/10 backdrop-blur-sm rounded-xl p-3 text-center border border-gray-200/40 dark:border-gray-700/20 overflow-hidden group/stat">
                    <div className="relative z-10">
                      <div className="flex items-center justify-center gap-1 text-green-600 dark:text-green-400 mb-1">
                        <GitFork className="w-4 h-4" />
                        <span className="text-lg font-bold">{project.stats.forks}</span>
                      </div>
                      <p className="text-xs text-gray-600 dark:text-gray-400">Forks</p>
                    </div>
                  </div>
                </div>
                <button
                  className="mt-2 flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium focus:outline-none"
                  onClick={() => toggleExpand(project.id)}
                  aria-expanded={!!expanded[project.id]}
                  style={{ textDecoration: 'none' }}
                >
                  <span>{expanded[project.id] ? t.contributions.hideDetails : t.contributions.viewDetails}</span>
                  <span className={`transition-transform duration-200 ${expanded[project.id] ? 'rotate-90' : ''}`}>▶</span>
                </button>
                {expanded[project.id] && (
                  <div className="mt-4">
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Technologies</h4>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className={`px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm border transition-all duration-200 hover:scale-105 ${getTechColor(tech)}`}>{tech}</span>
                      ))}
                    </div>
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Key Enhancements</h4>
                    <ul className="space-y-2">
                      {project.enhancements.map((enhancement, index) => (
                        <li key={index} className="text-sm text-gray-600 dark:text-gray-300 flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></span>
                          <span>{enhancement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contributions;