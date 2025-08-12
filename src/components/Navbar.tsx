'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { useTranslations } from 'next-intl';
import LanguageSwitcher from './LanguageSwitcher';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const pathname = usePathname();
  const t = useTranslations('nav');

  const navItems = [
    { name: t('about'), href: '/', description: t('aboutDescription') },
    { name: t('technologies'), href: '/technologies', description: t('technologiesDescription') },
    { name: t('projects'), href: '/projects', description: t('projectsDescription') },
    { name: t('hobbies'), href: '/hobbies', description: t('hobbiesDescription') },
    { name: t('contact'), href: '/contact', description: t('contactDescription') },
  ];

  return (
    <>
      {/* Main Navigation */}
      <nav className="w-full py-4 px-6 md:px-12 lg:px-20 bg-gradient-to-r from-white/95 via-slate-50/95 to-white/95 backdrop-blur-md border-b-2 border-slate-200/60 sticky top-0 z-50 shadow-sm">
        <div className="w-full max-w-none">
          <div className="flex justify-between items-center">
            {/* Logo/Name - Enhanced */}
            <Link
              href="/"
              className="group flex items-center space-x-4"
            >
              <div className="relative">
                <div className="w-14 h-14 bg-gradient-to-br from-gray-900 to-gray-700 rounded-2xl flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                  <span className="text-white font-bold text-xl">EL</span>
                </div>
                <div className="absolute -inset-0.5 bg-gradient-to-br from-gray-900 to-gray-700 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-200 blur -z-10"></div>
              </div>
              <div className="hidden sm:block">
                <div className="text-2xl font-medium text-gray-900 group-hover:text-gray-700 transition-colors">
                  Enno Lohmann
                </div>
                <div className="text-sm text-gray-500 -mt-0.5">
                  Software Engineer
                </div>
              </div>
            </Link>

            {/* Desktop Navigation - Enhanced and Centered */}
            <div className="hidden lg:flex items-center gap-6 flex-1 justify-center">
              {navItems.map((item, index) => {
                // Pastel color palette for each nav item
                const pastelColors = [
                  { bg: 'bg-rose-50', border: 'border-rose-200', text: 'text-rose-700', hover: 'hover:bg-rose-100' },
                  { bg: 'bg-blue-50', border: 'border-blue-200', text: 'text-blue-700', hover: 'hover:bg-blue-100' },
                  { bg: 'bg-emerald-50', border: 'border-emerald-200', text: 'text-emerald-700', hover: 'hover:bg-emerald-100' },
                  { bg: 'bg-purple-50', border: 'border-purple-200', text: 'text-purple-700', hover: 'hover:bg-purple-100' },
                  { bg: 'bg-amber-50', border: 'border-amber-200', text: 'text-amber-700', hover: 'hover:bg-amber-100' },
                ];
                const colors = pastelColors[index % pastelColors.length];

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onMouseEnter={() => setHoveredItem(item.name)}
                    onMouseLeave={() => setHoveredItem(null)}
                    className="relative group px-4 py-2 rounded-2xl transition-all duration-300 border-2 border-transparent"
                  >
                    <div className="relative z-10">
                      <div className={`text-base font-medium transition-colors ${
                        pathname === item.href
                          ? `${colors.text} font-semibold`
                          : 'text-gray-600 group-hover:text-gray-900'
                      }`}>
                        {item.name}
                      </div>
                      <div className={`text-sm transition-all duration-300 mt-1 ${
                        hoveredItem === item.name || pathname === item.href
                          ? 'text-gray-500 opacity-100 translate-y-0'
                          : 'text-gray-400 opacity-0 -translate-y-1'
                      }`}>
                        {item.description}
                      </div>
                    </div>

                    {/* Active indicator with pastel colors */}
                    {pathname === item.href && (
                      <motion.div
                        layoutId="activeTab"
                        className={`absolute inset-0 ${colors.bg} ${colors.border} border-2 rounded-2xl`}
                        initial={false}
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}

                    {/* Hover effect with pastel colors */}
                    <div className={`absolute inset-0 ${colors.bg} ${colors.border} border-2 rounded-2xl transition-all duration-300 ${
                      hoveredItem === item.name && pathname !== item.href ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
                    }`} />
                  </Link>
                );
              })}
            </div>

            {/* Language Switcher - Desktop */}
            <div className="hidden lg:block">
              <LanguageSwitcher />
            </div>

            {/* Mobile menu button - Enhanced */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden relative w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center hover:bg-slate-100 transition-all duration-300 border-2 border-slate-200 hover:border-slate-300 hover:scale-105"
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-6 h-6 text-gray-700" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-6 h-6 text-gray-700" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setIsOpen(false)}
            />

            {/* Mobile Menu */}
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ type: "spring", bounce: 0.1, duration: 0.4 }}
              className="fixed top-32 left-6 right-6 bg-white rounded-3xl shadow-2xl border-2 border-gray-100 z-50 lg:hidden overflow-hidden"
            >
              <div className="p-8">
                <div className="space-y-3">
                  {navItems.map((item, index) => {
                    // Same pastel color palette for mobile
                    const pastelColors = [
                      { bg: 'bg-rose-50', border: 'border-rose-200', text: 'text-rose-700', hover: 'hover:bg-rose-100' },
                      { bg: 'bg-blue-50', border: 'border-blue-200', text: 'text-blue-700', hover: 'hover:bg-blue-100' },
                      { bg: 'bg-emerald-50', border: 'border-emerald-200', text: 'text-emerald-700', hover: 'hover:bg-emerald-100' },
                      { bg: 'bg-purple-50', border: 'border-purple-200', text: 'text-purple-700', hover: 'hover:bg-purple-100' },
                      { bg: 'bg-amber-50', border: 'border-amber-200', text: 'text-amber-700', hover: 'hover:bg-amber-100' },
                    ];
                    const colors = pastelColors[index % pastelColors.length];

                    return (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Link
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className={`group flex items-center justify-between px-4 py-2 rounded-2xl transition-all duration-300 border-2 ${
                            pathname === item.href
                              ? `${colors.bg} ${colors.border} ${colors.text}`
                              : `text-gray-600 border-transparent ${colors.hover} hover:text-gray-900 hover:border-gray-200`
                          }`}
                        >
                          <div>
                            <div className={`font-medium text-lg ${
                              pathname === item.href ? 'font-semibold' : ''
                            }`}>
                              {item.name}
                            </div>
                            <div className="text-base text-gray-500 mt-1">
                              {item.description}
                            </div>
                          </div>
                          <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Language Switcher - Mobile */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <LanguageSwitcher />
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
