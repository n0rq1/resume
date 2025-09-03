import { useState, useEffect, useRef } from 'react';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Navbar } from './components/Navbar';

function App() {
  const [activeSection, setActiveSection] = useState('about');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});
  const scrollTimeout = useRef<ReturnType<typeof setTimeout>>();
  // Suppress scroll-driven active updates while performing programmatic smooth scroll
  const suppressScrollUpdates = useRef(false);
  const suppressTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    // Set up section refs
    sectionRefs.current = {
      about: document.getElementById('about'),
      experience: document.getElementById('experience'),
      education: document.getElementById('education')
    };

    const handleScroll = () => {
      if (suppressScrollUpdates.current) return; // keep the clicked nav item highlighted during smooth scroll
      const scrollPosition = window.scrollY + window.innerHeight / 3; // Changed from /2 to /3
      let currentSection = 'about';
      let closestSection = '';
      let closestDistance = Infinity;
      
      // Find which section is currently in or closest to the viewport
      Object.entries(sectionRefs.current).forEach(([sectionId, element]) => {
        if (element) {
          const { top, bottom, height } = element.getBoundingClientRect();
          const elementTop = top + window.scrollY;
          const elementBottom = bottom + window.scrollY;
          const elementMiddle = elementTop + height / 2;
          
          // Check if section is in viewport
          if (scrollPosition >= elementTop && scrollPosition <= elementBottom) {
            currentSection = sectionId;
          }
          
          // Track the closest section to the current scroll position
          const distance = Math.abs(scrollPosition - elementMiddle);
          if (distance < closestDistance) {
            closestDistance = distance;
            closestSection = sectionId;
          }
        }
      });
      
      // If we're at the bottom of the page, ensure the last section is active
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
        currentSection = 'education';
      } else if (currentSection === 'about' && scrollPosition > 100) {
        // If we're not at the top but still showing 'about', use the closest section
        currentSection = closestSection;
      }
      
      setActiveSection(currentSection);
    };

    // Smooth scroll behavior for anchor links
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a');
      
      if (link && link.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const id = link.getAttribute('href')?.substring(1);
        
        if (id && Object.keys(sectionRefs.current).includes(id)) {
          // Update active section immediately
          setActiveSection(id);
          // Suppress scroll-driven updates briefly so the active state doesn't flicker
          suppressScrollUpdates.current = true;
          if (suppressTimeout.current) clearTimeout(suppressTimeout.current);
          
          // Scroll to position the section higher up in the viewport
          const element = document.getElementById(id);
          if (element) {
            const viewportHeight = window.innerHeight;
            const elementHeight = element.offsetHeight;
            const scrollPosition = element.offsetTop - ((viewportHeight - elementHeight) * 0.4); // 40% from top of viewport
            
            window.scrollTo({
              top: Math.max(0, scrollPosition), // Ensure we don't scroll above the top
              behavior: 'smooth'
            });

            // Re-enable scroll-driven updates after the smooth scroll likely finishes
            suppressTimeout.current = setTimeout(() => {
              suppressScrollUpdates.current = false;
            }, 600);
          }
        }
      }
    };

    // Debounced scroll handler
    const debouncedHandleScroll = () => {
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
      scrollTimeout.current = setTimeout(() => {
        handleScroll();
      }, 50); // 50ms delay
    };

    // Add event listeners
    window.addEventListener('scroll', debouncedHandleScroll, { passive: true });
    document.addEventListener('click', handleClick);
    
    // Initial check
    handleScroll();
    
    return () => {
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
      window.removeEventListener('scroll', debouncedHandleScroll);
      document.removeEventListener('click', handleClick);
      if (suppressTimeout.current) {
        clearTimeout(suppressTimeout.current);
      }
    };
  }, []);

  // Removed redundant second scroll listener to avoid fighting the active state during smooth scroll

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMenuOpen]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const menuButton = document.getElementById('menu-button');
      const menu = document.getElementById('mobile-menu');
      
      if (isMenuOpen && menuButton && menu && 
          !menuButton.contains(e.target as Node) && 
          !menu.contains(e.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

  // Set initial theme based on user preference
  useEffect(() => {
    // Check for saved theme preference or use system preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    // Add transition class after initial render to prevent flash of unstyled content
    const timeout = setTimeout(() => {
      document.documentElement.classList.add('transition-colors');
      document.documentElement.classList.add('duration-200');
    }, 0);
    
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="min-h-screen bg-transparent transition-colors duration-200">
      <Navbar 
        activeSection={activeSection} 
        setActiveSection={setActiveSection} 
        isMenuOpen={isMenuOpen} 
        onMenuToggle={setIsMenuOpen} 
      />
      <main className="container mx-auto px-4 pt-24 pb-12">
        <About />
        <Experience />
        <Education />
      </main>
      <footer className="py-6 text-center text-sm text-gray-500 dark:text-gray-400">
        <p> {new Date().getFullYear()} Austin Norquist</p>
      </footer>
    </div>
  );
}

export default App;
