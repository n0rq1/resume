import React from 'react';

interface ExperienceItem {
  position: string;
  company: string;
  dates: string;
  logo?: string;
}

const experienceItems: ExperienceItem[] = [
  {
    position: "Apprentice DevOps Engineer",
    company: "Liatrio",
    logo: '/assets/liatrio-logo.png',
    dates: "June 2025 – Present"
  },
  {
    position: "Grader",
    company: "California State University, Chico",
    logo: '/assets/chico-state-logo.png',
    dates: "Jan 2024 – June 2024"
  },
];

export const Experience: React.FC = () => {


  return (
    <section id="experience" className="py-16 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">Experience</h2>
        <div className="space-y-12">
          {experienceItems.map((item, index) => (
            <div key={index} className={`mb-${index === experienceItems.length - 1 ? 0 : 12}`}>
              <div className="flex items-start gap-4">
                {item.logo && (
                  <img
                    src={item.logo}
                    alt={`${item.company} logo`}
                    className="w-16 h-16 rounded-lg object-contain"
                  />
                )}
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                    {item.position}
                  </h3>
                  <p className="text-gray-600">{item.company} • {item.dates}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
