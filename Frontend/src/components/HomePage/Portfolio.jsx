/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronsRight } from 'lucide-react';
import ProjectCard from './ProjectCard';

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const textRevealVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Portfolio = () => (
  <motion.section id="portfolio" className="py-24 px-4 bg-gray-950 border-t border-b border-gray-800" initial="hidden" whileInView="show" variants={containerVariants} viewport={{ once: true, amount: 0.2 }}>
    <motion.h2 className="text-4xl font-extrabold text-center text-white mb-16" variants={textRevealVariants}>Portfolio: Proven Capability</motion.h2>
    <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto" variants={containerVariants}>
      <ProjectCard title="Logistics AI Platform" industry="AI Automation" description="Used ML to predict shipment delays, reducing operational costs by 25%." />
      <ProjectCard title="FinTech Mobile Wallet" industry="Mobile Solution" description="Redesigned UI/UX led to a 40% increase in daily active user engagement." />
      <ProjectCard title="B2B SaaS Analytics" industry="Cloud & Data" description="Migrated legacy system to AWS, improving data processing speed by 5x." />
    </motion.div>

    <div className="text-center mt-12">
      <motion.a href="#projects-all" className="inline-flex items-center text-lg text-cyan-400 hover:text-cyan-300 font-bold transition duration-300" whileHover={{ x: 5 }}>Explore All Case Studies <ChevronsRight className="w-5 h-5 ml-2" /></motion.a>
    </div>
  </motion.section>
);

export default Portfolio;
