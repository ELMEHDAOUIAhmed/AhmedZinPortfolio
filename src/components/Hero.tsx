import React, { useState } from 'react';
import {
  Github,
  Linkedin,
  Mail,
  Download,
  Eye,
  ChevronLeft,
  ChevronRight,
  X,
  User,
  MapPin,
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';
import { parseMarkdownText } from '../utils/parseMarkdown';
import { motion, AnimatePresence } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

const Hero: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  // Sample images - replace with your actual photos
  const images = [
    'https://i.imgur.com/Tge2XIK.jpeg',
    'https://i.imgur.com/nQQSO72.jpeg',
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showPdfPreview, setShowPdfPreview] = useState(false);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const handleDownloadCV = () => {
    // Use proper base URL handling for GitHub Pages
    const basePath = import.meta.env.BASE_URL || '/';
    const cvFileName = language === 'fr' ? 'ELMEHDAOUI_Ahmed_CV_FR.pdf' : 'ELMEHDAOUI_Ahmed_CV_EN.pdf';
    const cvUrl = `${basePath}assets/${cvFileName}`;
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = cvFileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handlePreviewCV = () => {
    setShowPdfPreview(true);
  };

  return (
    <>
      <section
        id="hero"
        className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-blue-200/50 to-blue-300/30 dark:from-gray-900 dark:via-blue-900/40 dark:to-gray-900 relative overflow-hidden pt-16 sm:pt-20"
      >
        {/* Optimized background elements - static or simple CSS animations only */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] rounded-full bg-blue-400/20 blur-[100px] mix-blend-multiply dark:mix-blend-screen dark:bg-blue-900/20 animate-pulse" />
          <div className="absolute -bottom-[20%] -right-[10%] w-[60vw] h-[60vw] rounded-full bg-purple-400/20 blur-[100px] mix-blend-multiply dark:mix-blend-screen dark:bg-purple-900/20 animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start lg:items-center">
            {/* Left side - Text content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-4 sm:space-y-6 lg:space-y-8 order-2 lg:order-1"
            >
              <div className="space-y-3 sm:space-y-4 lg:space-y-6">
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold leading-tight">
                  <span className="text-gray-900 dark:text-white">
                    {t.hero.greeting}{' '}
                  </span>
                  <span className="whitespace-nowrap">
                    <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent inline-block">
                      {t.hero.name}
                    </span>
                    <motion.span
                      animate={{ rotate: [0, 14, -8, 14, -4, 10, 0, 0] }}
                      transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 1 }}
                      className="text-gray-900 dark:text-white inline-block ml-2 origin-bottom-right"
                    >
                      👋
                    </motion.span>
                  </span>
                </h1>
                {/* Location under name */}
                <div className="flex items-center mt-2 text-gray-600 dark:text-gray-300 space-x-2">
                  <MapPin className="w-5 h-5" />
                  <span>{t.hero.location}</span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {t.hero.chips.map((chip, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="relative px-2 py-1 sm:px-3 sm:py-1.5 lg:px-4 lg:py-2 bg-white/40 dark:bg-black/40 backdrop-blur-md rounded-full text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-200 border border-white/30 dark:border-gray-700/50 shadow-sm hover:shadow-md transition-all duration-300"
                    >
                      {chip}
                    </motion.span>
                  ))}
                </div>
              </div>

              <div
                className="relative bg-white/30 dark:bg-black/30 backdrop-blur-md rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 border border-white/40 dark:border-gray-700/50 shadow-lg"
              >
                <div className="flex items-center mb-3 sm:mb-4">
                  <User className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700 dark:text-gray-300 mr-2 sm:mr-3" />
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 dark:text-white">
                    {t.hero.aboutMe.title}
                  </h3>
                </div>

                <div className="text-sm sm:text-base lg:text-lg text-gray-700 dark:text-gray-200 leading-relaxed">
                  {parseMarkdownText(t.hero.aboutText)}
                </div>
              </div>

              {/* Enhanced Compact CV Buttons */}
              <div className="flex flex-row gap-3 sm:gap-4">
                <div className="flex-1 transition-transform hover:scale-105 duration-300">
                  <button
                    onClick={handlePreviewCV}
                    className="w-full h-full relative px-4 py-2.5 sm:px-5 sm:py-3 bg-white/30 dark:bg-white/5 backdrop-blur-lg rounded-xl border border-white/40 dark:border-gray-600/30 shadow-lg group overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-blue-400/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative flex items-center justify-center space-x-2">
                      <Eye className="w-4 h-4 sm:w-5 sm:h-5 text-blue-700 dark:text-blue-400 group-hover:text-blue-800 dark:group-hover:text-blue-300" />
                      <span className="text-sm sm:text-base font-semibold text-blue-900 dark:text-blue-100">
                        {t.hero.buttons.previewCV}
                      </span>
                    </div>
                  </button>
                </div>

                <div className="flex-1 transition-transform hover:scale-105 duration-300">
                  <a
                    href="mailto:elmehdaoui.ahmed77@gmail.com?subject=Contact%20from%20Portfolio&body=Hello%20Ahmed,%0D%0A%0D%0AI%20would%20like%20to%20get%20in%20touch%20with%20you.%0D%0A%0D%0ABest%20regards"
                    className="flex items-center justify-center w-full h-full relative px-4 py-2.5 sm:px-5 sm:py-3 bg-white/30 dark:bg-white/5 backdrop-blur-lg rounded-xl border border-white/40 dark:border-gray-600/30 shadow-lg group overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-blue-500/10 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative flex items-center justify-center space-x-2">
                      <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-blue-800 dark:text-blue-400 group-hover:text-blue-900 dark:group-hover:text-blue-300" />
                      <span className="text-sm sm:text-base font-semibold text-blue-900 dark:text-blue-100">
                        {t.hero.buttons.contactMe}
                      </span>
                    </div>
                  </a>
                </div>
              </div>

              {/* Enhanced Social Icons */}
              <div className="flex justify-center lg:justify-start space-x-3 sm:space-x-4">
                <div className="transition-transform hover:scale-110 duration-300">
                  <a
                    href="https://github.com/ELMEHDAOUIAhmed/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-3 sm:p-3.5 lg:p-4 bg-white/30 dark:bg-white/5 backdrop-blur-lg rounded-xl shadow-lg border border-white/40 dark:border-gray-600/30 group"
                  >
                    <Github className="w-5 h-5 sm:w-6 sm:h-6 text-gray-800 dark:text-gray-200 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors" />
                  </a>
                </div>

                <div className="transition-transform hover:scale-110 duration-300">
                  <a
                    href="https://linkedin.com/in/ahmed-elmehdaoui-234182278/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-3 sm:p-3.5 lg:p-4 bg-white/30 dark:bg-white/5 backdrop-blur-lg rounded-xl shadow-lg border border-white/40 dark:border-gray-600/30 group"
                  >
                    <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 text-gray-800 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Right side - Enhanced Image Carousel */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="flex justify-center lg:justify-end order-1 lg:order-2 -mt-8 sm:-mt-12 lg:mt-0"
            >
              <div className="relative">
                {/* Image carousel container */}
                <div className="relative bg-white/20 dark:bg-white/5 backdrop-blur-2xl rounded-2xl sm:rounded-3xl p-2 border border-white/30 dark:border-gray-700/30 shadow-2xl">
                  <div className="relative w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-xl sm:rounded-2xl overflow-hidden shadow-inner">
                    <AnimatePresence mode='wait'>
                      <motion.img
                        key={currentImageIndex}
                        src={images[currentImageIndex]}
                        alt={`Profile ${currentImageIndex + 1}`}
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    </AnimatePresence>

                    {/* Navigation controls */}
                    <div className="absolute inset-0 flex items-center justify-between p-2 sm:p-3 lg:p-4 opacity-0 hover:opacity-100 transition-opacity duration-300">
                      <button
                        onClick={(e) => { e.stopPropagation(); prevImage(); }}
                        className="p-1.5 bg-black/30 backdrop-blur-md rounded-full text-white hover:bg-black/50 transition-colors"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      <button
                        onClick={(e) => { e.stopPropagation(); nextImage(); }}
                        className="p-1.5 bg-black/30 backdrop-blur-md rounded-full text-white hover:bg-black/50 transition-colors"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </div>

                    {/* Image indicators */}
                    <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-2 bg-black/20 backdrop-blur-md rounded-full px-3 py-1.5">
                      {images.map((_, index) => (
                        <button
                          key={index}
                          onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(index); }}
                          className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentImageIndex
                            ? 'bg-white w-4'
                            : 'bg-white/50 hover:bg-white/80'
                            }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced PDF Preview Modal */}
      <AnimatePresence>
        {showPdfPreview && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative w-full max-w-5xl h-[90vh] bg-white dark:bg-gray-900 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/50">
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  {t.hero.modal.title}
                </h3>
                <div className="flex items-center gap-3">
                  <button
                    onClick={handleDownloadCV}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors text-sm font-medium"
                  >
                    <Download className="w-4 h-4" />
                    {t.hero.modal.downloadButton}
                  </button>
                  <button
                    onClick={() => setShowPdfPreview(false)}
                    className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full transition-colors"
                  >
                    <X className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                  </button>
                </div>
              </div>

              {/* PDF Content */}
              <div className="flex-1 bg-gray-100 dark:bg-gray-900/50 p-4">
                <iframe
                  src={`${import.meta.env.BASE_URL || '/'}assets/${language === 'fr' ? 'ELMEHDAOUI_Ahmed_CV_FR.pdf' : 'ELMEHDAOUI_Ahmed_CV_EN.pdf'}#toolbar=1&navpanes=1&scrollbar=1&page=1&view=FitH`}
                  className="w-full h-full rounded-lg shadow-sm"
                  title={t.hero.modal.title}
                  onError={(e) => {
                    // Fallback handled by browser or parent connection
                    console.error("PDF Load Error", e);
                  }}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Hero;