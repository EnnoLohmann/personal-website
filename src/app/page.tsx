'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import OptimizedImage from '@/components/OptimizedImage';
import { useTranslations } from 'next-intl';

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" }
};

export default function Home() {
  const t = useTranslations('home');
  const tNav = useTranslations('nav');

  return (
    <div className="bg-white w-full">
      {/* Hero Section */}
      <section className="py-16 md:py-24 w-full">
        <div className="w-full max-w-none px-6 md:px-12 lg:px-20">
          {/* Hero Image - Portrait */}
          <div className="w-full max-w-2xl mx-auto mb-16 flex justify-center">
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-lg">
              <OptimizedImage
                src="/portrait.jpg"
                alt="Enno Lohmann - Fullstack Developer"
                width={256}
                height={256}
                priority
                className="w-full h-full object-cover"
                sizes="(max-width: 768px) 192px, 256px"
              />
            </div>
          </div>

          {/* Main Content */}
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeIn}
            className="w-full max-w-6xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-8 leading-tight">
              {t('title')}
            </h1>

            <div className="space-y-8 text-lg md:text-xl leading-relaxed text-gray-700 max-w-4xl mx-auto">
              <p>
                {t('description')}
              </p>

              <div className="grid md:grid-cols-2 gap-12 mt-16">
                <div>
                  <h2 className="text-sm uppercase tracking-wider text-gray-500 mb-4">{t('experienceTitle')}</h2>
                  <p className="text-base text-gray-600 leading-relaxed">
                    {t('experienceText')}
                  </p>
                </div>

                <div>
                  <h2 className="text-sm uppercase tracking-wider text-gray-500 mb-4">{t('qualityTitle')}</h2>
                  <p className="text-base text-gray-600 leading-relaxed">
                    {t('qualityText')}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Stats Section */}
      <section className="py-16 bg-blue-50 w-full">
        <div className="w-full max-w-none px-6 md:px-12 lg:px-20">
          <motion.div
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="text-3xl font-light text-blue-600 mb-2">8+</div>
                <div className="text-sm uppercase tracking-wider text-gray-500">{t('stats.yearsExperience')}</div>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="text-3xl font-light text-blue-600 mb-2">120+</div>
                <div className="text-sm uppercase tracking-wider text-gray-500">{t('stats.projectStakeholders')}</div>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="text-3xl font-light text-blue-600 mb-2">15+</div>
                <div className="text-sm uppercase tracking-wider text-gray-500">{t('stats.technologiesMastered')}</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-gray-50 w-full">
        <div className="w-full max-w-none px-6 md:px-12 lg:px-20">
          <div className="max-w-6xl mx-auto">
            <motion.div variants={fadeIn} initial="initial" whileInView="animate" viewport={{ once: true }}>
              <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-12 text-center">
                {t('journeyTitle')}
              </h2>

              <div className="grid md:grid-cols-2 gap-16 items-center">
                <div className="space-y-6 text-lg leading-relaxed text-gray-700">
                  <p>
                    {t('journeyText1')}
                  </p>

                  <p>
                    {t('journeyText2')}
                  </p>

                  <p>
                    {t('journeyText3')}
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-3">{t('currentFocusTitle')}</h3>
                    <p className="text-gray-700">
                      {t('currentFocusText')}
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-3">{t('philosophyTitle')}</h3>
                    <p className="text-gray-700">
                      {t('philosophyText')}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Personal Interests Preview */}
      <section className="py-24 bg-white w-full">
        <div className="w-full max-w-none px-6 md:px-12 lg:px-20">
          <motion.div
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="max-w-6xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-8">
              {t('beyondCodeTitle')}
            </h2>
            <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
              {t('beyondCodeText')}
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <Link href="/hobbies" className="group">
                <div className="bg-gray-100 rounded-lg p-8 group-hover:bg-gray-200 transition-colors">
                  <div className="text-4xl mb-4">🎮</div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2 group-hover:text-blue-600">{t('gamingTitle')}</h3>
                  <p className="text-gray-600 text-sm">{t('gamingText')}</p>
                </div>
              </Link>

              <Link href="/hobbies" className="group">
                <div className="bg-gray-100 rounded-lg p-8 group-hover:bg-gray-200 transition-colors">
                  <div className="text-4xl mb-4">🐕</div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2 group-hover:text-blue-600">{t('dogTrainingTitle')}</h3>
                  <p className="text-gray-600 text-sm">{t('dogTrainingText')}</p>
                </div>
              </Link>

              <Link href="/hobbies" className="group">
                <div className="bg-gray-100 rounded-lg p-8 group-hover:bg-gray-200 transition-colors">
                  <div className="text-4xl mb-4">🚀</div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2 group-hover:text-blue-600">{t('techInnovationTitle')}</h3>
                  <p className="text-gray-600 text-sm">{t('techInnovationText')}</p>
                </div>
              </Link>
            </div>

            <div className="mt-12">
              <Link
                href="/hobbies"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium group"
              >
                {t('discoverMore')}
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Explore More Section */}
      <section className="py-24 bg-gradient-to-br from-blue-50 to-indigo-100 w-full">
        <div className="w-full max-w-none px-6 md:px-12 lg:px-20">
          <motion.div
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="max-w-6xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-8">
              {t('exploreMoreTitle')}
            </h2>
            <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
              {t('exploreMoreText')}
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link
                href="/technologies"
                className="group bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
              >
                <div className="text-3xl mb-4">⚡</div>
                <h3 className="text-lg font-medium text-gray-900 mb-2 group-hover:text-blue-600">{tNav('technologies')}</h3>
                <p className="text-gray-600 text-sm mb-4">{t('technologiesCard')}</p>
                <div className="flex items-center text-blue-600 text-sm font-medium">
                  {t('viewSkills')} <ArrowRight className="ml-1 w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>

              <Link
                href="/projects"
                className="group bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
              >
                <div className="text-3xl mb-4">🚀</div>
                <h3 className="text-lg font-medium text-gray-900 mb-2 group-hover:text-blue-600">{tNav('projects')}</h3>
                <p className="text-gray-600 text-sm mb-4">{t('projectsCard')}</p>
                <div className="flex items-center text-blue-600 text-sm font-medium">
                  {t('viewWork')} <ArrowRight className="ml-1 w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>

              <Link
                href="/hobbies"
                className="group bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
              >
                <div className="text-3xl mb-4">🎯</div>
                <h3 className="text-lg font-medium text-gray-900 mb-2 group-hover:text-blue-600">{tNav('hobbies')}</h3>
                <p className="text-gray-600 text-sm mb-4">{t('hobbiesCard')}</p>
                <div className="flex items-center text-blue-600 text-sm font-medium">
                  {t('learnMore')} <ArrowRight className="ml-1 w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>

              <Link
                href="/contact"
                className="group bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
              >
                <div className="text-3xl mb-4">💬</div>
                <h3 className="text-lg font-medium text-gray-900 mb-2 group-hover:text-blue-600">{tNav('contact')}</h3>
                <p className="text-gray-600 text-sm mb-4">{t('contactCard')}</p>
                <div className="flex items-center text-blue-600 text-sm font-medium">
                  {t('getInTouch')} <ArrowRight className="ml-1 w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-white border-t-2 border-gray-100 w-full">
        <div className="w-full max-w-none px-6 md:px-12 lg:px-20">
          <div className="text-center max-w-6xl mx-auto">
            <p className="text-sm text-gray-500">
              {t('copyright')}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
