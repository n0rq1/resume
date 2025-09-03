import React from 'react';
import liatroLogo from '../assets/liatrio-logo.png';
import chicoLogo from '../assets/csu-chico-logo.png';

interface ExperienceItem {
  position: string;
  company: string;
  dates: string;
  logo?: string;
  description?: string;
  skills?: string[];
}

const experienceItems: ExperienceItem[] = [
  {
    position: "Apprentice DevOps Engineer",
    company: "Liatrio",
    logo: liatroLogo,
    dates: "June 2025 – Present"
  },
  {
    position: "Grader",
    company: "California State University, Chico",
    logo: chicoLogo,
    dates: "Jan 2024 – June 2024"
  },
];

export const Experience: React.FC = () => {

  return (
    <section id="experience" className="py-20 bg-transparent transition-colors duration-200 animate-fade-up">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Experience</h2>
        <div className="relative">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-800" />
          <div className="space-y-12">
            {experienceItems.map((item, index) => (
              <div key={index} className="relative grid grid-cols-1 md:grid-cols-2 md:gap-10 items-start">
                {/* Timeline node */}
                <div className="hidden md:block absolute left-1/2 -translate-x-1/2 mt-2">
                  <div className="h-3 w-3 rounded-full bg-sky-500 ring-4 ring-sky-500/20" />
                </div>

                {/* Left column (even indexes on left in md+) */}
                <div className={`${index % 2 === 0 ? 'md:pr-10 md:col-start-1' : 'md:col-start-1 md:order-2 md:pl-10'}`}>
                  {index % 2 === 0 ? (
                    <div className="card card-hover">
                      <div className="p-6">
                        <div className="flex items-start gap-4">
                          {item.logo && (
                            <div className="flex-shrink-0">
                              <div className="p-2 bg-white/80 dark:bg-gray-900/70 rounded-xl ring-1 ring-gray-200/70 dark:ring-gray-800/70">
                                <img src={item.logo} alt={`${item.company} logo`} className="w-12 h-12 object-contain" />
                              </div>
                            </div>
                          )}
                          <div className="min-w-0">
                            <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white">{item.position}</h3>
                            <span className="mt-2 inline-flex items-center rounded-full px-3 py-1 text-xs font-medium bg-sky-500/10 text-sky-600 dark:text-sky-300 ring-1 ring-sky-500/20">{item.dates}</span>
                            <div className="mt-2 text-sm text-gray-700 dark:text-gray-300">{item.company}</div>
                            {item.description && (<p className="mt-3 text-gray-600 dark:text-gray-300">{item.description}</p>)}
                            {item.skills && (
                              <div className="mt-4 pt-4 border-t border-gray-200/60 dark:border-gray-800/70 flex flex-wrap gap-2">
                                {item.skills.map((skill, i) => (
                                  <span key={i} className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-200">{skill}</span>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="md:hidden card card-hover">
                      {/* On mobile, always show the card in flow */}
                      <div className="p-6">
                        <div className="flex items-start gap-4">
                          {item.logo && (
                            <div className="flex-shrink-0">
                              <div className="p-2 bg-white/80 dark:bg-gray-900/70 rounded-xl ring-1 ring-gray-200/70 dark:ring-gray-800/70">
                                <img src={item.logo} alt={`${item.company} logo`} className="w-12 h-12 object-contain" />
                              </div>
                            </div>
                          )}
                          <div className="min-w-0">
                            <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white">{item.position}</h3>
                            <span className="mt-2 inline-flex items-center rounded-full px-3 py-1 text-xs font-medium bg-sky-500/10 text-sky-600 dark:text-sky-300 ring-1 ring-sky-500/20">{item.dates}</span>
                            <div className="mt-2 text-sm text-gray-700 dark:text-gray-300">{item.company}</div>
                            {item.description && (<p className="mt-3 text-gray-600 dark:text-gray-300">{item.description}</p>)}
                            {item.skills && (
                              <div className="mt-4 pt-4 border-t border-gray-200/60 dark:border-gray-800/70 flex flex-wrap gap-2">
                                {item.skills.map((skill, i) => (
                                  <span key={i} className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-200">{skill}</span>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Right column (odd indexes on right in md+) */}
                <div className={`${index % 2 === 0 ? 'md:col-start-2 md:pl-10' : 'md:col-start-2 md:order-1 md:pr-10'}`}>
                  {index % 2 !== 0 && (
                    <div className="hidden md:block card card-hover">
                      <div className="p-6">
                        <div className="flex items-start gap-4">
                          {item.logo && (
                            <div className="flex-shrink-0">
                              <div className="p-2 bg-white/80 dark:bg-gray-900/70 rounded-xl ring-1 ring-gray-200/70 dark:ring-gray-800/70">
                                <img src={item.logo} alt={`${item.company} logo`} className="w-12 h-12 object-contain" />
                              </div>
                            </div>
                          )}
                          <div className="min-w-0">
                            <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white">{item.position}</h3>
                            <span className="mt-2 inline-flex items-center rounded-full px-3 py-1 text-xs font-medium bg-sky-500/10 text-sky-600 dark:text-sky-300 ring-1 ring-sky-500/20">{item.dates}</span>
                            <div className="mt-2 text-sm text-gray-700 dark:text-gray-300">{item.company}</div>
                            {item.description && (<p className="mt-3 text-gray-600 dark:text-gray-300">{item.description}</p>)}
                            {item.skills && (
                              <div className="mt-4 pt-4 border-t border-gray-200/60 dark:border-gray-800/70 flex flex-wrap gap-2">
                                {item.skills.map((skill, i) => (
                                  <span key={i} className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-200">{skill}</span>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
