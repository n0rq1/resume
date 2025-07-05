import React from 'react';

interface EducationItem {
  degree: string;
  school: string;
  dates: string;
  description?: string[];
  logo?: string;
}

const educationItems: EducationItem[] = [
  {
    degree: "M.S. in Computer Science",
    school: "California State University, Chico",
    dates: "Aug 2024 - Dec 2025",
    logo: "/assets/chico-state-logo.png"
  },
  {
    degree: "B.S. in Computer Science",
    school: "California State University, Chico",
    dates: "Aug 2021 - May 2024",
    logo: "/assets/chico-state-logo.png"
  }
];

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-16 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">Education</h2>
        <div className="space-y-12">
          {educationItems.map((item, index) => (
            <div key={index} className={`mb-${index === educationItems.length - 1 ? 0 : 12}`}>
              <div className="flex items-start gap-4">
                {item.logo && (
                  <img
                    src={item.logo}
                    alt={`${item.school} logo`}
                    className="w-16 h-16 rounded-lg object-contain"
                  />
                )}
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                    {item.degree}
                  </h3>
                  <p className="text-gray-600">{item.school} • {item.dates}</p>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
