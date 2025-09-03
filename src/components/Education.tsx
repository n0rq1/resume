import React from 'react';
import chicoLogo from '../assets/csu-chico-logo.png';

interface EducationItem {
  degree: string;
  school: string;
  dates: string;
  description?: string[];
  logo?: string;
  gpa?: string;
  courses?: string[];
}

const educationItems: EducationItem[] = [
  {
    degree: "M.S. in Computer Science",
    school: "California State University, Chico",
    dates: "Aug 2024 - Dec 2025",
    logo: chicoLogo
  },
  {
    degree: "B.S. in Computer Science",
    school: "California State University, Chico",
    dates: "Aug 2021 - May 2024",
    logo: chicoLogo
  }
];

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-transparent transition-colors duration-200 animate-fade-up">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Education</h2>
        <div className="relative">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-800" />
          <div className="space-y-12">
            {educationItems.map((item, index) => (
              <div key={index} className="relative grid grid-cols-1 md:grid-cols-2 md:gap-10 items-start">
                {/* Timeline node */}
                <div className="hidden md:block absolute left-1/2 -translate-x-1/2 mt-2">
                  <div className="h-3 w-3 rounded-full bg-indigo-500 ring-4 ring-indigo-500/20" />
                </div>

                {/* Left column (even indexes left) */}
                <div className={`${index % 2 === 0 ? 'md:pr-10 md:col-start-1' : 'md:col-start-1 md:order-2 md:pl-10'}`}>
                  {index % 2 === 0 ? (
                    <div className="card card-hover">
                      <div className="p-6">
                        <div className="flex items-start gap-4">
                          {item.logo && (
                            <div className="flex-shrink-0">
                              <div className="p-2 bg-white/80 dark:bg-gray-900/70 rounded-xl ring-1 ring-gray-200/70 dark:ring-gray-800/70">
                                <img src={item.logo} alt={`${item.school} logo`} className="w-12 h-12 object-contain" />
                              </div>
                            </div>
                          )}
                          <div className="min-w-0">
                            <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white">{item.degree}</h3>
                            <span className="mt-2 inline-flex items-center rounded-full px-3 py-1 text-xs font-medium bg-indigo-500/10 text-indigo-600 dark:text-indigo-300 ring-1 ring-indigo-500/20">{item.dates}</span>
                            <div className="mt-2 text-sm sm:text-base font-medium text-gray-800 dark:text-gray-200 leading-tight">{item.school}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="md:hidden card card-hover">
                      <div className="p-6">
                        <div className="flex items-start gap-4">
                          {item.logo && (
                            <div className="flex-shrink-0">
                              <div className="p-2 bg-white/80 dark:bg-gray-900/70 rounded-xl ring-1 ring-gray-200/70 dark:ring-gray-800/70">
                                <img src={item.logo} alt={`${item.school} logo`} className="w-12 h-12 object-contain" />
                              </div>
                            </div>
                          )}
                          <div className="min-w-0">
                            <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white">{item.degree}</h3>
                            <span className="mt-2 inline-flex items-center rounded-full px-3 py-1 text-xs font-medium bg-indigo-500/10 text-indigo-600 dark:text-indigo-300 ring-1 ring-indigo-500/20">{item.dates}</span>
                            <div className="mt-2 text-sm sm:text-base font-medium text-gray-800 dark:text-gray-200 leading-tight">{item.school}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Right column (odd indexes right) */}
                <div className={`${index % 2 === 0 ? 'md:col-start-2 md:pl-10' : 'md:col-start-2 md:order-1 md:pr-10'}`}>
                  {index % 2 !== 0 && (
                    <div className="hidden md:block card card-hover">
                      <div className="p-6">
                        <div className="flex items-start gap-4">
                          {item.logo && (
                            <div className="flex-shrink-0">
                              <div className="p-2 bg-white/80 dark:bg-gray-900/70 rounded-xl ring-1 ring-gray-200/70 dark:ring-gray-800/70">
                                <img src={item.logo} alt={`${item.school} logo`} className="w-12 h-12 object-contain" />
                              </div>
                            </div>
                          )}
                          <div className="min-w-0">
                            <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white">{item.degree}</h3>
                            <span className="mt-2 inline-flex items-center rounded-full px-3 py-1 text-xs font-medium bg-indigo-500/10 text-indigo-600 dark:text-indigo-300 ring-1 ring-indigo-500/20">{item.dates}</span>
                            <div className="mt-2 text-sm sm:text-base font-medium text-gray-800 dark:text-gray-200 leading-tight">{item.school}</div>
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
