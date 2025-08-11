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
        className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50/80 via-blue-100/60 to-blue-200/40 dark:from-gray-900/90 dark:via-blue-900/20 dark:to-gray-900/90 relative overflow-hidden pt-16 sm:pt-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start lg:items-center">
            {/* Left side - Text content */}
            <div className="space-y-4 sm:space-y-6 lg:space-y-8 order-2 lg:order-1">
              <div className="space-y-3 sm:space-y-4 lg:space-y-6">
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold leading-tight">
                  <span className="text-gray-900 dark:text-white">
                    {t.hero.greeting}{' '}
                  </span>
                  <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent">
                    {t.hero.name}
                  </span>
                  <span className="text-gray-900 dark:text-white">👋</span>
                </h1>
                {/* Location under name */}
                <div className="flex items-center mt-2 text-gray-600 dark:text-gray-300 space-x-2">
                  <MapPin className="w-5 h-5" />
                  <span>{t.hero.location}</span>
                </div>

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
                  {/* Header with icon */}
                  <div className="flex items-center mb-3 sm:mb-4">
                    <User className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600 dark:text-gray-400 mr-2 sm:mr-3" />
                    <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 dark:text-white">
                      {t.hero.aboutMe.title}
                    </h3>
                  </div>
                  
                  {/* About text */}
                  <div className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                    {parseMarkdownText(t.hero.aboutText)}
                  </div>
                </div>
              </div>

              {/* Enhanced Compact CV Buttons */}
              <div className="flex flex-row gap-3 sm:gap-4">
                <button
                  onClick={handlePreviewCV}
                  className="relative flex-1 px-4 py-2.5 sm:px-5 sm:py-3 bg-white/10 dark:bg-black/15 backdrop-blur-3xl rounded-xl border border-white/30 dark:border-gray-700/30 shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden group hover:scale-105"
                >
                  {/* Animated glass background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-blue-600/10 to-blue-700/10"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Glass reflection effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                  
                  <div className="relative flex items-center justify-center space-x-2 z-10">
                    <Eye className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors duration-300" />
                    <span className="text-sm sm:text-base font-semibold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent group-hover:from-blue-700 group-hover:to-blue-900 transition-all duration-300">
                      {t.hero.buttons.previewCV}
                    </span>
                  </div>
                </button>

                <a
                  href="mailto:elmehdaoui.ahmed77@gmail.com?subject=Contact%20from%20Portfolio&body=Hello%20Ahmed,%0D%0A%0D%0AI%20would%20like%20to%20get%20in%20touch%20with%20you.%0D%0A%0D%0ABest%20regards"
                  className="relative flex-1 px-4 py-2.5 sm:px-5 sm:py-3 bg-white/10 dark:bg-black/15 backdrop-blur-3xl rounded-xl border border-white/30 dark:border-gray-700/30 shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden group hover:scale-105 flex items-center justify-center"
                >
                  {/* Animated glass background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-blue-700/10 to-blue-800/10"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-blue-700/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Glass reflection effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                  
                  <div className="relative flex items-center justify-center space-x-2 z-10">
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-blue-700 dark:text-blue-400 group-hover:text-blue-800 dark:group-hover:text-blue-300 transition-colors duration-300" />
                    <span className="text-sm sm:text-base font-semibold bg-gradient-to-r from-blue-700 to-blue-900 bg-clip-text text-transparent group-hover:from-blue-800 group-hover:to-blue-950 transition-all duration-300">
                      {t.hero.buttons.contactMe}
                    </span>
                  </div>
                </a>
              </div>

              {/* Enhanced Social Icons with specific hover colors */}
              <div className="flex justify-center lg:justify-start space-x-3 sm:space-x-4">
                <a
                  href="https://github.com/ELMEHDAOUIAhmed/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-3 sm:p-3.5 lg:p-4 bg-white/10 dark:bg-black/15 backdrop-blur-3xl rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-500 border border-white/30 dark:border-gray-700/30 overflow-hidden hover:scale-110"
                >
                  {/* Glass background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-50"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <Github className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700 dark:text-gray-300 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300 relative z-10" />
                </a>
                
                <a
                  href="https://linkedin.com/in/ahmed-elmehdaoui-234182278/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-3 sm:p-3.5 lg:p-4 bg-white/10 dark:bg-black/15 backdrop-blur-3xl rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-500 border border-white/30 dark:border-gray-700/30 overflow-hidden hover:scale-110"
                >
                  {/* Glass background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-50"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 relative z-10" />
                </a>
                
              </div>
            </div>

            {/* Right side - Enhanced Image Carousel */}
            <div className="flex justify-center lg:justify-end order-1 lg:order-2 -mt-8 sm:-mt-12 lg:mt-0">
              <div className="relative">
                {/* Enhanced decorative background */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/15 to-blue-600/15 rounded-3xl blur-2xl"></div>
                <div className="absolute inset-2 bg-gradient-to-tr from-blue-500/10 to-blue-700/10 rounded-3xl blur-xl"></div>

                {/* Image carousel container */}
                <div className="relative bg-white/10 dark:bg-black/20 backdrop-blur-2xl rounded-2xl sm:rounded-3xl p-1.5 sm:p-2 lg:p-3 border border-white/20 dark:border-gray-800/30 shadow-2xl overflow-hidden group hover:scale-125 transition-transform duration-700">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400/5 via-blue-500/5 to-blue-600/5"></div>
                  <div className="relative w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl border border-white/10 dark:border-gray-800/20 transition-all duration-500">
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

      {/* Enhanced PDF Preview Modal with Elegant Glassy Button */}
      {showPdfPreview && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-1 sm:p-2">
          <div className="relative w-full max-w-5xl h-full max-h-[95vh] bg-white/5 dark:bg-black/10 backdrop-blur-3xl rounded-lg sm:rounded-xl shadow-3xl overflow-hidden border border-white/10 dark:border-gray-800/20">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400/5 to-blue-600/5"></div>
            
            {/* Modal header with title and download button */}
            <div className="relative flex items-center justify-between p-2 sm:p-3 border-b border-white/10 dark:border-gray-800/20 backdrop-blur-sm">
              <h3 className="text-sm sm:text-base font-semibold text-white">
                {t.hero.modal.title}
              </h3>
              
              {/* Download button in header */}
              <div className="flex items-center gap-2">
                <button
                  onClick={handleDownloadCV}
                  className="relative px-3 py-1.5 sm:px-4 sm:py-2 bg-white/10 dark:bg-black/15 backdrop-blur-3xl rounded-lg border border-white/30 dark:border-gray-700/30 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden group hover:scale-105 text-xs sm:text-sm"
                >
                  {/* Animated glass background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-blue-700/10 to-blue-800/10"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-blue-700/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Glass reflection effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                  
                  <div className="relative flex items-center justify-center space-x-1.5 z-10">
                    <Download className="w-3 h-3 sm:w-4 sm:h-4 text-blue-700 dark:text-blue-400 group-hover:text-blue-800 dark:group-hover:text-blue-300 transition-colors duration-300" />
                    <span className="font-semibold bg-gradient-to-r from-blue-700 to-blue-900 bg-clip-text text-transparent group-hover:from-blue-800 group-hover:to-blue-950 transition-all duration-300">
                      {t.hero.modal.downloadButton}
                    </span>
                  </div>
                </button>
                
                {/* Close button */}
                <button
                  onClick={() => setShowPdfPreview(false)}
                  className="p-1.5 hover:bg-white/10 dark:hover:bg-black/20 rounded-lg transition-colors backdrop-blur-sm"
                >
                  <X className="w-4 h-4 text-gray-300 dark:text-gray-400 hover:text-white" />
                </button>
              </div>
            </div>

            {/* PDF viewer - full height with minimal padding */}
            <div className="h-full relative overflow-hidden" style={{ height: 'calc(100% - 3rem)' }}>
              <iframe
                src={`${import.meta.env.BASE_URL || '/'}assets/${language === 'fr' ? 'ELMEHDAOUI_Ahmed_CV_FR.pdf' : 'ELMEHDAOUI_Ahmed_CV_EN.pdf'}#toolbar=1&navpanes=1&scrollbar=1&page=1&view=FitH`}
                className="w-full h-full border-0"
                title={t.hero.modal.title}
                style={{ minHeight: '600px' }}
                onError={(e) => {
                  console.error('PDF loading error:', e);
                  // Fallback: show download link if PDF fails to load
                  const iframe = e.target as HTMLIFrameElement;
                  iframe.style.display = 'none';
                  const fallback = document.createElement('div');
                  fallback.className = 'flex items-center justify-center h-full text-white';
                  const basePath = import.meta.env.BASE_URL || '/';
                  const cvFileName = language === 'fr' ? 'ELMEHDAOUI_Ahmed_CV_FR.pdf' : 'ELMEHDAOUI_Ahmed_CV_EN.pdf';
                  fallback.innerHTML = `
                    <div class="text-center">
                      <p class="mb-4">Unable to display PDF. Please download to view.</p>
                      <button onclick="window.open('${basePath}assets/${cvFileName}', '_blank')" class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                        Open PDF in New Tab
                      </button>
                    </div>
                  `;
                  iframe.parentNode?.appendChild(fallback);
                }}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Hero;