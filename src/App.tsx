import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Showcase from './components/Showcase';
import Contributions from './components/Contributions';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      <Header />
      <main>
        <Hero />
        <Experience />
        <Projects />
        <Showcase />
        <Contributions />
        <Skills />
        <Contact />
      </main>
      <footer className="relative bg-gray-900/95 dark:bg-gray-800/95 backdrop-blur-2xl text-white py-8 border-t border-white/10 dark:border-gray-700/20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <p className="text-gray-400">
            © 2025 ELMEHDAOUI Ahmed. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;