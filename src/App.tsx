import { useState, useEffect, useRef } from 'react';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Navbar } from './components/Navbar';

function App() {
  const [activeSection, setActiveSection] = useState('about');
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});
  const scrollTimeout = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    // Set up section refs
    sectionRefs.current = {
      about: document.getElementById('about'),
      experience: document.getElementById('experience'),
      education: document.getElementById('education')
    };

    const handleScroll = () => {
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
    };
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar activeSection={activeSection} />
      <main className="pt-20">
        <About />
        <Experience />
        <Education />
      </main>
    </div>
  );
}

export default App;
