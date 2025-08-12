'use client';

import { motion } from 'framer-motion';
import { Briefcase, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" }
};

export default function Home() {
  return (
    <div className="bg-white w-full">
      {/* Hero Section */}
      <section className="py-16 md:py-24 w-full">
        <div className="w-full max-w-none px-6 md:px-12 lg:px-20">
          {/* Hero Image - Portrait */}
          <div className="w-full max-w-2xl mx-auto mb-16 flex justify-center">
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-lg">
              <img
                src="/portrait.jpg"
                alt="Enno Lohmann - Fullstack Developer"
                className="w-full h-full object-cover"
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
              Enno Lohmann
            </h1>

            <div className="space-y-8 text-lg md:text-xl leading-relaxed text-gray-700 max-w-4xl mx-auto">
              <p>
                As a passionate fullstack developer specializing in Java and modern web frameworks, I've been helping clients across diverse industries bring their software visions to life for over eight years.
              </p>

              <div className="grid md:grid-cols-2 gap-12 mt-16">
                <div>
                  <h2 className="text-sm uppercase tracking-wider text-gray-500 mb-4">EXPERIENCE</h2>
                  <p className="text-base text-gray-600 leading-relaxed">
                    From intimate three-developer teams to large-scale digital transformation projects with 120+ stakeholders, I thrive in collaborative environments and believe in the power of cross-functional teamwork to deliver exceptional results.
                  </p>
                </div>

                <div>
                  <h2 className="text-sm uppercase tracking-wider text-gray-500 mb-4">QUALITY</h2>
                  <p className="text-base text-gray-600 leading-relaxed">
                    I'm committed to delivering software excellence through clean, maintainable code, comprehensive testing, and performance optimization. Quality isn't just a goal—it's a fundamental principle that guides every line of code I write.
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
                <div className="text-sm uppercase tracking-wider text-gray-500">Years Experience</div>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="text-3xl font-light text-blue-600 mb-2">120+</div>
                <div className="text-sm uppercase tracking-wider text-gray-500">Project Stakeholders</div>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="text-3xl font-light text-blue-600 mb-2">15+</div>
                <div className="text-sm uppercase tracking-wider text-gray-500">Technologies Mastered</div>
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
                My Journey
              </h2>

              <div className="grid md:grid-cols-2 gap-16 items-center">
                <div className="space-y-6 text-lg leading-relaxed text-gray-700">
                  <p>
                    My passion for software development began over eight years ago, and since then, I've had the privilege of working on everything from <Link href="/projects" className="text-blue-600 hover:text-blue-800 underline">large-scale insurance platforms</Link> to innovative case management systems for government agencies.
                  </p>

                  <p>
                    What drives me most is the intersection of technical excellence and human impact. Whether I'm building <Link href="/technologies" className="text-blue-600 hover:text-blue-800 underline">full-stack solutions with Java and Angular</Link> or architecting cloud-native applications, I always keep the end user's experience at the forefront.
                  </p>

                  <p>
                    Beyond the code, I believe in fostering collaborative environments where knowledge flows freely. From mentoring junior developers to facilitating cross-functional workshops, I've learned that the best software emerges from diverse perspectives working in harmony.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-3">Current Focus</h3>
                    <p className="text-gray-700">
                      Leading full-stack development on next-generation insurance platforms, combining modern web technologies with robust backend systems to transform how customers interact with insurance services.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-3">Philosophy</h3>
                    <p className="text-gray-700">
                      Quality isn't just about bug-free code—it's about creating solutions that are maintainable, scalable, and genuinely useful. Every line of code should serve a purpose and contribute to the bigger picture.
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
              Beyond the Code
            </h2>
            <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
              When I'm not crafting software solutions, you'll find me exploring virtual worlds, training with my four-legged companions, or diving into the latest tech innovations.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <Link href="/hobbies" className="group">
                <div className="bg-gray-100 rounded-lg p-8 group-hover:bg-gray-200 transition-colors">
                  <div className="text-4xl mb-4">🎮</div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2 group-hover:text-blue-600">Gaming Enthusiast</h3>
                  <p className="text-gray-600 text-sm">From strategic thinking in Age of Empires to the challenging worlds of Dark Souls</p>
                </div>
              </Link>

              <Link href="/hobbies" className="group">
                <div className="bg-gray-100 rounded-lg p-8 group-hover:bg-gray-200 transition-colors">
                  <div className="text-4xl mb-4">🐕</div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2 group-hover:text-blue-600">Dog Training</h3>
                  <p className="text-gray-600 text-sm">Building strong bonds and communication with our four-legged companions</p>
                </div>
              </Link>

              <Link href="/hobbies" className="group">
                <div className="bg-gray-100 rounded-lg p-8 group-hover:bg-gray-200 transition-colors">
                  <div className="text-4xl mb-4">🚀</div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2 group-hover:text-blue-600">Tech Innovation</h3>
                  <p className="text-gray-600 text-sm">Always exploring emerging technologies and their potential applications</p>
                </div>
              </Link>
            </div>

            <div className="mt-12">
              <Link
                href="/hobbies"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium group"
              >
                Discover more about my interests
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
              Ready to Explore More?
            </h2>
            <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
              Dive deeper into my professional journey, technical expertise, and the projects that have shaped my career.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link
                href="/technologies"
                className="group bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
              >
                <div className="text-3xl mb-4">⚡</div>
                <h3 className="text-lg font-medium text-gray-900 mb-2 group-hover:text-blue-600">Technologies</h3>
                <p className="text-gray-600 text-sm mb-4">Explore my technical stack and expertise across modern development tools</p>
                <div className="flex items-center text-blue-600 text-sm font-medium">
                  View Skills <ArrowRight className="ml-1 w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>

              <Link
                href="/projects"
                className="group bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
              >
                <div className="text-3xl mb-4">🚀</div>
                <h3 className="text-lg font-medium text-gray-900 mb-2 group-hover:text-blue-600">Projects</h3>
                <p className="text-gray-600 text-sm mb-4">Discover the impactful software solutions I've built for diverse industries</p>
                <div className="flex items-center text-blue-600 text-sm font-medium">
                  View Work <ArrowRight className="ml-1 w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>

              <Link
                href="/hobbies"
                className="group bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
              >
                <div className="text-3xl mb-4">🎯</div>
                <h3 className="text-lg font-medium text-gray-900 mb-2 group-hover:text-blue-600">Hobbies</h3>
                <p className="text-gray-600 text-sm mb-4">Get to know the person behind the code through my personal interests</p>
                <div className="flex items-center text-blue-600 text-sm font-medium">
                  Learn More <ArrowRight className="ml-1 w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>

              <Link
                href="/contact"
                className="group bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
              >
                <div className="text-3xl mb-4">💬</div>
                <h3 className="text-lg font-medium text-gray-900 mb-2 group-hover:text-blue-600">Contact</h3>
                <p className="text-gray-600 text-sm mb-4">Let's connect and discuss how we can work together on your next project</p>
                <div className="flex items-center text-blue-600 text-sm font-medium">
                  Get in Touch <ArrowRight className="ml-1 w-3 h-3 group-hover:translate-x-1 transition-transform" />
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
              © 2024 Enno Lohmann. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
