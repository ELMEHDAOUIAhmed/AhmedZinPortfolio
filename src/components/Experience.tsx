import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Briefcase, Code, Database, Smartphone, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';
import { parseMarkdownText } from '../utils/parseMarkdown';

const Experience: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const getTechColor = (tech: string) => {
    const colors = {
      TypeScript: 'bg-blue-100/80 text-blue-800 dark:bg-blue-900/50 dark:text-blue-200 border-blue-200/50 dark:border-blue-700/50',
      JavaScript: 'bg-yellow-100/80 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-200 border-yellow-200/50 dark:border-yellow-700/50',
      Python: 'bg-green-100/80 text-green-800 dark:bg-green-900/50 dark:text-green-200 border-green-200/50 dark:border-green-700/50',
      Flutter: 'bg-cyan-100/80 text-cyan-800 dark:bg-cyan-900/50 dark:text-cyan-200 border-cyan-200/50 dark:border-cyan-700/50',
      React: 'bg-blue-100/80 text-blue-800 dark:bg-blue-900/50 dark:text-blue-200 border-blue-200/50 dark:border-blue-700/50',
      'Node.js': 'bg-green-100/80 text-green-800 dark:bg-green-900/50 dark:text-green-200 border-green-200/50 dark:border-green-700/50',
      PostgreSQL: 'bg-indigo-100/80 text-indigo-800 dark:bg-indigo-900/50 dark:text-indigo-200 border-indigo-200/50 dark:border-indigo-700/50',
      MongoDB: 'bg-green-100/80 text-green-800 dark:bg-green-900/50 dark:text-green-200 border-green-200/50 dark:border-green-700/50',
      AWS: 'bg-orange-100/80 text-orange-800 dark:bg-orange-900/50 dark:text-orange-200 border-orange-200/50 dark:border-orange-700/50',
      Docker: 'bg-blue-100/80 text-blue-800 dark:bg-blue-900/50 dark:text-blue-200 border-blue-200/50 dark:border-blue-700/50',
      Firebase: 'bg-red-100/80 text-red-800 dark:bg-red-900/50 dark:text-red-200 border-red-200/50 dark:border-red-700/50',
      iOS: 'bg-gray-100/80 text-gray-800 dark:bg-gray-700/50 dark:text-gray-200 border-gray-200/50 dark:border-gray-600/50',
      Android: 'bg-green-100/80 text-green-800 dark:bg-green-900/50 dark:text-green-200 border-green-200/50 dark:border-green-700/50',
      Swift: 'bg-orange-100/80 text-orange-800 dark:bg-orange-900/50 dark:text-orange-200 border-orange-200/50 dark:border-orange-700/50',
      Kotlin: 'bg-purple-100/80 text-purple-800 dark:bg-purple-900/50 dark:text-purple-200 border-purple-200/50 dark:border-purple-700/50',
      OpenCV: 'bg-green-100/80 text-green-800 dark:bg-green-900/50 dark:text-green-200 border-green-200/50 dark:border-green-700/50',
      MQTT: 'bg-purple-100/80 text-purple-800 dark:bg-purple-900/50 dark:text-purple-200 border-purple-200/50 dark:border-purple-700/50',
      'Raspberry Pi': 'bg-red-100/80 text-red-800 dark:bg-red-900/50 dark:text-red-200 border-red-200/50 dark:border-red-700/50',
      GoLang: 'bg-cyan-100/80 text-cyan-800 dark:bg-cyan-900/50 dark:text-cyan-200 border-cyan-200/50 dark:border-cyan-700/50',
      WinDev: 'bg-blue-100/80 text-blue-800 dark:bg-blue-900/50 dark:text-blue-200 border-blue-200/50 dark:border-blue-700/50',
      RAD: 'bg-purple-100/80 text-purple-800 dark:bg-purple-900/50 dark:text-purple-200 border-purple-200/50 dark:border-purple-700/50',
      PKI: 'bg-red-100/80 text-red-800 dark:bg-red-900/50 dark:text-red-200 border-red-200/50 dark:border-red-700/50',
      'ISO 18013-5': 'bg-indigo-100/80 text-indigo-800 dark:bg-indigo-900/50 dark:text-indigo-200 border-indigo-200/50 dark:border-indigo-700/50',
      Microservices: 'bg-teal-100/80 text-teal-800 dark:bg-teal-900/50 dark:text-teal-200 border-teal-200/50 dark:border-teal-700/50',
      Arduino: 'bg-emerald-100/80 text-emerald-800 dark:bg-emerald-900/50 dark:text-emerald-200 border-emerald-200/50 dark:border-emerald-700/50',
      Bluetooth: 'bg-blue-100/80 text-blue-800 dark:bg-blue-900/50 dark:text-blue-200 border-blue-200/50 dark:border-blue-700/50',
      'Payment Integration': 'bg-green-100/80 text-green-800 dark:bg-green-900/50 dark:text-green-200 border-green-200/50 dark:border-green-700/50',
      IoT: 'bg-orange-100/80 text-orange-800 dark:bg-orange-900/50 dark:text-orange-200 border-orange-200/50 dark:border-orange-700/50',
      Agile: 'bg-pink-100/80 text-pink-800 dark:bg-pink-900/50 dark:text-pink-200 border-pink-200/50 dark:border-pink-700/50',
      'Database Management': 'bg-violet-100/80 text-violet-800 dark:bg-violet-900/50 dark:text-violet-200 border-violet-200/50 dark:border-violet-700/50',
      HTML: 'bg-orange-100/80 text-orange-800 dark:bg-orange-900/50 dark:text-orange-200 border-orange-200/50 dark:border-orange-700/50',
      CSS: 'bg-blue-100/80 text-blue-800 dark:bg-blue-900/50 dark:text-blue-200 border-blue-200/50 dark:border-blue-700/50',
      PHP: 'bg-purple-100/80 text-purple-800 dark:bg-purple-900/50 dark:text-purple-200 border-purple-200/50 dark:border-purple-700/50',
      MySQL: 'bg-blue-100/80 text-blue-800 dark:bg-blue-900/50 dark:text-blue-200 border-blue-200/50 dark:border-blue-700/50',
      Java: 'bg-red-100/80 text-red-800 dark:bg-red-900/50 dark:text-red-200 border-red-200/50 dark:border-red-700/50',
      JavaFX: 'bg-red-100/80 text-red-800 dark:bg-red-900/50 dark:text-red-200 border-red-200/50 dark:border-red-700/50',
      SQL: 'bg-indigo-100/80 text-indigo-800 dark:bg-indigo-900/50 dark:text-indigo-200 border-indigo-200/50 dark:border-indigo-700/50',
      Laravel: 'bg-red-100/80 text-red-800 dark:bg-red-900/50 dark:text-red-200 border-red-200/50 dark:border-red-700/50',
      Dart: 'bg-cyan-100/80 text-cyan-800 dark:bg-cyan-900/50 dark:text-cyan-200 border-cyan-200/50 dark:border-cyan-700/50',
      C: 'bg-gray-100/80 text-gray-800 dark:bg-gray-700/50 dark:text-gray-200 border-gray-200/50 dark:border-gray-600/50',
      Redis: 'bg-red-100/80 text-red-800 dark:bg-red-900/50 dark:text-red-200 border-red-200/50 dark:border-red-700/50',
      Oracle: 'bg-red-100/80 text-red-800 dark:bg-red-900/50 dark:text-red-200 border-red-200/50 dark:border-red-700/50',
      'UML 2.0': 'bg-purple-100/80 text-purple-800 dark:bg-purple-900/50 dark:text-purple-200 border-purple-200/50 dark:border-purple-700/50',
      'BPMN 2.0': 'bg-indigo-100/80 text-indigo-800 dark:bg-indigo-900/50 dark:text-indigo-200 border-indigo-200/50 dark:border-indigo-700/50',
    };
    return (
      colors[tech as keyof typeof colors] ||
      'bg-gray-100/80 text-gray-800 dark:bg-gray-700/50 dark:text-gray-200 border-gray-200/50 dark:border-gray-600/50'
    );
  };

  const getIconForExperience = (index: number) => {
    const icons = [
      <Briefcase className="w-6 h-6" />, // Professional work
      <Smartphone className="w-6 h-6" />, // Mobile app
      <Database className="w-6 h-6" />, // Database/Medical system
      <Globe className="w-6 h-6" />, // Web application
      <Code className="w-6 h-6" />, // Software development
    ];
    return icons[index] || <Code className="w-6 h-6" />;
  };

  const getColorForExperience = (index: number) => {
    const colors = [
      'rgb(33, 150, 243)', // Blue for professional work
      'rgb(76, 175, 80)', // Green for mobile/IoT
      'rgb(156, 39, 176)', // Purple for medical/database
      'rgb(255, 152, 0)', // Orange for web
      'rgb(244, 67, 54)', // Red for software development
    ];
    return colors[index] || 'rgb(96, 125, 139)';
  };

  return (
    <section
      id="experience"
      className="py-8 sm:py-12 lg:py-16 xl:py-20 bg-gradient-to-br from-white to-blue-50/50 dark:from-black dark:to-gray-900/50 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 sm:top-20 right-10 sm:right-20 w-32 sm:w-64 h-32 sm:h-64 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 sm:bottom-20 left-10 sm:left-20 w-32 sm:w-64 h-32 sm:h-64 bg-gradient-to-tr from-purple-400/10 to-pink-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-4">
            {t.experience.title}
          </h2>
        </div>

        <VerticalTimeline
          lineColor="rgba(59, 130, 246, 0.3)"
          animate={true}
          layout="2-columns"
        >
          {t.experience.experiences.map((exp, index) => (
            <VerticalTimelineElement
              key={exp.id}
              className="vertical-timeline-element--work"
              contentStyle={{
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(20px)',
                color: 'inherit',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '16px',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
              }}
              contentArrowStyle={{
                borderRight: `7px solid rgba(255, 255, 255, 0.1)`,
              }}
              iconStyle={{
                background: getColorForExperience(index),
                color: '#fff',
                boxShadow: `0 0 0 4px rgba(255, 255, 255, 0.1), inset 0 2px 0 rgba(255, 255, 255, 0.08), 0 3px 0 4px rgba(0, 0, 0, 0.05), 0 8px 17px rgba(0, 0, 0, 0.2)`,
              }}
              icon={getIconForExperience(index)}
              intersectionObserverProps={{
                rootMargin: '0px 0px -100px 0px',
                threshold: 0.4,
              }}
            >
              <div className="relative z-10">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2 sm:mb-3 lg:mb-4 gap-2">
                  <h3 className="vertical-timeline-element-title text-base sm:text-lg lg:text-xl font-semibold text-gray-900 dark:text-white flex-1">
                    {exp.title}
                  </h3>
                  <span className="text-xs sm:text-sm text-blue-600 dark:text-blue-400 font-medium bg-blue-100/50 dark:bg-blue-900/30 px-2 sm:px-3 py-1 rounded-full backdrop-blur-sm self-start whitespace-nowrap border border-blue-200/50 dark:border-blue-700/50">
                    {exp.timeline}
                  </span>
                </div>
                <h4 className="vertical-timeline-element-subtitle text-blue-600 dark:text-blue-400 font-medium mb-2 sm:mb-3 text-sm sm:text-base">
                  {parseMarkdownText(exp.company)}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base leading-relaxed" style={{ marginBottom: '0.75rem' }}>
                  {exp.description}
                </p>
                
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`px-2 py-0.5 sm:px-2.5 sm:py-1 lg:px-3 lg:py-1 rounded-full text-xs font-medium backdrop-blur-sm border transition-all duration-200 hover:scale-105 ${getTechColor(tech)}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Experience;