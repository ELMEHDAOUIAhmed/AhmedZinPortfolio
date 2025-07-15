import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Showcase from './components/Showcase';
import Contributions from './components/Contributions';
import Skills from './components/Skills';
import Contact from './components/Contact';
import { useLanguage } from './contexts/LanguageContext';
import { translations } from './data/translations';
import HelloIntero from './components/HelloIntero';

const MainPage: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];
  
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-all duration-300">
      <Header />
      <main>
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Showcase />
        <Contributions />
        <Contact />
      </main>
      <footer className="relative bg-white/5 dark:bg-gray-900/5 backdrop-blur-2xl text-gray-900 dark:text-white py-6 sm:py-8 border-t border-white/10 dark:border-gray-700/10 shadow-2xl overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base font-medium">
            {t.footer.copyright}
          </p>
        </div>
      </footer>
    </div>
  );
};

function App() {
  const [currentPage, setCurrentPage] = useState<'intro' | 'main'>('intro');

  useEffect(() => {
    // Navigate to main page after intro animation completes (3 seconds)
    const timer = setTimeout(() => {
      setCurrentPage('main');
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  // Unified page rendering logic
  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'intro':
        return <HelloIntero />;
      case 'main':
        return <MainPage />;
      default:
        return <HelloIntero />;
    }
  };

  return (
    <div>
      {renderCurrentPage()}
    </div>
  );
}

export default App;