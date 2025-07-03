import React, { useState } from 'react';
import { Github, Linkedin, Mail, Download, Eye, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { translations } from '../data/translations';

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
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleDownloadCV = () => {
    // Your real CV download link
    const cvUrl = 'https://pouch.jumpshare.com/download/Z48cNysQ41ThuxhJ16xD5bYrtdwryuxr6I69HT03tfI';
    window.open(cvUrl, '_blank');
  };

  const handlePreviewCV = () => {
    setShowPdfPreview(true);
  };

  return (
    <>
      <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-liquid-glass"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-liquid-glass" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-300/10 to-purple-300/10 rounded-full blur-3xl animate-liquid-glass" style={{ animationDelay: '4s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start lg:items-center">
            {/* Left side - Text content */}
            <div className="space-y-6 lg:space-y-8 order-2 lg:order-1">
              <div className="space-y-4 lg:space-y-6">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                  <span className="text-gray-900 dark:text-white">Hi, My name is </span>
                  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                    ELMEHDAOUI Ahmed
                  </span>
                  <span className="text-gray-900 dark:text-white"> 👋</span>
                </h1>
                
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {t.hero.chips.map((chip, index) => (
                    <span
                      key={index}
                      className="px-3 py-1.5 sm:px-4 sm:py-2 bg-white/30 dark:bg-gray-800/30 backdrop-blur-md rounded-full text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 border border-white/20 dark:border-gray-700/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:bg-white/40 dark:hover:bg-gray-700/40"
                    >
                      {chip}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-white/20 dark:bg-gray-800/20 backdrop-blur-xl rounded-2xl p-4 sm:p-6 border border-white/20 dark:border-gray-700/20 shadow-xl">
                <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4">
                  {t.hero.aboutTitle}
                </h2>
                <p className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  {t.hero.aboutText}
                </p>
              </div>

              {/* CV Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <button
                  onClick={handlePreviewCV}
                  className="group relative px-4 py-2.5 sm:px-6 sm:py-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-xl rounded-xl border border-white/30 dark:border-gray-700/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden flex-1 sm:flex-none"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 to-purple-400/10 animate-liquid-glass"></div>
                  <div className="relative flex items-center justify-center space-x-2">
                    <Eye className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 dark:text-blue-400 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300" />
                    <span className="text-sm sm:text-base font-medium bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent group-hover:from-purple-600 group-hover:to-blue-600 transition-all duration-300">
                      Preview CV
                    </span>
                  </div>
                </button>

                <button
                  onClick={handleDownloadCV}
                  className="group relative px-4 py-2.5 sm:px-6 sm:py-3 bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-xl rounded-xl border border-white/30 dark:border-gray-700/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden flex-1 sm:flex-none"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-400/10 to-blue-400/10 animate-liquid-glass" style={{ animationDelay: '1s' }}></div>
                  <div className="relative flex items-center justify-center space-x-2">
                    <Download className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600 dark:text-purple-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300" />
                    <span className="text-sm sm:text-base font-medium bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                      Download CV
                    </span>
                  </div>
                </button>
              </div>

              <div className="flex justify-center lg:justify-start space-x-3 sm:space-x-4">
                <a
                  href="https://github.com/ELMEHDAOUIAhmed/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-3 sm:p-4 bg-white/20 dark:bg-gray-800/20 backdrop-blur-md rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border border-white/20 dark:border-gray-700/20"
                >
                  <Github className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                </a>
                <a
                  href="https://linkedin.com/in/ahmed-elmehdaoui-234182278/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-3 sm:p-4 bg-white/20 dark:bg-gray-800/20 backdrop-blur-md rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border border-white/20 dark:border-gray-700/20"
                >
                  <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                </a>
                <a
                  href="https://my-portfolio-win98-themed.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-3 sm:p-4 bg-white/20 dark:bg-gray-800/20 backdrop-blur-md rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border border-white/20 dark:border-gray-700/20"
                >
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                </a>
              </div>
            </div>

            {/* Right side - Image Carousel (moved up and made bigger) */}
            <div className="flex justify-center lg:justify-end order-1 lg:order-2 -mt-8 sm:-mt-12 lg:mt-0">
              <div className="relative">
                {/* Decorative background */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-3xl blur-xl transform rotate-6 animate-liquid-glass"></div>
                
                {/* Image carousel container - made bigger */}
                <div className="relative bg-white/20 dark:bg-gray-800/20 backdrop-blur-xl rounded-3xl p-4 sm:p-6 lg:p-8 border border-white/20 dark:border-gray-700/20 shadow-2xl">
                  <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden shadow-inner">
                    {/* Images */}
                    {images.map((image, index) => (
                      <img
                        key={index}
                        src={image}
                        alt={`Profile ${index + 1}`}
                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                          index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                        }`}
                      />
                    ))}
                    
                    {/* Manual navigation controls */}
                    <div className="absolute inset-0 flex items-center justify-between p-3 sm:p-4 opacity-0 hover:opacity-100 transition-opacity duration-300">
                      <button
                        onClick={prevImage}
                        className="p-1.5 sm:p-2 bg-black/20 backdrop-blur-sm rounded-full text-white hover:bg-black/40 transition-all duration-200"
                      >
                        <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                      </button>
                      <button
                        onClick={nextImage}
                        className="p-1.5 sm:p-2 bg-black/20 backdrop-blur-sm rounded-full text-white hover:bg-black/40 transition-all duration-200"
                      >
                        <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                      </button>
                    </div>
                    
                    {/* Image indicators */}
                    <div className="absolute bottom-3 sm:bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                      {images.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`w-2 h-2 rounded-full transition-all duration-200 ${
                            index === currentImageIndex
                              ? 'bg-white shadow-lg'
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

      {/* PDF Preview Modal */}
      {showPdfPreview && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="relative w-full max-w-4xl h-full max-h-[90vh] bg-white dark:bg-gray-900 rounded-2xl shadow-2xl overflow-hidden">
            {/* Modal header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">CV Preview</h3>
              <button
                onClick={() => setShowPdfPreview(false)}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-gray-500 dark:text-gray-400" />
              </button>
            </div>
            
            {/* PDF viewer */}
            <div className="h-full pb-16">
              <iframe
                src="https://jmp.sh/AqUsZzVs"
                className="w-full h-full border-0"
                title="CV Preview"
              />
            </div>
            
            {/* Modal footer with download button */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
              <button
                onClick={handleDownloadCV}
                className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
              >
                <Download className="w-5 h-5" />
                <span>Download CV</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Hero;