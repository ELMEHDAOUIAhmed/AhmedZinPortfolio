import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Briefcase, Code, Database, Smartphone, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';
import { parseMarkdownText } from '../utils/parseMarkdown';
import { getTechColor } from '../utils/techColors';

const Experience: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

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