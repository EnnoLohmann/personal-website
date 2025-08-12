'use client';

import { motion } from 'framer-motion';
import {
  Mail,
  MapPin,
  Linkedin,
  Github,
  Building,
  Calendar
} from 'lucide-react';
import OptimizedImage from '@/components/OptimizedImage';

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Contact() {
  return (
    <div className="bg-white w-full">
      {/* Hero Section with Unsplash Image */}
      <section className="relative py-16 md:py-24 w-full overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <OptimizedImage
            src="/images/contact-background.jpg"
            alt="Let's connect and build something amazing"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-white/85"></div>
        </div>

        <div className="relative z-10 w-full max-w-none px-6 md:px-12 lg:px-20">
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeIn}
            className="max-w-6xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-8 leading-tight">
              Let&apos;s Connect! 👋
            </h1>
            <p className="text-lg md:text-xl leading-relaxed text-gray-700 max-w-4xl mx-auto">
              Have an exciting project in mind or looking for a passionate developer to join your team?
              I&apos;d love to hear about your ideas and explore how we can create something amazing together.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-24 bg-gray-50 w-full">
        <div className="w-full max-w-none px-6 md:px-12 lg:px-20">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-16 text-center">
              Get in Touch 💬
            </h2>

            <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">
              {/* Contact Details */}
              <div className="space-y-8">
                <motion.div variants={fadeIn} className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-blue-500 mt-1" />
                  <div>
                    <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-2">Email</h3>
                    <a
                      href="mailto:Enno@lohmann.cloud"
                      className="text-lg text-gray-900 hover:text-blue-600 transition-colors"
                    >
                      Enno@lohmann.cloud
                    </a>
                  </div>
                </motion.div>

                <motion.div variants={fadeIn} className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-green-500 mt-1" />
                  <div>
                    <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-2">Location</h3>
                    <p className="text-lg text-gray-700">🇩🇪 Germany</p>
                    <p className="text-base text-gray-600">Available for projects across Europe & remote work</p>
                  </div>
                </motion.div>

                <motion.div variants={fadeIn} className="flex items-start space-x-4">
                  <Building className="w-6 h-6 text-purple-500 mt-1" />
                  <div>
                    <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-2">Company</h3>
                    <p className="text-lg text-gray-700">Wavestone Germany</p>
                    <p className="text-base text-gray-600">Technology Consultant</p>
                  </div>
                </motion.div>

                <motion.div variants={fadeIn} className="flex items-start space-x-4">
                  <Calendar className="w-6 h-6 text-orange-500 mt-1" />
                  <div>
                    <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-2">Availability</h3>
                    <p className="text-lg text-gray-700">✨ Open to new opportunities</p>
                    <p className="text-base text-gray-600">Consulting projects and collaborations</p>
                  </div>
                </motion.div>
              </div>

              {/* Professional Links */}
              <div className="space-y-8">
                <motion.div variants={fadeIn}>
                  <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-6">Professional Links</h3>
                  <div className="space-y-4">
                    <a
                      href="https://www.linkedin.com/in/enno-lohmann?originalSubdomain=de"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 text-lg text-gray-900 hover:text-blue-600 transition-colors group"
                    >
                      <Linkedin className="w-5 h-5 text-blue-500 group-hover:scale-110 transition-transform" />
                      <span>LinkedIn Profile</span>
                    </a>
                    <a
                      href="https://github.com/EnnoLohmann/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 text-lg text-gray-900 hover:text-gray-600 transition-colors group"
                    >
                      <Github className="w-5 h-5 text-gray-700 group-hover:scale-110 transition-transform" />
                      <span>GitHub Profile</span>
                    </a>
                  </div>
                </motion.div>

                <motion.div variants={fadeIn} className="pt-8">
                  <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-4">Response Time</h3>
                  <p className="text-base text-gray-700 leading-relaxed">
                    I typically respond to emails within 24-48 hours during business days. 
                    For urgent matters, please mention it in your subject line.
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What Customers Say Section */}
      <section className="py-24 bg-white w-full">
        <div className="w-full max-w-none px-6 md:px-12 lg:px-20">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-16 text-center">
              What Customers Say 💬
            </h2>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Testimonial 1 - Team Feedback */}
              <motion.div variants={fadeIn} className="bg-blue-50 p-8 rounded-2xl shadow-sm">
                <div className="mb-6">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-xl">⭐</span>
                    ))}
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    &ldquo;Enno was a great asset to our team, especially in the frontend area. His ability to quickly grasp requirements and implement them with high quality was remarkable. He stood out for his quick familiarization with new topics and actively contributed to improving our processes and systems.&rdquo;
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    &ldquo;Particularly positive was his ability to take on tasks independently and execute them efficiently and pragmatically, without getting lost in unnecessary discussions about perfect approaches, which promoted an agile approach.&rdquo;
                  </p>
                </div>
                <div className="border-t border-blue-200 pt-4">
                  <p className="font-medium text-gray-900">Ove Herbst & Anna Zeuge</p>
                  <p className="text-sm text-gray-600">Scrum Master & Product Owner</p>
                </div>
              </motion.div>

              {/* Testimonial 2 - codecentric */}
              <motion.div variants={fadeIn} className="bg-green-50 p-8 rounded-2xl shadow-sm">
                <div className="mb-6">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-xl">⭐</span>
                    ))}
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    &ldquo;With his extensive and extremely well-founded expertise, he consistently achieved significantly above-average results. Mr. Lohmann always showed an extraordinarily high level of commitment and motivation.&rdquo;
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    &ldquo;His work style was characterized by very careful planning and structure. He showed exceptional commitment and excellent performance in both qualitative and quantitative terms.&rdquo;
                  </p>
                </div>
                <div className="border-t border-green-200 pt-4">
                  <p className="font-medium text-gray-900">codecentric AG</p>
                  <p className="text-sm text-gray-600">Leading German IT Solutions Provider</p>
                </div>
              </motion.div>
            </div>

            {/* Key Strengths */}
            <motion.div variants={fadeIn} className="mt-16">
              <h3 className="text-2xl font-light text-gray-900 mb-8 text-center">
                Key Strengths Highlighted by Clients
              </h3>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center p-6 bg-purple-50 rounded-xl">
                  <div className="text-3xl mb-3">🚀</div>
                  <h4 className="font-medium text-gray-900 mb-2">Quick Learning</h4>
                  <p className="text-sm text-gray-600">Fast familiarization with new technologies and domains</p>
                </div>
                <div className="text-center p-6 bg-orange-50 rounded-xl">
                  <div className="text-3xl mb-3">⚡</div>
                  <h4 className="font-medium text-gray-900 mb-2">Reliable Delivery</h4>
                  <p className="text-sm text-gray-600">Consistently delivers high-quality work on time</p>
                </div>
                <div className="text-center p-6 bg-pink-50 rounded-xl">
                  <div className="text-3xl mb-3">🤝</div>
                  <h4 className="font-medium text-gray-900 mb-2">Team Player</h4>
                  <p className="text-sm text-gray-600">Excellent communication and collaborative approach</p>
                </div>
                <div className="text-center p-6 bg-cyan-50 rounded-xl">
                  <div className="text-3xl mb-3">💡</div>
                  <h4 className="font-medium text-gray-900 mb-2">Problem Solver</h4>
                  <p className="text-sm text-gray-600">Pragmatic solutions focused on business value</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-50 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="text-center">
            <p className="text-sm text-gray-500">
              © 2024 Enno Lohmann. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
