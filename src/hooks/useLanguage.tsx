import { useState, useEffect } from 'react';

export const useLanguage = () => {
  const [language, setLanguage] = useState<'en' | 'fr'>('en');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as 'en' | 'fr';
    const initialLanguage = savedLanguage || 'en';
    setLanguage(initialLanguage);
  }, []);

  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'fr' : 'en';
    setLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
  };

  return { language, toggleLanguage };
};