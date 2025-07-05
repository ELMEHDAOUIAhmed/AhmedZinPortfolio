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
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';
import { parseMarkdownText } from '../utils/parseMarkdown';

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
    // Your real CV download link
    const cvUrl =
      'https://pouch.jumpshare.com/download/zambzRInomZSq1nqN-ov_gnd8HpZ1NrM03M6J6OPa6s';
    window.open(cvUrl, '_blank');
  };

  const handlePreviewCV = () => {
    setShowPdfPreview(true);
  };

  return (
    <>
      <section
        id="hero"
        className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50/80 via-indigo-50/80 to-purple-50/80 dark:from-black/90 dark:via-gray-900/90 dark:to-black/90 relative overflow-hidden pt-16 sm:pt-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start lg:items-center">
            {/* Left side - Text content */}
            <div className="space-y-4 sm:space-y-6 lg:space-y-8 order-2 lg:order-1">
              <div className="space-y-3 sm:space-y-4 lg:space-y-6">
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold leading-tight">
                  <span className="text-gray-900 dark:text-white">
                    {t.hero.greeting}{' '}
                  </span>
                  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent animate-gradient-shift">
                    {t.hero.name}
                  </span>
                  <span className="text-gray-900 dark:text-white"> 👋</span>
                </h1>

                <div className="flex flex-wrap gap-2">
                  {t.hero.chips.map((chip, index) => (
                    <span
                      key={index}
                      className="relative px-2 py-1 sm:px-3 sm:py-1.5 lg:px-4 lg:py-2 bg-white/20 dark:bg-black/30 backdrop-blur-2xl rounded-full text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 border border-white/20 dark:border-gray-800/30 shadow-xl hover:shadow-2xl transition-all duration-300 hover:bg-white/30 dark:hover:bg-black/40 overflow-hidden group"
                    >
                      <span className="relative z-10">{chip}</span>
                    </span>
                  ))}
                </div>
              </div>

              <div className="relative bg-white/15 dark:bg-black/20 backdrop-blur-2xl rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 border border-white/20 dark:border-gray-800/30 shadow-2xl overflow-hidden group">
                <div className="relative z-10">
                  <p className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                    {parseMarkdownText(t.hero.aboutText)}
                  </p>
                </div>
              </div>

              {/* Enhanced CV Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <button
                  onClick={handlePreviewCV}
                  className="relative px-3 py-2 sm:px-4 sm:py-2.5 lg:px-6 lg:py-3 bg-white/15 dark:bg-black/20 backdrop-blur-2xl rounded-xl border border-white/20 dark:border-gray-800/30 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden flex-1 sm:flex-none group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 to-purple-400/10 animate-liquid-glass"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative flex items-center justify-center space-x-2 z-10">
                    <Eye className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 dark:text-blue-400 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300" />
                    <span className="text-sm sm:text-base font-medium bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent group-hover:from-purple-600 group-hover:to-blue-600 transition-all duration-300">
                      {t.hero.buttons.previewCV}
                    </span>
                  </div>
                </button>

                <button
                  onClick={handleDownloadCV}
                  className="relative px-3 py-2 sm:px-4 sm:py-2.5 lg:px-6 lg:py-3 bg-white/15 dark:bg-black/20 backdrop-blur-2xl rounded-xl border border-white/20 dark:border-gray-800/30 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden flex-1 sm:flex-none group"
                >
                  <div
                    className="absolute inset-0 bg-gradient-to-r from-purple-400/10 to-blue-400/10 animate-liquid-glass"
                    style={{ animationDelay: '1s' }}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative flex items-center justify-center space-x-2 z-10">
                    <Download className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600 dark:text-purple-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300" />
                    <span className="text-sm sm:text-base font-medium bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                      {t.hero.buttons.downloadCV}
                    </span>
                  </div>
                </button>
              </div>

              <div className="flex justify-center lg:justify-start space-x-3 sm:space-x-4">
                <a
                  href="https://github.com/ELMEHDAOUIAhmed/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-2.5 sm:p-3 lg:p-4 bg-white/15 dark:bg-black/20 backdrop-blur-2xl rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/20 dark:border-gray-800/30 overflow-hidden"
                >
                  <Github className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors relative z-10" />
                </a>
                <a
                  href="https://linkedin.com/in/ahmed-elmehdaoui-234182278/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-2.5 sm:p-3 lg:p-4 bg-white/15 dark:bg-black/20 backdrop-blur-2xl rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/20 dark:border-gray-800/30 overflow-hidden"
                >
                  <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors relative z-10" />
                </a>
                <a
                  href="mailto:elmehdaoui.ahmed77@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-2.5 sm:p-3 lg:p-4 bg-white/15 dark:bg-black/20 backdrop-blur-2xl rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/20 dark:border-gray-800/30 overflow-hidden"
                >
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors relative z-10" />
                </a>
              </div>
            </div>

            {/* Right side - Enhanced Image Carousel */}
            <div className="flex justify-center lg:justify-end order-1 lg:order-2 -mt-8 sm:-mt-12 lg:mt-0">
              <div className="relative">
                {/* Enhanced decorative background */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/15 to-purple-400/15 rounded-3xl blur-2xl"></div>
                <div className="absolute inset-2 bg-gradient-to-tr from-purple-400/10 to-pink-400/10 rounded-3xl blur-xl"></div>

                {/* Image carousel container */}
                <div className="relative bg-white/10 dark:bg-black/20 backdrop-blur-2xl rounded-2xl sm:rounded-3xl p-1.5 sm:p-2 lg:p-3 border border-white/20 dark:border-gray-800/30 shadow-2xl overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400/5 via-purple-400/5 to-pink-400/5 animate-liquid-glass"></div>
                  <div className="relative w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl border border-white/10 dark:border-gray-800/20">
                    {/* Images */}
                    {images.map((image, index) => (
                      <img
                        key={index}
                        src={image}
                        alt={`Profile ${index + 1}`}
                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                          index === currentImageIndex
                            ? 'opacity-100'
                            : 'opacity-0'
                        }`}
                      />
                    ))}

                    {/* Navigation controls */}
                    <div className="absolute inset-0 flex items-center justify-between p-2 sm:p-3 lg:p-4 opacity-0 hover:opacity-100 transition-opacity duration-300">
                      <button
                        onClick={prevImage}
                        className="p-1 sm:p-1.5 lg:p-2 bg-black/20 backdrop-blur-sm rounded-full text-white hover:bg-black/40 transition-all duration-200 border border-white/20"
                      >
                        <ChevronLeft className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5" />
                      </button>
                      <button
                        onClick={nextImage}
                        className="p-1 sm:p-1.5 lg:p-2 bg-black/20 backdrop-blur-sm rounded-full text-white hover:bg-black/40 transition-all duration-200 border border-white/20"
                      >
                        <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5" />
                      </button>
                    </div>

                    {/* Image indicators */}
                    <div className="absolute bottom-2 sm:bottom-3 lg:bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 bg-black/20 backdrop-blur-sm rounded-full px-2 sm:px-3 py-1 sm:py-2 border border-white/20">
                      {images.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all duration-200 border border-white/30 ${
                            index === currentImageIndex
                              ? 'bg-white shadow-lg backdrop-blur-sm'
                              : 'bg-white/50 hover:bg-white/75'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced PDF Preview Modal */}
      {showPdfPreview && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-2 sm:p-4">
          <div className="relative w-full max-w-4xl h-full max-h-[90vh] bg-white/10 dark:bg-black/20 backdrop-blur-2xl rounded-xl sm:rounded-2xl shadow-2xl overflow-hidden border border-white/20 dark:border-gray-800/30">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400/5 to-purple-400/5 animate-liquid-glass"></div>
            
            {/* Modal header */}
            <div className="relative flex items-center justify-between p-3 sm:p-4 border-b border-white/20 dark:border-gray-800/30 backdrop-blur-sm">
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">
                {t.hero.modal.title}
              </h3>
              <button
                onClick={() => setShowPdfPreview(false)}
                className="p-1.5 sm:p-2 hover:bg-white/10 dark:hover:bg-black/20 rounded-lg transition-colors backdrop-blur-sm"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500 dark:text-gray-400" />
              </button>
            </div>

            {/* PDF viewer */}
            <div className="h-full pb-12 sm:pb-16 relative">
              <iframe
                src="https://jmp.sh/Suxp9pvO"
                className="w-full h-full border-0"
                title={t.hero.modal.title}
              />
            </div>

            {/* Modal footer */}
            <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 bg-white/10 dark:bg-black/20 border-t border-white/20 dark:border-gray-800/30 backdrop-blur-2xl">
              <button
                onClick={handleDownloadCV}
                className="relative w-full sm:w-auto px-4 py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-lg sm:rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 shadow-xl hover:shadow-2xl overflow-hidden group text-sm sm:text-base"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-liquid-glass"></div>
                <Download className="w-4 h-4 sm:w-5 sm:h-5 relative z-10" />
                <span className="relative z-10">{t.hero.modal.downloadButton}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Hero;