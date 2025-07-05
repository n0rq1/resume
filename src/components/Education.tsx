import React from 'react';
import chicoLogo from '../assets/chico-state-logo.png';

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
    <section id="education" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Education</h2>
        <div className="space-y-8">
          {educationItems.map((item, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden transition-all duration-200 hover:shadow-lg dark:hover:shadow-xl dark:shadow-gray-700/50"
            >
              <div className="p-6 h-full flex flex-col">
                <div className="flex items-start">
                  {item.logo && (
                    <div className="flex-shrink-0 mr-6">
                      <div className="p-2 bg-white dark:bg-gray-700 rounded-lg shadow-sm">
                        <img
                          src={item.logo}
                          alt={`${item.school} logo`}
                          className="w-14 h-14 object-contain"
                        />
                      </div>
                    </div>
                  )}
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                      {item.degree}
                    </h3>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-2">
                      <span className="font-medium text-gray-800 dark:text-gray-200">{item.school}</span>
                      <span className="hidden sm:inline text-gray-400">•</span>
                      <span className="text-gray-600 dark:text-gray-400">{item.dates}</span>
                    </div>
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
