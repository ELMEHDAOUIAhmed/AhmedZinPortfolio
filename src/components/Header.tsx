import React, { useState } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language];
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { id: 'hero', label: t.nav.about },
    { id: 'experience', label: t.nav.experience },
    { id: 'projects', label: t.nav.projects },
    { id: 'showcase', label: t.nav.showcase },
    { id: 'contributions', label: t.nav.contributions },
    { id: 'contact', label: t.nav.contact },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/5 dark:bg-gray-900/5 backdrop-blur-2xl border-b border-white/10 dark:border-gray-700/10 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex items-center justify-between h-14 sm:h-16">
          <div className="flex items-center">
            <div className="relative text-lg sm:text-xl font-bold text-gray-700 dark:text-gray-200 transition-all duration-300 hover:scale-110 cursor-default">
              <span className="relative z-10">AhmedZin.</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4 lg:space-x-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="relative text-sm lg:text-base text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 font-medium group px-2 py-1"
              >
                <span className="relative z-10">{item.label}</span>
                <div className="absolute inset-0 bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            ))}
          </nav>

          {/* Controls */}
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

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden relative p-2 rounded-xl bg-white/10 dark:bg-gray-800/10 backdrop-blur-2xl hover:bg-white/20 dark:hover:bg-gray-700/20 transition-all duration-300 border border-white/10 dark:border-gray-700/10"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700 dark:text-gray-200" />
              ) : (
                <Menu className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700 dark:text-gray-200" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-2xl border-b border-white/10 dark:border-gray-700/10 shadow-2xl">
            <nav className="px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-4 py-3 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-white/10 dark:hover:bg-gray-800/10 rounded-lg transition-all duration-300 font-medium"
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;