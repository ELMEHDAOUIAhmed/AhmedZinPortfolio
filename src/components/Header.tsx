import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/5 dark:bg-gray-900/5 backdrop-blur-2xl border-b border-white/10 dark:border-gray-700/10 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex items-center justify-between h-14 sm:h-16">
          <div className="flex items-center">
            <div className="relative text-lg sm:text-xl font-bold text-gray-700 dark:text-gray-200 transition-all duration-300 hover:scale-110 cursor-default">
              <span className="relative z-10">AhmedZin.</span>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <button
              onClick={() => scrollToSection('hero')}
              className="relative text-sm lg:text-base text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 font-medium group"
            >
              <span className="relative z-10">{t.nav.about}</span>
              <div className="absolute inset-0 bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -m-2"></div>
            </button>
            <button
              onClick={() => scrollToSection('experience')}
              className="relative text-sm lg:text-base text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 font-medium group"
            >
              <span className="relative z-10">{t.nav.experience}</span>
              <div className="absolute inset-0 bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -m-2"></div>
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="relative text-sm lg:text-base text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 font-medium group"
            >
              <span className="relative z-10">{t.nav.projects}</span>
              <div className="absolute inset-0 bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -m-2"></div>
            </button>
            <button
              onClick={() => scrollToSection('showcase')}
              className="relative text-sm lg:text-base text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 font-medium group"
            >
              <span className="relative z-10">{t.nav.showcase}</span>
              <div className="absolute inset-0 bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -m-2"></div>
            </button>
            <button
              onClick={() => scrollToSection('contributions')}
              className="relative text-sm lg:text-base text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 font-medium group"
            >
              <span className="relative z-10">{t.nav.contributions}</span>
              <div className="absolute inset-0 bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -m-2"></div>
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="relative text-sm lg:text-base text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 font-medium group"
            >
              <span className="relative z-10">{t.nav.contact}</span>
              <div className="absolute inset-0 bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -m-2"></div>
            </button>
          </nav>

          <div className="flex items-center space-x-2">
            <button
              onClick={toggleLanguage}
              className="relative p-2 rounded-xl bg-white/10 dark:bg-gray-800/10 backdrop-blur-2xl hover:bg-white/20 dark:hover:bg-gray-700/20 transition-all duration-300 border border-white/10 dark:border-gray-700/10 group overflow-hidden"
              aria-label="Toggle language"
            >
              <span className="text-xs sm:text-sm font-bold text-gray-700 dark:text-gray-200 relative z-10 min-w-[20px] flex items-center justify-center">
                {language.toUpperCase()}
              </span>
            </button>
            <button
              onClick={toggleTheme}
              className="relative p-2 rounded-xl bg-white/10 dark:bg-gray-800/10 backdrop-blur-2xl hover:bg-white/20 dark:hover:bg-gray-700/20 transition-all duration-300 border border-white/10 dark:border-gray-700/10 group overflow-hidden"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <Moon className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700 dark:text-gray-200 relative z-10" />
              ) : (
                <Sun className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700 dark:text-gray-200 relative z-10" />
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;