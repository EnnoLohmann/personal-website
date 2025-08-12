'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Globe } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { setLocale } from '../lib/locale';

const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
] as const;

export default function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations('nav');

  // Get current locale from the URL or default to 'en'
  const currentLocale = typeof window !== 'undefined'
    ? (document.cookie.match(/locale=([^;]+)/)?.[1] || 'en')
    : 'en';

  const currentLanguage = languages.find(lang => lang.code === currentLocale) || languages[0];

  const handleLocaleChange = async (newLocale: 'en' | 'de') => {
    setIsOpen(false);
    await setLocale(newLocale);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 rounded-lg border border-gray-200 hover:border-gray-300 transition-colors bg-white"
        aria-label={t('language')}
      >
        <Globe className="w-4 h-4 text-gray-600" />
        <span className="text-sm font-medium text-gray-700">
          {currentLanguage.flag} {currentLanguage.code.toUpperCase()}
        </span>
        <ChevronDown 
          className={`w-4 h-4 text-gray-600 transition-transform ${
            isOpen ? 'rotate-180' : ''
          }`} 
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <div
              className="fixed inset-0 z-10"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Dropdown */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full mt-2 right-0 bg-white border border-gray-200 rounded-lg shadow-lg z-20 min-w-[140px]"
            >
              {languages.map((language) => (
                <button
                  key={language.code}
                  onClick={() => handleLocaleChange(language.code)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-gray-50 transition-colors first:rounded-t-lg last:rounded-b-lg ${
                    currentLocale === language.code ? 'bg-blue-50 text-blue-700' : 'text-gray-700'
                  }`}
                >
                  <span className="text-lg">{language.flag}</span>
                  <span className="text-sm font-medium">{language.name}</span>
                </button>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
