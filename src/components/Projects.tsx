import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { translations } from '../data/translations';

const Projects: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const getTechColor = (tech: string) => {
    const colors = {
      'React': 'bg-cyan-100/80 text-cyan-800 dark:bg-cyan-900/50 dark:text-cyan-200 border-cyan-200/50 dark:border-cyan-700/50',
      'Node.js': 'bg-green-100/80 text-green-800 dark:bg-green-900/50 dark:text-green-200 border-green-200/50 dark:border-green-700/50',
      'PostgreSQL': 'bg-indigo-100/80 text-indigo-800 dark:bg-indigo-900/50 dark:text-indigo-200 border-indigo-200/50 dark:border-indigo-700/50',
      'Stripe': 'bg-purple-100/80 text-purple-800 dark:bg-purple-900/50 dark:text-purple-200 border-purple-200/50 dark:border-purple-700/50',
      'AWS': 'bg-orange-100/80 text-orange-800 dark:bg-orange-900/50 dark:text-orange-200 border-orange-200/50 dark:border-orange-700/50',
      'Flutter': 'bg-blue-100/80 text-blue-800 dark:bg-blue-900/50 dark:text-blue-200 border-blue-200/50 dark:border-blue-700/50',
      'Python': 'bg-green-100/80 text-green-800 dark:bg-green-900/50 dark:text-green-200 border-green-200/50 dark:border-green-700/50',
      'MQTT': 'bg-purple-100/80 text-purple-800 dark:bg-purple-900/50 dark:text-purple-200 border-purple-200/50 dark:border-purple-700/50',
      'InfluxDB': 'bg-blue-100/80 text-blue-800 dark:bg-blue-900/50 dark:text-blue-200 border-blue-200/50 dark:border-blue-700/50',
      'Grafana': 'bg-red-100/80 text-red-800 dark:bg-red-900/50 dark:text-red-200 border-red-200/50 dark:border-red-700/50',
      'Firebase': 'bg-yellow-100/80 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-200 border-yellow-200/50 dark:border-yellow-700/50',
      'MongoDB': 'bg-green-100/80 text-green-800 dark:bg-green-900/50 dark:text-green-200 border-green-200/50 dark:border-green-700/50',
      'TypeScript': 'bg-blue-100/80 text-blue-800 dark:bg-blue-900/50 dark:text-blue-200 border-blue-200/50 dark:border-blue-700/50',
      'D3.js': 'bg-orange-100/80 text-orange-800 dark:bg-orange-900/50 dark:text-orange-200 border-orange-200/50 dark:border-orange-700/50',
      'Go': 'bg-cyan-100/80 text-cyan-800 dark:bg-cyan-900/50 dark:text-cyan-200 border-cyan-200/50 dark:border-cyan-700/50',
      'Docker': 'bg-blue-100/80 text-blue-800 dark:bg-blue-900/50 dark:text-blue-200 border-blue-200/50 dark:border-blue-700/50',
      'GoLang': 'bg-cyan-100/80 text-cyan-800 dark:bg-cyan-900/50 dark:text-cyan-200 border-cyan-200/50 dark:border-cyan-700/50',
      'PKI': 'bg-red-100/80 text-red-800 dark:bg-red-900/50 dark:text-red-200 border-red-200/50 dark:border-red-700/50',
      'Microservices': 'bg-teal-100/80 text-teal-800 dark:bg-teal-900/50 dark:text-teal-200 border-teal-200/50 dark:border-teal-700/50',
      'Arduino': 'bg-emerald-100/80 text-emerald-800 dark:bg-emerald-900/50 dark:text-emerald-200 border-emerald-200/50 dark:border-emerald-700/50',
      'Bluetooth': 'bg-blue-100/80 text-blue-800 dark:bg-blue-900/50 dark:text-blue-200 border-blue-200/50 dark:border-blue-700/50',
      'Payment System': 'bg-green-100/80 text-green-800 dark:bg-green-900/50 dark:text-green-200 border-green-200/50 dark:border-green-700/50',
      'IoT': 'bg-orange-100/80 text-orange-800 dark:bg-orange-900/50 dark:text-orange-200 border-orange-200/50 dark:border-orange-700/50',
      'RAD Window': 'bg-purple-100/80 text-purple-800 dark:bg-purple-900/50 dark:text-purple-200 border-purple-200/50 dark:border-purple-700/50',
      'Database': 'bg-violet-100/80 text-violet-800 dark:bg-violet-900/50 dark:text-violet-200 border-violet-200/50 dark:border-violet-700/50',
      'Agile': 'bg-pink-100/80 text-pink-800 dark:bg-pink-900/50 dark:text-pink-200 border-pink-200/50 dark:border-pink-700/50',
      'HTML': 'bg-orange-100/80 text-orange-800 dark:bg-orange-900/50 dark:text-orange-200 border-orange-200/50 dark:border-orange-700/50',
      'CSS': 'bg-blue-100/80 text-blue-800 dark:bg-blue-900/50 dark:text-blue-200 border-blue-200/50 dark:border-blue-700/50',
      'JavaScript': 'bg-yellow-100/80 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-200 border-yellow-200/50 dark:border-yellow-700/50',
      'PHP': 'bg-purple-100/80 text-purple-800 dark:bg-purple-900/50 dark:text-purple-200 border-purple-200/50 dark:border-purple-700/50',
      'MySQL': 'bg-blue-100/80 text-blue-800 dark:bg-blue-900/50 dark:text-blue-200 border-blue-200/50 dark:border-blue-700/50',
      'JavaFX': 'bg-red-100/80 text-red-800 dark:bg-red-900/50 dark:text-red-200 border-red-200/50 dark:border-red-700/50',
      'SQL': 'bg-indigo-100/80 text-indigo-800 dark:bg-indigo-900/50 dark:text-indigo-200 border-indigo-200/50 dark:border-indigo-700/50',
      'Database Design': 'bg-violet-100/80 text-violet-800 dark:bg-violet-900/50 dark:text-violet-200 border-violet-200/50 dark:border-violet-700/50',
    };
    return colors[tech as keyof typeof colors] || 'bg-gray-100/80 text-gray-800 dark:bg-gray-700/50 dark:text-gray-200 border-gray-200/50 dark:border-gray-600/50';
  };

  return (
    <section id="projects" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-indigo-50/50 dark:from-gray-800 dark:to-gray-900/50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-40 left-40 w-72 h-72 bg-gradient-to-br from-indigo-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-40 w-72 h-72 bg-gradient-to-tr from-purple-400/10 to-pink-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t.projects.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {t.projects.projects.map((project) => (
            <div
              key={project.id}
              className="bg-white/30 dark:bg-gray-900/30 backdrop-blur-xl rounded-2xl shadow-xl border border-white/20 dark:border-gray-700/20 overflow-hidden hover:shadow-2xl transition-all duration-300 group hover:scale-105"
            >
              <div className="p-4 sm:p-6">
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.name}
                  </h3>
                  <div className="flex space-x-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 sm:p-2 bg-white/20 dark:bg-gray-800/20 backdrop-blur-sm rounded-lg text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-all duration-200 hover:scale-110 border border-white/20 dark:border-gray-700/20"
                      >
                        <Github className="w-4 h-4 sm:w-5 sm:h-5" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 sm:p-2 bg-white/20 dark:bg-gray-800/20 backdrop-blur-sm rounded-lg text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-all duration-200 hover:scale-110 border border-white/20 dark:border-gray-700/20"
                      >
                        <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
                      </a>
                    )}
                  </div>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm sm:text-base">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`px-2 sm:px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm border transition-all duration-200 hover:scale-105 ${getTechColor(tech)}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;