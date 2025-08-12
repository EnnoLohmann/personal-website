'use client';

import { motion } from 'framer-motion';
import {
  Gamepad2,
  Code2,
  Bike,
  Waves,
  Heart,
  Dice6,
  Sword,
  Trophy
} from 'lucide-react';

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

const hobbies = [
  {
    title: "Gaming",
    icon: Gamepad2,
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?fm=jpg&q=80&w=1200&ixlib=rb-4.1.0",
    description: "Passionate about immersive RPGs like Gothic and Dark Souls that challenge both skill and patience. Also love strategic thinking in games like Age of Empires 4.",
    details: "Favorite RPGs: Gothic series, Dark Souls series • Strategy: Age of Empires 4, Civilization"
  },
  {
    title: "Game Development",
    icon: Code2,
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?fm=jpg&q=80&w=1200&ixlib=rb-4.1.0",
    description: "Creating interactive experiences and experimenting with game mechanics. From concept to implementation, I enjoy the entire creative process.",
    details: "Tools: Unity, Unreal Engine • Languages: C#, C++, JavaScript"
  },
  {
    title: "Motorcycles",
    icon: Bike,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?fm=jpg&q=80&w=1200&ixlib=rb-4.1.0",
    description: "The freedom of the open road and the mechanical precision of motorcycles. Whether it's weekend rides or maintenance, I love every aspect.",
    details: "Favorite routes: German countryside, Alpine passes • Maintenance: Engine tuning, custom modifications"
  },
  {
    title: "Stand Up Paddling",
    icon: Waves,
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?fm=jpg&q=80&w=1200&ixlib=rb-4.1.0",
    description: "Finding peace and balance on the water. SUP combines physical exercise with mindfulness, offering a perfect escape from the digital world.",
    details: "Favorite spots: Local lakes, coastal waters • Equipment: All-around board, touring paddle"
  },
  {
    title: "Dog Training",
    icon: Heart,
    image: "https://images.unsplash.com/photo-1551717743-49959800b1f6?fm=jpg&q=80&w=1200&ixlib=rb-4.1.0",
    description: "Building strong bonds with canine companions through positive reinforcement training. Each dog has unique personality and learning style.",
    details: "Methods: Positive reinforcement, clicker training • Focus: Obedience, agility, behavioral modification"
  },
  {
    title: "Board Games",
    icon: Dice6,
    image: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?fm=jpg&q=80&w=1200&ixlib=rb-4.1.0",
    description: "Strategic thinking meets social interaction. From complex strategy games to party games, board games bring people together in meaningful ways.",
    details: "Favorites: Strategy games, cooperative games, deck-building • Game nights: Weekly sessions with friends"
  }
];



export default function Hobbies() {
  return (
    <div className="bg-white w-full">
      {/* Hero Section */}
      <section className="py-16 md:py-24 w-full">
        <div className="w-full max-w-none px-6 md:px-12 lg:px-20">
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeIn}
            className="max-w-6xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-8 leading-tight">
              Hobbies & Interests
            </h1>
            <p className="text-lg md:text-xl leading-relaxed text-gray-700 max-w-4xl mx-auto">
              When I'm not coding, I immerse myself in activities that challenge both mind and body.
              From strategic gaming and creative development to outdoor adventures and meaningful connections,
              these pursuits fuel my creativity and bring balance to my life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Hobbies Grid */}
      <section className="py-24 bg-gray-50 w-full">
        <div className="w-full max-w-none px-6 md:px-12 lg:px-20">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-16 text-center">
              Personal Interests
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
              {hobbies.map((hobby, index) => {
                const IconComponent = hobby.icon;
                return (
                  <motion.div
                    key={hobby.title}
                    variants={fadeIn}
                    className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-300"
                  >
                    {/* Image Header */}
                    <div className="h-32 bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
                      <img
                        src={hobby.image}
                        alt={hobby.title}
                        className="w-full h-full object-cover opacity-80"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                      <div className="absolute bottom-3 left-4 flex items-center">
                        <IconComponent className="w-6 h-6 text-white mr-2 drop-shadow-sm" />
                        <h3 className="text-lg font-medium text-white drop-shadow-sm">
                          {hobby.title}
                        </h3>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <p className="text-base text-gray-700 leading-relaxed mb-4">
                        {hobby.description}
                      </p>
                      <p className="text-sm text-gray-500 italic">
                        {hobby.details}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Family Life Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8 md:px-16">
          <motion.div
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-12">
              Family & Home
            </h2>
            <div className="space-y-6 text-lg leading-relaxed text-gray-700">
              <p>
                At the heart of everything I do is my family. My wife and I share a deep bond built on
                mutual support, shared adventures, and common goals. Together, we're creating a home
                that reflects our values and dreams.
              </p>
              <p>
                Our dog is an integral part of our family, joining us on adventures and bringing joy
                to our daily routines. Whether we're training together, exploring new trails, or simply
                enjoying quiet moments at home, these shared experiences strengthen our family bond.
              </p>
              <p>
                Currently, we're renovating our family home—a project that combines our vision for the
                future with hands-on collaboration. Every room we transform together becomes a testament
                to our partnership and shared commitment to building something meaningful.
              </p>
            </div>
          </motion.div>
        </div>
      </section>



      {/* Philosophy Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8 md:px-16">
          <motion.div
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="max-w-4xl"
          >
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-12">
              Balance & Growth
            </h2>
            <div className="space-y-6 text-lg leading-relaxed text-gray-700">
              <p>
                Family comes first, and everything else flows from that foundation. The love and support
                I share with my wife creates the stability that allows me to pursue my passions and excel
                professionally. Our home renovation project has taught us about collaboration, patience,
                and the satisfaction of building something together—lessons that apply to every aspect of life.
              </p>
              <p>
                My hobbies complement this family-centered approach. The strategic thinking from gaming,
                the patience from dog training, and the balance from paddleboarding all contribute to being
                a better partner, problem-solver, and professional. Whether I'm debugging code, training
                our dog, or planning our next home improvement project, each experience builds on the others.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-8 md:px-16">
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
