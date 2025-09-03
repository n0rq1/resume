import React from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import logo from '../assets/cool-picture.png';
import { ThemeToggle } from './ThemeToggle';

interface NavbarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  isMenuOpen: boolean;
  onMenuToggle: (isOpen: boolean) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  activeSection, 
  setActiveSection, 
  isMenuOpen, 
  onMenuToggle 
}) => {
  
  const sections = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
  ];

  return (
    <nav className="fixed w-full glass-nav z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center space-x-2">
            <img 
              src={logo} 
              alt="Logo" 
              className="h-8 w-8 rounded-full object-cover"
            />
            <a href="#" className="text-xl font-bold text-gray-900 dark:text-white">
              <span className="text-gradient">Austin Norquist</span>
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className={`px-3 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeSection === section.id 
                    ? 'bg-gray-100/80 dark:bg-gray-700/70 text-gray-900 dark:text-white ring-1 ring-gray-200/70 dark:ring-gray-600/60' 
                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100/60 dark:hover:bg-gray-700/50 hover:text-gray-900 dark:hover:text-white'
                }`}
                onClick={() => setActiveSection(section.id)}
              >
                {section.label}
              </a>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              onClick={() => onMenuToggle(!isMenuOpen)}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              <span className="sr-only">{isMenuOpen ? 'Close main menu' : 'Open main menu'}</span>
              {isMenuOpen ? (
                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden glass-nav border-t">
          <div className="space-y-1 px-2 pb-3 pt-2">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                onClick={() => {
                  setActiveSection(section.id);
                  onMenuToggle(false);
                }}
                className={`block px-3 py-2 rounded-full text-base font-medium ${
                  activeSection === section.id
                    ? 'bg-blue-100/80 dark:bg-blue-900/50 text-blue-700 dark:text-blue-100 ring-1 ring-blue-200/70 dark:ring-blue-700/50'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100/70 dark:hover:bg-gray-700/50'
                }`}
              >
                {section.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};
