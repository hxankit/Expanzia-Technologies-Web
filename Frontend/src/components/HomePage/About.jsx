/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';

const blockReveal = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: 'easeOut' } },
};

const textRevealVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const About = () => (
  <motion.section id="about" className="py-24 px-4 bg-gray-950 border-t border-b border-gray-800" initial="hidden" whileInView="show" variants={blockReveal} viewport={{ once: true, amount: 0.2 }}>
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <motion.div variants={textRevealVariants}>
        <h2 className="text-4xl font-extrabold text-white mb-6">Our Mission: Innovation at Scale</h2>
        <p className="text-lg text-gray-400 mb-6">At Techexpanzia, we don’t just code. We <strong>innovate, automate, and scale</strong> businesses with smart technology solutions. Founded on the principle of building resilient digital foundations, we focus on delivering <strong>end-to-end excellence</strong>, from initial concept to cloud deployment.</p>
        <p className="text-gray-400 italic border-l-4 border-cyan-500 pl-4 py-2">Our purpose is to turn complexity into seamless efficiency, ensuring our clients are always one step ahead in the digital race.</p>
      </motion.div>
      <motion.div variants={textRevealVariants} className="rounded-xl overflow-hidden shadow-2xl bg-gray-800/50 p-4 border border-blue-900/50">
        <div className="w-full h-64 bg-gray-700/50 flex items-center justify-center rounded-lg">
          <span className="text-gray-400 text-sm">Modern 3D Illustration Placeholder</span>
        </div>
      </motion.div>
    </div>
  </motion.section>
);

export default About;
