import React from 'react';
import { ExternalLink, Users } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';
import { acknowledgments, DEFAULT_PROFILE_IMAGE } from '../data/acknowledgments';

const Acknowledgments: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section
      id="acknowledgments"
      className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50/80 via-blue-50/60 to-gray-100/40 dark:from-gray-900/90 dark:via-blue-900/20 dark:to-gray-900/90 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="flex items-center justify-center mb-4 sm:mb-6">
            <Users className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600 dark:text-blue-400 mr-3 sm:mr-4" />
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">
              {t.acknowledgments.title}
            </h2>
          </div>
          
          {/* Academic Integrity Text */}
          <div className="max-w-4xl mx-auto">
            <div className="relative bg-white/15 dark:bg-black/20 backdrop-blur-2xl rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border border-white/20 dark:border-gray-800/30 shadow-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/5 to-blue-600/5"></div>
              <div className="relative z-10">
                <p className="text-sm sm:text-base lg:text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                  {t.acknowledgments.academicIntegrityText}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contributors Grid */}
        <div className="flex flex-wrap justify-center gap-6 sm:gap-8 max-w-5xl mx-auto">
          {acknowledgments.map((person, index) => (
            <div
              key={person.id}
              className="relative bg-white/15 dark:bg-black/20 backdrop-blur-2xl rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/20 dark:border-gray-800/30 shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden group hover:scale-105 w-full sm:w-80 md:w-72 lg:w-80"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Glass background effects */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/5 to-blue-600/5"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-blue-700/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>

              <div className="relative z-10">
                {/* Profile Section */}
                <div className="flex items-center mb-4">
                  <div className="relative">
                    <img
                      src={person.profileImage || DEFAULT_PROFILE_IMAGE}
                      alt={person.name}
                      className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover border-2 border-white/20 dark:border-gray-700/20 shadow-lg relative z-20"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = DEFAULT_PROFILE_IMAGE;
                      }}
                    />
                  </div>
                  
                  <div className="ml-3 sm:ml-4 flex-1">
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                      {person.name}
                    </h3>
                    <a
                      href={person.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-xs sm:text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-200 group/link"
                    >
                      <span className="mr-1">Visit Profile</span>
                      <ExternalLink className="w-3 h-3 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-200" />
                    </a>
                  </div>
                </div>

                {/* Contribution */}
                <div className="border-t border-white/10 dark:border-gray-700/10 pt-3 sm:pt-4">
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                    {person.contribution[language]}
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

export default Acknowledgments;