import { useState, useEffect } from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';

// Helper function to safely access localStorage
const safeLocalStorage = {
  getItem: (key: string): string | null => {
    if (typeof window === 'undefined') return null;
    try {
      return localStorage.getItem(key);
    } catch (error) {
      console.error('Error accessing localStorage:', error);
      return null;
    }
  },
  setItem: (key: string, value: string): void => {
    if (typeof window === 'undefined') return;
    try {
      localStorage.setItem(key, value);
      // Dispatch a custom event when theme changes
      document.documentElement.dispatchEvent(
        new CustomEvent('theme-changed', { detail: { theme: value } })
      );
    } catch (error) {
      console.error('Error setting localStorage:', error);
    }
  }
};

export const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);

  // After mounting, sync with the current theme
  useEffect(() => {
    setMounted(true);
    
    const updateFromDOM = () => {
      const isDark = document.documentElement.classList.contains('dark');
      setDarkMode(isDark);
    };
    
    // Initial sync
    updateFromDOM();
    
    // Listen for theme changes from other instances
    const handleThemeChange = () => updateFromDOM();
    document.documentElement.addEventListener('theme-changed', handleThemeChange);
    
    // Cleanup
    return () => {
      document.documentElement.removeEventListener('theme-changed', handleThemeChange);
    };
  }, []);

  // Update the theme when darkMode changes
  useEffect(() => {
    if (!mounted) return;
    
    if (darkMode) {
      document.documentElement.classList.add('dark');
      document.documentElement.setAttribute('data-theme', 'dark');
      safeLocalStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.setAttribute('data-theme', 'light');
      safeLocalStorage.setItem('theme', 'light');
    }
  }, [darkMode, mounted]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-gray-800 transition-colors duration-200"
      aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {darkMode ? (
        <SunIcon className="h-6 w-6 text-yellow-300" />
      ) : (
        <MoonIcon className="h-6 w-6 text-gray-600" />
      )}
    </button>
  );
};
