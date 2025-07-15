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
    <>
      {/* Desktop Header - Hidden on mobile */}
      <header className="hidden md:block fixed top-0 left-0 right-0 z-50 bg-white/5 dark:bg-gray-900/5 backdrop-blur-2xl border-b border-white/10 dark:border-gray-700/10 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="relative text-xl font-bold text-gray-700 dark:text-gray-200 transition-all duration-300 hover:scale-110 cursor-default">
                <span className="relative z-10">AhmedZin.</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="flex items-center space-x-6 ml-auto mr-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="relative text-base text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 font-medium group px-2 py-1"
                >
                  <span className="relative z-10">{item.label}</span>
                  <div className="absolute inset-0 bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              ))}
            </nav>

            {/* Desktop Controls */}
            <div className="flex items-center space-x-3">
              <button
                onClick={toggleLanguage}
                className="relative p-2 rounded-xl bg-white/10 dark:bg-gray-800/10 backdrop-blur-2xl hover:bg-white/20 dark:hover:bg-gray-700/20 transition-all duration-300 border border-white/10 dark:border-gray-700/10 group overflow-hidden"
                aria-label="Toggle language"
              >
                <span className="text-sm font-bold text-gray-700 dark:text-gray-200 relative z-10 min-w-[20px] flex items-center justify-center">
                  {language.toUpperCase()}
                </span>
              </button>
              
              <button
                onClick={toggleTheme}
                className="relative p-2 rounded-xl bg-white/10 dark:bg-gray-800/10 backdrop-blur-2xl hover:bg-white/20 dark:hover:bg-gray-700/20 transition-all duration-300 border border-white/10 dark:border-gray-700/10 group overflow-hidden"
                aria-label="Toggle theme"
              >
                {theme === 'light' ? (
                  <Moon className="w-5 h-5 text-gray-700 dark:text-gray-200 relative z-10" />
                ) : (
                  <Sun className="w-5 h-5 text-gray-700 dark:text-gray-200 relative z-10" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Bottom Navigation - Only visible on mobile */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/10 dark:bg-gray-900/10 backdrop-blur-3xl border-t border-white/20 dark:border-gray-700/20 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="flex items-center justify-between py-3">
            {/* Logo/Name */}
            <div className="relative text-lg font-bold text-gray-700 dark:text-gray-200 transition-all duration-300 cursor-default">
              <span className="relative z-10">AhmedZin.</span>
            </div>

            {/* Controls */}
            <div className="flex items-center space-x-3">
              {/* Language Toggle */}
              <button
                onClick={toggleLanguage}
                className="relative p-2 rounded-xl bg-white/10 dark:bg-gray-800/10 backdrop-blur-2xl hover:bg-white/20 dark:hover:bg-gray-700/20 transition-all duration-300 border border-white/10 dark:border-gray-700/10"
                aria-label="Toggle language"
              >
                <span className="text-sm font-bold text-gray-700 dark:text-gray-200 relative z-10">
                  {language.toUpperCase()}
                </span>
              </button>
              
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="relative p-2 rounded-xl bg-white/10 dark:bg-gray-800/10 backdrop-blur-2xl hover:bg-white/20 dark:hover:bg-gray-700/20 transition-all duration-300 border border-white/10 dark:border-gray-700/10"
                aria-label="Toggle theme"
              >
                {theme === 'light' ? (
                  <Moon className="w-4 h-4 text-gray-700 dark:text-gray-200 relative z-10" />
                ) : (
                  <Sun className="w-4 h-4 text-gray-700 dark:text-gray-200 relative z-10" />
                )}
              </button>

              {/* Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="relative p-2 rounded-xl bg-white/10 dark:bg-gray-800/10 backdrop-blur-2xl hover:bg-white/20 dark:hover:bg-gray-700/20 transition-all duration-300 border border-white/10 dark:border-gray-700/10"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-4 h-4 text-gray-700 dark:text-gray-200 relative z-10" />
                ) : (
                  <Menu className="w-4 h-4 text-gray-700 dark:text-gray-200 relative z-10" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Vertical Menu Popup */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 flex items-end justify-center">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          
          {/* Menu Panel */}
          <div className="relative w-full max-w-sm mx-4 mb-20 bg-white/15 dark:bg-gray-900/15 backdrop-blur-3xl rounded-2xl border border-white/20 dark:border-gray-700/20 shadow-3xl overflow-hidden animate-slide-up">
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 text-center">
                Navigation
              </h3>
              
              <div className="space-y-2">
                {navItems.map((item, index) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="w-full text-left px-4 py-3 rounded-xl text-black dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-white/10 dark:hover:bg-gray-800/10 transition-all duration-300 font-medium"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;