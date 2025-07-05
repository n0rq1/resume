import React from 'react';
import liatroLogo from '../assets/liatrio-logo.png';
import chicoLogo from '../assets/chico-state-logo.png';

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
    <section id="experience" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Experience</h2>
        <div className="space-y-8">
          {experienceItems.map((item, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden transition-all duration-200 hover:shadow-lg dark:hover:shadow-xl dark:shadow-gray-700/50"
            >
              <div className="p-6">
                <div className="flex items-start">
                  {item.logo && (
                    <div className="flex-shrink-0 mr-6">
                      <div className="p-2 bg-white dark:bg-gray-700 rounded-lg shadow-sm">
                        <img
                          src={item.logo}
                          alt={`${item.company} logo`}
                          className="w-14 h-14 object-contain"
                        />
                      </div>
                    </div>
                  )}
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                      {item.position}
                    </h3>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-2">
                      <span className="font-medium text-gray-800 dark:text-gray-200">{item.company}</span>
                      <span className="hidden sm:inline text-gray-400">•</span>
                      <span className="text-gray-600 dark:text-gray-400">{item.dates}</span>
                    </div>
                    <p className="mt-3 text-gray-600 dark:text-gray-300">{item.description}</p>
                    {item.skills && (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {item.skills.map((skill, i) => (
                          <span 
                            key={i} 
                            className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-200"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
