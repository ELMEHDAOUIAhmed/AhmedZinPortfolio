import React from 'react';
import { ExternalLink, Eye } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';
import { getTechColor } from '../utils/techColors';

const Showcase: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section
      id="showcase"
      className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-blue-50/80 to-blue-100/60 dark:from-gray-800/90 dark:to-blue-900/20 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t.showcase.title}
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t.showcase.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {t.showcase.portfolios.map((portfolio) => (
            <div
              key={portfolio.id}
              className="group relative bg-white/15 dark:bg-gray-900/15 backdrop-blur-2xl rounded-2xl shadow-2xl border border-white/20 dark:border-gray-700/20 overflow-hidden hover:shadow-3xl transition-all duration-500 hover:scale-105"
            >
              {/* Liquid glass background animation */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/5 via-blue-500/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Portfolio image */}
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <img
                  src={portfolio.image}
                  alt={portfolio.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Overlay buttons */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={portfolio.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all duration-200 border border-white/30 overflow-hidden group/btn"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-blue-600/20 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                    <ExternalLink className="w-5 h-5 relative z-10" />
                  </a>
                </div>

                {/* Category badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium text-white border border-white/30">
                    {portfolio.category}
                  </span>
                </div>
              </div>

              <div className="relative p-4 sm:p-6 z-10">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {portfolio.name}
                  </h3>
                  <a
                    href={portfolio.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative p-2 bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm rounded-lg text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-all duration-200 hover:scale-110 border border-white/20 dark:border-gray-700/20 overflow-hidden group/link"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 to-blue-600/10 opacity-0 group-hover/link:opacity-100 transition-opacity duration-300"></div>
                    <Eye className="w-4 h-4 relative z-10" />
                  </a>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm sm:text-base leading-relaxed">
                  {portfolio.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {portfolio.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`px-2 sm:px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm border transition-all duration-200 hover:scale-105 ${getTechColor(
                        tech
                      )}`}
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

export default Showcase;