'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Locale = 'en' | 'de';

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

interface LanguageProviderProps {
  children: ReactNode;
  initialLocale?: Locale;
}

export function LanguageProvider({ children, initialLocale }: LanguageProviderProps) {
  const [locale, setLocaleState] = useState<Locale>(initialLocale || 'en');

  // Save locale preference to cookie and reload
  const setLocale = (newLocale: Locale) => {
    // Set cookie for server-side detection
    document.cookie = `locale=${newLocale}; path=/; max-age=31536000`; // 1 year

    // Also save to localStorage as backup
    localStorage.setItem('preferred-locale', newLocale);

    // Reload the page to apply the new locale
    window.location.reload();
  };

  // Load locale preference from localStorage on mount (for client-side consistency)
  useEffect(() => {
    const savedLocale = localStorage.getItem('preferred-locale') as Locale;
    if (savedLocale && (savedLocale === 'en' || savedLocale === 'de')) {
      setLocaleState(savedLocale);
    } else if (!initialLocale) {
      // Detect browser language on client side if no saved preference
      const browserLang = navigator.language.toLowerCase();
      const detectedLocale = browserLang.startsWith('de') ? 'de' : 'en';
      setLocaleState(detectedLocale);
    }
  }, [initialLocale]);

  return (
    <LanguageContext.Provider value={{ locale, setLocale }}>
      {children}
    </LanguageContext.Provider>
  );
}
