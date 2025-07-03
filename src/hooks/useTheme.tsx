import { useState, useEffect } from 'react';

export const useTheme = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  // Function to apply theme immediately
  const applyTheme = (newTheme: 'light' | 'dark') => {
    const root = document.documentElement;
    
    // Remove both classes first to ensure clean state
    root.classList.remove('dark', 'light');
    
    // Force a reflow to ensure the removal is processed
    void root.offsetHeight;
    
    // Update meta theme-color for mobile browsers
    let metaThemeColor = document.querySelector('meta[name="theme-color"]') as HTMLMetaElement;
    if (!metaThemeColor) {
      metaThemeColor = document.createElement('meta');
      metaThemeColor.name = 'theme-color';
      document.head.appendChild(metaThemeColor);
    }
    
    // Add the new theme class
    if (newTheme === 'dark') {
      root.classList.add('dark');
      metaThemeColor.content = '#111827'; // gray-900
      // Mobile-specific fixes
      if (window.innerWidth <= 767) {
        root.style.colorScheme = 'dark';
        document.body.style.color = 'rgb(255, 255, 255)';
        document.body.style.backgroundColor = 'rgb(17, 24, 39)';
      }
    } else {
      root.classList.add('light');
      metaThemeColor.content = '#ffffff'; // white
      // Mobile-specific fixes
      if (window.innerWidth <= 767) {
        root.style.colorScheme = 'light';
        document.body.style.color = 'rgb(17, 24, 39)';
        document.body.style.backgroundColor = 'rgb(255, 255, 255)';
      }
    }
    
    // Force another reflow to ensure the addition is processed
    void root.offsetHeight;
  };

  useEffect(() => {
    // Check for saved theme preference or default to system preference
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark';
    const systemPreference = window.matchMedia('(prefers-color-scheme: dark)')
      .matches
      ? 'dark'
      : 'light';
    
    // Use saved theme if available, otherwise use system preference
    const initialTheme = savedTheme || systemPreference;

    setTheme(initialTheme);
    applyTheme(initialTheme);

    // Listen for system theme changes if no saved preference
    if (!savedTheme) {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const handleChange = (e: MediaQueryListEvent) => {
        const newTheme = e.matches ? 'dark' : 'light';
        setTheme(newTheme);
        applyTheme(newTheme);
      };

      mediaQuery.addEventListener('change', handleChange);
      
      // Add window resize handler for mobile theme reapplication
      const handleResize = () => {
        applyTheme(initialTheme);
      };
      
      window.addEventListener('resize', handleResize);
      
      return () => {
        mediaQuery.removeEventListener('change', handleChange);
        window.removeEventListener('resize', handleResize);
      };
    } else {
      // Even if there's a saved theme, listen for resize events
      const handleResize = () => {
        applyTheme(initialTheme);
      };
      
      window.addEventListener('resize', handleResize);
      
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    applyTheme(newTheme);
    
    // Force a re-render by triggering a small DOM change
    document.body.style.transform = 'translateZ(0)';
    requestAnimationFrame(() => {
      document.body.style.transform = '';
    });
  };

  return { theme, toggleTheme };
};